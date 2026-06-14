/* ============================================================
   Study Audio — shared generative-music engine + auto-wiring
   Drop into any page with: <script src="study-audio.js"></script>
   - picks a mood by filename
   - injects a remembered corner toggle (default ON, starts on first tap)
   - adaptive tempo from page interactions
   - auto-fires correct/wrong/level cues by watching answer classes
   ============================================================ */
(function(){
"use strict";
if(/music-demo\.html/.test(location.pathname)) return;   // demo has its own UI

/* ---------------- engine ---------------- */
const StudyAudio = (function(){
  let ctx=null, master=null, comp=null, conv=null, revGain=null, percGain=null;
  let playing=false, timer=null, nextTime=0, step=0;
  let vol=0.5, mood=null, curChord=[60,67,72], reverbMix=0.9, percVol=1.0;
  let interactions=[], tempoMult=1, targetMult=1, focusRamp=0, mode='idle', rate10=0;

  const MOODS = {
    calm:    { label:'Calm Focus', root:60, scale:[0,2,4,7,9],       bpm:58, prog:[0,9,5,7], cutoff:760,  wave:'triangle', density:0.42, perc:'none' },
    dreamy:  { label:'Dreamy',     root:57, scale:[0,2,3,5,7,10],     bpm:52, prog:[0,5,8,3], cutoff:560,  wave:'sine',     density:0.36, perc:'none' },
    playful: { label:'Playful',    root:62, scale:[0,2,4,7,9],        bpm:74, prog:[0,7,9,5], cutoff:1150, wave:'triangle', density:0.5,  perc:'none' },
    twilight:{ label:'Twilight',   root:55, scale:[0,3,5,7,10],       bpm:48, prog:[0,7,3,5], cutoff:480,  wave:'sine',     density:0.32, perc:'none' },
    tech:    { label:'Tech',       root:57, scale:[0,3,5,7,10],       bpm:90, prog:[0,5,3,7], cutoff:1300, wave:'sawtooth', density:0.28, perc:'tech',     arp:true },
    classical:{label:'Classical',  root:60, scale:[0,2,4,5,7,9,11],   bpm:66, prog:[0,5,7,9], cutoff:1000, wave:'triangle', density:0.22, perc:'none',     arp:true, triad:true },
    cultural:{ label:'Cultural',   root:62, scale:[0,1,4,5,7,8,10],   bpm:72, prog:[0,5,3,7], cutoff:900,  wave:'sawtooth', density:0.4,  perc:'cultural' },
    tribal:  { label:'Tribal',     root:55, scale:[0,2,5,7,9],        bpm:82, prog:[0,7,5,9], cutoff:820,  wave:'triangle', density:0.4,  perc:'tribal' },
  };
  mood = MOODS.calm;
  const mtof = m => 440 * Math.pow(2,(m-69)/12);

  function ensure(){
    if(ctx) return;
    ctx = new (window.AudioContext||window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = vol*0.5;
    comp = ctx.createDynamicsCompressor();
    comp.threshold.value=-18; comp.knee.value=24; comp.ratio.value=3; comp.attack.value=0.01; comp.release.value=0.25;
    master.connect(comp); comp.connect(ctx.destination);
    conv = ctx.createConvolver(); conv.buffer = makeIR(2.6,2.4);
    revGain = ctx.createGain(); revGain.gain.value=reverbMix; conv.connect(revGain); revGain.connect(master);
    percGain = ctx.createGain(); percGain.gain.value=percVol; percGain.connect(master);
  }
  function makeIR(dur,decay){
    const rate=ctx.sampleRate, len=rate*dur, buf=ctx.createBuffer(2,len,rate);
    for(let ch=0; ch<2; ch++){ const d=buf.getChannelData(ch);
      for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/len,decay); }
    return buf;
  }
  function pluck(freq,t,vel,dur,wave){
    const o=ctx.createOscillator(); o.type=wave||mood.wave; o.frequency.value=freq;
    const sub=ctx.createOscillator(); sub.type='sine'; sub.frequency.value=freq/2;
    const lp=ctx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=mood.cutoff*2.4;
    const g=ctx.createGain(); g.gain.setValueAtTime(0.0001,t);
    g.gain.exponentialRampToValueAtTime(vel,t+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001,t+(dur||1.4));
    const sg=ctx.createGain(); sg.gain.value=0.35;
    o.connect(g); sub.connect(sg); sg.connect(g); g.connect(lp); lp.connect(master); lp.connect(conv);
    o.start(t); sub.start(t); o.stop(t+(dur||1.4)+0.05); sub.stop(t+(dur||1.4)+0.05);
  }
  function pad(freqs,t,dur){
    freqs.forEach(f=>{
      const o=ctx.createOscillator(); o.type='sawtooth'; o.frequency.value=f;
      const o2=ctx.createOscillator(); o2.type='sawtooth'; o2.frequency.value=f*1.005;
      const lp=ctx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=mood.cutoff; lp.Q.value=0.5;
      const g=ctx.createGain(); const peak=0.055/Math.sqrt(freqs.length);
      g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(peak,t+1.4);
      g.gain.setValueAtTime(peak,t+dur-1.6); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
      o.connect(lp); o2.connect(lp); lp.connect(g); g.connect(master); g.connect(conv);
      o.start(t); o2.start(t); o.stop(t+dur+0.05); o2.stop(t+dur+0.05);
    });
  }
  function bass(freq,t,dur){
    const o=ctx.createOscillator(); o.type='sine'; o.frequency.value=freq;
    const g=ctx.createGain(); g.gain.setValueAtTime(0.0001,t);
    g.gain.exponentialRampToValueAtTime(0.12,t+0.04); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t+dur+0.05);
  }
  function drum(t,f0,f1,dur,vel){
    const o=ctx.createOscillator(); o.type='sine'; o.frequency.setValueAtTime(f0,t);
    o.frequency.exponentialRampToValueAtTime(f1,t+dur*0.9);
    const g=ctx.createGain(); g.gain.setValueAtTime(vel,t); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    o.connect(g); g.connect(percGain||master); o.start(t); o.stop(t+dur+0.02);
  }
  function noiseHit(t,dur,type,freq,vel){
    const len=Math.max(1,(ctx.sampleRate*dur)|0), b=ctx.createBuffer(1,len,ctx.sampleRate), d=b.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
    const src=ctx.createBufferSource(); src.buffer=b;
    const f=ctx.createBiquadFilter(); f.type=type||'highpass'; f.frequency.value=freq||6000; f.Q.value=1.2;
    const g=ctx.createGain(); g.gain.setValueAtTime(vel||0.12,t); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    src.connect(f); f.connect(g); g.connect(percGain||master); src.start(t); src.stop(t+dur+0.02);
  }
  function percussion(perc,barStep,t){
    if(perc==='tech'){
      if(barStep===0||barStep===4) drum(t,140,45,0.16,0.45);
      noiseHit(t,0.03,'highpass',9000,barStep%2?0.05:0.09);
    } else if(perc==='tribal'){
      if(barStep===0||barStep===4) drum(t,165,55,0.34,0.5);
      if(barStep===2||barStep===6) drum(t,300,120,0.18,0.32);
      if(barStep%2===1) noiseHit(t,0.05,'bandpass',4200,0.12);
    } else if(perc==='cultural'){
      if(barStep===0) drum(t,185,72,0.3,0.45);
      if(barStep===3||barStep===6){ drum(t,260,150,0.12,0.22); noiseHit(t,0.04,'highpass',3200,0.13); }
      if(barStep%2===1) noiseHit(t,0.03,'highpass',7000,0.05);
    }
  }
  function chordMidi(bar){
    const r = mood.root + mood.prog[bar % mood.prog.length];
    return mood.triad ? [r, r+4, r+7, r+12] : [r, r+7, r+12, r+7];
  }
  function scheduleStep(s,t){
    const beat=60/(mood.bpm*tempoMult), eighth=beat/2, barStep=s%8;
    if(barStep===0){
      const bar=Math.floor(s/8);
      curChord=chordMidi(bar);
      pad(curChord.slice(0,3).map(mtof), t, beat*4*0.98);
      bass(mtof(mood.root + mood.prog[bar%mood.prog.length] - 12), t, beat*2);
    }
    if(mood.perc && mood.perc!=='none') percussion(mood.perc, barStep, t);
    if(mood.arp){
      const ch=curChord, n=ch[s % ch.length]+12;
      pluck(mtof(n), t, 0.15, eighth*1.7, mood.wave);
      if(barStep===6 && Math.random()<0.4){ const deg=mood.scale[(Math.random()*mood.scale.length)|0]; pluck(mtof(mood.root+deg+24), t, 0.1, eighth*3, 'sine'); }
    } else {
      if(Math.random() < mood.density){
        const deg=mood.scale[(Math.random()*mood.scale.length)|0], oct=12+(Math.random()<0.4?12:0);
        pluck(mtof(mood.root+deg+oct), t, 0.16, eighth*3.2);
      }
      if(barStep===4 && Math.random()<0.3){ const deg=mood.scale[(Math.random()*mood.scale.length)|0]; pluck(mtof(mood.root+deg+24), t, 0.1, eighth*4, 'sine'); }
    }
  }
  function loop(){
    while(nextTime < ctx.currentTime + 0.12){
      const eighth=(60/(mood.bpm*tempoMult))/2;
      scheduleStep(step, nextTime); nextTime += eighth; step++;
    }
    timer=setTimeout(loop, 25);
  }
  function tempoTick(){
    const now=(typeof performance!=='undefined'?performance.now():Date.now());
    interactions=interactions.filter(x=> now-x < 10000);
    rate10=interactions.length;
    if(rate10>=6){ targetMult=1.1; focusRamp=0; mode='fast'; }
    else if(rate10>=2){ targetMult=0.9; focusRamp=0; mode='relax'; }
    else { focusRamp=Math.min(0.40, focusRamp+0.0022); targetMult=0.85+focusRamp; mode='focus'; }
    tempoMult += (targetMult-tempoMult)*0.1;
  }
  setInterval(tempoTick, 250);

  function start(){ ensure(); if(ctx.state==='suspended') ctx.resume(); if(master) master.gain.setTargetAtTime(vol*0.5, ctx.currentTime, 0.05); if(playing) return; playing=true; nextTime=ctx.currentTime+0.1; step=0; loop(); }
  function stop(){ playing=false; if(timer){ clearTimeout(timer); timer=null; } if(master&&ctx) master.gain.setTargetAtTime(0.00001, ctx.currentTime, 0.05); }
  function isLive(){ return playing && !!ctx && ctx.state==='running'; }
  function setVolume(v){ vol=v; if(master) master.gain.value=v*0.5; }
  function setMood(key){ if(MOODS[key]) mood=MOODS[key]; }
  function isPlaying(){ return playing; }
  function registerInteraction(){ interactions.push(typeof performance!=='undefined'?performance.now():Date.now()); }
  function telemetry(){ return { rate:rate10, mult:tempoMult, mode, bpm:Math.round(mood.bpm*tempoMult) }; }
  function cue(type){
    ensure(); if(ctx.state==='suspended') ctx.resume();
    const t=ctx.currentTime+0.02, sc=mood.scale, r=mood.root;
    if(type==='correct'){ [0,1,2,3].forEach(i=> pluck(mtof(r+12+sc[i%sc.length]+(i>=sc.length?12:0)), t+i*0.085, 0.22, 0.6, 'triangle')); }
    else if(type==='wrong'){ pluck(mtof(r-2),t,0.18,0.5,'sine'); pluck(mtof(r-5),t+0.16,0.16,0.7,'sine'); }
    else if(type==='levelup'){ [0,2,3,4,4].forEach((d,i)=> pluck(mtof(r+12+sc[d%sc.length]+(i>=4?12:0)), t+i*0.09, 0.24, 0.9, 'triangle')); pad(chordMidi(0).slice(0,3).map(mtof), t, 1.8); }
    else if(type==='select'){ pluck(mtof(r+24+sc[0]), t, 0.1, 0.35, 'sine'); }
  }
  return { start, stop, setVolume, setMood, cue, isPlaying, isLive, registerInteraction, telemetry, MOODS };
})();
window.StudyAudio = StudyAudio;

/* ---------------- per-page mood ---------------- */
const MOODMAP = {
  'circuit-lab.html':'tech',
  'graph-lab.html':'classical','angle-lab.html':'classical','pythagoras-lab.html':'classical','circle-lab.html':'classical',
  'factor-lab.html':'classical','fraction-lab.html':'classical','number-lab.html':'classical','balance-lab.html':'classical',
  'atom-lab.html':'twilight','element-lab.html':'twilight','compound-lab.html':'twilight','acid-lab.html':'twilight',
  'cell-lab.html':'tribal','bioenergetics-lab.html':'tribal','ecosystem-lab.html':'tribal','predator-prey-sim.html':'tribal',
  'photosynthesis-adventure.html':'tribal','geography-revision.html':'tribal',
  'french-grammar-flashcards.html':'cultural','lower4-french-test.html':'cultural',
  'hinduism-flashcards.html':'cultural','hinduism-quiz.html':'cultural','islam-flashcards.html':'cultural','islam-quiz.html':'cultural',
  'sikhism-flashcards.html':'cultural','sikhism-quiz.html':'cultural','resurrection-flashcards.html':'cultural','resurrection-quiz.html':'cultural',
  'all-religions-quiz.html':'cultural','index.html':'calm',
};
const file = (location.pathname.split('/').pop()||'index.html');
const moodKey = MOODMAP[file] || 'calm';
StudyAudio.setMood(moodKey);

/* ---------------- remembered toggle + gesture-start ---------------- */
let enabled = localStorage.getItem('studyAudio') !== 'off';   // default ON
let btn=null;

// any interaction (except on our own button) starts the music on first gesture if enabled
function onGesture(e){
  StudyAudio.registerInteraction();
  if(btn && e && e.target && btn.contains(e.target)) return;   // button handles itself
  if(enabled && !StudyAudio.isLive()){ StudyAudio.start(); setTimeout(updateUI,60); }
}
document.addEventListener('pointerdown', onGesture, true);
document.addEventListener('keydown',    onGesture, true);

// the button toggles based on whether sound is actually playing right now
function toggle(){
  if(StudyAudio.isLive()){ enabled=false; StudyAudio.stop(); }
  else { enabled=true; StudyAudio.start(); }
  localStorage.setItem('studyAudio', enabled?'on':'off');
  setTimeout(updateUI,60);
}

/* ---------------- corner control UI ---------------- */
function injectUI(){
  const css = document.createElement('style');
  css.textContent = `
    #sa-toggle{ position:fixed; right:14px; bottom:14px; z-index:99999; display:flex; align-items:center; gap:7px;
      font-family:'Karla',system-ui,sans-serif; font-weight:700; font-size:.82rem; color:#fff; cursor:pointer;
      background:rgba(31,53,64,.82); backdrop-filter:blur(4px); border:none; border-radius:999px; padding:.5rem .85rem;
      box-shadow:0 4px 16px rgba(0,0,0,.25); transition:transform .15s, background .15s; user-select:none; }
    #sa-toggle:hover{ transform:translateY(-2px); background:rgba(31,53,64,.95); }
    #sa-toggle .bars{ display:flex; align-items:flex-end; gap:2px; height:14px; }
    #sa-toggle .bars i{ width:3px; height:4px; background:#9ec7e0; border-radius:2px; }
    #sa-toggle.on .bars i{ animation:sa-bounce .9s ease-in-out infinite; }
    #sa-toggle.on .bars i:nth-child(2){ animation-delay:.15s } #sa-toggle.on .bars i:nth-child(3){ animation-delay:.3s } #sa-toggle.on .bars i:nth-child(4){ animation-delay:.45s }
    @keyframes sa-bounce{ 0%,100%{height:4px} 50%{height:14px} }
    #sa-toggle .play-ic,#sa-toggle .off-ic{ display:none; font-size:.85rem; line-height:1; }
    #sa-toggle.wait .bars{ display:none; } #sa-toggle.wait .play-ic{ display:inline; }
    #sa-toggle.off .bars{ display:none; } #sa-toggle.off .off-ic{ display:inline; }
    @media (max-width:600px){ #sa-toggle{ font-size:.76rem; padding:.45rem .7rem; } }
  `;
  document.head.appendChild(css);
  btn = document.createElement('button');
  btn.id='sa-toggle'; btn.type='button';
  btn.innerHTML = `<span class="bars"><i></i><i></i><i></i><i></i></span><span class="play-ic">▶</span><span class="off-ic">🔇</span><span class="lbl">Music</span>`;
  btn.addEventListener('click', toggle);
  document.body.appendChild(btn);
  updateUI();
}
function updateUI(){
  if(!btn) return;
  const live = StudyAudio.isLive();
  btn.classList.toggle('on',   live);            // actually playing
  btn.classList.toggle('wait', enabled && !live); // on, but waiting for first tap
  btn.classList.toggle('off',  !enabled);         // muted
  const lbl = btn.querySelector('.lbl');
  if(!enabled){ lbl.textContent='Muted'; btn.title='Study music off — click to play'; }
  else if(!live){ lbl.textContent='Music'; btn.title='Study music ready — click (or interact) to play'; }
  else { lbl.textContent='Music'; btn.title='Study music: '+StudyAudio.MOODS[moodKey].label+' — click to mute'; }
}

/* ---------------- auto cues from answer classes ---------------- */
let pC=false,pW=false,pL=false,sched=false;
function flush(){ sched=false; if(!enabled){ pC=pW=pL=false; return; }
  if(pL) StudyAudio.cue('levelup'); else if(pW) StudyAudio.cue('wrong'); else if(pC) StudyAudio.cue('correct');
  pC=pW=pL=false; }
function schedule(){ if(!sched){ sched=true; requestAnimationFrame(flush); } }
function hasResultMarker(node){
  if(node.nodeType!==1) return false;
  const cls=(node.className&&node.className.toString)?node.className.toString():'';
  if(/result-screen|score-big/.test(cls)) return true;
  if(node.id && /scoreBig|result/i.test(node.id)) return true;
  return node.querySelector && !!node.querySelector('.result-screen,.score-big,#scoreBig');
}
function startObserver(){
  const obs=new MutationObserver(muts=>{
    for(const m of muts){
      if(m.type==='attributes'){
        const t=m.target; if(!t.classList) continue;
        if(m.attributeName==='class'){
          if(t.classList.contains('wrong')||t.classList.contains('incorrect')) pW=true;
          else if(t.classList.contains('correct')) pC=true;
        } else if(m.attributeName==='style' && t.id && /result/i.test(t.id)){
          const disp=t.style.display; if(disp && disp!=='none') pL=true;
        }
      } else if(m.type==='childList'){
        m.addedNodes.forEach(n=>{ if(hasResultMarker(n)) pL=true; });
      }
    }
    if(pC||pW||pL) schedule();
  });
  obs.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','style']});
}

function init(){
  injectUI(); startObserver();
  // carry the music across page navigations: if enabled, try to resume right away.
  // browsers that have site "engagement" will start silently; others wait for the
  // first interaction (onGesture) — either way the on/off choice is shared site-wide.
  if(enabled) StudyAudio.start();
  updateUI();
  setInterval(updateUI, 600);   // keep the button honest as the audio state settles
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
