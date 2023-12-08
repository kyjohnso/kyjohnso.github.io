(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="153",Sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tm=0,Kl=1,Cm=2,Lh=1,Fm=2,ui=3,Ii=0,Qt=1,fi=2,Pi=0,Yr=1,Jl=2,Ql=3,jl=4,Rm=5,kr=100,Pm=101,Lm=102,ec=103,tc=104,Nm=200,Um=201,Im=202,Bm=203,Nh=204,Uh=205,Om=206,zm=207,Gm=208,Vm=209,Hm=210,km=0,Wm=1,Xm=2,Au=3,qm=4,$m=5,Ym=6,Zm=7,Ih=0,Km=1,Jm=2,mi=0,Qm=1,jm=2,e0=3,t0=4,n0=5,Bh=300,es=301,ts=302,wu=303,Du=304,ao=306,bu=1e3,zn=1001,Tu=1002,Zt=1003,nc=1004,Co=1005,Dn=1006,i0=1007,Ns=1008,Li=1009,r0=1010,s0=1011,al=1012,Oh=1013,Di=1014,bi=1015,Us=1016,zh=1017,Gh=1018,nr=1020,a0=1021,Gn=1023,o0=1024,u0=1025,ir=1026,ns=1027,l0=1028,Vh=1029,c0=1030,Hh=1031,kh=1033,Fo=33776,Ro=33777,Po=33778,Lo=33779,ic=35840,rc=35841,sc=35842,ac=35843,f0=36196,oc=37492,uc=37496,lc=37808,cc=37809,fc=37810,hc=37811,dc=37812,pc=37813,mc=37814,gc=37815,vc=37816,_c=37817,xc=37818,yc=37819,Ec=37820,Mc=37821,No=36492,h0=36283,Sc=36284,Ac=36285,wc=36286,Wh=3e3,rr=3001,d0=3200,p0=3201,Xh=0,m0=1,sr="",qe="srgb",Kn="srgb-linear",qh="display-p3",Uo=7680,g0=519,v0=512,_0=513,x0=514,y0=515,E0=516,M0=517,S0=518,A0=519,Dc=35044,bc="300 es",Cu=1035,hi=2e3,Ga=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=Math.PI/180,Fu=180/Math.PI;function Ks(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Kt(r,e,t){return Math.max(e,Math.min(t,r))}function w0(r,e){return(r%e+e)%e}function Bo(r,e,t){return(1-t)*r+t*e}function Tc(r){return(r&r-1)===0&&r!==0}function Ru(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ca(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,s,a,o,l,f){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,f)}set(e,t,n,i,s,a,o,l,f){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],f=n[1],u=n[4],c=n[7],h=n[2],m=n[5],_=n[8],p=i[0],g=i[3],d=i[6],x=i[1],v=i[4],y=i[7],M=i[2],S=i[5],D=i[8];return s[0]=a*p+o*x+l*M,s[3]=a*g+o*v+l*S,s[6]=a*d+o*y+l*D,s[1]=f*p+u*x+c*M,s[4]=f*g+u*v+c*S,s[7]=f*d+u*y+c*D,s[2]=h*p+m*x+_*M,s[5]=h*g+m*v+_*S,s[8]=h*d+m*y+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8];return t*a*u-t*o*f-n*s*u+n*o*l+i*s*f-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8],c=u*a-o*f,h=o*l-u*s,m=f*s-a*l,_=t*c+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=c*p,e[1]=(i*f-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*l-f*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),f=Math.sin(s);return this.set(n*l,n*f,-n*(l*a+f*o)+a+e,-i*f,i*l,-i*(-f*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Ye;function $h(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Is(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Cc={};function Fs(r){r in Cc||(Cc[r]=!0,console.warn(r))}function Zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const D0=new Ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),b0=new Ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function T0(r){return r.convertSRGBToLinear().applyMatrix3(b0)}function C0(r){return r.applyMatrix3(D0).convertLinearToSRGB()}const F0={[Kn]:r=>r,[qe]:r=>r.convertSRGBToLinear(),[qh]:T0},R0={[Kn]:r=>r,[qe]:r=>r.convertLinearToSRGB(),[qh]:C0},Ln={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Kn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=F0[e],i=R0[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let wr;class Yh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=Is("canvas")),wr.width=e.width,wr.height=e.height;const n=wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Zr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zr(t[n]/255)*255):t[n]=Zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P0=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Go(i[a].image)):s.push(Go(i[a]))}else s=Go(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let L0=0;class jt extends mr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=zn,i=zn,s=Dn,a=Ns,o=Gn,l=Li,f=jt.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ks(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===rr?qe:sr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bu:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bu:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?rr:Wh}set encoding(e){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rr?qe:sr}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Bh;jt.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,i=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,f=l[0],u=l[4],c=l[8],h=l[1],m=l[5],_=l[9],p=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(c-p)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(c+p)<.1&&Math.abs(_+g)<.1&&Math.abs(f+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(f+1)/2,y=(m+1)/2,M=(d+1)/2,S=(u+h)/4,D=(c+p)/4,T=(_+g)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=S/n,s=D/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=T/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=D/s,i=T/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(c-p)*(c-p)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(c-p)/x,this.z=(h-u)/x,this.w=Math.acos((f+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cr extends mr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rr?qe:sr),this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kh extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class N0 extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],f=n[i+1],u=n[i+2],c=n[i+3];const h=s[a+0],m=s[a+1],_=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=f,e[t+2]=u,e[t+3]=c;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(c!==p||l!==h||f!==m||u!==_){let g=1-o;const d=l*h+f*m+u*_+c*p,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const M=Math.sqrt(v),S=Math.atan2(M,d*x);g=Math.sin(g*S)/M,o=Math.sin(o*S)/M}const y=o*x;if(l=l*g+h*y,f=f*g+m*y,u=u*g+_*y,c=c*g+p*y,g===1-o){const M=1/Math.sqrt(l*l+f*f+u*u+c*c);l*=M,f*=M,u*=M,c*=M}}e[t]=l,e[t+1]=f,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],f=n[i+2],u=n[i+3],c=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*c+l*m-f*h,e[t+1]=l*_+u*h+f*c-o*m,e[t+2]=f*_+u*m+o*h-l*c,e[t+3]=u*_-o*c-l*h-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,f=o(n/2),u=o(i/2),c=o(s/2),h=l(n/2),m=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*c+f*m*_,this._y=f*m*c-h*u*_,this._z=f*u*_+h*m*c,this._w=f*u*c-h*m*_;break;case"YXZ":this._x=h*u*c+f*m*_,this._y=f*m*c-h*u*_,this._z=f*u*_-h*m*c,this._w=f*u*c+h*m*_;break;case"ZXY":this._x=h*u*c-f*m*_,this._y=f*m*c+h*u*_,this._z=f*u*_+h*m*c,this._w=f*u*c-h*m*_;break;case"ZYX":this._x=h*u*c-f*m*_,this._y=f*m*c+h*u*_,this._z=f*u*_-h*m*c,this._w=f*u*c+h*m*_;break;case"YZX":this._x=h*u*c+f*m*_,this._y=f*m*c+h*u*_,this._z=f*u*_-h*m*c,this._w=f*u*c-h*m*_;break;case"XZY":this._x=h*u*c-f*m*_,this._y=f*m*c-h*u*_,this._z=f*u*_+h*m*c,this._w=f*u*c+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],f=t[2],u=t[6],c=t[10],h=n+o+c;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-f)*m,this._z=(a-i)*m}else if(n>o&&n>c){const m=2*Math.sqrt(1+n-o-c);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+f)/m}else if(o>c){const m=2*Math.sqrt(1+o-n-c);this._w=(s-f)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+c-n-o);this._w=(a-i)/m,this._x=(s+f)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,f=t._z,u=t._w;return this._x=n*u+a*o+i*f-s*l,this._y=i*u+a*l+s*o-n*f,this._z=s*u+a*f+n*l-i*o,this._w=a*u-n*o-i*l-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(l),u=Math.atan2(f,o),c=Math.sin((1-t)*u)/f,h=Math.sin(t*u)/f;return this._w=a*c+this._w*h,this._x=n*c+this._x*h,this._y=i*c+this._y*h,this._z=s*c+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,f=l*t+a*i-o*n,u=l*n+o*t-s*i,c=l*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=f*l+h*-s+u*-o-c*-a,this.y=u*l+h*-a+c*-s-f*-o,this.z=c*l+h*-o+f*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new Q,Fc=new fr;class Js{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox),Dr.applyMatrix4(e.matrixWorld),this.union(Dr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)ni.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ni)}else i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),fa.subVectors(this.max,Ms),br.subVectors(e.a,Ms),Tr.subVectors(e.b,Ms),Cr.subVectors(e.c,Ms),Ei.subVectors(Tr,br),Mi.subVectors(Cr,Tr),Xi.subVectors(br,Cr);let t=[0,-Ei.z,Ei.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,Ei.z,0,-Ei.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-Ei.y,Ei.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!Ho(t,br,Tr,Cr,fa)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,br,Tr,Cr,fa))?!1:(ha.crossVectors(Ei,Mi),t=[ha.x,ha.y,ha.z],Ho(t,br,Tr,Cr,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ni=new Q,Dr=new Js,br=new Q,Tr=new Q,Cr=new Q,Ei=new Q,Mi=new Q,Xi=new Q,Ms=new Q,fa=new Q,ha=new Q,qi=new Q;function Ho(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){qi.fromArray(r,s);const o=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=e.dot(qi),f=t.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,f,u),Math.min(l,f,u))>o)return!1}return!0}const U0=new Js,Ss=new Q,ko=new Q;class oo{constructor(e=new Q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):U0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(ko)),this.expandByPoint(Ss.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new Q,Wo=new Q,da=new Q,Si=new Q,Xo=new Q,pa=new Q,qo=new Q;class Jh{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wo.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Wo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(da),o=Si.dot(this.direction),l=-Si.dot(da),f=Si.lengthSq(),u=Math.abs(1-a*a);let c,h,m,_;if(u>0)if(c=a*l-o,h=a*o-l,_=s*u,c>=0)if(h>=-_)if(h<=_){const p=1/u;c*=p,h*=p,m=c*(c+a*h+2*o)+h*(a*c+h+2*l)+f}else h=s,c=Math.max(0,-(a*h+o)),m=-c*c+h*(h+2*l)+f;else h=-s,c=Math.max(0,-(a*h+o)),m=-c*c+h*(h+2*l)+f;else h<=-_?(c=Math.max(0,-(-a*s+o)),h=c>0?-s:Math.min(Math.max(-s,-l),s),m=-c*c+h*(h+2*l)+f):h<=_?(c=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+f):(c=Math.max(0,-(a*s+o)),h=c>0?s:Math.min(Math.max(-s,-l),s),m=-c*c+h*(h+2*l)+f);else h=a>0?-s:s,c=Math.max(0,-(a*h+o)),m=-c*c+h*(h+2*l)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Wo).addScaledVector(da,h),m}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const f=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,h=this.origin;return f>=0?(n=(e.min.x-h.x)*f,i=(e.max.x-h.x)*f):(n=(e.max.x-h.x)*f,i=(e.min.x-h.x)*f),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),c>=0?(o=(e.min.z-h.z)*c,l=(e.max.z-h.z)*c):(o=(e.max.z-h.z)*c,l=(e.min.z-h.z)*c),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,s){Xo.subVectors(t,e),pa.subVectors(n,e),qo.crossVectors(Xo,pa);let a=this.direction.dot(qo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(pa.crossVectors(Si,pa));if(l<0)return null;const f=o*this.direction.dot(Xo.cross(Si));if(f<0||l+f>a)return null;const u=-o*Si.dot(qo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,i,s,a,o,l,f,u,c,h,m,_,p,g){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,f,u,c,h,m,_,p,g)}set(e,t,n,i,s,a,o,l,f,u,c,h,m,_,p,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=f,d[6]=u,d[10]=c,d[14]=h,d[3]=m,d[7]=_,d[11]=p,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),a=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),f=Math.sin(i),u=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*c,_=o*u,p=o*c;t[0]=l*u,t[4]=-l*c,t[8]=f,t[1]=m+_*f,t[5]=h-p*f,t[9]=-o*l,t[2]=p-h*f,t[6]=_+m*f,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*c,_=f*u,p=f*c;t[0]=h+p*o,t[4]=_*o-m,t[8]=a*f,t[1]=a*c,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*c,_=f*u,p=f*c;t[0]=h-p*o,t[4]=-a*c,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*f,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*c,_=o*u,p=o*c;t[0]=l*u,t[4]=_*f-m,t[8]=h*f+p,t[1]=l*c,t[5]=p*f+h,t[9]=m*f-_,t[2]=-f,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*f,_=o*l,p=o*f;t[0]=l*u,t[4]=p-h*c,t[8]=_*c+m,t[1]=c,t[5]=a*u,t[9]=-o*u,t[2]=-f*u,t[6]=m*c+_,t[10]=h-p*c}else if(e.order==="XZY"){const h=a*l,m=a*f,_=o*l,p=o*f;t[0]=l*u,t[4]=-c,t[8]=f*u,t[1]=h*c+p,t[5]=a*u,t[9]=m*c-_,t[2]=_*c-m,t[6]=o*u,t[10]=p*c+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,B0)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ai.crossVectors(n,dn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ai.crossVectors(n,dn)),Ai.normalize(),ma.crossVectors(dn,Ai),i[0]=Ai.x,i[4]=ma.x,i[8]=dn.x,i[1]=Ai.y,i[5]=ma.y,i[9]=dn.y,i[2]=Ai.z,i[6]=ma.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],f=n[12],u=n[1],c=n[5],h=n[9],m=n[13],_=n[2],p=n[6],g=n[10],d=n[14],x=n[3],v=n[7],y=n[11],M=n[15],S=i[0],D=i[4],T=i[8],E=i[12],b=i[1],C=i[5],F=i[9],L=i[13],P=i[2],U=i[6],N=i[10],V=i[14],G=i[3],X=i[7],Y=i[11],oe=i[15];return s[0]=a*S+o*b+l*P+f*G,s[4]=a*D+o*C+l*U+f*X,s[8]=a*T+o*F+l*N+f*Y,s[12]=a*E+o*L+l*V+f*oe,s[1]=u*S+c*b+h*P+m*G,s[5]=u*D+c*C+h*U+m*X,s[9]=u*T+c*F+h*N+m*Y,s[13]=u*E+c*L+h*V+m*oe,s[2]=_*S+p*b+g*P+d*G,s[6]=_*D+p*C+g*U+d*X,s[10]=_*T+p*F+g*N+d*Y,s[14]=_*E+p*L+g*V+d*oe,s[3]=x*S+v*b+y*P+M*G,s[7]=x*D+v*C+y*U+M*X,s[11]=x*T+v*F+y*N+M*Y,s[15]=x*E+v*L+y*V+M*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],f=e[13],u=e[2],c=e[6],h=e[10],m=e[14],_=e[3],p=e[7],g=e[11],d=e[15];return _*(+s*l*c-i*f*c-s*o*h+n*f*h+i*o*m-n*l*m)+p*(+t*l*m-t*f*h+s*a*h-i*a*m+i*f*u-s*l*u)+g*(+t*f*c-t*o*m-s*a*c+n*a*m+s*o*u-n*f*u)+d*(-i*o*u-t*l*c+t*o*h+i*a*c-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8],c=e[9],h=e[10],m=e[11],_=e[12],p=e[13],g=e[14],d=e[15],x=c*g*f-p*h*f+p*l*m-o*g*m-c*l*d+o*h*d,v=_*h*f-u*g*f-_*l*m+a*g*m+u*l*d-a*h*d,y=u*p*f-_*c*f+_*o*m-a*p*m-u*o*d+a*c*d,M=_*c*l-u*p*l-_*o*h+a*p*h+u*o*g-a*c*g,S=t*x+n*v+i*y+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/S;return e[0]=x*D,e[1]=(p*h*s-c*g*s-p*i*m+n*g*m+c*i*d-n*h*d)*D,e[2]=(o*g*s-p*l*s+p*i*f-n*g*f-o*i*d+n*l*d)*D,e[3]=(c*l*s-o*h*s-c*i*f+n*h*f+o*i*m-n*l*m)*D,e[4]=v*D,e[5]=(u*g*s-_*h*s+_*i*m-t*g*m-u*i*d+t*h*d)*D,e[6]=(_*l*s-a*g*s-_*i*f+t*g*f+a*i*d-t*l*d)*D,e[7]=(a*h*s-u*l*s+u*i*f-t*h*f-a*i*m+t*l*m)*D,e[8]=y*D,e[9]=(_*c*s-u*p*s-_*n*m+t*p*m+u*n*d-t*c*d)*D,e[10]=(a*p*s-_*o*s+_*n*f-t*p*f-a*n*d+t*o*d)*D,e[11]=(u*o*s-a*c*s-u*n*f+t*c*f+a*n*m-t*o*m)*D,e[12]=M*D,e[13]=(u*p*i-_*c*i+_*n*h-t*p*h-u*n*g+t*c*g)*D,e[14]=(_*o*i-a*p*i-_*n*l+t*p*l+a*n*g-t*o*g)*D,e[15]=(a*c*i-u*o*i+u*n*l-t*c*l-a*n*h+t*o*h)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,f=s*a,u=s*o;return this.set(f*a+n,f*o-i*l,f*l+i*o,0,f*o+i*l,u*o+n,u*l-i*a,0,f*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,f=s+s,u=a+a,c=o+o,h=s*f,m=s*u,_=s*c,p=a*u,g=a*c,d=o*c,x=l*f,v=l*u,y=l*c,M=n.x,S=n.y,D=n.z;return i[0]=(1-(p+d))*M,i[1]=(m+y)*M,i[2]=(_-v)*M,i[3]=0,i[4]=(m-y)*S,i[5]=(1-(h+d))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(_+v)*D,i[9]=(g-x)*D,i[10]=(1-(h+p))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Fr.set(i[0],i[1],i[2]).length();const a=Fr.set(i[4],i[5],i[6]).length(),o=Fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nn.copy(this);const f=1/s,u=1/a,c=1/o;return Nn.elements[0]*=f,Nn.elements[1]*=f,Nn.elements[2]*=f,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=c,Nn.elements[9]*=c,Nn.elements[10]*=c,t.setFromRotationMatrix(Nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=hi){const l=this.elements,f=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i);let m,_;if(o===hi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ga)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=hi){const l=this.elements,f=1/(t-e),u=1/(n-i),c=1/(a-s),h=(t+e)*f,m=(n+i)*u;let _,p;if(o===hi)_=(a+s)*c,p=-2*c;else if(o===Ga)_=s*c,p=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=p,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fr=new Q,Nn=new Tt,I0=new Q(0,0,0),B0=new Q(1,1,1),Ai=new Q,ma=new Q,dn=new Q,Rc=new Tt,Pc=new fr;class Qs{constructor(e=0,t=0,n=0,i=Qs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],f=i[5],u=i[9],c=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-c,m),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qs.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O0=0;const Lc=new Q,Rr=new fr,ri=new Tt,ga=new Q,As=new Q,z0=new Q,G0=new fr,Nc=new Q(1,0,0),Uc=new Q(0,1,0),Ic=new Q(0,0,1),V0={type:"added"},Bc={type:"removed"};class en extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new Q,t=new Qs,n=new fr,i=new Q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ye}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(As,ga,this.up):ri.lookAt(ga,As,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),Rr.setFromRotationMatrix(ri),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(V0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Bc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let f=0,u=l.length;f<u;f++){const c=l[f];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),f=a(e.textures),u=a(e.images),c=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const f in o){const u=o[f];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}en.DEFAULT_UP=new Q(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new Q,si=new Q,$o=new Q,ai=new Q,Pr=new Q,Lr=new Q,Oc=new Q,Yo=new Q,Zo=new Q,Ko=new Q;let va=!1;class Bn{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Un.subVectors(i,t),si.subVectors(n,t),$o.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(si),l=Un.dot($o),f=si.dot(si),u=si.dot($o),c=a*f-o*o;if(c===0)return s.set(-2,-1,-1);const h=1/c,m=(f*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,n,i,s,a,o,l){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ai),l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),si.subVectors(e,t),Un.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Un.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),Bn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Pr.subVectors(i,n),Lr.subVectors(s,n),Yo.subVectors(e,n);const l=Pr.dot(Yo),f=Lr.dot(Yo);if(l<=0&&f<=0)return t.copy(n);Zo.subVectors(e,i);const u=Pr.dot(Zo),c=Lr.dot(Zo);if(u>=0&&c<=u)return t.copy(i);const h=l*c-u*f;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Pr,a);Ko.subVectors(e,s);const m=Pr.dot(Ko),_=Lr.dot(Ko);if(_>=0&&m<=_)return t.copy(s);const p=m*f-l*_;if(p<=0&&f>=0&&_<=0)return o=f/(f-_),t.copy(n).addScaledVector(Lr,o);const g=u*_-m*c;if(g<=0&&c-u>=0&&m-_>=0)return Oc.subVectors(s,i),o=(c-u)/(c-u+(m-_)),t.copy(i).addScaledVector(Oc,o);const d=1/(g+p+h);return a=p*d,o=h*d,t.copy(n).addScaledVector(Pr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let H0=0;class ds extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Yr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Jo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ln.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ln.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ln.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ln.workingColorSpace){if(e=w0(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Jo(a,s,e+1/3),this.g=Jo(a,s,e),this.b=Jo(a,s,e-1/3)}return Ln.toWorkingColorSpace(this,i),this}setStyle(e,t=qe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return Ln.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Kt(Vt.r*255,0,255))*65536+Math.round(Kt(Vt.g*255,0,255))*256+Math.round(Kt(Vt.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ln.workingColorSpace){Ln.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,f;const u=(o+a)/2;if(o===a)l=0,f=0;else{const c=a-o;switch(f=u<=.5?c/(a+o):c/(2-a-o),a){case n:l=(i-s)/c+(i<s?6:0);break;case i:l=(s-n)/c+2;break;case s:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=f,e.l=u,e}getRGB(e,t=Ln.workingColorSpace){return Ln.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=qe){Ln.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(In),In.h+=e,In.s+=t,In.l+=n,this.setHSL(In.h,In.s,In.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(_a);const n=Bo(In.h,_a.h,t),i=Bo(In.s,_a.s,t),s=Bo(In.l,_a.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new nt;nt.NAMES=jh;class ed extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new Q,xa=new Xe;class $n{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this.updateRange={offset:0,count:-1},this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class td extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nd extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}}let k0=0;const Mn=new Tt,Qo=new en,Nr=new Q,pn=new Js,ws=new Js,Pt=new Q;class jn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?nd:td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(pn.min,ws.min),pn.expandByPoint(Pt),Pt.addVectors(pn.max,ws.max),pn.expandByPoint(Pt)):(pn.expandByPoint(ws.min),pn.expandByPoint(ws.max))}pn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let f=0,u=o.count;f<u;f++)Pt.fromBufferAttribute(o,f),l&&(Nr.fromBufferAttribute(e,f),Pt.add(Nr)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,f=[],u=[];for(let b=0;b<o;b++)f[b]=new Q,u[b]=new Q;const c=new Q,h=new Q,m=new Q,_=new Xe,p=new Xe,g=new Xe,d=new Q,x=new Q;function v(b,C,F){c.fromArray(i,b*3),h.fromArray(i,C*3),m.fromArray(i,F*3),_.fromArray(a,b*2),p.fromArray(a,C*2),g.fromArray(a,F*2),h.sub(c),m.sub(c),p.sub(_),g.sub(_);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(m,-p.y).multiplyScalar(L),x.copy(m).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),f[b].add(d),f[C].add(d),f[F].add(d),u[b].add(x),u[C].add(x),u[F].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,C=y.length;b<C;++b){const F=y[b],L=F.start,P=F.count;for(let U=L,N=L+P;U<N;U+=3)v(n[U+0],n[U+1],n[U+2])}const M=new Q,S=new Q,D=new Q,T=new Q;function E(b){D.fromArray(s,b*3),T.copy(D);const C=f[b];M.copy(C),M.sub(D.multiplyScalar(D.dot(C))).normalize(),S.crossVectors(T,C);const L=S.dot(u[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=L}for(let b=0,C=y.length;b<C;++b){const F=y[b],L=F.start,P=F.count;for(let U=L,N=L+P;U<N;U+=3)E(n[U+0]),E(n[U+1]),E(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new Q,s=new Q,a=new Q,o=new Q,l=new Q,f=new Q,u=new Q,c=new Q;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),p=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,g),u.subVectors(a,s),c.subVectors(i,s),u.cross(c),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),f.fromBufferAttribute(n,g),o.add(u),l.add(u),f.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,f.x,f.y,f.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),c.subVectors(i,s),u.cross(c),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const f=o.array,u=o.itemSize,c=o.normalized,h=new f.constructor(l.length*u);let m=0,_=0;for(let p=0,g=l.length;p<g;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let d=0;d<u;d++)h[_++]=f[m++]}return new $n(h,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],f=e(l,n);t.setAttribute(o,f)}const s=this.morphAttributes;for(const o in s){const l=[],f=s[o];for(let u=0,c=f.length;u<c;u++){const h=f[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const f=a[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const f=n[l];e.data.attributes[l]=f.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],u=[];for(let c=0,h=f.length;c<h;c++){const m=f[c];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const f in i){const u=i[f];this.setAttribute(f,u.clone(t))}const s=e.morphAttributes;for(const f in s){const u=[],c=s[f];for(let h=0,m=c.length;h<m;h++)u.push(c[h].clone(t));this.morphAttributes[f]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let f=0,u=a.length;f<u;f++){const c=a[f];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new Tt,$i=new Jh,ya=new oo,Gc=new Q,Ur=new Q,Ir=new Q,Br=new Q,jo=new Q,Ea=new Q,Ma=new Xe,Sa=new Xe,Aa=new Xe,Vc=new Q,Hc=new Q,kc=new Q,wa=new Q,Da=new Q;class di extends en{constructor(e=new jn,t=new ed){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ea.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const u=o[l],c=s[l];u!==0&&(jo.fromBufferAttribute(c,e),a?Ea.addScaledVector(jo,u):Ea.addScaledVector(jo.sub(t),u))}t.add(Ea)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(ya.containsPoint($i.origin)===!1&&($i.intersectSphere(ya,Gc)===null||$i.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(zc.copy(s).invert(),$i.copy(e.ray).applyMatrix4(zc),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,f=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,p=h.length;_<p;_++){const g=h[_],d=a[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=x,M=v;y<M;y+=3){const S=o.getX(y),D=o.getX(y+1),T=o.getX(y+2);i=ba(this,d,e,n,f,u,c,S,D,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),p=Math.min(o.count,m.start+m.count);for(let g=_,d=p;g<d;g+=3){const x=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);i=ba(this,a,e,n,f,u,c,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,p=h.length;_<p;_++){const g=h[_],d=a[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=x,M=v;y<M;y+=3){const S=y,D=y+1,T=y+2;i=ba(this,d,e,n,f,u,c,S,D,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),p=Math.min(l.count,m.start+m.count);for(let g=_,d=p;g<d;g+=3){const x=g,v=g+1,y=g+2;i=ba(this,a,e,n,f,u,c,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function W0(r,e,t,n,i,s,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ii,o),l===null)return null;Da.copy(o),Da.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Da);return f<t.near||f>t.far?null:{distance:f,point:Da.clone(),object:r}}function ba(r,e,t,n,i,s,a,o,l,f){r.getVertexPosition(o,Ur),r.getVertexPosition(l,Ir),r.getVertexPosition(f,Br);const u=W0(r,e,t,n,Ur,Ir,Br,wa);if(u){i&&(Ma.fromBufferAttribute(i,o),Sa.fromBufferAttribute(i,l),Aa.fromBufferAttribute(i,f),u.uv=Bn.getInterpolation(wa,Ur,Ir,Br,Ma,Sa,Aa,new Xe)),s&&(Ma.fromBufferAttribute(s,o),Sa.fromBufferAttribute(s,l),Aa.fromBufferAttribute(s,f),u.uv1=Bn.getInterpolation(wa,Ur,Ir,Br,Ma,Sa,Aa,new Xe),u.uv2=u.uv1),a&&(Vc.fromBufferAttribute(a,o),Hc.fromBufferAttribute(a,l),kc.fromBufferAttribute(a,f),u.normal=Bn.getInterpolation(wa,Ur,Ir,Br,Vc,Hc,kc,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:f,normal:new Q,materialIndex:0};Bn.getNormal(Ur,Ir,Br,c.normal),u.face=c}return u}class js extends jn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],f=[],u=[],c=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new tn(f,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(c,2));function _(p,g,d,x,v,y,M,S,D,T,E){const b=y/D,C=M/T,F=y/2,L=M/2,P=S/2,U=D+1,N=T+1;let V=0,G=0;const X=new Q;for(let Y=0;Y<N;Y++){const oe=Y*C-L;for(let B=0;B<U;B++){const W=B*b-F;X[p]=W*x,X[g]=oe*v,X[d]=P,f.push(X.x,X.y,X.z),X[p]=0,X[g]=0,X[d]=S>0?1:-1,u.push(X.x,X.y,X.z),c.push(B/D),c.push(1-Y/T),V+=1}}for(let Y=0;Y<T;Y++)for(let oe=0;oe<D;oe++){const B=h+oe+U*Y,W=h+oe+U*(Y+1),Z=h+(oe+1)+U*(Y+1),ne=h+(oe+1)+U*Y;l.push(B,W,ne),l.push(W,Z,ne),G+=6}o.addGroup(m,G,E),m+=G,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(r){const e={};for(let t=0;t<r.length;t++){const n=is(r[t]);for(const i in n)e[i]=n[i]}return e}function X0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function id(r){return r.getRenderTarget()===null?r.outputColorSpace:Kn}const q0={clone:is,merge:Yt};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rd extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends rd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fu*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,f=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/f,i*=a.width/l,n*=a.height/f}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,zr=1;class Z0 extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new bn(Or,zr,e,t);i.layers=this.layers,this.add(i);const s=new bn(Or,zr,e,t);s.layers=this.layers,this.add(s);const a=new bn(Or,zr,e,t);a.layers=this.layers,this.add(a);const o=new bn(Or,zr,e,t);o.layers=this.layers,this.add(o);const l=new bn(Or,zr,e,t);l.layers=this.layers,this.add(l);const f=new bn(Or,zr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const f of t)this.remove(f);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,l,f]=this.children,u=e.getRenderTarget(),c=e.toneMapping,h=e.xr.enabled;e.toneMapping=mi,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,f),e.setRenderTarget(u),e.toneMapping=c,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class sd extends jt{constructor(e,t,n,i,s,a,o,l,f,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,s,a,o,l,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K0 extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===rr?qe:sr),this.texture=new sd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new js(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Pi});s.uniforms.tEquirect.value=t;const a=new di(i,s),o=t.minFilter;return t.minFilter===Ns&&(t.minFilter=Dn),new Z0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const eu=new Q,J0=new Q,Q0=new Ye;class Ji{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=eu.subVectors(n,t).cross(J0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Q0.getNormalMatrix(e),i=this.coplanarPoint(eu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new oo,Ta=new Q;class ad{constructor(e=new Ji,t=new Ji,n=new Ji,i=new Ji,s=new Ji,a=new Ji){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],f=i[4],u=i[5],c=i[6],h=i[7],m=i[8],_=i[9],p=i[10],g=i[11],d=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,h-f,g-m,y-d).normalize(),n[1].setComponents(l+s,h+f,g+m,y+d).normalize(),n[2].setComponents(l+a,h+u,g+_,y+x).normalize(),n[3].setComponents(l-a,h-u,g-_,y-x).normalize(),n[4].setComponents(l-o,h-c,g-p,y-v).normalize(),t===hi)n[5].setComponents(l+o,h+c,g+p,y+v).normalize();else if(t===Ga)n[5].setComponents(o,c,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ta.x=i.normal.x>0?e.max.x:e.min.x,Ta.y=i.normal.y>0?e.max.y:e.min.y,Ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function od(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function j0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(f,u){const c=f.array,h=f.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,c,h),f.onUploadCallback();let _;if(c instanceof Float32Array)_=r.FLOAT;else if(c instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=r.SHORT;else if(c instanceof Uint32Array)_=r.UNSIGNED_INT;else if(c instanceof Int32Array)_=r.INT;else if(c instanceof Int8Array)_=r.BYTE;else if(c instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:f.version}}function s(f,u,c){const h=u.array,m=u.updateRange;r.bindBuffer(c,f),m.count===-1?r.bufferSubData(c,0,h):(t?r.bufferSubData(c,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(c,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const u=n.get(f);u&&(r.deleteBuffer(u.buffer),n.delete(f))}function l(f,u){if(f.isGLBufferAttribute){const h=n.get(f);(!h||h.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const c=n.get(f);c===void 0?n.set(f,i(f,u)):c.version<f.version&&(s(c.buffer,f,u),c.version=f.version)}return{get:a,remove:o,update:l}}class ol extends jn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),f=o+1,u=l+1,c=e/o,h=t/l,m=[],_=[],p=[],g=[];for(let d=0;d<u;d++){const x=d*h-a;for(let v=0;v<f;v++){const y=v*c-s;_.push(y,-x,0),p.push(0,0,1),g.push(v/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const v=x+f*d,y=x+f*(d+1),M=x+1+f*(d+1),S=x+1+f*d;m.push(v,y,S),m.push(y,M,S)}this.setIndex(m),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(p,3)),this.setAttribute("uv",new tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag="vec3 transformed = vec3( position );",og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Og=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Zg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iv=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,av=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_v=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Av=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$v=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,i_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,o_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,b_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$e={alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:rg,aomap_pars_fragment:sg,begin_vertex:ag,beginnormal_vertex:og,bsdfs:ug,iridescence_fragment:lg,bumpmap_pars_fragment:cg,clipping_planes_fragment:fg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:vg,color_vertex:_g,common:xg,cube_uv_reflection_fragment:yg,defaultnormal_vertex:Eg,displacementmap_pars_vertex:Mg,displacementmap_vertex:Sg,emissivemap_fragment:Ag,emissivemap_pars_fragment:wg,encodings_fragment:Dg,encodings_pars_fragment:bg,envmap_fragment:Tg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Fg,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:kg,envmap_vertex:Pg,fog_vertex:Lg,fog_pars_vertex:Ng,fog_fragment:Ug,fog_pars_fragment:Ig,gradientmap_pars_fragment:Bg,lightmap_fragment:Og,lightmap_pars_fragment:zg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Hg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:$g,lights_physical_fragment:Yg,lights_physical_pars_fragment:Zg,lights_fragment_begin:Kg,lights_fragment_maps:Jg,lights_fragment_end:Qg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:rv,map_particle_fragment:sv,map_particle_pars_fragment:av,metalnessmap_fragment:ov,metalnessmap_pars_fragment:uv,morphcolor_vertex:lv,morphnormal_vertex:cv,morphtarget_pars_vertex:fv,morphtarget_vertex:hv,normal_fragment_begin:dv,normal_fragment_maps:pv,normal_pars_fragment:mv,normal_pars_vertex:gv,normal_vertex:vv,normalmap_pars_fragment:_v,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:Ev,iridescence_pars_fragment:Mv,output_fragment:Sv,packing:Av,premultiplied_alpha_fragment:wv,project_vertex:Dv,dithering_fragment:bv,dithering_pars_fragment:Tv,roughnessmap_fragment:Cv,roughnessmap_pars_fragment:Fv,shadowmap_pars_fragment:Rv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Nv,skinbase_vertex:Uv,skinning_pars_vertex:Iv,skinning_vertex:Bv,skinnormal_vertex:Ov,specularmap_fragment:zv,specularmap_pars_fragment:Gv,tonemapping_fragment:Vv,tonemapping_pars_fragment:Hv,transmission_fragment:kv,transmission_pars_fragment:Wv,uv_pars_fragment:Xv,uv_pars_vertex:qv,uv_vertex:$v,worldpos_vertex:Yv,background_vert:Zv,background_frag:Kv,backgroundCube_vert:Jv,backgroundCube_frag:Qv,cube_vert:jv,cube_frag:e_,depth_vert:t_,depth_frag:n_,distanceRGBA_vert:i_,distanceRGBA_frag:r_,equirect_vert:s_,equirect_frag:a_,linedashed_vert:o_,linedashed_frag:u_,meshbasic_vert:l_,meshbasic_frag:c_,meshlambert_vert:f_,meshlambert_frag:h_,meshmatcap_vert:d_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:g_,meshphong_vert:v_,meshphong_frag:__,meshphysical_vert:x_,meshphysical_frag:y_,meshtoon_vert:E_,meshtoon_frag:M_,points_vert:S_,points_frag:A_,shadow_vert:w_,shadow_frag:D_,sprite_vert:b_,sprite_frag:T_},Ae={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},kn={basic:{uniforms:Yt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([Ae.points,Ae.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([Ae.common,Ae.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([Ae.sprite,Ae.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Yt([Ae.common,Ae.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Yt([Ae.lights,Ae.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};kn.physical={uniforms:Yt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ca={r:0,b:0,g:0};function C_(r,e,t,n,i,s,a){const o=new nt(0);let l=s===!0?0:1,f,u,c=null,h=0,m=null;function _(g,d){let x=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0),r.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),x=!0;break}(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ao)?(u===void 0&&(u=new di(new js(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:is(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,D,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==qe,(c!==v||h!==v.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,c=v,h=v.version,m=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(f===void 0&&(f=new di(new ol(2,2),new hr({name:"BackgroundMaterial",uniforms:is(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=v,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=v.colorSpace!==qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),f.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||h!==v.version||m!==r.toneMapping)&&(f.material.needsUpdate=!0,c=v,h=v.version,m=r.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null))}function p(g,d){g.getRGB(Ca,id(r)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(g,d=1){o.set(g),l=d,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,p(o,l)},render:_}}function F_(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=g(null);let f=l,u=!1;function c(P,U,N,V,G){let X=!1;if(a){const Y=p(V,N,U);f!==Y&&(f=Y,m(f.object)),X=d(P,V,N,G),X&&x(P,V,N,G)}else{const Y=U.wireframe===!0;(f.geometry!==V.id||f.program!==N.id||f.wireframe!==Y)&&(f.geometry=V.id,f.program=N.id,f.wireframe=Y,X=!0)}G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,T(P,U,N,V),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,U,N){const V=N.wireframe===!0;let G=o[P.id];G===void 0&&(G={},o[P.id]=G);let X=G[U.id];X===void 0&&(X={},G[U.id]=X);let Y=X[V];return Y===void 0&&(Y=g(h()),X[V]=Y),Y}function g(P){const U=[],N=[],V=[];for(let G=0;G<i;G++)U[G]=0,N[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:V,object:P,attributes:{},index:null}}function d(P,U,N,V){const G=f.attributes,X=U.attributes;let Y=0;const oe=N.getAttributes();for(const B in oe)if(oe[B].location>=0){const Z=G[B];let ne=X[B];if(ne===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;Y++}return f.attributesNum!==Y||f.index!==V}function x(P,U,N,V){const G={},X=U.attributes;let Y=0;const oe=N.getAttributes();for(const B in oe)if(oe[B].location>=0){let Z=X[B];Z===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),G[B]=ne,Y++}f.attributes=G,f.attributesNum=Y,f.index=V}function v(){const P=f.newAttributes;for(let U=0,N=P.length;U<N;U++)P[U]=0}function y(P){M(P,0)}function M(P,U){const N=f.newAttributes,V=f.enabledAttributes,G=f.attributeDivisors;N[P]=1,V[P]===0&&(r.enableVertexAttribArray(P),V[P]=1),G[P]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),G[P]=U)}function S(){const P=f.newAttributes,U=f.enabledAttributes;for(let N=0,V=U.length;N<V;N++)U[N]!==P[N]&&(r.disableVertexAttribArray(N),U[N]=0)}function D(P,U,N,V,G,X,Y){Y===!0?r.vertexAttribIPointer(P,U,N,G,X):r.vertexAttribPointer(P,U,N,V,G,X)}function T(P,U,N,V){if(n.isWebGL2===!1&&(P.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=V.attributes,X=N.getAttributes(),Y=U.defaultAttributeValues;for(const oe in X){const B=X[oe];if(B.location>=0){let W=G[oe];if(W===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const Z=W.normalized,ne=W.itemSize,re=t.get(W);if(re===void 0)continue;const ee=re.buffer,ue=re.type,se=re.bytesPerElement,fe=n.isWebGL2===!0&&(ue===r.INT||ue===r.UNSIGNED_INT||W.gpuType===Oh);if(W.isInterleavedBufferAttribute){const de=W.data,z=de.stride,we=W.offset;if(de.isInstancedInterleavedBuffer){for(let pe=0;pe<B.locationSize;pe++)M(B.location+pe,de.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<B.locationSize;pe++)y(B.location+pe);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let pe=0;pe<B.locationSize;pe++)D(B.location+pe,ne/B.locationSize,ue,Z,z*se,(we+ne/B.locationSize*pe)*se,fe)}else{if(W.isInstancedBufferAttribute){for(let de=0;de<B.locationSize;de++)M(B.location+de,W.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let de=0;de<B.locationSize;de++)y(B.location+de);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let de=0;de<B.locationSize;de++)D(B.location+de,ne/B.locationSize,ue,Z,ne*se,ne/B.locationSize*de*se,fe)}}else if(Y!==void 0){const Z=Y[oe];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(B.location,Z);break;case 3:r.vertexAttrib3fv(B.location,Z);break;case 4:r.vertexAttrib4fv(B.location,Z);break;default:r.vertexAttrib1fv(B.location,Z)}}}}S()}function E(){F();for(const P in o){const U=o[P];for(const N in U){const V=U[N];for(const G in V)_(V[G].object),delete V[G];delete U[N]}delete o[P]}}function b(P){if(o[P.id]===void 0)return;const U=o[P.id];for(const N in U){const V=U[N];for(const G in V)_(V[G].object),delete V[G];delete U[N]}delete o[P.id]}function C(P){for(const U in o){const N=o[U];if(N[P.id]===void 0)continue;const V=N[P.id];for(const G in V)_(V[G].object),delete V[G];delete N[P.id]}}function F(){L(),u=!0,f!==l&&(f=l,m(f.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:F,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:y,disableUnusedAttributes:S}}function R_(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}function o(f,u){r.drawArrays(s,f,u),t.update(u,s,1)}function l(f,u,c){if(c===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,f,u,c),t.update(u,s,c)}this.setMode=a,this.render=o,this.renderInstances=l}function P_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const f=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=a||e.has("OES_texture_float"),M=v&&y,S=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:f,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:S}}function L_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ji,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){const m=c.length!==0||h||n!==0||i;return i=h,n=c.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,h){t=u(c,h,0)},this.setState=function(c,h,m){const _=c.clippingPlanes,p=c.clipIntersection,g=c.clipShadows,d=r.get(c);if(!i||_===null||_.length===0||s&&!g)s?u(null):f();else{const x=s?0:n,v=x*4;let y=d.clippingState||null;l.value=y,y=u(_,h,v,m);for(let M=0;M!==v;++M)y[M]=t[M];d.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,h,m,_){const p=c!==null?c.length:0;let g=null;if(p!==0){if(g=l.value,_!==!0||g===null){const d=m+p*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=m;v!==p;++v,y+=4)a.copy(c[v]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function N_(r){let e=new WeakMap;function t(a,o){return o===wu?a.mapping=es:o===Du&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===wu||o===Du)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const f=new K0(l.height/2);return f.fromEquirectangularTexture(r,a),e.set(a,f),a.addEventListener("dispose",i),t(f.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class U_ extends rd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,a=s+f*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wr=4,Wc=[.125,.215,.35,.446,.526,.582],er=20,tu=new U_,Xc=new nt;let nu=null;const Qi=(1+Math.sqrt(5))/2,Gr=1/Qi,qc=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Qi,Gr),new Q(0,Qi,-Gr),new Q(Gr,0,Qi),new Q(-Gr,0,Qi),new Q(Qi,Gr,0),new Q(-Qi,Gr,0)];class $c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){nu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nu),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Us,format:Gn,colorSpace:Kn,depthBuffer:!1},i=Yc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(s)),this._blurMaterial=B_(s,e,t)}return i}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,tu)}_sceneToCubeUV(e,t,n,i){const o=new bn(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,h=u.toneMapping;u.getClearColor(Xc),u.toneMapping=mi,u.autoClear=!1;const m=new ed({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new di(new js,m);let p=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,p=!0):(m.color.copy(Xc),p=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(f[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,f[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,f[d]));const v=this._cubeSize;Fa(i,x*v,d>2?v:0,v,v),u.setRenderTarget(i),p&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=c,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new di(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,tu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=qc[(i-1)%qc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new di(this._lodPlanes[i],f),h=f.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*er-1),p=s/_,g=isFinite(s)?1+Math.floor(u*p):er;g>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${er}`);const d=[];let x=0;for(let D=0;D<er;++D){const T=D/p,E=Math.exp(-T*T/2);d.push(E),D===0?x+=E:D<g&&(x+=2*E)}for(let D=0;D<d.length;D++)d[D]=d[D]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const y=this._sizeLods[i],M=3*y*(i>v-Wr?i-v+Wr:0),S=4*(this._cubeSize-y);Fa(t,M,S,3*y,2*y),l.setRenderTarget(t),l.render(c,tu)}}function I_(r){const e=[],t=[],n=[];let i=r;const s=r-Wr+1+Wc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Wr?l=Wc[a-r+Wr-1]:a===0&&(l=0),n.push(l);const f=1/(o-2),u=-f,c=1+f,h=[u,u,c,u,c,c,u,u,c,c,u,c],m=6,_=6,p=3,g=2,d=1,x=new Float32Array(p*_*m),v=new Float32Array(g*_*m),y=new Float32Array(d*_*m);for(let S=0;S<m;S++){const D=S%3*2/3-1,T=S>2?0:-1,E=[D,T,0,D+2/3,T,0,D+2/3,T+1,0,D,T,0,D+2/3,T+1,0,D,T+1,0];x.set(E,p*_*S),v.set(h,g*_*S);const b=[S,S,S,S,S,S];y.set(b,d*_*S)}const M=new jn;M.setAttribute("position",new $n(x,p)),M.setAttribute("uv",new $n(v,g)),M.setAttribute("faceIndex",new $n(y,d)),e.push(M),i>Wr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yc(r,e,t){const n=new cr(r,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function B_(r,e,t){const n=new Float32Array(er),i=new Q(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Zc(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Kc(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,f=l===wu||l===Du,u=l===es||l===ts;if(f||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=e.get(o);return t===null&&(t=new $c(r)),c=f?t.fromEquirectangular(o,c):t.fromCubemap(o,c),e.set(o,c),c.texture}else{if(e.has(o))return e.get(o).texture;{const c=o.image;if(f&&c&&c.height>0||u&&c&&i(c)){t===null&&(t=new $c(r));const h=f?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const f=6;for(let u=0;u<f;u++)o[u]!==void 0&&l++;return l===f}function s(o){const l=o.target;l.removeEventListener("dispose",s);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function z_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function G_(r,e,t,n){const i={},s=new WeakMap;function a(c){const h=c.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const p=h.morphAttributes[_];for(let g=0,d=p.length;g<d;g++)e.remove(p[g])}h.removeEventListener("dispose",a),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(c,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(c){const h=c.attributes;for(const _ in h)e.update(h[_],r.ARRAY_BUFFER);const m=c.morphAttributes;for(const _ in m){const p=m[_];for(let g=0,d=p.length;g<d;g++)e.update(p[g],r.ARRAY_BUFFER)}}function f(c){const h=[],m=c.index,_=c.attributes.position;let p=0;if(m!==null){const x=m.array;p=m.version;for(let v=0,y=x.length;v<y;v+=3){const M=x[v+0],S=x[v+1],D=x[v+2];h.push(M,S,S,D,D,M)}}else{const x=_.array;p=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const M=v+0,S=v+1,D=v+2;h.push(M,S,S,D,D,M)}}const g=new($h(h)?nd:td)(h,1);g.version=p;const d=s.get(c);d&&e.remove(d),s.set(c,g)}function u(c){const h=s.get(c);if(h){const m=c.index;m!==null&&h.version<m.version&&f(c)}else f(c);return s.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function V_(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function f(h){o=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,o,h*l),t.update(m,s,1)}function c(h,m,_){if(_===0)return;let p,g;if(i)p=r,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,m,o,h*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=f,this.render=u,this.renderInstances=c}function H_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function k_(r,e){return r[0]-e[0]}function W_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function X_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ot,o=[];for(let f=0;f<8;f++)o[f]=[f,0];function l(f,u,c){const h=f.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=_!==void 0?_.length:0;let g=s.get(u);if(g===void 0||g.count!==p){let U=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var m=U;g!==void 0&&g.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),M===!0&&(E=3);let b=u.attributes.position.count*E,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*C*4*p),L=new Kh(F,b,C,p);L.type=bi,L.needsUpdate=!0;const P=E*4;for(let N=0;N<p;N++){const V=S[N],G=D[N],X=T[N],Y=b*C*4*N;for(let oe=0;oe<V.count;oe++){const B=oe*P;v===!0&&(a.fromBufferAttribute(V,oe),F[Y+B+0]=a.x,F[Y+B+1]=a.y,F[Y+B+2]=a.z,F[Y+B+3]=0),y===!0&&(a.fromBufferAttribute(G,oe),F[Y+B+4]=a.x,F[Y+B+5]=a.y,F[Y+B+6]=a.z,F[Y+B+7]=0),M===!0&&(a.fromBufferAttribute(X,oe),F[Y+B+8]=a.x,F[Y+B+9]=a.y,F[Y+B+10]=a.z,F[Y+B+11]=X.itemSize===4?a.w:1)}}g={count:p,texture:L,size:new Xe(b,C)},s.set(u,g),u.addEventListener("dispose",U)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const x=u.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",h),c.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const _=h===void 0?0:h.length;let p=n[u.id];if(p===void 0||p.length!==_){p=[];for(let y=0;y<_;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<_;y++){const M=p[y];M[0]=y,M[1]=h[y]}p.sort(W_);for(let y=0;y<8;y++)y<_&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(k_);const g=u.morphAttributes.position,d=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const M=o[y],S=M[0],D=M[1];S!==Number.MAX_SAFE_INTEGER&&D?(g&&u.getAttribute("morphTarget"+y)!==g[S]&&u.setAttribute("morphTarget"+y,g[S]),d&&u.getAttribute("morphNormal"+y)!==d[S]&&u.setAttribute("morphNormal"+y,d[S]),i[y]=D,x+=D):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-x;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function q_(r,e,t,n){let i=new WeakMap;function s(l){const f=n.render.frame,u=l.geometry,c=e.get(l,u);return i.get(c)!==f&&(e.update(c),i.set(c,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),c}function a(){i=new WeakMap}function o(l){const f=l.target;f.removeEventListener("dispose",o),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:a}}const ud=new jt,ld=new Kh,cd=new N0,fd=new sd,Jc=[],Qc=[],jc=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function ps(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Jc[i];if(s===void 0&&(s=new Float32Array(i),Jc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uo(r,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function Z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function K_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function J_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ct(t,n))return;tf.set(n),r.uniformMatrix2fv(this.addr,!1,tf),Ft(t,n)}}function Q_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ct(t,n))return;ef.set(n),r.uniformMatrix3fv(this.addr,!1,ef),Ft(t,n)}}function j_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ct(t,n))return;jc.set(n),r.uniformMatrix4fv(this.addr,!1,jc),Ft(t,n)}}function ex(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function rx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ud,i)}function lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cd,i)}function cx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fd,i)}function fx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ld,i)}function hx(r){switch(r){case 5126:return $_;case 35664:return Y_;case 35665:return Z_;case 35666:return K_;case 35674:return J_;case 35675:return Q_;case 35676:return j_;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return fx}}function dx(r,e){r.uniform1fv(this.addr,e)}function px(r,e){const t=ps(e,this.size,2);r.uniform2fv(this.addr,t)}function mx(r,e){const t=ps(e,this.size,3);r.uniform3fv(this.addr,t)}function gx(r,e){const t=ps(e,this.size,4);r.uniform4fv(this.addr,t)}function vx(r,e){const t=ps(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _x(r,e){const t=ps(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function xx(r,e){const t=ps(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function yx(r,e){r.uniform1iv(this.addr,e)}function Ex(r,e){r.uniform2iv(this.addr,e)}function Mx(r,e){r.uniform3iv(this.addr,e)}function Sx(r,e){r.uniform4iv(this.addr,e)}function Ax(r,e){r.uniform1uiv(this.addr,e)}function wx(r,e){r.uniform2uiv(this.addr,e)}function Dx(r,e){r.uniform3uiv(this.addr,e)}function bx(r,e){r.uniform4uiv(this.addr,e)}function Tx(r,e,t){const n=this.cache,i=e.length,s=uo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ud,s[a])}function Cx(r,e,t){const n=this.cache,i=e.length,s=uo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cd,s[a])}function Fx(r,e,t){const n=this.cache,i=e.length,s=uo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||fd,s[a])}function Rx(r,e,t){const n=this.cache,i=e.length,s=uo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ld,s[a])}function Px(r){switch(r){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return vx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return yx;case 35667:case 35671:return Ex;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return Ax;case 36294:return wx;case 36295:return Dx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Rx}}class Lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hx(t.type)}}class Nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Px(t.type)}}class Ux{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function nf(r,e){r.seq.push(e),r.map[e.id]=e}function Ix(r,e,t){const n=r.name,i=n.length;for(iu.lastIndex=0;;){const s=iu.exec(n),a=iu.lastIndex;let o=s[1];const l=s[2]==="]",f=s[3];if(l&&(o=o|0),f===void 0||f==="["&&a+2===i){nf(t,f===void 0?new Lx(o,r,e):new Nx(o,r,e));break}else{let c=t.map[o];c===void 0&&(c=new Ux(o),nf(t,c)),t=c}}}class Ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Ix(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function rf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Bx=0;function Ox(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zx(r){switch(r){case Kn:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function sf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ox(r.getShaderSource(e),a)}else return i}function Gx(r,e){const t=zx(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vx(r,e){let t;switch(e){case Qm:t="Linear";break;case jm:t="Reinhard";break;case e0:t="OptimizedCineon";break;case t0:t="ACESFilmic";break;case n0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function kx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function bs(r){return r!==""}function af(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function of(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(r){return r.replace(Xx,qx)}function qx(r,e){const t=$e[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Pu(t)}const $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(r){return r.replace($x,Yx)}function Yx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Kx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Qx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case Km:e="ENVMAP_BLENDING_MIX";break;case Jm:e="ENVMAP_BLENDING_ADD";break}return e}function jx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e1(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zx(t),f=Kx(t),u=Jx(t),c=Qx(t),h=jx(t),m=t.isWebGL2?"":Hx(t),_=kx(s),p=i.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bs).join(`
`),g.length>0&&(g+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bs).join(`
`),d.length>0&&(d+=`
`)):(g=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),d=[m,lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?$e.tonemapping_pars_fragment:"",t.toneMapping!==mi?Vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.encodings_pars_fragment,Gx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),a=Pu(a),a=af(a,t),a=of(a,t),o=Pu(o),o=af(o,t),o=of(o,t),a=uf(a),o=uf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+g+a,y=x+d+o,M=rf(i,i.VERTEX_SHADER,v),S=rf(i,i.FRAGMENT_SHADER,y);if(i.attachShader(p,M),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),b=i.getShaderInfoLog(M).trim(),C=i.getShaderInfoLog(S).trim();let F=!0,L=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,M,S);else{const P=sf(i,M,"vertex"),U=sf(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+P+`
`+U)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(b===""||C==="")&&(L=!1);L&&(this.diagnostics={runnable:F,programLog:E,vertexShader:{log:b,prefix:g},fragmentShader:{log:C,prefix:d}})}i.deleteShader(M),i.deleteShader(S);let D;this.getUniforms=function(){return D===void 0&&(D=new Ua(i,p)),D};let T;return this.getAttributes=function(){return T===void 0&&(T=Wx(i,p)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}let t1=0;class n1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i1(e),t.set(e,n)),n}}class i1{constructor(e){this.id=t1++,this.code=e,this.usedTimes=0}}function r1(r,e,t,n,i,s,a){const o=new Qh,l=new n1,f=[],u=i.isWebGL2,c=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(E){return E===0?"uv":`uv${E}`}function g(E,b,C,F,L){const P=F.fog,U=L.geometry,N=E.isMeshStandardMaterial?F.environment:null,V=(E.isMeshStandardMaterial?t:e).get(E.envMap||N),G=V&&V.mapping===ao?V.image.height:null,X=_[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,oe=Y!==void 0?Y.length:0;let B=0;U.morphAttributes.position!==void 0&&(B=1),U.morphAttributes.normal!==void 0&&(B=2),U.morphAttributes.color!==void 0&&(B=3);let W,Z,ne,re;if(X){const _t=kn[X];W=_t.vertexShader,Z=_t.fragmentShader}else W=E.vertexShader,Z=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),re=l.getFragmentShaderID(E);const ee=r.getRenderTarget(),ue=L.isInstancedMesh===!0,se=!!E.map,fe=!!E.matcap,de=!!V,z=!!E.aoMap,we=!!E.lightMap,pe=!!E.bumpMap,ve=!!E.normalMap,me=!!E.displacementMap,Pe=!!E.emissiveMap,Te=!!E.metalnessMap,Ce=!!E.roughnessMap,Le=E.anisotropy>0,ze=E.clearcoat>0,Ze=E.iridescence>0,A=E.sheen>0,w=E.transmission>0,O=Le&&!!E.anisotropyMap,k=ze&&!!E.clearcoatMap,$=ze&&!!E.clearcoatNormalMap,R=ze&&!!E.clearcoatRoughnessMap,J=Ze&&!!E.iridescenceMap,K=Ze&&!!E.iridescenceThicknessMap,H=A&&!!E.sheenColorMap,te=A&&!!E.sheenRoughnessMap,_e=!!E.specularMap,ge=!!E.specularColorMap,xe=!!E.specularIntensityMap,Se=w&&!!E.transmissionMap,Re=w&&!!E.thicknessMap,Ge=!!E.gradientMap,q=!!E.alphaMap,ye=E.alphaTest>0,ae=!!E.extensions,Ee=!!U.attributes.uv1,De=!!U.attributes.uv2,Je=!!U.attributes.uv3;return{isWebGL2:u,shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:Z,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:ue,instancingColor:ue&&L.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Kn,map:se,matcap:fe,envMap:de,envMapMode:de&&V.mapping,envMapCubeUVHeight:G,aoMap:z,lightMap:we,bumpMap:pe,normalMap:ve,displacementMap:h&&me,emissiveMap:Pe,normalMapObjectSpace:ve&&E.normalMapType===m0,normalMapTangentSpace:ve&&E.normalMapType===Xh,metalnessMap:Te,roughnessMap:Ce,anisotropy:Le,anisotropyMap:O,clearcoat:ze,clearcoatMap:k,clearcoatNormalMap:$,clearcoatRoughnessMap:R,iridescence:Ze,iridescenceMap:J,iridescenceThicknessMap:K,sheen:A,sheenColorMap:H,sheenRoughnessMap:te,specularMap:_e,specularColorMap:ge,specularIntensityMap:xe,transmission:w,transmissionMap:Se,thicknessMap:Re,gradientMap:Ge,opaque:E.transparent===!1&&E.blending===Yr,alphaMap:q,alphaTest:ye,combine:E.combine,mapUv:se&&p(E.map.channel),aoMapUv:z&&p(E.aoMap.channel),lightMapUv:we&&p(E.lightMap.channel),bumpMapUv:pe&&p(E.bumpMap.channel),normalMapUv:ve&&p(E.normalMap.channel),displacementMapUv:me&&p(E.displacementMap.channel),emissiveMapUv:Pe&&p(E.emissiveMap.channel),metalnessMapUv:Te&&p(E.metalnessMap.channel),roughnessMapUv:Ce&&p(E.roughnessMap.channel),anisotropyMapUv:O&&p(E.anisotropyMap.channel),clearcoatMapUv:k&&p(E.clearcoatMap.channel),clearcoatNormalMapUv:$&&p(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&p(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(E.iridescenceMap.channel),iridescenceThicknessMapUv:K&&p(E.iridescenceThicknessMap.channel),sheenColorMapUv:H&&p(E.sheenColorMap.channel),sheenRoughnessMapUv:te&&p(E.sheenRoughnessMap.channel),specularMapUv:_e&&p(E.specularMap.channel),specularColorMapUv:ge&&p(E.specularColorMap.channel),specularIntensityMapUv:xe&&p(E.specularIntensityMap.channel),transmissionMapUv:Se&&p(E.transmissionMap.channel),thicknessMapUv:Re&&p(E.thicknessMap.channel),alphaMapUv:q&&p(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ve||Le),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:De,vertexUv3s:Je,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(se||q),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:B,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:E.toneMapped?r.toneMapping:mi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fi,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ae&&E.extensions.derivatives===!0,extensionFragDepth:ae&&E.extensions.fragDepth===!0,extensionDrawBuffers:ae&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)b.push(C),b.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(x(b,E),v(b,E),b.push(r.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function x(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),E.push(o.mask)}function y(E){const b=_[E.type];let C;if(b){const F=kn[b];C=q0.clone(F.uniforms)}else C=E.uniforms;return C}function M(E,b){let C;for(let F=0,L=f.length;F<L;F++){const P=f[F];if(P.cacheKey===b){C=P,++C.usedTimes;break}}return C===void 0&&(C=new e1(r,b,E,s),f.push(C)),C}function S(E){if(--E.usedTimes===0){const b=f.indexOf(E);f[b]=f[f.length-1],f.pop(),E.destroy()}}function D(E){l.remove(E)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:D,programs:f,dispose:T}}function s1(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function a1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function cf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ff(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(c,h,m,_,p,g){let d=r[e];return d===void 0?(d={id:c.id,object:c,geometry:h,material:m,groupOrder:_,renderOrder:c.renderOrder,z:p,group:g},r[e]=d):(d.id=c.id,d.object=c,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=c.renderOrder,d.z=p,d.group=g),e++,d}function o(c,h,m,_,p,g){const d=a(c,h,m,_,p,g);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(c,h,m,_,p,g){const d=a(c,h,m,_,p,g);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function f(c,h){t.length>1&&t.sort(c||a1),n.length>1&&n.sort(h||cf),i.length>1&&i.sort(h||cf)}function u(){for(let c=e,h=r.length;c<h;c++){const m=r[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:f}}function o1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ff,r.set(n,[a])):i>=s.length?(a=new ff,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function u1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new nt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=t,t}}}function l1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let c1=0;function f1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function h1(r,e){const t=new u1,n=l1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new Q);const s=new Q,a=new Tt,o=new Tt;function l(u,c){let h=0,m=0,_=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,d=0,x=0,v=0,y=0,M=0,S=0,D=0,T=0;u.sort(f1);const E=c===!0?Math.PI:1;for(let C=0,F=u.length;C<F;C++){const L=u[C],P=L.color,U=L.intensity,N=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=P.r*U*E,m+=P.g*U*E,_+=P.b*U*E;else if(L.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],U);else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const X=L.shadow,Y=n.get(L);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=G,p++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(P).multiplyScalar(U*E),G.distance=N,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[d]=G;const X=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,X.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[d]=X.matrix,L.castShadow){const Y=n.get(L);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.spotShadow[d]=Y,i.spotShadowMap[d]=V,S++}d++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(P).multiplyScalar(U),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=G,x++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*E),G.distance=L.distance,G.decay=L.decay,L.castShadow){const X=L.shadow,Y=n.get(L);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(U*E),G.groundColor.copy(L.groundColor).multiplyScalar(U*E),i.hemi[v]=G,v++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;const b=i.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==d||b.rectAreaLength!==x||b.hemiLength!==v||b.numDirectionalShadows!==y||b.numPointShadows!==M||b.numSpotShadows!==S||b.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=d,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+D-T,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=T,b.directionalLength=p,b.pointLength=g,b.spotLength=d,b.rectAreaLength=x,b.hemiLength=v,b.numDirectionalShadows=y,b.numPointShadows=M,b.numSpotShadows=S,b.numSpotMaps=D,i.version=c1++)}function f(u,c){let h=0,m=0,_=0,p=0,g=0;const d=c.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),h++}else if(y.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),g++}}}return{setup:l,setupView:f,state:i}}function hf(r,e){const t=new h1(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(c){n.push(c)}function o(c){i.push(c)}function l(c){t.setup(n,c)}function f(c){t.setupView(n,c)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o}}function d1(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new hf(r,e),t.set(s,[l])):a>=o.length?(l=new hf(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class p1 extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m1 extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _1(r,e,t){let n=new ad;const i=new Xe,s=new Xe,a=new Ot,o=new p1({depthPacking:p0}),l=new m1,f={},u=t.maxTextureSize,c={[Ii]:Qt,[Qt]:Ii,[fi]:fi},h=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:g1,fragmentShader:v1}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new jn;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new di(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let d=this.type;this.render=function(M,S,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const T=r.getRenderTarget(),E=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),C=r.state;C.setBlending(Pi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const F=d!==ui&&this.type===ui,L=d===ui&&this.type!==ui;for(let P=0,U=M.length;P<U;P++){const N=M[P],V=N.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const G=V.getFrameExtents();if(i.multiply(G),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,V.mapSize.y=s.y)),V.map===null||F===!0||L===!0){const Y=this.type!==ui?{minFilter:Zt,magFilter:Zt}:{};V.map!==null&&V.map.dispose(),V.map=new cr(i.x,i.y,Y),V.map.texture.name=N.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const X=V.getViewportCount();for(let Y=0;Y<X;Y++){const oe=V.getViewport(Y);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),C.viewport(a),V.updateMatrices(N,Y),n=V.getFrustum(),y(S,D,V.camera,N,this.type)}V.isPointLightShadow!==!0&&this.type===ui&&x(V,D),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,r.setRenderTarget(T,E,b)};function x(M,S){const D=e.update(p);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new cr(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(S,null,D,h,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(S,null,D,m,p,null)}function v(M,S,D,T){let E=null;const b=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)E=b;else if(E=D.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const C=E.uuid,F=S.uuid;let L=f[C];L===void 0&&(L={},f[C]=L);let P=L[F];P===void 0&&(P=E.clone(),L[F]=P),E=P}if(E.visible=S.visible,E.wireframe=S.wireframe,T===ui?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:c[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=r.properties.get(E);C.light=D}return E}function y(M,S,D,T,E){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===ui)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const F=e.update(M),L=M.material;if(Array.isArray(L)){const P=F.groups;for(let U=0,N=P.length;U<N;U++){const V=P[U],G=L[V.materialIndex];if(G&&G.visible){const X=v(M,G,T,E);r.renderBufferDirect(D,null,F,X,M,V)}}}else if(L.visible){const P=v(M,L,T,E);r.renderBufferDirect(D,null,F,P,M,null)}}const C=M.children;for(let F=0,L=C.length;F<L;F++)y(C[F],S,D,T,E)}}function x1(r,e,t){const n=t.isWebGL2;function i(){let q=!1;const ye=new Ot;let ae=null;const Ee=new Ot(0,0,0,0);return{setMask:function(De){ae!==De&&!q&&(r.colorMask(De,De,De,De),ae=De)},setLocked:function(De){q=De},setClear:function(De,Je,ct,_t,ei){ei===!0&&(De*=_t,Je*=_t,ct*=_t),ye.set(De,Je,ct,_t),Ee.equals(ye)===!1&&(r.clearColor(De,Je,ct,_t),Ee.copy(ye))},reset:function(){q=!1,ae=null,Ee.set(-1,0,0,0)}}}function s(){let q=!1,ye=null,ae=null,Ee=null;return{setTest:function(De){De?ee(r.DEPTH_TEST):ue(r.DEPTH_TEST)},setMask:function(De){ye!==De&&!q&&(r.depthMask(De),ye=De)},setFunc:function(De){if(ae!==De){switch(De){case km:r.depthFunc(r.NEVER);break;case Wm:r.depthFunc(r.ALWAYS);break;case Xm:r.depthFunc(r.LESS);break;case Au:r.depthFunc(r.LEQUAL);break;case qm:r.depthFunc(r.EQUAL);break;case $m:r.depthFunc(r.GEQUAL);break;case Ym:r.depthFunc(r.GREATER);break;case Zm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=De}},setLocked:function(De){q=De},setClear:function(De){Ee!==De&&(r.clearDepth(De),Ee=De)},reset:function(){q=!1,ye=null,ae=null,Ee=null}}}function a(){let q=!1,ye=null,ae=null,Ee=null,De=null,Je=null,ct=null,_t=null,ei=null;return{setTest:function(ft){q||(ft?ee(r.STENCIL_TEST):ue(r.STENCIL_TEST))},setMask:function(ft){ye!==ft&&!q&&(r.stencilMask(ft),ye=ft)},setFunc:function(ft,En,Ut){(ae!==ft||Ee!==En||De!==Ut)&&(r.stencilFunc(ft,En,Ut),ae=ft,Ee=En,De=Ut)},setOp:function(ft,En,Ut){(Je!==ft||ct!==En||_t!==Ut)&&(r.stencilOp(ft,En,Ut),Je=ft,ct=En,_t=Ut)},setLocked:function(ft){q=ft},setClear:function(ft){ei!==ft&&(r.clearStencil(ft),ei=ft)},reset:function(){q=!1,ye=null,ae=null,Ee=null,De=null,Je=null,ct=null,_t=null,ei=null}}}const o=new i,l=new s,f=new a,u=new WeakMap,c=new WeakMap;let h={},m={},_=new WeakMap,p=[],g=null,d=!1,x=null,v=null,y=null,M=null,S=null,D=null,T=null,E=!1,b=null,C=null,F=null,L=null,P=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=V>=2);let X=null,Y={};const oe=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),W=new Ot().fromArray(oe),Z=new Ot().fromArray(B);function ne(q,ye,ae,Ee){const De=new Uint8Array(4),Je=r.createTexture();r.bindTexture(q,Je),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<ae;ct++)n&&(q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY)?r.texImage3D(ye,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(ye+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Je}const re={};re[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(re[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),f.setClear(0),ee(r.DEPTH_TEST),l.setFunc(Au),me(!1),Pe(Kl),ee(r.CULL_FACE),pe(Pi);function ee(q){h[q]!==!0&&(r.enable(q),h[q]=!0)}function ue(q){h[q]!==!1&&(r.disable(q),h[q]=!1)}function se(q,ye){return m[q]!==ye?(r.bindFramebuffer(q,ye),m[q]=ye,n&&(q===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ye),q===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ye)),!0):!1}function fe(q,ye){let ae=p,Ee=!1;if(q)if(ae=_.get(ye),ae===void 0&&(ae=[],_.set(ye,ae)),q.isWebGLMultipleRenderTargets){const De=q.texture;if(ae.length!==De.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Je=0,ct=De.length;Je<ct;Je++)ae[Je]=r.COLOR_ATTACHMENT0+Je;ae.length=De.length,Ee=!0}}else ae[0]!==r.COLOR_ATTACHMENT0&&(ae[0]=r.COLOR_ATTACHMENT0,Ee=!0);else ae[0]!==r.BACK&&(ae[0]=r.BACK,Ee=!0);Ee&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function de(q){return g!==q?(r.useProgram(q),g=q,!0):!1}const z={[kr]:r.FUNC_ADD,[Pm]:r.FUNC_SUBTRACT,[Lm]:r.FUNC_REVERSE_SUBTRACT};if(n)z[ec]=r.MIN,z[tc]=r.MAX;else{const q=e.get("EXT_blend_minmax");q!==null&&(z[ec]=q.MIN_EXT,z[tc]=q.MAX_EXT)}const we={[Nm]:r.ZERO,[Um]:r.ONE,[Im]:r.SRC_COLOR,[Nh]:r.SRC_ALPHA,[Hm]:r.SRC_ALPHA_SATURATE,[Gm]:r.DST_COLOR,[Om]:r.DST_ALPHA,[Bm]:r.ONE_MINUS_SRC_COLOR,[Uh]:r.ONE_MINUS_SRC_ALPHA,[Vm]:r.ONE_MINUS_DST_COLOR,[zm]:r.ONE_MINUS_DST_ALPHA};function pe(q,ye,ae,Ee,De,Je,ct,_t){if(q===Pi){d===!0&&(ue(r.BLEND),d=!1);return}if(d===!1&&(ee(r.BLEND),d=!0),q!==Rm){if(q!==x||_t!==E){if((v!==kr||S!==kr)&&(r.blendEquation(r.FUNC_ADD),v=kr,S=kr),_t)switch(q){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jl:r.blendFunc(r.ONE,r.ONE);break;case Ql:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ql:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,M=null,D=null,T=null,x=q,E=_t}return}De=De||ye,Je=Je||ae,ct=ct||Ee,(ye!==v||De!==S)&&(r.blendEquationSeparate(z[ye],z[De]),v=ye,S=De),(ae!==y||Ee!==M||Je!==D||ct!==T)&&(r.blendFuncSeparate(we[ae],we[Ee],we[Je],we[ct]),y=ae,M=Ee,D=Je,T=ct),x=q,E=!1}function ve(q,ye){q.side===fi?ue(r.CULL_FACE):ee(r.CULL_FACE);let ae=q.side===Qt;ye&&(ae=!ae),me(ae),q.blending===Yr&&q.transparent===!1?pe(Pi):pe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),o.setMask(q.colorWrite);const Ee=q.stencilWrite;f.setTest(Ee),Ee&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ce(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(q){b!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),b=q)}function Pe(q){q!==Tm?(ee(r.CULL_FACE),q!==C&&(q===Kl?r.cullFace(r.BACK):q===Cm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ue(r.CULL_FACE),C=q}function Te(q){q!==F&&(N&&r.lineWidth(q),F=q)}function Ce(q,ye,ae){q?(ee(r.POLYGON_OFFSET_FILL),(L!==ye||P!==ae)&&(r.polygonOffset(ye,ae),L=ye,P=ae)):ue(r.POLYGON_OFFSET_FILL)}function Le(q){q?ee(r.SCISSOR_TEST):ue(r.SCISSOR_TEST)}function ze(q){q===void 0&&(q=r.TEXTURE0+U-1),X!==q&&(r.activeTexture(q),X=q)}function Ze(q,ye,ae){ae===void 0&&(X===null?ae=r.TEXTURE0+U-1:ae=X);let Ee=Y[ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},Y[ae]=Ee),(Ee.type!==q||Ee.texture!==ye)&&(X!==ae&&(r.activeTexture(ae),X=ae),r.bindTexture(q,ye||re[q]),Ee.type=q,Ee.texture=ye)}function A(){const q=Y[X];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function w(){try{r.compressedTexImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function O(){try{r.compressedTexImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function k(){try{r.texSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $(){try{r.texSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function R(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function J(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function K(){try{r.texStorage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function H(){try{r.texStorage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{r.texImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ge(q){W.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),W.copy(q))}function xe(q){Z.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Z.copy(q))}function Se(q,ye){let ae=c.get(ye);ae===void 0&&(ae=new WeakMap,c.set(ye,ae));let Ee=ae.get(q);Ee===void 0&&(Ee=r.getUniformBlockIndex(ye,q.name),ae.set(q,Ee))}function Re(q,ye){const Ee=c.get(ye).get(q);u.get(ye)!==Ee&&(r.uniformBlockBinding(ye,Ee,q.__bindingPointIndex),u.set(ye,Ee))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},X=null,Y={},m={},_=new WeakMap,p=[],g=null,d=!1,x=null,v=null,y=null,M=null,S=null,D=null,T=null,E=!1,b=null,C=null,F=null,L=null,P=null,W.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),f.reset()}return{buffers:{color:o,depth:l,stencil:f},enable:ee,disable:ue,bindFramebuffer:se,drawBuffers:fe,useProgram:de,setBlending:pe,setMaterial:ve,setFlipSided:me,setCullFace:Pe,setLineWidth:Te,setPolygonOffset:Ce,setScissorTest:Le,activeTexture:ze,bindTexture:Ze,unbindTexture:A,compressedTexImage2D:w,compressedTexImage3D:O,texImage2D:te,texImage3D:_e,updateUBOMapping:Se,uniformBlockBinding:Re,texStorage2D:K,texStorage3D:H,texSubImage2D:k,texSubImage3D:$,compressedTexSubImage2D:R,compressedTexSubImage3D:J,scissor:ge,viewport:xe,reset:Ge}}function y1(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,f=i.maxCubemapSize,u=i.maxTextureSize,c=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const g=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,w){return d?new OffscreenCanvas(A,w):Is("canvas")}function v(A,w,O,k){let $=1;if((A.width>k||A.height>k)&&($=k/Math.max(A.width,A.height)),$<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const R=w?Ru:Math.floor,J=R($*A.width),K=R($*A.height);p===void 0&&(p=x(J,K));const H=O?x(J,K):p;return H.width=J,H.height=K,H.getContext("2d").drawImage(A,0,0,J,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+J+"x"+K+")."),H}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Tc(A.width)&&Tc(A.height)}function M(A){return o?!1:A.wrapS!==zn||A.wrapT!==zn||A.minFilter!==Zt&&A.minFilter!==Dn}function S(A,w){return A.generateMipmaps&&w&&A.minFilter!==Zt&&A.minFilter!==Dn}function D(A){r.generateMipmap(A)}function T(A,w,O,k,$=!1){if(o===!1)return w;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let R=w;return w===r.RED&&(O===r.FLOAT&&(R=r.R32F),O===r.HALF_FLOAT&&(R=r.R16F),O===r.UNSIGNED_BYTE&&(R=r.R8)),w===r.RG&&(O===r.FLOAT&&(R=r.RG32F),O===r.HALF_FLOAT&&(R=r.RG16F),O===r.UNSIGNED_BYTE&&(R=r.RG8)),w===r.RGBA&&(O===r.FLOAT&&(R=r.RGBA32F),O===r.HALF_FLOAT&&(R=r.RGBA16F),O===r.UNSIGNED_BYTE&&(R=k===qe&&$===!1?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(R=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(R=r.RGB5_A1)),(R===r.R16F||R===r.R32F||R===r.RG16F||R===r.RG32F||R===r.RGBA16F||R===r.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function E(A,w,O){return S(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function b(A){return A===Zt||A===nc||A===Co?r.NEAREST:r.LINEAR}function C(A){const w=A.target;w.removeEventListener("dispose",C),L(w),w.isVideoTexture&&_.delete(w)}function F(A){const w=A.target;w.removeEventListener("dispose",F),U(w)}function L(A){const w=n.get(A);if(w.__webglInit===void 0)return;const O=A.source,k=g.get(O);if(k){const $=k[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(A),Object.keys(k).length===0&&g.delete(O)}n.remove(A)}function P(A){const w=n.get(A);r.deleteTexture(w.__webglTexture);const O=A.source,k=g.get(O);delete k[w.__cacheKey],a.memory.textures--}function U(A){const w=A.texture,O=n.get(A),k=n.get(w);if(k.__webglTexture!==void 0&&(r.deleteTexture(k.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)r.deleteFramebuffer(O.__webglFramebuffer[$]),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[$]);else{if(r.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let $=0;$<O.__webglColorRenderbuffer.length;$++)O.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[$]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let $=0,R=w.length;$<R;$++){const J=n.get(w[$]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(w[$])}n.remove(w),n.remove(A)}let N=0;function V(){N=0}function G(){const A=N;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),N+=1,A}function X(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function Y(A,w){const O=n.get(A);if(A.isVideoTexture&&ze(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const k=A.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,A,w);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+w)}function oe(A,w){const O=n.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+w)}function B(A,w){const O=n.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,w);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+w)}function W(A,w){const O=n.get(A);if(A.version>0&&O.__version!==A.version){fe(O,A,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+w)}const Z={[bu]:r.REPEAT,[zn]:r.CLAMP_TO_EDGE,[Tu]:r.MIRRORED_REPEAT},ne={[Zt]:r.NEAREST,[nc]:r.NEAREST_MIPMAP_NEAREST,[Co]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[i0]:r.LINEAR_MIPMAP_NEAREST,[Ns]:r.LINEAR_MIPMAP_LINEAR},re={[v0]:r.NEVER,[A0]:r.ALWAYS,[_0]:r.LESS,[y0]:r.LEQUAL,[x0]:r.EQUAL,[S0]:r.GEQUAL,[E0]:r.GREATER,[M0]:r.NOTEQUAL};function ee(A,w,O){if(O?(r.texParameteri(A,r.TEXTURE_WRAP_S,Z[w.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Z[w.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Z[w.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ne[w.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ne[w.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==zn||w.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,b(w.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==Zt&&w.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Zt||w.minFilter!==Co&&w.minFilter!==Ns||w.type===bi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Us&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function ue(A,w){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",C));const k=w.source;let $=g.get(k);$===void 0&&($={},g.set(k,$));const R=X(w);if(R!==A.__cacheKey){$[R]===void 0&&($[R]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[R].usedTimes++;const J=$[A.__cacheKey];J!==void 0&&($[A.__cacheKey].usedTimes--,J.usedTimes===0&&P(w)),A.__cacheKey=R,A.__webglTexture=$[R].texture}return O}function se(A,w,O){let k=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(k=r.TEXTURE_3D);const $=ue(A,w),R=w.source;t.bindTexture(k,A.__webglTexture,r.TEXTURE0+O);const J=n.get(R);if(R.version!==J.__version||$===!0){t.activeTexture(r.TEXTURE0+O),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const K=M(w)&&y(w.image)===!1;let H=v(w.image,K,!1,u);H=Ze(w,H);const te=y(H)||o,_e=s.convert(w.format,w.colorSpace);let ge=s.convert(w.type),xe=T(w.internalFormat,_e,ge,w.colorSpace);ee(k,w,te);let Se;const Re=w.mipmaps,Ge=o&&w.isVideoTexture!==!0,q=J.__version===void 0||$===!0,ye=E(w,H,te);if(w.isDepthTexture)xe=r.DEPTH_COMPONENT,o?w.type===bi?xe=r.DEPTH_COMPONENT32F:w.type===Di?xe=r.DEPTH_COMPONENT24:w.type===nr?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:w.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ir&&xe===r.DEPTH_COMPONENT&&w.type!==al&&w.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Di,ge=s.convert(w.type)),w.format===ns&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,w.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=nr,ge=s.convert(w.type))),q&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,xe,H.width,H.height):t.texImage2D(r.TEXTURE_2D,0,xe,H.width,H.height,0,_e,ge,null));else if(w.isDataTexture)if(Re.length>0&&te){Ge&&q&&t.texStorage2D(r.TEXTURE_2D,ye,xe,Re[0].width,Re[0].height);for(let ae=0,Ee=Re.length;ae<Ee;ae++)Se=Re[ae],Ge?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Se.width,Se.height,_e,ge,Se.data):t.texImage2D(r.TEXTURE_2D,ae,xe,Se.width,Se.height,0,_e,ge,Se.data);w.generateMipmaps=!1}else Ge?(q&&t.texStorage2D(r.TEXTURE_2D,ye,xe,H.width,H.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,H.width,H.height,_e,ge,H.data)):t.texImage2D(r.TEXTURE_2D,0,xe,H.width,H.height,0,_e,ge,H.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&q&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,xe,Re[0].width,Re[0].height,H.depth);for(let ae=0,Ee=Re.length;ae<Ee;ae++)Se=Re[ae],w.format!==Gn?_e!==null?Ge?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,H.depth,_e,Se.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,xe,Se.width,Se.height,H.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,H.depth,_e,ge,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,xe,Se.width,Se.height,H.depth,0,_e,ge,Se.data)}else{Ge&&q&&t.texStorage2D(r.TEXTURE_2D,ye,xe,Re[0].width,Re[0].height);for(let ae=0,Ee=Re.length;ae<Ee;ae++)Se=Re[ae],w.format!==Gn?_e!==null?Ge?t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,Se.width,Se.height,_e,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,xe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Se.width,Se.height,_e,ge,Se.data):t.texImage2D(r.TEXTURE_2D,ae,xe,Se.width,Se.height,0,_e,ge,Se.data)}else if(w.isDataArrayTexture)Ge?(q&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,xe,H.width,H.height,H.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,_e,ge,H.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,H.width,H.height,H.depth,0,_e,ge,H.data);else if(w.isData3DTexture)Ge?(q&&t.texStorage3D(r.TEXTURE_3D,ye,xe,H.width,H.height,H.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,_e,ge,H.data)):t.texImage3D(r.TEXTURE_3D,0,xe,H.width,H.height,H.depth,0,_e,ge,H.data);else if(w.isFramebufferTexture){if(q)if(Ge)t.texStorage2D(r.TEXTURE_2D,ye,xe,H.width,H.height);else{let ae=H.width,Ee=H.height;for(let De=0;De<ye;De++)t.texImage2D(r.TEXTURE_2D,De,xe,ae,Ee,0,_e,ge,null),ae>>=1,Ee>>=1}}else if(Re.length>0&&te){Ge&&q&&t.texStorage2D(r.TEXTURE_2D,ye,xe,Re[0].width,Re[0].height);for(let ae=0,Ee=Re.length;ae<Ee;ae++)Se=Re[ae],Ge?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,_e,ge,Se):t.texImage2D(r.TEXTURE_2D,ae,xe,_e,ge,Se);w.generateMipmaps=!1}else Ge?(q&&t.texStorage2D(r.TEXTURE_2D,ye,xe,H.width,H.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e,ge,H)):t.texImage2D(r.TEXTURE_2D,0,xe,_e,ge,H);S(w,te)&&D(k),J.__version=R.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function fe(A,w,O){if(w.image.length!==6)return;const k=ue(A,w),$=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+O);const R=n.get($);if($.version!==R.__version||k===!0){t.activeTexture(r.TEXTURE0+O),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const J=w.isCompressedTexture||w.image[0].isCompressedTexture,K=w.image[0]&&w.image[0].isDataTexture,H=[];for(let ae=0;ae<6;ae++)!J&&!K?H[ae]=v(w.image[ae],!1,!0,f):H[ae]=K?w.image[ae].image:w.image[ae],H[ae]=Ze(w,H[ae]);const te=H[0],_e=y(te)||o,ge=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Se=T(w.internalFormat,ge,xe,w.colorSpace),Re=o&&w.isVideoTexture!==!0,Ge=R.__version===void 0||k===!0;let q=E(w,te,_e);ee(r.TEXTURE_CUBE_MAP,w,_e);let ye;if(J){Re&&Ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,q,Se,te.width,te.height);for(let ae=0;ae<6;ae++){ye=H[ae].mipmaps;for(let Ee=0;Ee<ye.length;Ee++){const De=ye[Ee];w.format!==Gn?ge!==null?Re?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,De.width,De.height,ge,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,Se,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,De.width,De.height,ge,xe,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,Se,De.width,De.height,0,ge,xe,De.data)}}}else{ye=w.mipmaps,Re&&Ge&&(ye.length>0&&q++,t.texStorage2D(r.TEXTURE_CUBE_MAP,q,Se,H[0].width,H[0].height));for(let ae=0;ae<6;ae++)if(K){Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,H[ae].width,H[ae].height,ge,xe,H[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Se,H[ae].width,H[ae].height,0,ge,xe,H[ae].data);for(let Ee=0;Ee<ye.length;Ee++){const Je=ye[Ee].image[ae].image;Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,Je.width,Je.height,ge,xe,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,Se,Je.width,Je.height,0,ge,xe,Je.data)}}else{Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge,xe,H[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Se,ge,xe,H[ae]);for(let Ee=0;Ee<ye.length;Ee++){const De=ye[Ee];Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,ge,xe,De.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,Se,ge,xe,De.image[ae])}}}S(w,_e)&&D(r.TEXTURE_CUBE_MAP),R.__version=$.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function de(A,w,O,k,$){const R=s.convert(O.format,O.colorSpace),J=s.convert(O.type),K=T(O.internalFormat,R,J,O.colorSpace);n.get(w).__hasExternalTextures||($===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,0,K,w.width,w.height,w.depth,0,R,J,null):t.texImage2D($,0,K,w.width,w.height,0,R,J,null)),t.bindFramebuffer(r.FRAMEBUFFER,A),Le(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,$,n.get(O).__webglTexture,0,Ce(w)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,$,n.get(O).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function z(A,w,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let k=r.DEPTH_COMPONENT16;if(O||Le(w)){const $=w.depthTexture;$&&$.isDepthTexture&&($.type===bi?k=r.DEPTH_COMPONENT32F:$.type===Di&&(k=r.DEPTH_COMPONENT24));const R=Ce(w);Le(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,R,k,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,R,k,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,k,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const k=Ce(w);O&&Le(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,k,r.DEPTH24_STENCIL8,w.width,w.height):Le(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0;$<k.length;$++){const R=k[$],J=s.convert(R.format,R.colorSpace),K=s.convert(R.type),H=T(R.internalFormat,J,K,R.colorSpace),te=Ce(w);O&&Le(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,H,w.width,w.height):Le(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,H,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,H,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const k=n.get(w.depthTexture).__webglTexture,$=Ce(w);if(w.depthTexture.format===ir)Le(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else if(w.depthTexture.format===ns)Le(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function pe(A){const w=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,A)}else if(O){w.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[k]),w.__webglDepthbuffer[k]=r.createRenderbuffer(),z(w.__webglDepthbuffer[k],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),z(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(A,w,O){const k=n.get(A);w!==void 0&&de(k.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),O!==void 0&&pe(A)}function me(A){const w=A.texture,O=n.get(A),k=n.get(w);A.addEventListener("dispose",F),A.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=w.version,a.memory.textures++);const $=A.isWebGLCubeRenderTarget===!0,R=A.isWebGLMultipleRenderTargets===!0,J=y(A)||o;if($){O.__webglFramebuffer=[];for(let K=0;K<6;K++)O.__webglFramebuffer[K]=r.createFramebuffer()}else{if(O.__webglFramebuffer=r.createFramebuffer(),R)if(i.drawBuffers){const K=A.texture;for(let H=0,te=K.length;H<te;H++){const _e=n.get(K[H]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Le(A)===!1){const K=R?w:[w];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let H=0;H<K.length;H++){const te=K[H];O.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[H]);const _e=s.convert(te.format,te.colorSpace),ge=s.convert(te.type),xe=T(te.internalFormat,_e,ge,te.colorSpace,A.isXRRenderTarget===!0),Se=Ce(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,xe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.RENDERBUFFER,O.__webglColorRenderbuffer[H])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),z(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),ee(r.TEXTURE_CUBE_MAP,w,J);for(let K=0;K<6;K++)de(O.__webglFramebuffer[K],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K);S(w,J)&&D(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(R){const K=A.texture;for(let H=0,te=K.length;H<te;H++){const _e=K[H],ge=n.get(_e);t.bindTexture(r.TEXTURE_2D,ge.__webglTexture),ee(r.TEXTURE_2D,_e,J),de(O.__webglFramebuffer,A,_e,r.COLOR_ATTACHMENT0+H,r.TEXTURE_2D),S(_e,J)&&D(r.TEXTURE_2D)}t.unbindTexture()}else{let K=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?K=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(K,k.__webglTexture),ee(K,w,J),de(O.__webglFramebuffer,A,w,r.COLOR_ATTACHMENT0,K),S(w,J)&&D(K),t.unbindTexture()}A.depthBuffer&&pe(A)}function Pe(A){const w=y(A)||o,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let k=0,$=O.length;k<$;k++){const R=O[k];if(S(R,w)){const J=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,K=n.get(R).__webglTexture;t.bindTexture(J,K),D(J),t.unbindTexture()}}}function Te(A){if(o&&A.samples>0&&Le(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,k=A.height;let $=r.COLOR_BUFFER_BIT;const R=[],J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=n.get(A),H=A.isWebGLMultipleRenderTargets===!0;if(H)for(let te=0;te<w.length;te++)t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,K.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let te=0;te<w.length;te++){R.push(r.COLOR_ATTACHMENT0+te),A.depthBuffer&&R.push(J);const _e=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(_e===!1&&(A.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),H&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,K.__webglColorRenderbuffer[te]),_e===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[J]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[J])),H){const ge=n.get(w[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,O,k,0,0,O,k,$,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,R)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),H)for(let te=0;te<w.length;te++){t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,K.__webglColorRenderbuffer[te]);const _e=n.get(w[te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,K.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}}function Ce(A){return Math.min(c,A.samples)}function Le(A){const w=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(A){const w=a.render.frame;_.get(A)!==w&&(_.set(A,w),A.update())}function Ze(A,w){const O=A.colorSpace,k=A.format,$=A.type;return A.isCompressedTexture===!0||A.format===Cu||O!==Kn&&O!==sr&&(O===qe?o===!1?e.has("EXT_sRGB")===!0&&k===Gn?(A.format=Cu,A.minFilter=Dn,A.generateMipmaps=!1):w=Yh.sRGBToLinear(w):(k!==Gn||$!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=oe,this.setTexture3D=B,this.setTextureCube=W,this.rebindTextures=ve,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Le}function E1(r,e,t){const n=t.isWebGL2;function i(s,a=sr){let o;if(s===Li)return r.UNSIGNED_BYTE;if(s===zh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Gh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===r0)return r.BYTE;if(s===s0)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===Oh)return r.INT;if(s===Di)return r.UNSIGNED_INT;if(s===bi)return r.FLOAT;if(s===Us)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===a0)return r.ALPHA;if(s===Gn)return r.RGBA;if(s===o0)return r.LUMINANCE;if(s===u0)return r.LUMINANCE_ALPHA;if(s===ir)return r.DEPTH_COMPONENT;if(s===ns)return r.DEPTH_STENCIL;if(s===Cu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===l0)return r.RED;if(s===Vh)return r.RED_INTEGER;if(s===c0)return r.RG;if(s===Hh)return r.RG_INTEGER;if(s===kh)return r.RGBA_INTEGER;if(s===Fo||s===Ro||s===Po||s===Lo)if(a===qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ic||s===rc||s===sc||s===ac)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ic)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ac)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===f0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===oc||s===uc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===oc)return a===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===uc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lc||s===cc||s===fc||s===hc||s===dc||s===pc||s===mc||s===gc||s===vc||s===_c||s===xc||s===yc||s===Ec||s===Mc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===lc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_c)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ec)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mc)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===No)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===No)return a===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===h0||s===Sc||s===Ac||s===wc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===No)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Sc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ac)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nr?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class M1 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ra extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S1={type:"move"};class ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(const p of e.hand.values()){const g=t.getJointPose(p,n),d=this._getHandJoint(f,p);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=f.joints["index-finger-tip"],c=f.joints["thumb-tip"],h=u.position.distanceTo(c.position),m=.02,_=.005;f.inputState.pinching&&h>m+_?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&h<=m-_&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ra;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class A1 extends jt{constructor(e,t,n,i,s,a,o,l,f,u){if(u=u!==void 0?u:ir,u!==ir&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=Di),n===void 0&&u===ns&&(n=nr),super(null,i,s,a,o,l,u,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class w1 extends mr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,f=null,u=null,c=null,h=null,m=null,_=null;const p=t.getContextAttributes();let g=null,d=null;const x=[],v=[];let y=null;const M=new bn;M.layers.enable(1),M.viewport=new Ot;const S=new bn;S.layers.enable(2),S.viewport=new Ot;const D=[M,S],T=new M1;T.layers.enable(1),T.layers.enable(2);let E=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(B){y=B},this.getController=function(B){let W=x[B];return W===void 0&&(W=new ru,x[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=x[B];return W===void 0&&(W=new ru,x[B]=W),W.getGripSpace()},this.getHand=function(B){let W=x[B];return W===void 0&&(W=new ru,x[B]=W),W.getHandSpace()};function C(B){const W=v.indexOf(B.inputSource);if(W===-1)return;const Z=x[W];Z!==void 0&&(Z.update(B.inputSource,B.frame,f||a),Z.dispatchEvent({type:B.type,data:B.inputSource}))}function F(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",L);for(let B=0;B<x.length;B++){const W=v[B];W!==null&&(v[B]=null,x[B].disconnect(W))}E=null,b=null,e.setRenderTarget(g),m=null,h=null,c=null,i=null,d=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(B){f=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return c},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",F),i.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:m}),d=new cr(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let W=null,Z=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=p.stencil?ns:ir,Z=p.stencil?nr:Di);const re={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(re),i.updateRenderState({layers:[h]}),d=new cr(h.textureWidth,h.textureHeight,{format:Gn,type:Li,depthTexture:new A1(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ee=e.properties.get(d);ee.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),f=null,a=await i.requestReferenceSpace(o),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(B){for(let W=0;W<B.removed.length;W++){const Z=B.removed[W],ne=v.indexOf(Z);ne>=0&&(v[ne]=null,x[ne].disconnect(Z))}for(let W=0;W<B.added.length;W++){const Z=B.added[W];let ne=v.indexOf(Z);if(ne===-1){for(let ee=0;ee<x.length;ee++)if(ee>=v.length){v.push(Z),ne=ee;break}else if(v[ee]===null){v[ee]=Z,ne=ee;break}if(ne===-1)break}const re=x[ne];re&&re.connect(Z)}}const P=new Q,U=new Q;function N(B,W,Z){P.setFromMatrixPosition(W.matrixWorld),U.setFromMatrixPosition(Z.matrixWorld);const ne=P.distanceTo(U),re=W.projectionMatrix.elements,ee=Z.projectionMatrix.elements,ue=re[14]/(re[10]-1),se=re[14]/(re[10]+1),fe=(re[9]+1)/re[5],de=(re[9]-1)/re[5],z=(re[8]-1)/re[0],we=(ee[8]+1)/ee[0],pe=ue*z,ve=ue*we,me=ne/(-z+we),Pe=me*-z;W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Pe),B.translateZ(me),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Te=ue+me,Ce=se+me,Le=pe-Pe,ze=ve+(ne-Pe),Ze=fe*se/Ce*Te,A=de*se/Ce*Te;B.projectionMatrix.makePerspective(Le,ze,Ze,A,Te,Ce),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function V(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCameraXR=function(B){if(i===null)return B;y&&(B=y),T.near=S.near=M.near=B.near,T.far=S.far=M.far=B.far,(E!==T.near||b!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,b=T.far);const W=B.parent,Z=T.cameras;V(T,W);for(let ne=0;ne<Z.length;ne++)V(Z[ne],W);return Z.length===2?N(T,M,S):T.projectionMatrix.copy(M.projectionMatrix),y&&G(T,W),T};function G(B,W){const Z=y;W===null?Z.matrix.copy(B.matrixWorld):(Z.matrix.copy(W.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(B.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0);const ne=Z.children;for(let re=0,ee=ne.length;re<ee;re++)ne[re].updateMatrixWorld(!0);Z.projectionMatrix.copy(B.projectionMatrix),Z.projectionMatrixInverse.copy(B.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Fu*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let X=null;function Y(B,W){if(u=W.getViewerPose(f||a),_=W,u!==null){const Z=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ne=!1;Z.length!==T.cameras.length&&(T.cameras.length=0,ne=!0);for(let re=0;re<Z.length;re++){const ee=Z[re];let ue=null;if(m!==null)ue=m.getViewport(ee);else{const fe=c.getViewSubImage(h,ee);ue=fe.viewport,re===0&&(e.setRenderTargetTextures(d,fe.colorTexture,h.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(d))}let se=D[re];se===void 0&&(se=new bn,se.layers.enable(re),se.viewport=new Ot,D[re]=se),se.matrix.fromArray(ee.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ee.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ue.x,ue.y,ue.width,ue.height),re===0&&(T.matrix.copy(se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ne===!0&&T.cameras.push(se)}}for(let Z=0;Z<x.length;Z++){const ne=v[Z],re=x[Z];ne!==null&&re!==void 0&&re.update(ne,W,f||a)}X&&X(B,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),_=null}const oe=new od;oe.setAnimationLoop(Y),this.setAnimationLoop=function(B){X=B},this.dispose=function(){}}}function D1(r,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,id(r)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),c(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),p(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,v):d.isSpriteMaterial?f(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Qt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Qt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function c(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function p(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function f(x,v){let y=i[x.id];y===void 0&&(_(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",g));const M=v.program;n.updateUBOMapping(x,M);const S=e.render.frame;s[x.id]!==S&&(h(x),s[x.id]=S)}function u(x){const v=c();x.__bindingPointIndex=v;const y=r.createBuffer(),M=x.__size,S=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function c(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],y=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let S=0,D=y.length;S<D;S++){const T=y[S];if(m(T,S,M)===!0){const E=T.__offset,b=Array.isArray(T.value)?T.value:[T.value];let C=0;for(let F=0;F<b.length;F++){const L=b[F],P=p(L);typeof L=="number"?(T.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,E+C,T.__data)):L.isMatrix3?(T.__data[0]=L.elements[0],T.__data[1]=L.elements[1],T.__data[2]=L.elements[2],T.__data[3]=L.elements[0],T.__data[4]=L.elements[3],T.__data[5]=L.elements[4],T.__data[6]=L.elements[5],T.__data[7]=L.elements[0],T.__data[8]=L.elements[6],T.__data[9]=L.elements[7],T.__data[10]=L.elements[8],T.__data[11]=L.elements[0]):(L.toArray(T.__data,C),C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,E,T.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(x,v,y){const M=x.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const S=Array.isArray(M)?M:[M],D=[];for(let T=0;T<S.length;T++)D.push(S[T].clone());y[v]=D}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const S=Array.isArray(y[v])?y[v]:[y[v]],D=Array.isArray(M)?M:[M];for(let T=0;T<S.length;T++){const E=S[T];if(E.equals(D[T])===!1)return E.copy(D[T]),!0}}return!1}function _(x){const v=x.uniforms;let y=0;const M=16;let S=0;for(let D=0,T=v.length;D<T;D++){const E=v[D],b={boundary:0,storage:0},C=Array.isArray(E.value)?E.value:[E.value];for(let F=0,L=C.length;F<L;F++){const P=C[F],U=p(P);b.boundary+=U.boundary,b.storage+=U.storage}if(E.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,D>0){S=y%M;const F=M-S;S!==0&&F-b.boundary<0&&(y+=M-S,E.__offset=y)}y+=b.storage}return S=y%M,S>0&&(y+=M-S),x.__size=y,x.__cache={},this}function p(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:f,dispose:d}}function T1(){const r=Is("canvas");return r.style.display="block",r}class hd{constructor(e={}){const{canvas:t=T1(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let p=null,g=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=qe,this.useLegacyLights=!0,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let y=!1,M=0,S=0,D=null,T=-1,E=null;const b=new Ot,C=new Ot;let F=null;const L=new nt(0);let P=0,U=t.width,N=t.height,V=1,G=null,X=null;const Y=new Ot(0,0,U,N),oe=new Ot(0,0,U,N);let B=!1;const W=new ad;let Z=!1,ne=!1,re=null;const ee=new Tt,ue=new Xe,se=new Q,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return D===null?V:1}let z=n;function we(I,ie){for(let le=0;le<I.length;le++){const j=I[le],ce=t.getContext(j,ie);if(ce!==null)return ce}return null}try{const I={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sl}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),z===null){const ie=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&ie.shift(),z=we(ie,I),z===null)throw we(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let pe,ve,me,Pe,Te,Ce,Le,ze,Ze,A,w,O,k,$,R,J,K,H,te,_e,ge,xe,Se,Re;function Ge(){pe=new z_(z),ve=new P_(z,pe,e),pe.init(ve),xe=new E1(z,pe,ve),me=new x1(z,pe,ve),Pe=new H_(z),Te=new s1,Ce=new y1(z,pe,me,Te,ve,xe,Pe),Le=new N_(v),ze=new O_(v),Ze=new j0(z,ve),Se=new F_(z,pe,Ze,ve),A=new G_(z,Ze,Pe,Se),w=new q_(z,A,Ze,Pe),te=new X_(z,ve,Ce),J=new L_(Te),O=new r1(v,Le,ze,pe,ve,Se,J),k=new D1(v,Te),$=new o1,R=new d1(pe,ve),H=new C_(v,Le,ze,me,w,h,l),K=new _1(v,w,ve),Re=new b1(z,Pe,ve,me),_e=new R_(z,pe,Pe,ve),ge=new V_(z,pe,Pe,ve),Pe.programs=O.programs,v.capabilities=ve,v.extensions=pe,v.properties=Te,v.renderLists=$,v.shadowMap=K,v.state=me,v.info=Pe}Ge();const q=new w1(v,z);this.xr=q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=pe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=pe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(I){I!==void 0&&(V=I,this.setSize(U,N,!1))},this.getSize=function(I){return I.set(U,N)},this.setSize=function(I,ie,le=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=I,N=ie,t.width=Math.floor(I*V),t.height=Math.floor(ie*V),le===!0&&(t.style.width=I+"px",t.style.height=ie+"px"),this.setViewport(0,0,I,ie)},this.getDrawingBufferSize=function(I){return I.set(U*V,N*V).floor()},this.setDrawingBufferSize=function(I,ie,le){U=I,N=ie,V=le,t.width=Math.floor(I*le),t.height=Math.floor(ie*le),this.setViewport(0,0,I,ie)},this.getCurrentViewport=function(I){return I.copy(b)},this.getViewport=function(I){return I.copy(Y)},this.setViewport=function(I,ie,le,j){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,ie,le,j),me.viewport(b.copy(Y).multiplyScalar(V).floor())},this.getScissor=function(I){return I.copy(oe)},this.setScissor=function(I,ie,le,j){I.isVector4?oe.set(I.x,I.y,I.z,I.w):oe.set(I,ie,le,j),me.scissor(C.copy(oe).multiplyScalar(V).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(I){me.setScissorTest(B=I)},this.setOpaqueSort=function(I){G=I},this.setTransparentSort=function(I){X=I},this.getClearColor=function(I){return I.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(I=!0,ie=!0,le=!0){let j=0;if(I){let ce=!1;if(D!==null){const Fe=D.texture.format;ce=Fe===kh||Fe===Hh||Fe===Vh}if(ce){const Fe=D.texture.type,Ie=Fe===Li||Fe===Di||Fe===al||Fe===nr||Fe===zh||Fe===Gh,Ve=H.getClearColor(),He=H.getClearAlpha(),We=Ve.r,be=Ve.g,Ue=Ve.b,it=Te.get(D).__webglFramebuffer;Ie?(m[0]=We,m[1]=be,m[2]=Ue,m[3]=He,z.clearBufferuiv(z.COLOR,it,m)):(_[0]=We,_[1]=be,_[2]=Ue,_[3]=He,z.clearBufferiv(z.COLOR,it,_))}else j|=z.COLOR_BUFFER_BIT}ie&&(j|=z.DEPTH_BUFFER_BIT),le&&(j|=z.STENCIL_BUFFER_BIT),z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),$.dispose(),R.dispose(),Te.dispose(),Le.dispose(),ze.dispose(),w.dispose(),Se.dispose(),Re.dispose(),O.dispose(),q.dispose(),q.removeEventListener("sessionstart",ft),q.removeEventListener("sessionend",En),re&&(re.dispose(),re=null),Ut.stop()};function ye(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const I=Pe.autoReset,ie=K.enabled,le=K.autoUpdate,j=K.needsUpdate,ce=K.type;Ge(),Pe.autoReset=I,K.enabled=ie,K.autoUpdate=le,K.needsUpdate=j,K.type=ce}function Ee(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function De(I){const ie=I.target;ie.removeEventListener("dispose",De),Je(ie)}function Je(I){ct(I),Te.remove(I)}function ct(I){const ie=Te.get(I).programs;ie!==void 0&&(ie.forEach(function(le){O.releaseProgram(le)}),I.isShaderMaterial&&O.releaseShaderCache(I))}this.renderBufferDirect=function(I,ie,le,j,ce,Fe){ie===null&&(ie=fe);const Ie=ce.isMesh&&ce.matrixWorld.determinant()<0,Ve=Mo(I,ie,le,j,ce);me.setMaterial(j,Ie);let He=le.index,We=1;j.wireframe===!0&&(He=A.getWireframeAttribute(le),We=2);const be=le.drawRange,Ue=le.attributes.position;let it=be.start*We,ot=(be.start+be.count)*We;Fe!==null&&(it=Math.max(it,Fe.start*We),ot=Math.min(ot,(Fe.start+Fe.count)*We)),He!==null?(it=Math.max(it,0),ot=Math.min(ot,He.count)):Ue!=null&&(it=Math.max(it,0),ot=Math.min(ot,Ue.count));const It=ot-it;if(It<0||It===1/0)return;Se.setup(ce,j,Ve,le,He);let Pn,Mt=_e;if(He!==null&&(Pn=Ze.get(He),Mt=ge,Mt.setIndex(Pn)),ce.isMesh)j.wireframe===!0?(me.setLineWidth(j.wireframeLinewidth*de()),Mt.setMode(z.LINES)):Mt.setMode(z.TRIANGLES);else if(ce.isLine){let Qe=j.linewidth;Qe===void 0&&(Qe=1),me.setLineWidth(Qe*de()),ce.isLineSegments?Mt.setMode(z.LINES):ce.isLineLoop?Mt.setMode(z.LINE_LOOP):Mt.setMode(z.LINE_STRIP)}else ce.isPoints?Mt.setMode(z.POINTS):ce.isSprite&&Mt.setMode(z.TRIANGLES);if(ce.isInstancedMesh)Mt.renderInstances(it,It,ce.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,wo=Math.min(le.instanceCount,Qe);Mt.renderInstances(it,It,wo)}else Mt.render(it,It)},this.compile=function(I,ie){function le(j,ce,Fe){j.transparent===!0&&j.side===fi&&j.forceSinglePass===!1?(j.side=Qt,j.needsUpdate=!0,Mr(j,ce,Fe),j.side=Ii,j.needsUpdate=!0,Mr(j,ce,Fe),j.side=fi):Mr(j,ce,Fe)}g=R.get(I),g.init(),x.push(g),I.traverseVisible(function(j){j.isLight&&j.layers.test(ie.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights(v.useLegacyLights),I.traverse(function(j){const ce=j.material;if(ce)if(Array.isArray(ce))for(let Fe=0;Fe<ce.length;Fe++){const Ie=ce[Fe];le(Ie,I,j)}else le(ce,I,j)}),x.pop(),g=null};let _t=null;function ei(I){_t&&_t(I)}function ft(){Ut.stop()}function En(){Ut.start()}const Ut=new od;Ut.setAnimationLoop(ei),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(I){_t=I,q.setAnimationLoop(I),I===null?Ut.stop():Ut.start()},q.addEventListener("sessionstart",ft),q.addEventListener("sessionend",En),this.render=function(I,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(ie=q.updateCameraXR(ie)),I.isScene===!0&&I.onBeforeRender(v,I,ie,D),g=R.get(I,x.length),g.init(),x.push(g),ee.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),W.setFromProjectionMatrix(ee),ne=this.localClippingEnabled,Z=J.init(this.clippingPlanes,ne),p=$.get(I,d.length),p.init(),d.push(p),aa(I,ie,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(G,X),Z===!0&&J.beginShadows();const le=g.state.shadowsArray;if(K.render(le,I,ie),Z===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,H.render(p,I),g.setupLights(v.useLegacyLights),ie.isArrayCamera){const j=ie.cameras;for(let ce=0,Fe=j.length;ce<Fe;ce++){const Ie=j[ce];oa(p,I,Ie,Ie.viewport)}}else oa(p,I,ie);D!==null&&(Ce.updateMultisampleRenderTarget(D),Ce.updateRenderTargetMipmap(D)),I.isScene===!0&&I.onAfterRender(v,I,ie),Se.resetDefaultState(),T=-1,E=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,d.pop(),d.length>0?p=d[d.length-1]:p=null};function aa(I,ie,le,j){if(I.visible===!1)return;if(I.layers.test(ie.layers)){if(I.isGroup)le=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ie);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||W.intersectsSprite(I)){j&&se.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ee);const Ie=w.update(I),Ve=I.material;Ve.visible&&p.push(I,Ie,Ve,le,se.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||W.intersectsObject(I))){I.isSkinnedMesh&&I.skeleton.frame!==Pe.render.frame&&(I.skeleton.update(),I.skeleton.frame=Pe.render.frame);const Ie=w.update(I),Ve=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),se.copy(I.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),se.copy(Ie.boundingSphere.center)),se.applyMatrix4(I.matrixWorld).applyMatrix4(ee)),Array.isArray(Ve)){const He=Ie.groups;for(let We=0,be=He.length;We<be;We++){const Ue=He[We],it=Ve[Ue.materialIndex];it&&it.visible&&p.push(I,Ie,it,le,se.z,Ue)}}else Ve.visible&&p.push(I,Ie,Ve,le,se.z,null)}}const Fe=I.children;for(let Ie=0,Ve=Fe.length;Ie<Ve;Ie++)aa(Fe[Ie],ie,le,j)}function oa(I,ie,le,j){const ce=I.opaque,Fe=I.transmissive,Ie=I.transparent;g.setupLightsView(le),Z===!0&&J.setGlobalState(v.clippingPlanes,le),Fe.length>0&&Eo(ce,Fe,ie,le),j&&me.viewport(b.copy(j)),ce.length>0&&Er(ce,ie,le),Fe.length>0&&Er(Fe,ie,le),Ie.length>0&&Er(Ie,ie,le),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Eo(I,ie,le,j){const ce=ve.isWebGL2;re===null&&(re=new cr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Us:Li,minFilter:Ns,samples:ce&&o===!0?4:0})),v.getDrawingBufferSize(ue),ce?re.setSize(ue.x,ue.y):re.setSize(Ru(ue.x),Ru(ue.y));const Fe=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(L),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ie=v.toneMapping;v.toneMapping=mi,Er(I,le,j),Ce.updateMultisampleRenderTarget(re),Ce.updateRenderTargetMipmap(re);let Ve=!1;for(let He=0,We=ie.length;He<We;He++){const be=ie[He],Ue=be.object,it=be.geometry,ot=be.material,It=be.group;if(ot.side===fi&&Ue.layers.test(j.layers)){const Pn=ot.side;ot.side=Qt,ot.needsUpdate=!0,ua(Ue,le,j,it,ot,It),ot.side=Pn,ot.needsUpdate=!0,Ve=!0}}Ve===!0&&(Ce.updateMultisampleRenderTarget(re),Ce.updateRenderTargetMipmap(re)),v.setRenderTarget(Fe),v.setClearColor(L,P),v.toneMapping=Ie}function Er(I,ie,le){const j=ie.isScene===!0?ie.overrideMaterial:null;for(let ce=0,Fe=I.length;ce<Fe;ce++){const Ie=I[ce],Ve=Ie.object,He=Ie.geometry,We=j===null?Ie.material:j,be=Ie.group;Ve.layers.test(le.layers)&&ua(Ve,ie,le,He,We,be)}}function ua(I,ie,le,j,ce,Fe){I.onBeforeRender(v,ie,le,j,ce,Fe),I.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ce.onBeforeRender(v,ie,le,j,I,Fe),ce.transparent===!0&&ce.side===fi&&ce.forceSinglePass===!1?(ce.side=Qt,ce.needsUpdate=!0,v.renderBufferDirect(le,ie,j,ce,I,Fe),ce.side=Ii,ce.needsUpdate=!0,v.renderBufferDirect(le,ie,j,ce,I,Fe),ce.side=fi):v.renderBufferDirect(le,ie,j,ce,I,Fe),I.onAfterRender(v,ie,le,j,ce,Fe)}function Mr(I,ie,le){ie.isScene!==!0&&(ie=fe);const j=Te.get(I),ce=g.state.lights,Fe=g.state.shadowsArray,Ie=ce.state.version,Ve=O.getParameters(I,ce.state,Fe,ie,le),He=O.getProgramCacheKey(Ve);let We=j.programs;j.environment=I.isMeshStandardMaterial?ie.environment:null,j.fog=ie.fog,j.envMap=(I.isMeshStandardMaterial?ze:Le).get(I.envMap||j.environment),We===void 0&&(I.addEventListener("dispose",De),We=new Map,j.programs=We);let be=We.get(He);if(be!==void 0){if(j.currentProgram===be&&j.lightsStateVersion===Ie)return la(I,Ve),be}else Ve.uniforms=O.getUniforms(I),I.onBuild(le,Ve,v),I.onBeforeCompile(Ve,v),be=O.acquireProgram(Ve,He),We.set(He,be),j.uniforms=Ve.uniforms;const Ue=j.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ue.clippingPlanes=J.uniform),la(I,Ve),j.needsLights=Ao(I),j.lightsStateVersion=Ie,j.needsLights&&(Ue.ambientLightColor.value=ce.state.ambient,Ue.lightProbe.value=ce.state.probe,Ue.directionalLights.value=ce.state.directional,Ue.directionalLightShadows.value=ce.state.directionalShadow,Ue.spotLights.value=ce.state.spot,Ue.spotLightShadows.value=ce.state.spotShadow,Ue.rectAreaLights.value=ce.state.rectArea,Ue.ltc_1.value=ce.state.rectAreaLTC1,Ue.ltc_2.value=ce.state.rectAreaLTC2,Ue.pointLights.value=ce.state.point,Ue.pointLightShadows.value=ce.state.pointShadow,Ue.hemisphereLights.value=ce.state.hemi,Ue.directionalShadowMap.value=ce.state.directionalShadowMap,Ue.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Ue.spotShadowMap.value=ce.state.spotShadowMap,Ue.spotLightMatrix.value=ce.state.spotLightMatrix,Ue.spotLightMap.value=ce.state.spotLightMap,Ue.pointShadowMap.value=ce.state.pointShadowMap,Ue.pointShadowMatrix.value=ce.state.pointShadowMatrix);const it=be.getUniforms(),ot=Ua.seqWithValue(it.seq,Ue);return j.currentProgram=be,j.uniformsList=ot,be}function la(I,ie){const le=Te.get(I);le.outputColorSpace=ie.outputColorSpace,le.instancing=ie.instancing,le.skinning=ie.skinning,le.morphTargets=ie.morphTargets,le.morphNormals=ie.morphNormals,le.morphColors=ie.morphColors,le.morphTargetsCount=ie.morphTargetsCount,le.numClippingPlanes=ie.numClippingPlanes,le.numIntersection=ie.numClipIntersection,le.vertexAlphas=ie.vertexAlphas,le.vertexTangents=ie.vertexTangents,le.toneMapping=ie.toneMapping}function Mo(I,ie,le,j,ce){ie.isScene!==!0&&(ie=fe),Ce.resetTextureUnits();const Fe=ie.fog,Ie=j.isMeshStandardMaterial?ie.environment:null,Ve=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Kn,He=(j.isMeshStandardMaterial?ze:Le).get(j.envMap||Ie),We=j.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,be=!!le.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!le.morphAttributes.position,it=!!le.morphAttributes.normal,ot=!!le.morphAttributes.color,It=j.toneMapped?v.toneMapping:mi,Pn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Mt=Pn!==void 0?Pn.length:0,Qe=Te.get(j),wo=g.state.lights;if(Z===!0&&(ne===!0||I!==E)){const fn=I===E&&j.id===T;J.setState(j,I,fn)}let Rt=!1;j.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==wo.state.version||Qe.outputColorSpace!==Ve||ce.isInstancedMesh&&Qe.instancing===!1||!ce.isInstancedMesh&&Qe.instancing===!0||ce.isSkinnedMesh&&Qe.skinning===!1||!ce.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==He||j.fog===!0&&Qe.fog!==Fe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==J.numPlanes||Qe.numIntersection!==J.numIntersection)||Qe.vertexAlphas!==We||Qe.vertexTangents!==be||Qe.morphTargets!==Ue||Qe.morphNormals!==it||Qe.morphColors!==ot||Qe.toneMapping!==It||ve.isWebGL2===!0&&Qe.morphTargetsCount!==Mt)&&(Rt=!0):(Rt=!0,Qe.__version=j.version);let ki=Qe.currentProgram;Rt===!0&&(ki=Mr(j,ie,ce));let Yl=!1,Es=!1,Do=!1;const $t=ki.getUniforms(),Wi=Qe.uniforms;if(me.useProgram(ki.program)&&(Yl=!0,Es=!0,Do=!0),j.id!==T&&(T=j.id,Es=!0),Yl||E!==I){if($t.setValue(z,"projectionMatrix",I.projectionMatrix),ve.logarithmicDepthBuffer&&$t.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),E!==I&&(E=I,Es=!0,Do=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const fn=$t.map.cameraPosition;fn!==void 0&&fn.setValue(z,se.setFromMatrixPosition(I.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&$t.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||ce.isSkinnedMesh)&&$t.setValue(z,"viewMatrix",I.matrixWorldInverse)}if(ce.isSkinnedMesh){$t.setOptional(z,ce,"bindMatrix"),$t.setOptional(z,ce,"bindMatrixInverse");const fn=ce.skeleton;fn&&(ve.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),$t.setValue(z,"boneTexture",fn.boneTexture,Ce),$t.setValue(z,"boneTextureSize",fn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bo=le.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0&&ve.isWebGL2===!0)&&te.update(ce,le,ki),(Es||Qe.receiveShadow!==ce.receiveShadow)&&(Qe.receiveShadow=ce.receiveShadow,$t.setValue(z,"receiveShadow",ce.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wi.envMap.value=He,Wi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Es&&($t.setValue(z,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&So(Wi,Do),Fe&&j.fog===!0&&k.refreshFogUniforms(Wi,Fe),k.refreshMaterialUniforms(Wi,j,V,N,re),Ua.upload(z,Qe.uniformsList,Wi,Ce)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ua.upload(z,Qe.uniformsList,Wi,Ce),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&$t.setValue(z,"center",ce.center),$t.setValue(z,"modelViewMatrix",ce.modelViewMatrix),$t.setValue(z,"normalMatrix",ce.normalMatrix),$t.setValue(z,"modelMatrix",ce.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const fn=j.uniformsGroups;for(let To=0,bm=fn.length;To<bm;To++)if(ve.isWebGL2){const Zl=fn[To];Re.update(Zl,ki),Re.bind(Zl,ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ki}function So(I,ie){I.ambientLightColor.needsUpdate=ie,I.lightProbe.needsUpdate=ie,I.directionalLights.needsUpdate=ie,I.directionalLightShadows.needsUpdate=ie,I.pointLights.needsUpdate=ie,I.pointLightShadows.needsUpdate=ie,I.spotLights.needsUpdate=ie,I.spotLightShadows.needsUpdate=ie,I.rectAreaLights.needsUpdate=ie,I.hemisphereLights.needsUpdate=ie}function Ao(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(I,ie,le){Te.get(I.texture).__webglTexture=ie,Te.get(I.depthTexture).__webglTexture=le;const j=Te.get(I);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=le===void 0,j.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,ie){const le=Te.get(I);le.__webglFramebuffer=ie,le.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(I,ie=0,le=0){D=I,M=ie,S=le;let j=!0,ce=null,Fe=!1,Ie=!1;if(I){const He=Te.get(I);He.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(z.FRAMEBUFFER,null),j=!1):He.__webglFramebuffer===void 0?Ce.setupRenderTarget(I):He.__hasExternalTextures&&Ce.rebindTextures(I,Te.get(I.texture).__webglTexture,Te.get(I.depthTexture).__webglTexture);const We=I.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const be=Te.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(ce=be[ie],Fe=!0):ve.isWebGL2&&I.samples>0&&Ce.useMultisampledRTT(I)===!1?ce=Te.get(I).__webglMultisampledFramebuffer:ce=be,b.copy(I.viewport),C.copy(I.scissor),F=I.scissorTest}else b.copy(Y).multiplyScalar(V).floor(),C.copy(oe).multiplyScalar(V).floor(),F=B;if(me.bindFramebuffer(z.FRAMEBUFFER,ce)&&ve.drawBuffers&&j&&me.drawBuffers(I,ce),me.viewport(b),me.scissor(C),me.setScissorTest(F),Fe){const He=Te.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+ie,He.__webglTexture,le)}else if(Ie){const He=Te.get(I.texture),We=ie||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,le||0,We)}T=-1},this.readRenderTargetPixels=function(I,ie,le,j,ce,Fe,Ie){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve){me.bindFramebuffer(z.FRAMEBUFFER,Ve);try{const He=I.texture,We=He.format,be=He.type;if(We!==Gn&&xe.convert(We)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=be===Us&&(pe.has("EXT_color_buffer_half_float")||ve.isWebGL2&&pe.has("EXT_color_buffer_float"));if(be!==Li&&xe.convert(be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===bi&&(ve.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=I.width-j&&le>=0&&le<=I.height-ce&&z.readPixels(ie,le,j,ce,xe.convert(We),xe.convert(be),Fe)}finally{const He=D!==null?Te.get(D).__webglFramebuffer:null;me.bindFramebuffer(z.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(I,ie,le=0){const j=Math.pow(2,-le),ce=Math.floor(ie.image.width*j),Fe=Math.floor(ie.image.height*j);Ce.setTexture2D(ie,0),z.copyTexSubImage2D(z.TEXTURE_2D,le,0,0,I.x,I.y,ce,Fe),me.unbindTexture()},this.copyTextureToTexture=function(I,ie,le,j=0){const ce=ie.image.width,Fe=ie.image.height,Ie=xe.convert(le.format),Ve=xe.convert(le.type);Ce.setTexture2D(le,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,le.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,le.unpackAlignment),ie.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,I.x,I.y,ce,Fe,Ie,Ve,ie.image.data):ie.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,I.x,I.y,ie.mipmaps[0].width,ie.mipmaps[0].height,Ie,ie.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,j,I.x,I.y,Ie,Ve,ie.image),j===0&&le.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(I,ie,le,j,ce=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=I.max.x-I.min.x+1,Ie=I.max.y-I.min.y+1,Ve=I.max.z-I.min.z+1,He=xe.convert(j.format),We=xe.convert(j.type);let be;if(j.isData3DTexture)Ce.setTexture3D(j,0),be=z.TEXTURE_3D;else if(j.isDataArrayTexture)Ce.setTexture2DArray(j,0),be=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Ue=z.getParameter(z.UNPACK_ROW_LENGTH),it=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ot=z.getParameter(z.UNPACK_SKIP_PIXELS),It=z.getParameter(z.UNPACK_SKIP_ROWS),Pn=z.getParameter(z.UNPACK_SKIP_IMAGES),Mt=le.isCompressedTexture?le.mipmaps[0]:le.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Mt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,I.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,I.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,I.min.z),le.isDataTexture||le.isData3DTexture?z.texSubImage3D(be,ce,ie.x,ie.y,ie.z,Fe,Ie,Ve,He,We,Mt.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(be,ce,ie.x,ie.y,ie.z,Fe,Ie,Ve,He,Mt.data)):z.texSubImage3D(be,ce,ie.x,ie.y,ie.z,Fe,Ie,Ve,He,We,Mt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ue),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ot),z.pixelStorei(z.UNPACK_SKIP_ROWS,It),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pn),ce===0&&j.generateMipmaps&&z.generateMipmap(be),me.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?Ce.setTextureCube(I,0):I.isData3DTexture?Ce.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ce.setTexture2DArray(I,0):Ce.setTexture2D(I,0),me.unbindTexture()},this.resetState=function(){M=0,S=0,D=null,me.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?rr:Wh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rr?qe:Kn}}class C1 extends hd{}C1.prototype.isWebGL1Renderer=!0;class F1 extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class dd extends ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const df=new Q,pf=new Q,mf=new Tt,su=new Jh,Pa=new oo;class R1 extends en{constructor(e=new jn,t=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)df.fromBufferAttribute(t,i-1),pf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=df.distanceTo(pf);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;mf.copy(i).invert(),su.copy(e.ray).applyMatrix4(mf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,f=new Q,u=new Q,c=new Q,h=new Q,m=this.isLineSegments?2:1,_=n.index,g=n.attributes.position;if(_!==null){const d=Math.max(0,a.start),x=Math.min(_.count,a.start+a.count);for(let v=d,y=x-1;v<y;v+=m){const M=_.getX(v),S=_.getX(v+1);if(f.fromBufferAttribute(g,M),u.fromBufferAttribute(g,S),su.distanceSqToSegment(f,u,h,c)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:c.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=d,y=x-1;v<y;v+=m){if(f.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),su.distanceSqToSegment(f,u,h,c)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:c.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const gf=new Q,vf=new Q;class P1 extends R1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)gf.fromBufferAttribute(t,i),vf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gf.distanceTo(vf);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ll extends jn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),f(n),u(),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(s.slice(),3)),this.setAttribute("uv",new tn(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new Q,y=new Q,M=new Q;for(let S=0;S<t.length;S+=3)m(t[S+0],v),m(t[S+1],y),m(t[S+2],M),l(v,y,M,x)}function l(x,v,y,M){const S=M+1,D=[];for(let T=0;T<=S;T++){D[T]=[];const E=x.clone().lerp(y,T/S),b=v.clone().lerp(y,T/S),C=S-T;for(let F=0;F<=C;F++)F===0&&T===S?D[T][F]=E:D[T][F]=E.clone().lerp(b,F/C)}for(let T=0;T<S;T++)for(let E=0;E<2*(S-T)-1;E++){const b=Math.floor(E/2);E%2===0?(h(D[T][b+1]),h(D[T+1][b]),h(D[T][b])):(h(D[T][b+1]),h(D[T+1][b+1]),h(D[T+1][b]))}}function f(x){const v=new Q;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const x=new Q;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=g(x)/2/Math.PI+.5,M=d(x)/Math.PI+.5;a.push(y,1-M)}_(),c()}function c(){for(let x=0;x<a.length;x+=6){const v=a[x+0],y=a[x+2],M=a[x+4],S=Math.max(v,y,M),D=Math.min(v,y,M);S>.9&&D<.1&&(v<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function m(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const x=new Q,v=new Q,y=new Q,M=new Q,S=new Xe,D=new Xe,T=new Xe;for(let E=0,b=0;E<s.length;E+=9,b+=6){x.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),S.set(a[b+0],a[b+1]),D.set(a[b+2],a[b+3]),T.set(a[b+4],a[b+5]),M.copy(x).add(v).add(y).divideScalar(3);const C=g(M);p(S,b+0,x,C),p(D,b+2,v,C),p(T,b+4,y,C)}}function p(x,v,y,M){M<0&&x.x===1&&(a[v]=x.x-1),y.x===0&&y.z===0&&(a[v]=M/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.vertices,e.indices,e.radius,e.details)}}class cl extends ll{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cl(e.radius,e.detail)}}class L1 extends ds{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new nt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}const _f={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class N1{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return f.push(u,c),this},this.removeHandler=function(u){const c=f.indexOf(u);return c!==-1&&f.splice(c,2),this},this.getHandler=function(u){for(let c=0,h=f.length;c<h;c+=2){const m=f[c],_=f[c+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const U1=new N1;class pd{constructor(e){this.manager=e!==void 0?e:U1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class I1 extends pd{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=_f.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Is("img");function l(){u(),_f.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(c){u(),i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class B1 extends pd{constructor(e){super(e)}load(e,t,n,i){const s=new jt,a=new I1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class O1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xf(){return(typeof performance>"u"?Date:performance).now()}class yf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class z1 extends P1{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new jn;i.setAttribute("position",new tn(t,3)),i.setAttribute("color",new tn(n,3));const s=new dd({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new nt,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);const Ef={type:"change"},au={type:"start"},Mf={type:"end"};class G1 extends mr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Le),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ef),n.update(),s=i.NONE},this.update=function(){const R=new Q,J=new fr().setFromUnitVectors(e.up,new Q(0,1,0)),K=J.clone().invert(),H=new Q,te=new fr,_e=new Q,ge=2*Math.PI;return function(){const Se=n.object.position;R.copy(Se).sub(n.target),R.applyQuaternion(J),o.setFromVector3(R),n.autoRotate&&s===i.NONE&&E(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Re=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;return isFinite(Re)&&isFinite(Ge)&&(Re<-Math.PI?Re+=ge:Re>Math.PI&&(Re-=ge),Ge<-Math.PI?Ge+=ge:Ge>Math.PI&&(Ge-=ge),Re<=Ge?o.theta=Math.max(Re,Math.min(Ge,o.theta)):o.theta=o.theta>(Re+Ge)/2?Math.max(Re,o.theta):Math.min(Ge,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=f,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(o),R.applyQuaternion(K),Se.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),f=1,c||H.distanceToSquared(n.object.position)>a||8*(1-te.dot(n.object.quaternion))>a||_e.distanceToSquared(n.target)>0?(n.dispatchEvent(Ef),H.copy(n.object.position),te.copy(n.object.quaternion),_e.copy(n.target),c=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",pe),n.domElement.removeEventListener("pointercancel",me),n.domElement.removeEventListener("wheel",Ce),n.domElement.removeEventListener("pointermove",ve),n.domElement.removeEventListener("pointerup",me),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Le),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new yf,l=new yf;let f=1;const u=new Q;let c=!1;const h=new Xe,m=new Xe,_=new Xe,p=new Xe,g=new Xe,d=new Xe,x=new Xe,v=new Xe,y=new Xe,M=[],S={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function E(R){l.theta-=R}function b(R){l.phi-=R}const C=function(){const R=new Q;return function(K,H){R.setFromMatrixColumn(H,0),R.multiplyScalar(-K),u.add(R)}}(),F=function(){const R=new Q;return function(K,H){n.screenSpacePanning===!0?R.setFromMatrixColumn(H,1):(R.setFromMatrixColumn(H,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(K),u.add(R)}}(),L=function(){const R=new Q;return function(K,H){const te=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;R.copy(_e).sub(n.target);let ge=R.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),C(2*K*ge/te.clientHeight,n.object.matrix),F(2*H*ge/te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(K*(n.object.right-n.object.left)/n.object.zoom/te.clientWidth,n.object.matrix),F(H*(n.object.top-n.object.bottom)/n.object.zoom/te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(R){n.object.isPerspectiveCamera?f/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(R){n.object.isPerspectiveCamera?f*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(R){h.set(R.clientX,R.clientY)}function V(R){x.set(R.clientX,R.clientY)}function G(R){p.set(R.clientX,R.clientY)}function X(R){m.set(R.clientX,R.clientY),_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const J=n.domElement;E(2*Math.PI*_.x/J.clientHeight),b(2*Math.PI*_.y/J.clientHeight),h.copy(m),n.update()}function Y(R){v.set(R.clientX,R.clientY),y.subVectors(v,x),y.y>0?P(T()):y.y<0&&U(T()),x.copy(v),n.update()}function oe(R){g.set(R.clientX,R.clientY),d.subVectors(g,p).multiplyScalar(n.panSpeed),L(d.x,d.y),p.copy(g),n.update()}function B(R){R.deltaY<0?U(T()):R.deltaY>0&&P(T()),n.update()}function W(R){let J=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(-n.keyPanSpeed,0),J=!0;break}J&&(R.preventDefault(),n.update())}function Z(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),J=.5*(M[0].pageY+M[1].pageY);h.set(R,J)}}function ne(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),J=.5*(M[0].pageY+M[1].pageY);p.set(R,J)}}function re(){const R=M[0].pageX-M[1].pageX,J=M[0].pageY-M[1].pageY,K=Math.sqrt(R*R+J*J);x.set(0,K)}function ee(){n.enableZoom&&re(),n.enablePan&&ne()}function ue(){n.enableZoom&&re(),n.enableRotate&&Z()}function se(R){if(M.length==1)m.set(R.pageX,R.pageY);else{const K=$(R),H=.5*(R.pageX+K.x),te=.5*(R.pageY+K.y);m.set(H,te)}_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const J=n.domElement;E(2*Math.PI*_.x/J.clientHeight),b(2*Math.PI*_.y/J.clientHeight),h.copy(m)}function fe(R){if(M.length===1)g.set(R.pageX,R.pageY);else{const J=$(R),K=.5*(R.pageX+J.x),H=.5*(R.pageY+J.y);g.set(K,H)}d.subVectors(g,p).multiplyScalar(n.panSpeed),L(d.x,d.y),p.copy(g)}function de(R){const J=$(R),K=R.pageX-J.x,H=R.pageY-J.y,te=Math.sqrt(K*K+H*H);v.set(0,te),y.set(0,Math.pow(v.y/x.y,n.zoomSpeed)),P(y.y),x.copy(v)}function z(R){n.enableZoom&&de(R),n.enablePan&&fe(R)}function we(R){n.enableZoom&&de(R),n.enableRotate&&se(R)}function pe(R){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",ve),n.domElement.addEventListener("pointerup",me)),w(R),R.pointerType==="touch"?ze(R):Pe(R))}function ve(R){n.enabled!==!1&&(R.pointerType==="touch"?Ze(R):Te(R))}function me(R){O(R),M.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",ve),n.domElement.removeEventListener("pointerup",me)),n.dispatchEvent(Mf),s=i.NONE}function Pe(R){let J;switch(R.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Sr.DOLLY:if(n.enableZoom===!1)return;V(R),s=i.DOLLY;break;case Sr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;G(R),s=i.PAN}else{if(n.enableRotate===!1)return;N(R),s=i.ROTATE}break;case Sr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;N(R),s=i.ROTATE}else{if(n.enablePan===!1)return;G(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(au)}function Te(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;X(R);break;case i.DOLLY:if(n.enableZoom===!1)return;Y(R);break;case i.PAN:if(n.enablePan===!1)return;oe(R);break}}function Ce(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(au),B(R),n.dispatchEvent(Mf))}function Le(R){n.enabled===!1||n.enablePan===!1||W(R)}function ze(R){switch(k(R),M.length){case 1:switch(n.touches.ONE){case Ar.ROTATE:if(n.enableRotate===!1)return;Z(),s=i.TOUCH_ROTATE;break;case Ar.PAN:if(n.enablePan===!1)return;ne(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ar.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(),s=i.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(au)}function Ze(R){switch(k(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;se(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(R),n.update();break;default:s=i.NONE}}function A(R){n.enabled!==!1&&R.preventDefault()}function w(R){M.push(R)}function O(R){delete S[R.pointerId];for(let J=0;J<M.length;J++)if(M[J].pointerId==R.pointerId){M.splice(J,1);return}}function k(R){let J=S[R.pointerId];J===void 0&&(J=new Xe,S[R.pointerId]=J),J.set(R.pageX,R.pageY)}function $(R){const J=R.pointerId===M[0].pointerId?M[1]:M[0];return S[J.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",pe),n.domElement.addEventListener("pointercancel",me),n.domElement.addEventListener("wheel",Ce,{passive:!1}),this.update()}}function li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function md(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rs={duration:.5,overwrite:!1,delay:0},fl,kt,xt,Tn=1e8,st=1/Tn,Lu=Math.PI*2,V1=Lu/4,H1=0,gd=Math.sqrt,k1=Math.cos,W1=Math.sin,Nt=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},vi=function(e){return typeof e=="number"},hl=function(e){return typeof e>"u"},Jn=function(e){return typeof e=="object"},nn=function(e){return e!==!1},dl=function(){return typeof window<"u"},La=function(e){return yt(e)||Nt(e)},vd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,Nu=/(?:-?\.?\d|\.)+/gi,_d=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ou=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xd=/[+-]=-?[.\d]+/,yd=/[^,'"\[\]\s]+/gi,X1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,wn,Uu,pl,xn={},Va={},Ed,Md=function(e){return(Va=dr(e,xn))&&on},ml=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bs=function(e,t){return!t&&console.warn(e)},Sd=function(e,t){return e&&(xn[e]=t)&&Va&&(Va[e]=t)||xn},Os=function(){return 0},q1={suppressEvents:!0,isStart:!0,kill:!1},Ia={suppressEvents:!0,kill:!1},$1={suppressEvents:!0},gl={},Ni=[],Iu={},Ad,mn={},uu={},Sf=30,Ba=[],vl="",_l=function(e){var t=e[0],n,i;if(Jn(t)||yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ba.length;i--&&!Ba[i].targetTest(t););n=Ba[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Yd(e[i],n)))||e.splice(i,1);return e},ar=function(e){return e._gsap||_l(Cn(e))[0]._gsap},wd=function(e,t,n){return(n=e[t])&&yt(n)?e[t]():hl(n)&&e.getAttribute&&e.getAttribute(t)||n},rn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},Kr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Y1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ha=function(){var e=Ni.length,t=Ni.slice(0),n,i;for(Iu={},Ni.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dd=function(e,t,n,i){Ni.length&&!kt&&Ha(),e.render(t,n,i||kt&&t<0&&(e._initted||e._startAt)),Ni.length&&!kt&&Ha()},bd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yd).length<2?t:Nt(e)?e.trim():e},Td=function(e){return e},Fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Z1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},dr=function(e,t){for(var n in t)e[n]=t[n];return e},Af=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Jn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ka=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Rs=function(e){var t=e.parent||mt,n=e.keyframes?Z1(Wt(e.keyframes)):Fn;if(nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},K1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Cd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},lo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},or=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},J1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bu=function(e,t,n,i){return e._startAt&&(kt?e._startAt.revert(Ia):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Q1=function r(e){return!e||e._ts&&r(e.parent)},wf=function(e){return e._repeat?ss(e._tTime,e=e.duration()+e._rDelay)*e:0},ss=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},co=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},fo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),co(e),n._dirty||or(n,e)),e},Fd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wa(e.rawTime(),t),(!t._dur||ea(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),or(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Xn=function(e,t,n,i){return t.parent&&Bi(t),t._start=Lt((vi(n)?n:n||e!==mt?An(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cd(e,t,"_first","_last",e._sort?"_start":0),Ou(t)||(e._recent=t),i||Fd(e,t),e._ts<0&&fo(e,e._tTime),e},Rd=function(e,t){return(xn.ScrollTrigger||ml("scrollTrigger",t))&&xn.ScrollTrigger.create(t,e)},Pd=function(e,t,n,i,s){if(yl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ad!==gn.frame)return Ni.push(e),e._lazy=[s,i],1},j1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ey=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&j1(e)&&!(!e._initted&&Ou(e))||(e._ts<0||e._dp._ts<0)&&!Ou(e))?0:1,o=e._rDelay,l=0,f,u,c;if(o&&e._repeat&&(l=ea(0,e._tDur,t),u=ss(l,o),e._yoyo&&u&1&&(a=1-a),u!==ss(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||kt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&Pd(e,t,i,n,l))return;for(c=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!c),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,f=e._pt;f;)f.r(a,f.d),f=f._next;t<0&&Bu(e,t,n,!0),e._onUpdate&&!n&&vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Bi(e,1),!n&&!kt&&(vn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ty=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},as=function(e,t,n,i){var s=e._repeat,a=Lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&fo(e,e._tTime=e._tDur*o),e.parent&&co(e),n||or(e.parent,e),e},Df=function(e){return e instanceof Jt?or(e):as(e,e._dur)},ny={_start:0,endTime:Os,totalDuration:Os},An=function r(e,t,n){var i=e.labels,s=e._recent||ny,a=e.duration()>=Tn?s.endTime(!1):e._dur,o,l,f;return Nt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),f=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),f&&n&&(l=l/100*(Wt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ps=function(e,t,n){var i=vi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=nn(l.vars.inherit)&&l.parent;a.immediateRender=nn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new At(t[0],a,t[s+1])},Vi=function(e,t){return e||e===0?t(e):t},ea=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Nt(e)||!(t=X1.exec(e))?"":t[1]},iy=function(e,t,n){return Vi(n,function(i){return ea(e,t,i)})},zu=[].slice,Ld=function(e,t){return e&&Jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Jn(e[0]))&&!e.nodeType&&e!==wn},ry=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Nt(i)&&!t||Ld(i,1)?(s=n).push.apply(s,Cn(i)):n.push(i)})||n},Cn=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):Nt(e)&&!n&&(Uu||!os())?zu.call((t||pl).querySelectorAll(e),0):Wt(e)?ry(e,n):Ld(e)?zu.call(e,0):e?[e]:[]},Gu=function(e){return e=Cn(e)[0]||Bs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Cn(t,n.querySelectorAll?n:n===e?Bs("Invalid scope")||pl.createElement("div"):e)}},Nd=function(e){return e.sort(function(){return .5-Math.random()})},Ud=function(e){if(yt(e))return e;var t=Jn(e)?e:{each:e},n=ur(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,f=t.axis,u=i,c=i;return Nt(i)?u=c={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],c=i[1]),function(h,m,_){var p=(_||t).length,g=a[p],d,x,v,y,M,S,D,T,E;if(!g){if(E=t.grid==="auto"?0:(t.grid||[1,Tn])[1],!E){for(D=-Tn;D<(D=_[E++].getBoundingClientRect().left)&&E<p;);E<p&&E--}for(g=a[p]=[],d=l?Math.min(E,p)*u-.5:i%E,x=E===Tn?0:l?p*c/E-.5:i/E|0,D=0,T=Tn,S=0;S<p;S++)v=S%E-d,y=x-(S/E|0),g[S]=M=f?Math.abs(f==="y"?y:v):gd(v*v+y*y),M>D&&(D=M),M<T&&(T=M);i==="random"&&Nd(g),g.max=D-T,g.min=T,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(E>p?p-1:f?f==="y"?p/E:E:Math.max(E,p/E))||0)*(i==="edges"?-1:1),g.b=p<0?s-p:s,g.u=Ht(t.amount||t.each)||0,n=n&&p<0?Xd(n):n}return p=(g[h]-g.min)/g.max||0,Lt(g.b+(n?n(p):p)*g.v)+g.u}},Vu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(vi(n)?0:Ht(n))}},Id=function(e,t){var n=Wt(e),i,s;return!n&&Jn(e)&&(i=n=e.radius||Tn,e.values?(e=Cn(e.values),(s=!vi(e[0]))&&(i*=i)):e=Vu(e.increment)),Vi(t,n?yt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),f=Tn,u=0,c=e.length,h,m;c--;)s?(h=e[c].x-o,m=e[c].y-l,h=h*h+m*m):h=Math.abs(e[c]-o),h<f&&(f=h,u=c);return u=!i||f<=i?e[u]:a,s||u===a||vi(a)?u:u+Ht(a)}:Vu(e))},Bd=function(e,t,n,i){return Vi(Wt(e)?!t:n===!0?!!(n=0):!i,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},sy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},ay=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},oy=function(e,t,n){return zd(e,t,0,1,n)},Od=function(e,t,n){return Vi(n,function(i){return e[~~t(i)]})},uy=function r(e,t,n){var i=t-e;return Wt(e)?Od(e,r(0,e.length),t):Vi(n,function(s){return(i+(s-e)%i)%i+e})},ly=function r(e,t,n){var i=t-e,s=i*2;return Wt(e)?Od(e,r(0,e.length-1),t):Vi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},zs=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?yd:Nu),n+=e.substr(t,i-t)+Bd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},zd=function(e,t,n,i,s){var a=t-e,o=i-n;return Vi(s,function(l){return n+((l-e)/a*o||0)})},cy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=Nt(e),o={},l,f,u,c,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(u=[],c=e.length,h=c-2,f=1;f<c;f++)u.push(r(e[f-1],e[f]));c--,s=function(_){_*=c;var p=Math.min(h,~~_);return u[p](_-p)},n=t}else i||(e=dr(Wt(e)?[]:{},e));if(!u){for(l in t)xl.call(o,e,l,"get",t[l]);s=function(_){return Sl(_,o)||(a?e.p:e)}}}return Vi(n,s)},bf=function(e,t,n){var i=e.labels,s=Tn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},vn=function(e,t,n){var i=e.vars,s=i[t],a=xt,o=e._ctx,l,f,u;if(s)return l=i[t+"Params"],f=i.callbackScope||e,n&&Ni.length&&Ha(),o&&(xt=o),u=l?s.apply(f,l):s.call(f),xt=a,u},Ts=function(e){return Bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!kt),e.progress()<1&&vn(e,"onInterrupt"),e},qr,Gd=[],Vd=function(e){if(dl()&&e){e=!e.name&&e.default||e;var t=e.name,n=yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Os,render:Sl,add:xl,kill:Dy,modifier:wy,rawVars:0},a={targetTest:0,get:0,getSetter:Ml,aliases:{},register:0};if(os(),e!==i){if(mn[t])return;Fn(i,Fn(ka(e,s),a)),dr(i.prototype,dr(s,ka(e,a))),mn[i.prop=t]=i,e.targetTest&&(Ba.push(i),gl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Sd(t,i),e.register&&e.register(on,i,sn)}else e&&Gd.push(e)},rt=255,Cs={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},lu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},Hd=function(e,t,n){var i=e?vi(e)?[e>>16,e>>8&rt,e&rt]:0:Cs.black,s,a,o,l,f,u,c,h,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cs[e])i=Cs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Nu),!t)l=+i[0]%360/360,f=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(f+1):u+f-u*f,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=lu(l+1/3,s,a),i[1]=lu(l,s,a),i[2]=lu(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(_d),n&&i.length<4&&(i[3]=1),i}else i=e.match(Nu)||Cs.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/rt,a=i[1]/rt,o=i[2]/rt,c=Math.max(s,a,o),h=Math.min(s,a,o),u=(c+h)/2,c===h?l=f=0:(m=c-h,f=u>.5?m/(2-c-h):m/(c+h),l=c===s?(a-o)/m+(a<o?6:0):c===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(f*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},kd=function(e){var t=[],n=[],i=-1;return e.split(Ui).forEach(function(s){var a=s.match(Xr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Tf=function(e,t,n){var i="",s=(e+i).match(Ui),a=t?"hsla(":"rgba(",o=0,l,f,u,c;if(!s)return e;if(s=s.map(function(h){return(h=Hd(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=kd(e),l=n.c,l.join(i)!==u.c.join(i)))for(f=e.replace(Ui,"1").split(Xr),c=f.length-1;o<c;o++)i+=f[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!f)for(f=e.split(Ui),c=f.length-1;o<c;o++)i+=f[o]+s[o];return i+f[c]},Ui=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),fy=/hsl[a]?\(/,Wd=function(e){var t=e.join(" "),n;if(Ui.lastIndex=0,Ui.test(t))return n=fy.test(t),e[1]=Tf(e[1],n),e[0]=Tf(e[0],n,kd(e[1])),!0},Gs,gn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,f,u,c,h,m,_=function p(g){var d=r()-i,x=g===!0,v,y,M,S;if(d>e&&(n+=d-t),i+=d,M=i-n,v=M-a,(v>0||x)&&(S=++c.frame,h=M-c.time*1e3,c.time=M=M/1e3,a+=v+(v>=s?4:s-v),y=1),x||(l=f(p)),y)for(m=0;m<o.length;m++)o[m](M,h,S,g)};return c={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){Ed&&(!Uu&&dl()&&(wn=Uu=window,pl=wn.document||{},xn.gsap=on,(wn.gsapVersions||(wn.gsapVersions=[])).push(on.version),Md(Va||wn.GreenSockGlobals||!wn.gsap&&wn||{}),u=wn.requestAnimationFrame,Gd.forEach(Vd)),l&&c.sleep(),f=u||function(g){return setTimeout(g,a-c.time*1e3+1|0)},Gs=1,_(2))},sleep:function(){(u?wn.cancelAnimationFrame:clearTimeout)(l),Gs=0,f=Os},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),a=c.time*1e3+s},add:function(g,d,x){var v=d?function(y,M,S,D){g(y,M,S,D),c.remove(v)}:g;return c.remove(g),o[x?"unshift":"push"](v),os(),v},remove:function(g,d){~(d=o.indexOf(g))&&o.splice(d,1)&&m>=d&&m--},_listeners:o},c}(),os=function(){return!Gs&&gn.wake()},Ke={},hy=/^[\d.\-M][\d.\-,\s]/,dy=/["']/g,py=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,f;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,f=l.substr(0,o),t[i]=isNaN(f)?f.replace(dy,"").trim():+f,i=l.substr(o+1).trim();return t},my=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},gy=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[py(t[1])]:my(e).split(",").map(bd)):Ke._CE&&hy.test(e)?Ke._CE("",e):n},Xd=function(e){return function(t){return 1-e(1-t)}},qd=function r(e,t){for(var n=e._first,i;n;)n instanceof Jt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ur=function(e,t){return e&&(yt(e)?e:Ke[e]||gy(e))||t},gr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return rn(e,function(o){Ke[o]=xn[o]=s,Ke[a=o.toLowerCase()]=n;for(var l in s)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=s[l]}),s},$d=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Lu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*W1((u-a)*s)+1},l=e==="out"?o:e==="in"?function(f){return 1-o(1-f)}:$d(o);return s=Lu/s,l.config=function(f,u){return r(e,f,u)},l},fu=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:$d(n);return i.config=function(s){return r(e,s)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;gr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;gr("Elastic",cu("in"),cu("out"),cu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);gr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});gr("Circ",function(r){return-(gd(1-r*r)-1)});gr("Sine",function(r){return r===1?1:-k1(r*V1)+1});gr("Back",fu("in"),fu("out"),fu());Ke.SteppedEase=Ke.steps=xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-st;return function(o){return((i*ea(0,a,o)|0)+s)*n}}};rs.ease=Ke["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return vl+=r+","+r+"Params,"});var Yd=function(e,t){this.id=H1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wd,this.set=t?t.getSetter:Ml},Vs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,as(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),Gs||gn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,as(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fo(this,n),!s._dp||s.parent||Fd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ss(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(ea(-Math.abs(this._delay),this._tDur,s),i!==!1),co(this),J1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$1);var i=kt;return kt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),kt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Df(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Df(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(An(this,n),nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,nn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-st)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=yt(n)?n:Td,o=function(){var f=i.then;i.then=null,yt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=f),s(a),i.then=f};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ts(this)},r}();Fn(Vs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Jt=function(r){md(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=nn(n.sortChildren),mt&&Xn(n.parent||mt,li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Rd(li(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ps(0,arguments,this),this},t.from=function(i,s,a){return Ps(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ps(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Rs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new At(i,s,An(this,a),1),this},t.call=function(i,s,a){return Xn(this,At.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,f,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=f,a.onCompleteParams=u,a.parent=this,new At(i,a,An(this,l)),this},t.staggerFrom=function(i,s,a,o,l,f,u){return a.runBackwards=1,Rs(a).immediateRender=nn(a.immediateRender),this.staggerTo(i,s,a,o,l,f,u)},t.staggerFromTo=function(i,s,a,o,l,f,u,c){return o.startAt=a,Rs(o).immediateRender=nn(o.immediateRender),this.staggerTo(i,s,o,l,f,u,c)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,f=this._dur,u=i<=0?0:Lt(i),c=this._zTime<0!=i<0&&(this._initted||!f),h,m,_,p,g,d,x,v,y,M,S,D;if(this!==mt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||c){if(o!==this._time&&f&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,v=this._ts,d=!v,c&&(f||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,g=f+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,a);if(h=Lt(u%g),u===l?(p=this._repeat,h=f):(p=~~(u/g),p&&p===u/g&&(h=f,p--),h>f&&(h=f)),M=ss(this._tTime,g),!o&&this._tTime&&M!==p&&this._tTime-M*g-this._dur<=0&&(M=p),S&&p&1&&(h=f-h,D=1),p!==M&&!this._lock){var T=S&&M&1,E=T===(S&&p&1);if(p<M&&(T=!T),o=T?0:u%f?f:u,this._lock=1,this.render(o||(D?0:Lt(p*g)),s,!f)._lock=0,this._tTime=u,!s&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,l=this._tDur,E&&(this._lock=2,o=T?f:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;qd(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=ty(this,Lt(o),Lt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!p&&(vn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!d){x=0,_&&(u+=this._zTime=-st);break}}m=_}else{m=this._last;for(var b=i<0?i:h;m;){if(_=m._prev,(m._act||b<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(b-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(b-m._start)*m._ts,s,a||kt&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!d){x=0,_&&(u+=this._zTime=b?-st:st);break}}m=_}}if(x&&!s&&(this.pause(),x.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=y,co(this),this.render(i,s,a);this._onUpdate&&!s&&vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!f)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(vi(s)||(s=An(this,s,i)),!(i instanceof Vs)){if(Wt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Nt(i))return this.addLabel(i,s);if(yt(i))i=At.delayedCall(0,i);else return this}return this!==i?Xn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Tn);for(var l=[],f=this._first;f;)f._start>=o&&(f instanceof At?s&&l.push(f):(a&&l.push(f),i&&l.push.apply(l,f.getChildren(!0,s,a)))),f=f._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Nt(i)?this.removeLabel(i):yt(i)?this.killTweensOf(i):(lo(this,i),i===this._recent&&(this._recent=this._last),or(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=An(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=At.delayedCall(0,s||Os,a);return o.data="isPause",this._hasPause=1,Xn(this,o,An(this,i))},t.removePause=function(i){var s=this._first;for(i=An(this,i);s;)s._start===i&&s.data==="isPause"&&Bi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ti!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Cn(i),l=this._first,f=vi(s),u;l;)l instanceof At?Y1(l._targets,o)&&(f?(!Ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=An(a,i),l=s,f=l.startAt,u=l.onStart,c=l.onStartParams,h=l.immediateRender,m,_=At.to(a,Fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(f&&"time"in f?f.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!m){var g=s.duration||Math.abs((o-(f&&"time"in f?f.time:a._time))/a.timeScale());_._dur!==g&&as(_,g,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,c||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Fn({startAt:{time:An(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bf(this,An(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bf(this,An(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,f;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(f in l)l[f]>=a&&(l[f]+=i);return or(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),or(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Tn,f,u,c;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(c=a.parent;o;)f=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!c&&!a._dp||c&&c.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=f;as(a,a===mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(mt._ts&&(Dd(mt,Wa(i,mt)),Ad=gn.frame),gn.frame>=Sf){Sf+=_n.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&_n.autoSleep&&gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gn.sleep()}}},e}(Vs);Fn(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var vy=function(e,t,n,i,s,a,o){var l=new sn(this._pt,e,t,0,1,ep,null,s),f=0,u=0,c,h,m,_,p,g,d,x;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=zs(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),h=n.match(ou)||[];c=ou.exec(i);)_=c[0],p=i.substring(f,c.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:g,c:_.charAt(1)==="="?Kr(g,_)-g:parseFloat(_)-g,m:m&&m<4?Math.round:0},f=ou.lastIndex);return l.c=f<i.length?i.substring(f,i.length):"",l.fp=o,(xd.test(i)||d)&&(l.e=0),this._pt=l,l},xl=function(e,t,n,i,s,a,o,l,f,u){yt(i)&&(i=i(s||0,e,a));var c=e[t],h=n!=="get"?n:yt(c)?f?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():c,m=yt(c)?f?My:Qd:El,_;if(Nt(i)&&(~i.indexOf("random(")&&(i=zs(i)),i.charAt(1)==="="&&(_=Kr(h,i)+(Ht(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Hu)return!isNaN(h*i)&&i!==""?(_=new sn(this._pt,e,t,+h||0,i-(h||0),typeof c=="boolean"?Ay:jd,0,m),f&&(_.fp=f),o&&_.modifier(o,this,e),this._pt=_):(!c&&!(t in e)&&ml(t,i),vy.call(this,e,t,h,i,m,l||_n.stringFilter,f))},_y=function(e,t,n,i,s){if(yt(e)&&(e=Ls(e,s,t,n,i)),!Jn(e)||e.style&&e.nodeType||Wt(e)||vd(e))return Nt(e)?Ls(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ls(e[o],s,t,n,i);return a},Zd=function(e,t,n,i,s,a){var o,l,f,u;if(mn[e]&&(o=new mn[e]).init(s,o.rawVars?t[e]:_y(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new sn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==qr))for(f=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)f[o._props[u]]=l;return o},Ti,Hu,yl=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,f=i.onUpdate,u=i.runBackwards,c=i.yoyoEase,h=i.keyframes,m=i.autoRevert,_=e._dur,p=e._startAt,g=e._targets,d=e.parent,x=d&&d.data==="nested"?d.vars.targets:g,v=e._overwrite==="auto"&&!fl,y=e.timeline,M,S,D,T,E,b,C,F,L,P,U,N,V;if(y&&(!h||!s)&&(s="none"),e._ease=ur(s,rs.ease),e._yEase=c?Xd(ur(c===!0?s:c,rs.ease)):0,c&&e._yoyo&&!e._repeat&&(c=e._yEase,e._yEase=e._ease,e._ease=c),e._from=!y&&!!i.runBackwards,!y||h&&!i.stagger){if(F=g[0]?ar(g[0]).harness:0,N=F&&i[F.prop],M=ka(i,gl),p&&(p._zTime<0&&p.progress(1),t<0&&u&&o&&!m?p.render(-1,!0):p.revert(u&&_?Ia:q1),p._lazy=0),a){if(Bi(e._startAt=At.set(g,Fn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!p&&nn(l),startAt:null,delay:0,onUpdate:f&&function(){return vn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kt||!o&&!m)&&e._startAt.revert(Ia),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!p){if(t&&(o=!1),D=Fn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&nn(l),immediateRender:o,stagger:0,parent:d},M),N&&(D[F.prop]=N),Bi(e._startAt=At.set(g,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kt?e._startAt.revert(Ia):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&nn(l)||l&&!_,S=0;S<g.length;S++){if(E=g[S],C=E._gsap||_l(g)[S]._gsap,e._ptLookup[S]=P={},Iu[C.id]&&Ni.length&&Ha(),U=x===g?S:x.indexOf(E),F&&(L=new F).init(E,N||M,e,U,x)!==!1&&(e._pt=T=new sn(e._pt,E,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(G){P[G]=T}),L.priority&&(b=1)),!F||N)for(D in M)mn[D]&&(L=Zd(D,M,e,U,E,x))?L.priority&&(b=1):P[D]=T=xl.call(e,E,D,"get",M[D],U,x,0,i.stringFilter);e._op&&e._op[S]&&e.kill(E,e._op[S]),v&&e._pt&&(Ti=e,mt.killTweensOf(E,P,e.globalTime(t)),V=!e.parent,Ti=0),e._pt&&l&&(Iu[C.id]=1)}b&&tp(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!V,h&&t<=0&&y.render(Tn,!0,!0)},xy=function(e,t,n,i,s,a,o,l){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,h,m;if(!f)for(f=e._ptCache[t]=[],h=e._ptLookup,m=e._targets.length;m--;){if(u=h[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Hu=1,e.vars[t]="+=0",yl(e,o),Hu=0,l?Bs(t+" not eligible for reset"):1;f.push(u)}for(m=f.length;m--;)c=f[m],u=c._pt||c,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,c.e&&(c.e=Et(n)+Ht(c.e)),c.b&&(c.b=u.s+Ht(c.b))},yy=function(e,t){var n=e[0]?ar(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=dr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Ey=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Wt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,f){return o.push({t:f/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ls=function(e,t,n,i,s){return yt(e)?e.call(t,n,i,s):Nt(e)&&~e.indexOf("random(")?zs(e):e},Kd=vl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jd={};rn(Kd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jd[r]=1});var At=function(r){md(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Rs(i))||this;var l=o.vars,f=l.duration,u=l.delay,c=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,p=l.defaults,g=l.scrollTrigger,d=l.yoyoEase,x=i.parent||mt,v=(Wt(n)||vd(n)?vi(n[0]):"length"in i)?[n]:Cn(n),y,M,S,D,T,E,b,C;if(o._targets=v.length?_l(v):Bs("GSAP target "+n+" not found. https://gsap.com",!_n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||h||La(f)||La(u)){if(i=o.vars,y=o.timeline=new Jt({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=li(o),y._start=0,h||La(f)||La(u)){if(D=v.length,b=h&&Ud(h),Jn(h))for(T in h)~Kd.indexOf(T)&&(C||(C={}),C[T]=h[T]);for(M=0;M<D;M++)S=ka(i,Jd),S.stagger=0,d&&(S.yoyoEase=d),C&&dr(S,C),E=v[M],S.duration=+Ls(f,li(o),M,E,v),S.delay=(+Ls(u,li(o),M,E,v)||0)-o._delay,!h&&D===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),y.to(E,S,b?b(M,E,v):0),y._ease=Ke.none;y.duration()?f=u=0:o.timeline=0}else if(_){Rs(Fn(y.vars.defaults,{ease:"none"})),y._ease=ur(_.ease||i.ease||"none");var F=0,L,P,U;if(Wt(_))_.forEach(function(N){return y.to(v,N,">")}),y.duration();else{S={};for(T in _)T==="ease"||T==="easeEach"||Ey(T,_[T],S,_.easeEach);for(T in S)for(L=S[T].sort(function(N,V){return N.t-V.t}),F=0,M=0;M<L.length;M++)P=L[M],U={ease:P.e,duration:(P.t-(M?L[M-1].t:0))/100*f},U[T]=P.v,y.to(v,U,F),F+=U.duration;y.duration()<f&&y.to({},{duration:f-y.duration()})}}f||o.duration(f=y.duration())}else o.timeline=0;return m===!0&&!fl&&(Ti=li(o),mt.killTweensOf(v),Ti=0),Xn(x,li(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(c||!f&&!_&&o._start===Lt(x._time)&&nn(c)&&Q1(li(o))&&x.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),g&&Rd(li(o),g),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,f=this._dur,u=i<0,c=i>l-st&&!u?l:i<st?0:i,h,m,_,p,g,d,x,v,y;if(!f)ey(this,i,s,a);else if(c!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=c,v=this.timeline,this._repeat){if(p=f+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,a);if(h=Lt(c%p),c===l?(_=this._repeat,h=f):(_=~~(c/p),_&&_===Lt(c/p)&&(h=f,_--),h>f&&(h=f)),d=this._yoyo&&_&1,d&&(y=this._yEase,h=f-h),g=ss(this._tTime,p),h===o&&!a&&this._initted&&_===g)return this._tTime=c,this;_!==g&&(v&&this._yEase&&qd(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==f&&this._initted&&(this._lock=a=1,this.render(Lt(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(Pd(this,u?i:h,a,s,c))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(f!==this._dur)return this.render(i,s,a)}if(this._tTime=c,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/f),this._from&&(this.ratio=x=1-x),h&&!o&&!s&&!_&&(vn(this,"onStart"),this._tTime!==c))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;v&&v.render(i<0?i:!h&&d?-st:v._dur*v._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Bu(this,i,s,a),vn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&vn(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(u&&!this._onUpdate&&Bu(this,i,!0,!0),(i||!f)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&Bi(this,1),!s&&!(u&&!o)&&(c||o||d)&&(vn(this,c===l?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Gs||gn.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yl(this,f),u=this._ease(f/this._dur),xy(this,i,s,a,o,u,f,l)?this.resetTo(i,s,a,o,1):(fo(this,0),this.parent||Cd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ts(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ti&&Ti.vars.overwrite!==!0)._first||Ts(this),this.parent&&a!==this.timeline.totalDuration()&&as(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Cn(i):o,f=this._ptLookup,u=this._pt,c,h,m,_,p,g,d;if((!s||s==="all")&&K1(o,l))return s==="all"&&(this._pt=0),Ts(this);for(c=this._op=this._op||[],s!=="all"&&(Nt(s)&&(p={},rn(s,function(x){return p[x]=1}),s=p),s=yy(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){h=f[d],s==="all"?(c[d]=s,_=h,m={}):(m=c[d]=c[d]||{},_=s);for(p in _)g=h&&h[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&lo(this,g,"_pt"),delete h[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&u&&Ts(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ps(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ps(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return mt.killTweensOf(i,s,a)},e}(Vs);Fn(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(r){At[r]=function(){var e=new Jt,t=zu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var El=function(e,t,n){return e[t]=n},Qd=function(e,t,n){return e[t](n)},My=function(e,t,n,i){return e[t](i.fp,n)},Sy=function(e,t,n){return e.setAttribute(t,n)},Ml=function(e,t){return yt(e[t])?Qd:hl(e[t])&&e.setAttribute?Sy:El},jd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ay=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ep=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Sl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},wy=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Dy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?lo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},by=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},tp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},sn=function(){function r(t,n,i,s,a,o,l,f,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||jd,this.d=l||this,this.set=f||El,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=by,this.m=n,this.mt=s,this.tween=i},r}();rn(vl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return gl[r]=1});xn.TweenMax=xn.TweenLite=At;xn.TimelineLite=xn.TimelineMax=Jt;mt=new Jt({sortChildren:!1,defaults:rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=Wd;var lr=[],Oa={},Ty=[],Cf=0,Cy=0,hu=function(e){return(Oa[e]||Ty).map(function(t){return t()})},ku=function(){var e=Date.now(),t=[];e-Cf>2&&(hu("matchMediaInit"),lr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,f;for(o in i)a=wn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,f=1);f&&(n.revert(),l&&t.push(n))}),hu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cf=e,hu("matchMedia"))},np=function(){function r(t,n){this.selector=n&&Gu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Cy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){yt(n)&&(s=i,i=n,n=yt);var a=this,o=function(){var f=xt,u=a.selector,c;return f&&f!==a&&f.data.push(a),s&&(a.selector=Gu(s)),xt=a,c=i.apply(a,arguments),yt(c)&&a._r.push(c),xt=f,a.selector=u,a.isReverted=!1,c};return a.last=o,n===yt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=xt;xt=null,n(this),xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof At&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,f;l--;)f=s.data[l],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,c){return c.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)f=s.data[l],f instanceof Jt?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof At)&&f.revert&&f.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=lr.length;a--;)lr[a].id===this.id&&lr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),Fy=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Jn(n)||(n={matches:n});var a=new np(0,s||this.scope),o=a.conditions={},l,f,u;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(f in n)f==="all"?u=1:(l=wn.matchMedia(n[f]),l&&(lr.indexOf(a)<0&&lr.push(a),(o[f]=l.matches)&&(u=1),l.addListener?l.addListener(ku):l.addEventListener("change",ku)));return u&&i(a,function(c){return a.add(null,c)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Vd(i)})},timeline:function(e){return new Jt(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Nt(e)&&(e=Cn(e)[0]);var s=ar(e||{}).get,a=n?Td:bd;return n==="native"&&(n=""),e&&(t?a((mn[t]&&mn[t].get||s)(e,t,n,i)):function(o,l,f){return a((mn[o]&&mn[o].get||s)(e,o,l,f))})},quickSetter:function(e,t,n){if(e=Cn(e),e.length>1){var i=e.map(function(u){return on.quickSetter(u,t,n)}),s=i.length;return function(u){for(var c=s;c--;)i[c](u)}}e=e[0]||{};var a=mn[t],o=ar(e),l=o.harness&&(o.harness.aliases||{})[t]||t,f=a?function(u){var c=new a;qr._pt=0,c.init(e,n?u+n:u,qr,0,[e]),c.render(1,c),qr._pt&&Sl(1,qr)}:o.set(e,l);return a?f:function(u){return f(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=on.to(e,dr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,f,u){return s.resetTo(t,l,f,u)};return a.tween=s,a},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ur(e.ease,rs.ease)),Af(rs,e||{})},config:function(e){return Af(_n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!mn[o]&&!xn[o]&&Bs(t+" effect requires "+o+" plugin.")}),uu[t]=function(o,l,f){return n(Cn(o),Fn(l||{},s),f)},a&&(Jt.prototype[t]=function(o,l,f){return this.add(uu[t](o,Jn(l)?l:(f=l)&&{},this),f)})},registerEase:function(e,t){Ke[e]=ur(t)},parseEase:function(e,t){return arguments.length?ur(e,t):Ke},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jt(e),i,s;for(n.smoothChildTiming=nn(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof At&&i.vars.onComplete===i._targets[0]))&&Xn(n,i,i._start-i._delay),i=s;return Xn(mt,n,0),n},context:function(e,t){return e?new np(e,t):xt},matchMedia:function(e){return new Fy(e)},matchMediaRefresh:function(){return lr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ku()},addEventListener:function(e,t){var n=Oa[e]||(Oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Oa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:uy,wrapYoyo:ly,distribute:Ud,random:Bd,snap:Id,normalize:oy,getUnit:Ht,clamp:iy,splitColor:Hd,toArray:Cn,selector:Gu,mapRange:zd,pipe:sy,unitize:ay,interpolate:cy,shuffle:Nd},install:Md,effects:uu,ticker:gn,updateRoot:Jt.updateRoot,plugins:mn,globalTimeline:mt,core:{PropTween:sn,globals:Sd,Tween:At,Timeline:Jt,Animation:Vs,getCache:ar,_removeLinkedListItem:lo,reverting:function(){return kt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return fl=e}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xa[r]=At[r]});gn.add(Jt.updateRoot);qr=Xa.to({},{duration:0});var Ry=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Py=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ry(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},du=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,f;if(Nt(s)&&(l={},rn(s,function(u){return l[u]=1}),s=l),t){l={};for(f in s)l[f]=t(s[f]);s=l}Py(o,s)}}}},on=Xa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},du("roundProps",Vu),du("modifiers"),du("snap",Id))||Xa;At.version=Jt.version=on.version="3.12.3";Ed=1;dl()&&os();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ff,Ci,Jr,Al,tr,Rf,wl,Ly=function(){return typeof window<"u"},_i={},ji=180/Math.PI,Qr=Math.PI/180,Vr=Math.atan2,Pf=1e8,Dl=/([A-Z])/g,Ny=/(left|right|width|margin|padding|x)/i,Uy=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Iy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},By=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Oy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ip=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zy=function(e,t,n){return e.style[t]=n},Gy=function(e,t,n){return e.style.setProperty(t,n)},Vy=function(e,t,n){return e._gsap[t]=n},Hy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ky=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Wy=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},vt="transform",an=vt+"Origin",Xy=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in _i&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ci(i,o)}):this.tfm[e]=a.x?a[e]:ci(i,e),e===an&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(vt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(an,t,"")),e=vt}(s||t)&&this.props.push(e,t,s[e])},sp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},qy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Dl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wl(),(!s||!s.isStart)&&!n[vt]&&(sp(n),i.zOrigin&&n[an]&&(n[an]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ap=function(e,t){var n={target:e,props:[],revert:qy,save:Xy};return e._gsap||on.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},op,Xu=function(e,t){var n=Ci.createElementNS?Ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ci.createElement(e);return n&&n.style?n:Ci.createElement(e)},Yn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Dl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,us(t)||t,1)||""},Lf="O,Moz,ms,Ms,Webkit".split(","),us=function(e,t,n){var i=t||tr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Lf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Lf[a]:"")+e},qu=function(){Ly()&&window.document&&(Ff=window,Ci=Ff.document,Jr=Ci.documentElement,tr=Xu("div")||{style:{}},Xu("div"),vt=us(vt),an=vt+"Origin",tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",op=!!us("perspective"),wl=on.core.reverting,Al=1)},pu=function r(e){var t=Xu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Jr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Jr.removeChild(t),this.style.cssText=s,a},Nf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},up=function(e){var t;try{t=e.getBBox()}catch{t=pu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===pu||(t=pu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Nf(e,["x","cx","x1"])||0,y:+Nf(e,["y","cy","y1"])||0,width:0,height:0}:t},lp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&up(e))},pr=function(e,t){if(t){var n=e.style,i;t in _i&&t!==an&&(t=vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Dl,"-$1").toLowerCase())):n.removeAttribute(t)}},Fi=function(e,t,n,i,s,a){var o=new sn(e._pt,t,n,0,1,a?rp:ip);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Uf={deg:1,rad:1,turn:1},$y={grid:1,flex:1},Oi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=tr.style,l=Ny.test(t),f=e.tagName.toLowerCase()==="svg",u=(f?"client":"offset")+(l?"Width":"Height"),c=100,h=i==="px",m=i==="%",_,p,g,d;if(i===a||!s||Uf[i]||Uf[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),d=e.getCTM&&lp(e),(m||a==="%")&&(_i[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[u],Et(m?s/_*c:s/100*_);if(o[l?"width":"height"]=c+(h?a:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!f?e:e.parentNode,d&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Ci||!p.appendChild)&&(p=Ci.body),g=p._gsap,g&&m&&g.width&&l&&g.time===gn.time&&!g.uncache)return Et(s/g.width*c);if(m&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=c+i,_=e[u],x?e.style[t]=x:pr(e,t)}else(m||a==="%")&&!$y[Yn(p,"display")]&&(o.position=Yn(e,"position")),p===e&&(o.position="static"),p.appendChild(tr),_=tr[u],p.removeChild(tr),o.position="absolute";return l&&m&&(g=ar(p),g.time=gn.time,g.width=p[u]),Et(h?_*s/c:_&&s?c/_*s:0)},ci=function(e,t,n,i){var s;return Al||qu(),t in qn&&t!=="transform"&&(t=qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),_i[t]&&t!=="transform"?(s=ks(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$a(Yn(e,an))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=qa[t]&&qa[t](e,t,n)||Yn(e,t)||wd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Oi(e,t,s,n)+n:s},Yy=function(e,t,n,i){if(!n||n==="none"){var s=us(t,e,1),a=s&&Yn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Yn(e,"borderTopColor"))}var o=new sn(this._pt,e.style,t,0,1,ep),l=0,f=0,u,c,h,m,_,p,g,d,x,v,y,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(p=e.style[t],e.style[t]=i,i=Yn(e,t)||i,p?e.style[t]=p:pr(e,t)),u=[n,i],Wd(u),n=u[0],i=u[1],h=n.match(Xr)||[],M=i.match(Xr)||[],M.length){for(;c=Xr.exec(i);)g=c[0],x=i.substring(l,c.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(p=h[f++]||"")&&(m=parseFloat(p)||0,y=p.substr((m+"").length),g.charAt(1)==="="&&(g=Kr(m,g)+y),d=parseFloat(g),v=g.substr((d+"").length),l=Xr.lastIndex-v.length,v||(v=v||_n.units[t]||y,l===i.length&&(i+=v,o.e+=v)),y!==v&&(m=Oi(e,t,p,v)||0),o._pt={_next:o._pt,p:x||f===1?x:",",s:m,c:d-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?rp:ip;return xd.test(i)&&(o.e=0),this._pt=o,o},If={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=If[n]||n,t[1]=If[i]||i,t.join(" ")},Ky=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,f;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),f=s.length;--f>-1;)o=s[f],_i[o]&&(l=1,o=o==="transformOrigin"?an:vt),pr(n,o);l&&(pr(n,vt),a&&(a.svg&&n.removeAttribute("transform"),ks(n,1),a.uncache=1,sp(i)))}},qa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new sn(e._pt,t,n,0,0,Ky);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Hs=[1,0,0,1,0,0],cp={},fp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bf=function(e){var t=Yn(e,vt);return fp(t)?Hs:t.substr(7).match(_d).map(Et)},bl=function(e,t){var n=e._gsap||ar(e),i=e.style,s=Bf(e),a,o,l,f;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hs:s):(s===Hs&&!e.offsetParent&&e!==Jr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(f=1,o=e.nextElementSibling,Jr.appendChild(e)),s=Bf(e),l?i.display=l:pr(e,"display"),f&&(o?a.insertBefore(e,o):a?a.appendChild(e):Jr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$u=function(e,t,n,i,s,a){var o=e._gsap,l=s||bl(e,!0),f=o.xOrigin||0,u=o.yOrigin||0,c=o.xOffset||0,h=o.yOffset||0,m=l[0],_=l[1],p=l[2],g=l[3],d=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,S,D,T,E;n?l!==Hs&&(D=m*g-_*p)&&(T=y*(g/D)+M*(-p/D)+(p*x-g*d)/D,E=y*(-_/D)+M*(m/D)-(m*x-_*d)/D,y=T,M=E):(S=up(e),y=S.x+(~v[0].indexOf("%")?y/100*S.width:y),M=S.y+(~(v[1]||v[0]).indexOf("%")?M/100*S.height:M),!("xOrigin"in o)&&(y||M)&&(y-=S.x,M-=S.y)),i||i!==!1&&o.smooth?(d=y-f,x=M-u,o.xOffset=c+(d*m+x*p)-d,o.yOffset=h+(d*_+x*g)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[an]="0px 0px",a&&(Fi(a,o,"xOrigin",f,y),Fi(a,o,"yOrigin",u,M),Fi(a,o,"xOffset",c,o.xOffset),Fi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},ks=function(e,t){var n=e._gsap||new Yd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),f=Yn(e,an)||"0",u,c,h,m,_,p,g,d,x,v,y,M,S,D,T,E,b,C,F,L,P,U,N,V,G,X,Y,oe,B,W,Z,ne;return u=c=h=p=g=d=x=v=y=0,m=_=1,n.svg=!!(e.getCTM&&lp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),i.scale=i.rotate=i.translate="none"),D=bl(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),f=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),$u(e,V||f,!!V||n.originIsAbsolute,n.smooth!==!1,D)),M=n.xOrigin||0,S=n.yOrigin||0,D!==Hs&&(C=D[0],F=D[1],L=D[2],P=D[3],u=U=D[4],c=N=D[5],D.length===6?(m=Math.sqrt(C*C+F*F),_=Math.sqrt(P*P+L*L),p=C||F?Vr(F,C)*ji:0,x=L||P?Vr(L,P)*ji+p:0,x&&(_*=Math.abs(Math.cos(x*Qr))),n.svg&&(u-=M-(M*C+S*L),c-=S-(M*F+S*P))):(ne=D[6],W=D[7],Y=D[8],oe=D[9],B=D[10],Z=D[11],u=D[12],c=D[13],h=D[14],T=Vr(ne,B),g=T*ji,T&&(E=Math.cos(-T),b=Math.sin(-T),V=U*E+Y*b,G=N*E+oe*b,X=ne*E+B*b,Y=U*-b+Y*E,oe=N*-b+oe*E,B=ne*-b+B*E,Z=W*-b+Z*E,U=V,N=G,ne=X),T=Vr(-L,B),d=T*ji,T&&(E=Math.cos(-T),b=Math.sin(-T),V=C*E-Y*b,G=F*E-oe*b,X=L*E-B*b,Z=P*b+Z*E,C=V,F=G,L=X),T=Vr(F,C),p=T*ji,T&&(E=Math.cos(T),b=Math.sin(T),V=C*E+F*b,G=U*E+N*b,F=F*E-C*b,N=N*E-U*b,C=V,U=G),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,d=180-d),m=Et(Math.sqrt(C*C+F*F+L*L)),_=Et(Math.sqrt(N*N+ne*ne)),T=Vr(U,N),x=Math.abs(T)>2e-4?T*ji:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fp(Yn(e,vt)),V&&e.setAttribute("transform",V))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(m*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=c-((n.yPercent=c&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-c)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Et(m),n.scaleY=Et(_),n.rotation=Et(p)+o,n.rotationX=Et(g)+o,n.rotationY=Et(d)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(i[an]=$a(f)),n.svg||(n.xOffset=n.yOffset=0),n.force3D=_n.force3D,n.renderTransform=n.svg?Qy:op?hp:Jy,n.uncache=0,n},$a=function(e){return(e=e.split(" "))[0]+" "+e[1]},mu=function(e,t,n){var i=Ht(t);return Et(parseFloat(t)+parseFloat(Oi(e,"x",n+"px",i)))+i},Jy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hp(e,t)},Zi="0deg",Ds="0px",Ki=") ",hp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,f=n.rotation,u=n.rotationY,c=n.rotationX,h=n.skewX,m=n.skewY,_=n.scaleX,p=n.scaleY,g=n.transformPerspective,d=n.force3D,x=n.target,v=n.zOrigin,y="",M=d==="auto"&&e&&e!==1||d===!0;if(v&&(c!==Zi||u!==Zi)){var S=parseFloat(u)*Qr,D=Math.sin(S),T=Math.cos(S),E;S=parseFloat(c)*Qr,E=Math.cos(S),a=mu(x,a,D*E*-v),o=mu(x,o,-Math.sin(S)*-v),l=mu(x,l,T*E*-v+v)}g!==Ds&&(y+="perspective("+g+Ki),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||a!==Ds||o!==Ds||l!==Ds)&&(y+=l!==Ds||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ki),f!==Zi&&(y+="rotate("+f+Ki),u!==Zi&&(y+="rotateY("+u+Ki),c!==Zi&&(y+="rotateX("+c+Ki),(h!==Zi||m!==Zi)&&(y+="skew("+h+", "+m+Ki),(_!==1||p!==1)&&(y+="scale("+_+", "+p+Ki),x.style[vt]=y||"translate(0, 0)"},Qy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,f=n.skewX,u=n.skewY,c=n.scaleX,h=n.scaleY,m=n.target,_=n.xOrigin,p=n.yOrigin,g=n.xOffset,d=n.yOffset,x=n.forceCSS,v=parseFloat(a),y=parseFloat(o),M,S,D,T,E;l=parseFloat(l),f=parseFloat(f),u=parseFloat(u),u&&(u=parseFloat(u),f+=u,l+=u),l||f?(l*=Qr,f*=Qr,M=Math.cos(l)*c,S=Math.sin(l)*c,D=Math.sin(l-f)*-h,T=Math.cos(l-f)*h,f&&(u*=Qr,E=Math.tan(f-u),E=Math.sqrt(1+E*E),D*=E,T*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),M*=E,S*=E)),M=Et(M),S=Et(S),D=Et(D),T=Et(T)):(M=c,T=h,S=D=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=Oi(m,"x",a,"px"),y=Oi(m,"y",o,"px")),(_||p||g||d)&&(v=Et(v+_-(_*M+p*D)+g),y=Et(y+p-(_*S+p*T)+d)),(i||s)&&(E=m.getBBox(),v=Et(v+i/100*E.width),y=Et(y+s/100*E.height)),E="matrix("+M+","+S+","+D+","+T+","+v+","+y+")",m.setAttribute("transform",E),x&&(m.style[vt]=E)},jy=function(e,t,n,i,s){var a=360,o=Nt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ji:1),f=l-i,u=i+f+"deg",c,h;return o&&(c=s.split("_")[1],c==="short"&&(f%=a,f!==f%(a/2)&&(f+=f<0?a:-a)),c==="cw"&&f<0?f=(f+a*Pf)%a-~~(f/a)*a:c==="ccw"&&f>0&&(f=(f-a*Pf)%a-~~(f/a)*a)),e._pt=h=new sn(e._pt,t,n,i,f,Iy),h.e=u,h.u="deg",e._props.push(n),h},Of=function(e,t){for(var n in t)e[n]=t[n];return e},eE=function(e,t,n){var i=Of({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,f,u,c,h,m,_;i.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),a[vt]=t,o=ks(n,1),pr(n,vt),n.setAttribute("transform",f)):(f=getComputedStyle(n)[vt],a[vt]=t,o=ks(n,1),a[vt]=f);for(l in _i)f=i[l],u=o[l],f!==u&&s.indexOf(l)<0&&(m=Ht(f),_=Ht(u),c=m!==_?Oi(n,l,f,_):parseFloat(f),h=parseFloat(u),e._pt=new sn(e._pt,o,l,c,h-c,Wu),e._pt.u=_||0,e._props.push(l));Of(o,i)};rn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});qa[e>1?"border"+r:r]=function(o,l,f,u,c){var h,m;if(arguments.length<4)return h=a.map(function(_){return ci(o,_,f)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(_,p){return m[_]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,m,c)}});var dp={name:"css",register:qu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,f,u,c,h,m,_,p,g,d,x,v,y,M,S,D,T;Al||qu(),this.styles=this.styles||ap(e),T=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(mn[p]&&Zd(p,t,n,i,e,s)))){if(m=typeof u,_=qa[p],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=zs(u)),_)_(this,e,p,u,n)&&(D=1);else if(p.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Ui.lastIndex=0,Ui.test(f)||(g=Ht(f),d=Ht(u)),d?g!==d&&(f=Oi(e,p,f,d)+d):g&&(u+=g),this.add(o,"setProperty",f,u,i,s,0,0,p),a.push(p),T.push(p,0,o[p]);else if(m!=="undefined"){if(l&&p in l?(f=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],Nt(f)&&~f.indexOf("random(")&&(f=zs(f)),Ht(f+"")||f==="auto"||(f+=_n.units[p]||Ht(ci(e,p))||""),(f+"").charAt(1)==="="&&(f=ci(e,p))):f=ci(e,p),h=parseFloat(f),x=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),c=parseFloat(u),p in qn&&(p==="autoAlpha"&&(h===1&&ci(e,"visibility")==="hidden"&&c&&(h=0),T.push("visibility",0,o.visibility),Fi(this,o,"visibility",h?"inherit":"hidden",c?"inherit":"hidden",!c)),p!=="scale"&&p!=="transform"&&(p=qn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in _i,v){if(this.styles.save(p),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||ks(e,t.parseTransform),S=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new sn(this._pt,o,vt,0,1,M.renderTransform,M,0,-1),y.dep=1),p==="scale")this._pt=new sn(this._pt,M,"scaleY",M.scaleY,(x?Kr(M.scaleY,x+c):c)-M.scaleY||0,Wu),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){T.push(an,0,o[an]),u=Zy(u),M.svg?$u(e,u,0,S,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==M.zOrigin&&Fi(this,M,"zOrigin",M.zOrigin,d),Fi(this,o,p,$a(f),$a(u)));continue}else if(p==="svgOrigin"){$u(e,u,1,S,0,this);continue}else if(p in cp){jy(this,M,p,h,x?Kr(h,x+u):u);continue}else if(p==="smoothOrigin"){Fi(this,M,"smooth",M.smooth,u);continue}else if(p==="force3D"){M[p]=u;continue}else if(p==="transform"){eE(this,u,e);continue}}else p in o||(p=us(p)||p);if(v||(c||c===0)&&(h||h===0)&&!Uy.test(u)&&p in o)g=(f+"").substr((h+"").length),c||(c=0),d=Ht(u)||(p in _n.units?_n.units[p]:g),g!==d&&(h=Oi(e,p,f,d)),this._pt=new sn(this._pt,v?M:o,p,h,(x?Kr(h,x+c):c)-h,!v&&(d==="px"||p==="zIndex")&&t.autoRound!==!1?Oy:Wu),this._pt.u=d||0,g!==d&&d!=="%"&&(this._pt.b=f,this._pt.r=By);else if(p in o)Yy.call(this,e,p,f,x?x+u:u);else if(p in e)this.add(e,p,f||e[p],x?x+u:u,i,s);else if(p!=="parseTransform"){ml(p,u);continue}v||(p in o?T.push(p,0,o[p]):T.push(p,1,f||e[p])),a.push(p)}}D&&tp(this)},render:function(e,t){if(t.tween._time||!wl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ci,aliases:qn,getSetter:function(e,t,n){var i=qn[t];return i&&i.indexOf(",")<0&&(t=i),t in _i&&t!==an&&(e._gsap.x||ci(e,"x"))?n&&Rf===n?t==="scale"?Hy:Vy:(Rf=n||{})&&(t==="scale"?ky:Wy):e.style&&!hl(e.style[t])?zy:~t.indexOf("-")?Gy:Ml(e,t)},core:{_removeProperty:pr,_getMatrix:bl}};on.utils.checkPrefix=us;on.core.getStyleSaver=ap;(function(r,e,t,n){var i=rn(r+","+e+","+t,function(s){_i[s]=1});rn(e,function(s){_n.units[s]="deg",cp[s]=1}),qn[i[13]]=r+","+e,rn(n,function(s){var a=s.split(":");qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){_n.units[r]="px"});on.registerPlugin(dp);var pp=on.registerPlugin(dp)||on;pp.core.Tween;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class Zn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Zn.nextNameID=Zn.nextNameID||0,this.$name.id=`lil-gui-name-${++Zn.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class tE extends Zn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Yu(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const nE={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Yu,toHexString:Yu},Ws={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},iE={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=Ws.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Ws.toHexString(i)}},rE={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Ws.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Ws.toHexString(i)}},sE=[nE,Ws,iE,rE];function aE(r){return sE.find(e=>e.match(r))}class oE extends Zn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=aE(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Yu(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class gu extends Zn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class uE extends Zn{constructor(e,t,n,i,s,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let a=!1,o,l,f,u,c;const h=5,m=x=>{o=x.clientX,l=f=x.clientY,a=!0,u=this.getValue(),c=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",p)},_=x=>{if(a){const v=x.clientX-o,y=x.clientY-l;Math.abs(y)>h?(x.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>h&&p()}if(!a){const v=x.clientY-f;c-=v*this._step*this._arrowKeyMultiplier(x),u+c>this._max?c=this._max-u:u+c<this._min&&(c=this._min-u),this._snapClampSetValue(u+c)}f=x.clientY},p=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",p)},g=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(d,x,v,y,M)=>(d-x)/(v-x)*(M-y)+y,t=d=>{const x=this.$slider.getBoundingClientRect();let v=e(d,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=d=>{t(d.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let a=!1,o,l;const f=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),a=!1},u=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,l=d.touches[0].clientY,a=!0):f(d),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",h))},c=d=>{if(a){const x=d.touches[0].clientX-o,v=d.touches[0].clientY-l;Math.abs(x)>Math.abs(v)?f(d):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",h))}else d.preventDefault(),t(d.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",h)},m=this._callOnFinishChange.bind(this),_=400;let p;const g=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const v=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class lE extends Zn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const a=document.createElement("option");a.innerHTML=s,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class cE extends Zn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const fE=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function hE(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let zf=!1;class Tl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",f=>{(f.code==="Enter"||f.code==="Space")&&(f.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!zf&&o&&(hE(fE),zf=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,s){if(Object(n)===n)return new lE(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new uE(this,e,t,n,i,s);case"boolean":return new tE(this,e,t);case"string":return new cE(this,e,t);case"function":return new gu(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new oE(this,e,t,n)}addFolder(e){const t=new Tl({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof gu||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof gu)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function ls(){return ls=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},ls.apply(this,arguments)}var mp={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function lt(r){return typeof r=="number"}function bt(r){return!r||typeof r!="object"||typeof r.constructor!="function"?!1:r.isBigNumber===!0&&typeof r.constructor.prototype=="object"&&r.constructor.prototype.isBigNumber===!0||typeof r.constructor.isDecimal=="function"&&r.constructor.isDecimal(r)===!0}function Cl(r){return r&&typeof r=="object"&&Object.getPrototypeOf(r).isComplex===!0||!1}function Fl(r){return r&&typeof r=="object"&&Object.getPrototypeOf(r).isFraction===!0||!1}function gp(r){return r&&r.constructor.prototype.isUnit===!0||!1}function On(r){return typeof r=="string"}var tt=Array.isArray;function ut(r){return r&&r.constructor.prototype.isMatrix===!0||!1}function Ya(r){return Array.isArray(r)||ut(r)}function vp(r){return r&&r.isDenseMatrix&&r.constructor.prototype.isMatrix===!0||!1}function _p(r){return r&&r.isSparseMatrix&&r.constructor.prototype.isMatrix===!0||!1}function xp(r){return r&&r.constructor.prototype.isRange===!0||!1}function Rl(r){return r&&r.constructor.prototype.isIndex===!0||!1}function dE(r){return typeof r=="boolean"}function pE(r){return r&&r.constructor.prototype.isResultSet===!0||!1}function mE(r){return r&&r.constructor.prototype.isHelp===!0||!1}function gE(r){return typeof r=="function"}function vE(r){return r instanceof Date}function _E(r){return r instanceof RegExp}function yp(r){return!!(r&&typeof r=="object"&&r.constructor===Object&&!Cl(r)&&!Fl(r))}function xE(r){return r===null}function yE(r){return r===void 0}function EE(r){return r&&r.isAccessorNode===!0&&r.constructor.prototype.isNode===!0||!1}function ME(r){return r&&r.isArrayNode===!0&&r.constructor.prototype.isNode===!0||!1}function SE(r){return r&&r.isAssignmentNode===!0&&r.constructor.prototype.isNode===!0||!1}function AE(r){return r&&r.isBlockNode===!0&&r.constructor.prototype.isNode===!0||!1}function wE(r){return r&&r.isConditionalNode===!0&&r.constructor.prototype.isNode===!0||!1}function DE(r){return r&&r.isConstantNode===!0&&r.constructor.prototype.isNode===!0||!1}function bE(r){return r&&r.isFunctionAssignmentNode===!0&&r.constructor.prototype.isNode===!0||!1}function TE(r){return r&&r.isFunctionNode===!0&&r.constructor.prototype.isNode===!0||!1}function CE(r){return r&&r.isIndexNode===!0&&r.constructor.prototype.isNode===!0||!1}function FE(r){return r&&r.isNode===!0&&r.constructor.prototype.isNode===!0||!1}function RE(r){return r&&r.isObjectNode===!0&&r.constructor.prototype.isNode===!0||!1}function PE(r){return r&&r.isOperatorNode===!0&&r.constructor.prototype.isNode===!0||!1}function LE(r){return r&&r.isParenthesisNode===!0&&r.constructor.prototype.isNode===!0||!1}function NE(r){return r&&r.isRangeNode===!0&&r.constructor.prototype.isNode===!0||!1}function UE(r){return r&&r.isRelationalNode===!0&&r.constructor.prototype.isNode===!0||!1}function IE(r){return r&&r.isSymbolNode===!0&&r.constructor.prototype.isNode===!0||!1}function BE(r){return r&&r.constructor.prototype.isChain===!0||!1}function gi(r){var e=typeof r;return e==="object"?r===null?"null":bt(r)?"BigNumber":r.constructor&&r.constructor.name?r.constructor.name:"Object":e}function et(r){var e=typeof r;if(e==="number"||e==="string"||e==="boolean"||r===null||r===void 0)return r;if(typeof r.clone=="function")return r.clone();if(Array.isArray(r))return r.map(function(t){return et(t)});if(r instanceof Date)return new Date(r.valueOf());if(bt(r))return r;if(yp(r))return OE(r,et);throw new TypeError("Cannot clone: unknown type of value (value: ".concat(r,")"))}function OE(r,e){var t={};for(var n in r)Xs(r,n)&&(t[n]=e(r[n]));return t}function zE(r,e){for(var t in e)Xs(e,t)&&(r[t]=e[t]);return r}function cs(r,e){var t,n,i;if(Array.isArray(r)){if(!Array.isArray(e)||r.length!==e.length)return!1;for(n=0,i=r.length;n<i;n++)if(!cs(r[n],e[n]))return!1;return!0}else{if(typeof r=="function")return r===e;if(r instanceof Object){if(Array.isArray(e)||!(e instanceof Object))return!1;for(t in r)if(!(t in e)||!cs(r[t],e[t]))return!1;for(t in e)if(!(t in r))return!1;return!0}else return r===e}}function Xs(r,e){return r&&Object.hasOwnProperty.call(r,e)}function GE(r,e){for(var t={},n=0;n<e.length;n++){var i=e[n],s=r[i];s!==void 0&&(t[i]=s)}return t}var VE=["Matrix","Array"],HE=["number","BigNumber","Fraction"],yn=function(e){if(e)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(mp)};ls(yn,mp,{MATRIX_OPTIONS:VE,NUMBER_OPTIONS:HE});function Gf(){return!0}function Sn(){return!1}function Hr(){}const Vf="Argument is not a typed-function.";function Ep(){function r(A){return typeof A=="object"&&A!==null&&A.constructor===Object}const e=[{name:"number",test:function(A){return typeof A=="number"}},{name:"string",test:function(A){return typeof A=="string"}},{name:"boolean",test:function(A){return typeof A=="boolean"}},{name:"Function",test:function(A){return typeof A=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(A){return A instanceof Date}},{name:"RegExp",test:function(A){return A instanceof RegExp}},{name:"Object",test:r},{name:"null",test:function(A){return A===null}},{name:"undefined",test:function(A){return A===void 0}}],t={name:"any",test:Gf,isAny:!0};let n,i,s=0,a={createCount:0};function o(A){const w=n.get(A);if(w)return w;let O='Unknown type "'+A+'"';const k=A.toLowerCase();let $;for($ of i)if($.toLowerCase()===k){O+='. Did you mean "'+$+'" ?';break}throw new TypeError(O)}function l(A){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any";const O=w?o(w).index:i.length,k=[];for(let R=0;R<A.length;++R){if(!A[R]||typeof A[R].name!="string"||typeof A[R].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");const J=A[R].name;if(n.has(J))throw new TypeError('Duplicate type name "'+J+'"');k.push(J),n.set(J,{name:J,test:A[R].test,isAny:A[R].isAny,index:O+R,conversionsTo:[]})}const $=i.slice(O);i=i.slice(0,O).concat(k).concat($);for(let R=O+k.length;R<i.length;++R)n.get(i[R]).index=R}function f(){n=new Map,i=[],s=0,l([t],!1)}f(),l(e);function u(){let A;for(A of i)n.get(A).conversionsTo=[];s=0}function c(A){const w=i.filter(O=>{const k=n.get(O);return!k.isAny&&k.test(A)});return w.length?w:["any"]}function h(A){return A&&typeof A=="function"&&"_typedFunctionData"in A}function m(A,w,O){if(!h(A))throw new TypeError(Vf);const k=O&&O.exact,$=Array.isArray(w)?w.join(","):w,R=y($),J=g(R);if(!k||J in A.signatures){const _e=A._typedFunctionData.signatureMap.get(J);if(_e)return _e}const K=R.length;let H;if(k){H=[];let _e;for(_e in A.signatures)H.push(A._typedFunctionData.signatureMap.get(_e))}else H=A._typedFunctionData.signatures;for(let _e=0;_e<K;++_e){const ge=R[_e],xe=[];let Se;for(Se of H){const Re=T(Se.params,_e);if(!(!Re||ge.restParam&&!Re.restParam)){if(!Re.hasAny){const Ge=v(Re);if(ge.types.some(q=>!Ge.has(q.name)))continue}xe.push(Se)}}if(H=xe,H.length===0)break}let te;for(te of H)if(te.params.length<=K)return te;throw new TypeError("Signature not found (signature: "+(A.name||"unnamed")+"("+g(R,", ")+"))")}function _(A,w,O){return m(A,w,O).implementation}function p(A,w){const O=o(w);if(O.test(A))return A;const k=O.conversionsTo;if(k.length===0)throw new Error("There are no conversions to "+w+" defined.");for(let $=0;$<k.length;$++)if(o(k[$].from).test(A))return k[$].convert(A);throw new Error("Cannot convert "+A+" to "+w)}function g(A){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return A.map(O=>O.name).join(w)}function d(A){const w=A.indexOf("...")===0,k=(w?A.length>3?A.slice(3):"any":A).split("|").map(K=>o(K.trim()));let $=!1,R=w?"...":"";return{types:k.map(function(K){return $=K.isAny||$,R+=K.name+"|",{name:K.name,typeIndex:K.index,test:K.test,isAny:K.isAny,conversion:null,conversionIndex:-1}}),name:R.slice(0,-1),hasAny:$,hasConversion:!1,restParam:w}}function x(A){const w=A.types.map(J=>J.name),O=V(w);let k=A.hasAny,$=A.name;const R=O.map(function(J){const K=o(J.from);return k=K.isAny||k,$+="|"+J.from,{name:J.from,typeIndex:K.index,test:K.test,isAny:K.isAny,conversion:J,conversionIndex:J.index}});return{types:A.types.concat(R),name:$,hasAny:k,hasConversion:R.length>0,restParam:A.restParam}}function v(A){return A.typeSet||(A.typeSet=new Set,A.types.forEach(w=>A.typeSet.add(w.name))),A.typeSet}function y(A){const w=[];if(typeof A!="string")throw new TypeError("Signatures must be strings");const O=A.trim();if(O==="")return w;const k=O.split(",");for(let $=0;$<k.length;++$){const R=d(k[$].trim());if(R.restParam&&$!==k.length-1)throw new SyntaxError('Unexpected rest parameter "'+k[$]+'": only allowed for the last parameter');if(R.types.length===0)return null;w.push(R)}return w}function M(A){const w=se(A);return w?w.restParam:!1}function S(A){if(!A||A.types.length===0)return Gf;if(A.types.length===1)return o(A.types[0].name).test;if(A.types.length===2){const w=o(A.types[0].name).test,O=o(A.types[1].name).test;return function($){return w($)||O($)}}else{const w=A.types.map(function(O){return o(O.name).test});return function(k){for(let $=0;$<w.length;$++)if(w[$](k))return!0;return!1}}}function D(A){let w,O,k;if(M(A)){w=ue(A).map(S);const $=w.length,R=S(se(A)),J=function(K){for(let H=$;H<K.length;H++)if(!R(K[H]))return!1;return!0};return function(H){for(let te=0;te<w.length;te++)if(!w[te](H[te]))return!1;return J(H)&&H.length>=$+1}}else return A.length===0?function(R){return R.length===0}:A.length===1?(O=S(A[0]),function(R){return O(R[0])&&R.length===1}):A.length===2?(O=S(A[0]),k=S(A[1]),function(R){return O(R[0])&&k(R[1])&&R.length===2}):(w=A.map(S),function(R){for(let J=0;J<w.length;J++)if(!w[J](R[J]))return!1;return R.length===w.length})}function T(A,w){return w<A.length?A[w]:M(A)?se(A):null}function E(A,w){const O=T(A,w);return O?v(O):new Set}function b(A){return A.conversion===null||A.conversion===void 0}function C(A,w){const O=new Set;return A.forEach(k=>{const $=E(k.params,w);let R;for(R of $)O.add(R)}),O.has("any")?["any"]:Array.from(O)}function F(A,w,O){let k,$;const R=A||"unnamed";let J=O,K;for(K=0;K<w.length;K++){const ge=[];if(J.forEach(xe=>{const Se=T(xe.params,K),Re=S(Se);(K<xe.params.length||M(xe.params))&&Re(w[K])&&ge.push(xe)}),ge.length===0){if($=C(J,K),$.length>0){const xe=c(w[K]);return k=new TypeError("Unexpected type of argument in function "+R+" (expected: "+$.join(" or ")+", actual: "+xe.join(" | ")+", index: "+K+")"),k.data={category:"wrongType",fn:R,index:K,actual:xe,expected:$},k}}else J=ge}const H=J.map(function(ge){return M(ge.params)?1/0:ge.params.length});if(w.length<Math.min.apply(null,H))return $=C(J,K),k=new TypeError("Too few arguments in function "+R+" (expected: "+$.join(" or ")+", index: "+w.length+")"),k.data={category:"tooFewArgs",fn:R,index:w.length,expected:$},k;const te=Math.max.apply(null,H);if(w.length>te)return k=new TypeError("Too many arguments in function "+R+" (expected: "+te+", actual: "+w.length+")"),k.data={category:"tooManyArgs",fn:R,index:w.length,expectedLength:te},k;const _e=[];for(let ge=0;ge<w.length;++ge)_e.push(c(w[ge]).join("|"));return k=new TypeError('Arguments of type "'+_e.join(", ")+'" do not match any of the defined signatures of function '+R+"."),k.data={category:"mismatch",actual:_e},k}function L(A){let w=i.length+1;for(let O=0;O<A.types.length;O++)b(A.types[O])&&(w=Math.min(w,A.types[O].typeIndex));return w}function P(A){let w=s+1;for(let O=0;O<A.types.length;O++)b(A.types[O])||(w=Math.min(w,A.types[O].conversionIndex));return w}function U(A,w){if(A.hasAny){if(!w.hasAny)return 1}else if(w.hasAny)return-1;if(A.restParam){if(!w.restParam)return 1}else if(w.restParam)return-1;if(A.hasConversion){if(!w.hasConversion)return 1}else if(w.hasConversion)return-1;const O=L(A)-L(w);if(O<0)return-1;if(O>0)return 1;const k=P(A)-P(w);return k<0?-1:k>0?1:0}function N(A,w){const O=A.params,k=w.params,$=se(O),R=se(k),J=M(O),K=M(k);if(J&&$.hasAny){if(!K||!R.hasAny)return 1}else if(K&&R.hasAny)return-1;let H=0,te=0,_e;for(_e of O)_e.hasAny&&++H,_e.hasConversion&&++te;let ge=0,xe=0;for(_e of k)_e.hasAny&&++ge,_e.hasConversion&&++xe;if(H!==ge)return H-ge;if(J&&$.hasConversion){if(!K||!R.hasConversion)return 1}else if(K&&R.hasConversion)return-1;if(te!==xe)return te-xe;if(J){if(!K)return 1}else if(K)return-1;const Se=(O.length-k.length)*(J?-1:1);if(Se!==0)return Se;const Re=[];let Ge=0;for(let ye=0;ye<O.length;++ye){const ae=U(O[ye],k[ye]);Re.push(ae),Ge+=ae}if(Ge!==0)return Ge;let q;for(q of Re)if(q!==0)return q;return 0}function V(A){if(A.length===0)return[];const w=A.map(o);A.length>1&&w.sort(($,R)=>$.index-R.index);let O=w[0].conversionsTo;if(A.length===1)return O;O=O.concat([]);const k=new Set(A);for(let $=1;$<w.length;++$){let R;for(R of w[$].conversionsTo)k.has(R.from)||(O.push(R),k.add(R.from))}return O}function G(A,w){let O=w;if(A.some($=>$.hasConversion)){const $=M(A),R=A.map(X);O=function(){const K=[],H=$?arguments.length-1:arguments.length;for(let te=0;te<H;te++)K[te]=R[te](arguments[te]);return $&&(K[H]=arguments[H].map(R[H])),w.apply(this,K)}}let k=O;if(M(A)){const $=A.length-1;k=function(){return O.apply(this,fe(arguments,0,$).concat([fe(arguments,$)]))}}return k}function X(A){let w,O,k,$;const R=[],J=[];switch(A.types.forEach(function(K){K.conversion&&(R.push(o(K.conversion.from).test),J.push(K.conversion.convert))}),J.length){case 0:return function(H){return H};case 1:return w=R[0],k=J[0],function(H){return w(H)?k(H):H};case 2:return w=R[0],O=R[1],k=J[0],$=J[1],function(H){return w(H)?k(H):O(H)?$(H):H};default:return function(H){for(let te=0;te<J.length;te++)if(R[te](H))return J[te](H);return H}}}function Y(A){function w(O,k,$){if(k<O.length){const R=O[k];let J=[];if(R.restParam){const K=R.types.filter(b);K.length<R.types.length&&J.push({types:K,name:"..."+K.map(H=>H.name).join("|"),hasAny:K.some(H=>H.isAny),hasConversion:!1,restParam:!0}),J.push(R)}else J=R.types.map(function(K){return{types:[K],name:K.name,hasAny:K.isAny,hasConversion:K.conversion,restParam:!1}});return z(J,function(K){return w(O,k+1,$.concat([K]))})}else return[$]}return w(A,0,[])}function oe(A,w){const O=Math.max(A.length,w.length);for(let K=0;K<O;K++){const H=E(A,K),te=E(w,K);let _e=!1,ge;for(ge of te)if(H.has(ge)){_e=!0;break}if(!_e)return!1}const k=A.length,$=w.length,R=M(A),J=M(w);return R?J?k===$:$>=k:J?k>=$:k===$}function B(A){return A.map(w=>Pe(w)?ve(w.referToSelf.callback):me(w)?pe(w.referTo.references,w.referTo.callback):w)}function W(A,w,O){const k=[];let $;for($ of A){let R=O[$];if(typeof R!="number")throw new TypeError('No definition for referenced signature "'+$+'"');if(R=w[R],typeof R!="function")return!1;k.push(R)}return k}function Z(A,w,O){const k=B(A),$=new Array(k.length).fill(!1);let R=!0;for(;R;){R=!1;let J=!0;for(let K=0;K<k.length;++K){if($[K])continue;const H=k[K];if(Pe(H))k[K]=H.referToSelf.callback(O),k[K].referToSelf=H.referToSelf,$[K]=!0,J=!1;else if(me(H)){const te=W(H.referTo.references,k,w);te?(k[K]=H.referTo.callback.apply(this,te),k[K].referTo=H.referTo,$[K]=!0,J=!1):R=!0}}if(J&&R)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return k}function ne(A){const w=/\bthis(\(|\.signatures\b)/;Object.keys(A).forEach(O=>{const k=A[O];if(w.test(k.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function re(A,w){if(a.createCount++,Object.keys(w).length===0)throw new SyntaxError("No signatures provided");a.warnAgainstDeprecatedThis&&ne(w);const O=[],k=[],$={},R=[];let J;for(J in w){if(!Object.prototype.hasOwnProperty.call(w,J))continue;const be=y(J);if(!be)continue;O.forEach(function(It){if(oe(It,be))throw new TypeError('Conflicting signatures "'+g(It)+'" and "'+g(be)+'".')}),O.push(be);const Ue=k.length;k.push(w[J]);const it=be.map(x);let ot;for(ot of Y(it)){const It=g(ot);R.push({params:ot,name:It,fn:Ue}),ot.every(Pn=>!Pn.hasConversion)&&($[It]=Ue)}}R.sort(N);const K=Z(k,$,We);let H;for(H in $)Object.prototype.hasOwnProperty.call($,H)&&($[H]=K[$[H]]);const te=[],_e=new Map;for(H of R)_e.has(H.name)||(H.fn=K[H.fn],te.push(H),_e.set(H.name,H));const ge=te[0]&&te[0].params.length<=2&&!M(te[0].params),xe=te[1]&&te[1].params.length<=2&&!M(te[1].params),Se=te[2]&&te[2].params.length<=2&&!M(te[2].params),Re=te[3]&&te[3].params.length<=2&&!M(te[3].params),Ge=te[4]&&te[4].params.length<=2&&!M(te[4].params),q=te[5]&&te[5].params.length<=2&&!M(te[5].params),ye=ge&&xe&&Se&&Re&&Ge&&q;for(let be=0;be<te.length;++be)te[be].test=D(te[be].params);const ae=ge?S(te[0].params[0]):Sn,Ee=xe?S(te[1].params[0]):Sn,De=Se?S(te[2].params[0]):Sn,Je=Re?S(te[3].params[0]):Sn,ct=Ge?S(te[4].params[0]):Sn,_t=q?S(te[5].params[0]):Sn,ei=ge?S(te[0].params[1]):Sn,ft=xe?S(te[1].params[1]):Sn,En=Se?S(te[2].params[1]):Sn,Ut=Re?S(te[3].params[1]):Sn,aa=Ge?S(te[4].params[1]):Sn,oa=q?S(te[5].params[1]):Sn;for(let be=0;be<te.length;++be)te[be].implementation=G(te[be].params,te[be].fn);const Eo=ge?te[0].implementation:Hr,Er=xe?te[1].implementation:Hr,ua=Se?te[2].implementation:Hr,Mr=Re?te[3].implementation:Hr,la=Ge?te[4].implementation:Hr,Mo=q?te[5].implementation:Hr,So=ge?te[0].params.length:-1,Ao=xe?te[1].params.length:-1,I=Se?te[2].params.length:-1,ie=Re?te[3].params.length:-1,le=Ge?te[4].params.length:-1,j=q?te[5].params.length:-1,ce=ye?6:0,Fe=te.length,Ie=te.map(be=>be.test),Ve=te.map(be=>be.implementation),He=function(){for(let Ue=ce;Ue<Fe;Ue++)if(Ie[Ue](arguments))return Ve[Ue].apply(this,arguments);return a.onMismatch(A,arguments,te)};function We(be,Ue){return arguments.length===So&&ae(be)&&ei(Ue)?Eo.apply(this,arguments):arguments.length===Ao&&Ee(be)&&ft(Ue)?Er.apply(this,arguments):arguments.length===I&&De(be)&&En(Ue)?ua.apply(this,arguments):arguments.length===ie&&Je(be)&&Ut(Ue)?Mr.apply(this,arguments):arguments.length===le&&ct(be)&&aa(Ue)?la.apply(this,arguments):arguments.length===j&&_t(be)&&oa(Ue)?Mo.apply(this,arguments):He.apply(this,arguments)}try{Object.defineProperty(We,"name",{value:A})}catch{}return We.signatures=$,We._typedFunctionData={signatures:te,signatureMap:_e},We}function ee(A,w,O){throw F(A,w,O)}function ue(A){return fe(A,0,A.length-1)}function se(A){return A[A.length-1]}function fe(A,w,O){return Array.prototype.slice.call(A,w,O)}function de(A,w){for(let O=0;O<A.length;O++)if(w(A[O]))return A[O]}function z(A,w){return Array.prototype.concat.apply([],A.map(w))}function we(){const A=ue(arguments).map(O=>g(y(O))),w=se(arguments);if(typeof w!="function")throw new TypeError("Callback function expected as last argument");return pe(A,w)}function pe(A,w){return{referTo:{references:A,callback:w}}}function ve(A){if(typeof A!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:A}}}function me(A){return A&&typeof A.referTo=="object"&&Array.isArray(A.referTo.references)&&typeof A.referTo.callback=="function"}function Pe(A){return A&&typeof A.referToSelf=="object"&&typeof A.referToSelf.callback=="function"}function Te(A,w){if(!A)return w;if(w&&w!==A){const O=new Error("Function names do not match (expected: "+A+", actual: "+w+")");throw O.data={actual:w,expected:A},O}return A}function Ce(A){let w;for(const O in A)Object.prototype.hasOwnProperty.call(A,O)&&(h(A[O])||typeof A[O].signature=="string")&&(w=Te(w,A[O].name));return w}function Le(A,w){let O;for(O in w)if(Object.prototype.hasOwnProperty.call(w,O)){if(O in A&&w[O]!==A[O]){const k=new Error('Signature "'+O+'" is defined twice');throw k.data={signature:O,sourceFunction:w[O],destFunction:A[O]},k}A[O]=w[O]}}const ze=a;a=function(A){const w=typeof A=="string",O=w?1:0;let k=w?A:"";const $={};for(let R=O;R<arguments.length;++R){const J=arguments[R];let K={},H;if(typeof J=="function"?(H=J.name,typeof J.signature=="string"?K[J.signature]=J:h(J)&&(K=J.signatures)):r(J)&&(K=J,w||(H=Ce(J))),Object.keys(K).length===0){const te=new TypeError("Argument to 'typed' at index "+R+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw te.data={index:R,argument:J},te}w||(k=Te(k,H)),Le($,K)}return re(k||"",$)},a.create=Ep,a.createCount=ze.createCount,a.onMismatch=ee,a.throwMismatchError=ee,a.createError=F,a.clear=f,a.clearConversions=u,a.addTypes=l,a._findType=o,a.referTo=we,a.referToSelf=ve,a.convert=p,a.findSignature=m,a.find=_,a.isTypedFunction=h,a.warnAgainstDeprecatedThis=!0,a.addType=function(A,w){let O="any";w!==!1&&n.has("Object")&&(O="Object"),a.addTypes([A],O)};function Ze(A){if(!A||typeof A.from!="string"||typeof A.to!="string"||typeof A.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(A.to===A.from)throw new SyntaxError('Illegal to define conversion from "'+A.from+'" to itself.')}return a.addConversion=function(A){Ze(A);const w=o(A.to);if(w.conversionsTo.every(function(O){return O.from!==A.from}))w.conversionsTo.push({from:A.from,convert:A.convert,index:s++});else throw new Error('There is already a conversion from "'+A.from+'" to "'+w.name+'"')},a.addConversions=function(A){A.forEach(a.addConversion)},a.removeConversion=function(A){Ze(A);const w=o(A.to),O=de(w.conversionsTo,$=>$.from===A.from);if(!O)throw new Error("Attempt to remove nonexistent conversion from "+A.from+" to "+A.to);if(O.convert!==A.convert)throw new Error("Conversion to remove does not match existing conversion");const k=w.conversionsTo.indexOf(O);w.conversionsTo.splice(k,1)},a.resolve=function(A,w){if(!h(A))throw new TypeError(Vf);const O=A._typedFunctionData.signatures;for(let k=0;k<O.length;++k)if(O[k].test(w))return O[k];return null},a}const Hf=Ep();function gt(r){return typeof r=="boolean"?!0:isFinite(r)?r===Math.round(r):!1}var kE=Math.sign||function(r){return r>0?1:r<0?-1:0};function vu(r,e,t){var n={2:"0b",8:"0o",16:"0x"},i=n[e],s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!gt(t))throw new Error("size must be an integer");if(r>2**(t-1)-1||r<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!gt(r))throw new Error("Value must be an integer");r<0&&(r=r+2**t),s="i".concat(t)}var a="";return r<0&&(r=-r,a="-"),"".concat(a).concat(i).concat(r.toString(e)).concat(s)}function Zu(r,e){if(typeof e=="function")return e(r);if(r===1/0)return"Infinity";if(r===-1/0)return"-Infinity";if(isNaN(r))return"NaN";var t="auto",n,i;if(e&&(e.notation&&(t=e.notation),lt(e)?n=e:lt(e.precision)&&(n=e.precision),e.wordSize&&(i=e.wordSize,typeof i!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return XE(r,n);case"exponential":return Mp(r,n);case"engineering":return WE(r,n);case"bin":return vu(r,2,i);case"oct":return vu(r,8,i);case"hex":return vu(r,16,i);case"auto":return qE(r,n,e&&e).replace(/((\.\d*?)(0+))($|e)/,function(){var s=arguments[2],a=arguments[4];return s!=="."?s+a:a});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function ho(r){var e=String(r).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+r);var t=e[1],n=e[2],i=parseFloat(e[4]||"0"),s=n.indexOf(".");i+=s!==-1?s-1:n.length-1;var a=n.replace(".","").replace(/^0*/,function(o){return i-=o.length,""}).replace(/0*$/,"").split("").map(function(o){return parseInt(o)});return a.length===0&&(a.push(0),i++),{sign:t,coefficients:a,exponent:i}}function WE(r,e){if(isNaN(r)||!isFinite(r))return String(r);var t=ho(r),n=po(t,e),i=n.exponent,s=n.coefficients,a=i%3===0?i:i<0?i-3-i%3:i-i%3;if(lt(e))for(;e>s.length||i-a+1>s.length;)s.push(0);else for(var o=Math.abs(i-a)-(s.length-1),l=0;l<o;l++)s.push(0);for(var f=Math.abs(i-a),u=1;f>0;)u++,f--;var c=s.slice(u).join(""),h=lt(e)&&c.length||c.match(/[1-9]/)?"."+c:"",m=s.slice(0,u).join("")+h+"e"+(i>=0?"+":"")+a.toString();return n.sign+m}function XE(r,e){if(isNaN(r)||!isFinite(r))return String(r);var t=ho(r),n=typeof e=="number"?po(t,t.exponent+1+e):t,i=n.coefficients,s=n.exponent+1,a=s+(e||0);return i.length<a&&(i=i.concat(jr(a-i.length))),s<0&&(i=jr(-s+1).concat(i),s=1),s<i.length&&i.splice(s,0,s===0?"0.":"."),n.sign+i.join("")}function Mp(r,e){if(isNaN(r)||!isFinite(r))return String(r);var t=ho(r),n=e?po(t,e):t,i=n.coefficients,s=n.exponent;i.length<e&&(i=i.concat(jr(e-i.length)));var a=i.shift();return n.sign+a+(i.length>0?"."+i.join(""):"")+"e"+(s>=0?"+":"")+s}function qE(r,e,t){if(isNaN(r)||!isFinite(r))return String(r);var n=t&&t.lowerExp!==void 0?t.lowerExp:-3,i=t&&t.upperExp!==void 0?t.upperExp:5,s=ho(r),a=e?po(s,e):s;if(a.exponent<n||a.exponent>=i)return Mp(r,e);var o=a.coefficients,l=a.exponent;o.length<e&&(o=o.concat(jr(e-o.length))),o=o.concat(jr(l-o.length+1+(o.length<e?e-o.length:0))),o=jr(-l).concat(o);var f=l>0?l:0;return f<o.length-1&&o.splice(f+1,0,"."),a.sign+o.join("")}function po(r,e){for(var t={sign:r.sign,coefficients:r.coefficients,exponent:r.exponent},n=t.coefficients;e<=0;)n.unshift(0),t.exponent++,e++;if(n.length>e){var i=n.splice(e,n.length-e);if(i[0]>=5){var s=e-1;for(n[s]++;n[s]===10;)n.pop(),s===0&&(n.unshift(0),t.exponent++,s++),s--,n[s]++}}return t}function jr(r){for(var e=[],t=0;t<r;t++)e.push(0);return e}function $E(r){return r.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}var YE=Number.EPSILON||2220446049250313e-31;function zi(r,e,t){if(t==null)return r===e;if(r===e)return!0;if(isNaN(r)||isNaN(e))return!1;if(isFinite(r)&&isFinite(e)){var n=Math.abs(r-e);return n<=YE?!0:n<=Math.max(Math.abs(r),Math.abs(e))*t}return!1}function _u(r,e,t){var n=r.constructor,i=new n(2),s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!gt(t))throw new Error("size must be an integer");if(r.greaterThan(i.pow(t-1).sub(1))||r.lessThan(i.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!r.isInteger())throw new Error("Value must be an integer");r.lessThan(0)&&(r=r.add(i.pow(t))),s="i".concat(t)}switch(e){case 2:return"".concat(r.toBinary()).concat(s);case 8:return"".concat(r.toOctal()).concat(s);case 16:return"".concat(r.toHexadecimal()).concat(s);default:throw new Error("Base ".concat(e," not supported "))}}function ZE(r,e){if(typeof e=="function")return e(r);if(!r.isFinite())return r.isNaN()?"NaN":r.gt(0)?"Infinity":"-Infinity";var t="auto",n,i;if(e!==void 0&&(e.notation&&(t=e.notation),typeof e=="number"?n=e:e.precision!==void 0&&(n=e.precision),e.wordSize&&(i=e.wordSize,typeof i!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return JE(r,n);case"exponential":return kf(r,n);case"engineering":return KE(r,n);case"bin":return _u(r,2,i);case"oct":return _u(r,8,i);case"hex":return _u(r,16,i);case"auto":{var s=e&&e.lowerExp!==void 0?e.lowerExp:-3,a=e&&e.upperExp!==void 0?e.upperExp:5;if(r.isZero())return"0";var o,l=r.toSignificantDigits(n),f=l.e;return f>=s&&f<a?o=l.toFixed():o=kf(r,n),o.replace(/((\.\d*?)(0+))($|e)/,function(){var u=arguments[2],c=arguments[4];return u!=="."?u+c:c})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function KE(r,e){var t=r.e,n=t%3===0?t:t<0?t-3-t%3:t-t%3,i=r.mul(Math.pow(10,-n)),s=i.toPrecision(e);if(s.indexOf("e")!==-1){var a=r.constructor;s=new a(s).toFixed()}return s+"e"+(t>=0?"+":"")+n.toString()}function kf(r,e){return e!==void 0?r.toExponential(e-1):r.toExponential()}function JE(r,e){return r.toFixed(e)}function pt(r,e){var t=QE(r,e);return e&&typeof e=="object"&&"truncate"in e&&t.length>e.truncate?t.substring(0,e.truncate-3)+"...":t}function QE(r,e){if(typeof r=="number")return Zu(r,e);if(bt(r))return ZE(r,e);if(jE(r))return!e||e.fraction!=="decimal"?r.s*r.n+"/"+r.d:r.toString();if(Array.isArray(r))return Sp(r,e);if(On(r))return Wf(r);if(typeof r=="function")return r.syntax?String(r.syntax):"function";if(r&&typeof r=="object"){if(typeof r.format=="function")return r.format(e);if(r&&r.toString(e)!=={}.toString())return r.toString(e);var t=Object.keys(r).map(n=>Wf(n)+": "+pt(r[n],e));return"{"+t.join(", ")+"}"}return String(r)}function Wf(r){for(var e=String(r),t="",n=0;n<e.length;){var i=e.charAt(n);t+=i in Xf?Xf[i]:i,n++}return'"'+t+'"'}var Xf={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"};function Sp(r,e){if(Array.isArray(r)){for(var t="[",n=r.length,i=0;i<n;i++)i!==0&&(t+=", "),t+=Sp(r[i],e);return t+="]",t}else return pt(r,e)}function jE(r){return r&&typeof r=="object"&&typeof r.s=="number"&&typeof r.n=="number"&&typeof r.d=="number"||!1}function je(r,e,t){if(!(this instanceof je))throw new SyntaxError("Constructor must be called with the new operator");this.actual=r,this.expected=e,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(r)?"["+r.join(", ")+"]":r)+" "+(this.relation||"!=")+" "+(Array.isArray(e)?"["+e.join(", ")+"]":e)+")",this.stack=new Error().stack}je.prototype=new RangeError;je.prototype.constructor=RangeError;je.prototype.name="DimensionError";je.prototype.isDimensionError=!0;function vr(r,e,t){if(!(this instanceof vr))throw new SyntaxError("Constructor must be called with the new operator");this.index=r,arguments.length<3?(this.min=0,this.max=e):(this.min=e,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}vr.prototype=new RangeError;vr.prototype.constructor=RangeError;vr.prototype.name="IndexError";vr.prototype.isIndexError=!0;function wt(r){for(var e=[];Array.isArray(r);)e.push(r.length),r=r[0];return e}function Ap(r,e,t){var n,i=r.length;if(i!==e[t])throw new je(i,e[t]);if(t<e.length-1){var s=t+1;for(n=0;n<i;n++){var a=r[n];if(!Array.isArray(a))throw new je(e.length-1,e.length,"<");Ap(r[n],e,s)}}else for(n=0;n<i;n++)if(Array.isArray(r[n]))throw new je(e.length+1,e.length,">")}function qf(r,e){var t=e.length===0;if(t){if(Array.isArray(r))throw new je(r.length,0)}else Ap(r,e,0)}function ht(r,e){if(r!==void 0){if(!lt(r)||!gt(r))throw new TypeError("Index must be an integer (value: "+r+")");if(r<0||typeof e=="number"&&r>=e)throw new vr(r,e)}}function Za(r,e,t){if(!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Error("Resizing to scalar is not supported");e.forEach(function(i){if(!lt(i)||!gt(i)||i<0)throw new TypeError("Invalid size, must contain positive integers (size: "+pt(e)+")")}),(lt(r)||bt(r))&&(r=[r]);var n=t!==void 0?t:0;return Ku(r,e,0,n),r}function Ku(r,e,t,n){var i,s,a=r.length,o=e[t],l=Math.min(a,o);if(r.length=o,t<e.length-1){var f=t+1;for(i=0;i<l;i++)s=r[i],Array.isArray(s)||(s=[s],r[i]=s),Ku(s,e,f,n);for(i=l;i<o;i++)s=[],r[i]=s,Ku(s,e,f,n)}else{for(i=0;i<l;i++)for(;Array.isArray(r[i]);)r[i]=r[i][0];for(i=l;i<o;i++)r[i]=n}}function Pl(r,e){var t=Ju(r),n=t.length;if(!Array.isArray(r)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new je(0,n,"!=");e=Ll(e,n);var i=wp(e);if(n!==i)throw new je(i,n,"!=");try{return eM(t,e)}catch(s){throw s instanceof je?new je(i,n,"!="):s}}function Ll(r,e){var t=wp(r),n=r.slice(),i=-1,s=r.indexOf(i),a=r.indexOf(i,s+1)>=0;if(a)throw new Error("More than one wildcard in sizes");var o=s>=0,l=e%t===0;if(o)if(l)n[s]=-e/t;else throw new Error("Could not replace wildcard, since "+e+" is no multiple of "+-t);return n}function wp(r){return r.reduce((e,t)=>e*t,1)}function eM(r,e){for(var t=r,n,i=e.length-1;i>0;i--){var s=e[i];n=[];for(var a=t.length/s,o=0;o<a;o++)n.push(t.slice(o*s,(o+1)*s));t=n}return t}function Dp(r,e,t,n){var i=n||wt(r);if(t)for(var s=0;s<t;s++)r=[r],i.unshift(1);for(r=bp(r,e,0);i.length<e;)i.push(1);return r}function bp(r,e,t){var n,i;if(Array.isArray(r)){var s=t+1;for(n=0,i=r.length;n<i;n++)r[n]=bp(r[n],e,s)}else for(var a=t;a<e;a++)r=[r];return r}function Ju(r){if(!Array.isArray(r))return r;var e=[];return r.forEach(function t(n){Array.isArray(n)?n.forEach(t):e.push(n)}),e}function qs(r,e){for(var t,n=0,i=0;i<r.length;i++){var s=r[i],a=Array.isArray(s);if(i===0&&a&&(n=s.length),a&&s.length!==n)return;var o=a?qs(s,e):e(s);if(t===void 0)t=o;else if(t!==o)return"mixed"}return t}function Tp(r,e,t,n){if(n<t){if(r.length!==e.length)throw new je(r.length,e.length);for(var i=[],s=0;s<r.length;s++)i[s]=Tp(r[s],e[s],t,n+1);return i}else return r.concat(e)}function Cp(){var r=Array.prototype.slice.call(arguments,0,-1),e=Array.prototype.slice.call(arguments,-1);if(r.length===1)return r[0];if(r.length>1)return r.slice(1).reduce(function(t,n){return Tp(t,n,e,0)},r[0]);throw new Error("Wrong number of arguments in function concat")}function tM(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];for(var n=e.map(h=>h.length),i=Math.max(...n),s=new Array(i).fill(null),a=0;a<e.length;a++)for(var o=e[a],l=n[a],f=0;f<l;f++){var u=i-l+f;o[f]>s[u]&&(s[u]=o[f])}for(var c=0;c<e.length;c++)Ka(e[c],s);return s}function Ka(r,e){for(var t=e.length,n=r.length,i=0;i<n;i++){var s=t-n+i;if(r[i]<e[s]&&r[i]>1||r[i]>e[s])throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(r,") not possible to broadcast dimension ").concat(n," with size ").concat(r[i]," to size ").concat(e[s]))}}function $f(r,e){var t=wt(r);if(cs(t,e))return r;Ka(t,e);var n=tM(t,e),i=n.length,s=[...Array(i-t.length).fill(1),...t],a=iM(r);t.length<i&&(a=Pl(a,s),t=wt(a));for(var o=0;o<i;o++)t[o]<n[o]&&(a=nM(a,n[o],o),t=wt(a));return a}function nM(r,e,t){return Cp(...Array(e).fill(r),t)}function iM(r){return ls([],r)}function Me(r,e,t,n){function i(s){var a=GE(s,e.map(aM));return rM(r,e,s),t(a)}return i.isFactory=!0,i.fn=r,i.dependencies=e.slice().sort(),n&&(i.meta=n),i}function rM(r,e,t){var n=e.filter(s=>!sM(s)).every(s=>t[s]!==void 0);if(!n){var i=e.filter(s=>t[s]===void 0);throw new Error('Cannot create function "'.concat(r,'", ')+"some dependencies are missing: ".concat(i.map(s=>'"'.concat(s,'"')).join(", "),"."))}}function sM(r){return r&&r[0]==="?"}function aM(r){return r&&r[0]==="?"?r.slice(1):r}function oM(r,e){if(Rp(r)&&Fp(r,e))return r[e];throw typeof r[e]=="function"&&cM(r,e)?new Error('Cannot access method "'+e+'" as a property'):new Error('No access to property "'+e+'"')}function uM(r,e,t){if(Rp(r)&&Fp(r,e))return r[e]=t,t;throw new Error('No access to property "'+e+'"')}function lM(r,e){return e in r}function Fp(r,e){return!r||typeof r!="object"?!1:Xs(fM,e)?!0:!(e in Object.prototype||e in Function.prototype)}function cM(r,e){return r==null||typeof r[e]!="function"||Xs(r,e)&&Object.getPrototypeOf&&e in Object.getPrototypeOf(r)?!1:Xs(hM,e)?!0:!(e in Object.prototype||e in Function.prototype)}function Rp(r){return typeof r=="object"&&r&&r.constructor===Object}var fM={length:!0,name:!0},hM={toString:!0,valueOf:!0,toLocaleString:!0};class dM{constructor(e){this.wrappedObject=e}keys(){return Object.keys(this.wrappedObject)}get(e){return oM(this.wrappedObject,e)}set(e,t){return uM(this.wrappedObject,e,t),this}has(e){return lM(this.wrappedObject,e)}}function pM(r){return r?r instanceof Map||r instanceof dM||typeof r.set=="function"&&typeof r.get=="function"&&typeof r.keys=="function"&&typeof r.has=="function":!1}var Pp=function(){return Pp=Hf.create,Hf},mM=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],gM=Me("typed",mM,function(e){var{BigNumber:t,Complex:n,DenseMatrix:i,Fraction:s}=e,a=Pp();return a.clear(),a.addTypes([{name:"number",test:lt},{name:"Complex",test:Cl},{name:"BigNumber",test:bt},{name:"Fraction",test:Fl},{name:"Unit",test:gp},{name:"identifier",test:o=>On&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(o)},{name:"string",test:On},{name:"Chain",test:BE},{name:"Array",test:tt},{name:"Matrix",test:ut},{name:"DenseMatrix",test:vp},{name:"SparseMatrix",test:_p},{name:"Range",test:xp},{name:"Index",test:Rl},{name:"boolean",test:dE},{name:"ResultSet",test:pE},{name:"Help",test:mE},{name:"function",test:gE},{name:"Date",test:vE},{name:"RegExp",test:_E},{name:"null",test:xE},{name:"undefined",test:yE},{name:"AccessorNode",test:EE},{name:"ArrayNode",test:ME},{name:"AssignmentNode",test:SE},{name:"BlockNode",test:AE},{name:"ConditionalNode",test:wE},{name:"ConstantNode",test:DE},{name:"FunctionNode",test:TE},{name:"FunctionAssignmentNode",test:bE},{name:"IndexNode",test:CE},{name:"Node",test:FE},{name:"ObjectNode",test:RE},{name:"OperatorNode",test:PE},{name:"ParenthesisNode",test:LE},{name:"RangeNode",test:NE},{name:"RelationalNode",test:UE},{name:"SymbolNode",test:IE},{name:"Map",test:pM},{name:"Object",test:yp}]),a.addConversions([{from:"number",to:"BigNumber",convert:function(l){if(t||xu(l),$E(l)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+l+"). Use function bignumber(x) to convert to BigNumber.");return new t(l)}},{from:"number",to:"Complex",convert:function(l){return n||Na(l),new n(l,0)}},{from:"BigNumber",to:"Complex",convert:function(l){return n||Na(l),new n(l.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(l){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(l){return n||Na(l),new n(l.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(l){s||yu(l);var f=new s(l);if(f.valueOf()!==l)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+l+"). Use function fraction(x) to convert to Fraction.");return f}},{from:"string",to:"number",convert:function(l){var f=Number(l);if(isNaN(f))throw new Error('Cannot convert "'+l+'" to a number');return f}},{from:"string",to:"BigNumber",convert:function(l){t||xu(l);try{return new t(l)}catch{throw new Error('Cannot convert "'+l+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(l){s||yu(l);try{return new s(l)}catch{throw new Error('Cannot convert "'+l+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(l){n||Na(l);try{return new n(l)}catch{throw new Error('Cannot convert "'+l+'" to Complex')}}},{from:"boolean",to:"number",convert:function(l){return+l}},{from:"boolean",to:"BigNumber",convert:function(l){return t||xu(l),new t(+l)}},{from:"boolean",to:"Fraction",convert:function(l){return s||yu(l),new s(+l)}},{from:"boolean",to:"string",convert:function(l){return String(l)}},{from:"Array",to:"Matrix",convert:function(l){return i||vM(),new i(l)}},{from:"Matrix",to:"Array",convert:function(l){return l.valueOf()}}]),a.onMismatch=(o,l,f)=>{var u=a.createError(o,l,f);if(["wrongType","mismatch"].includes(u.data.category)&&l.length===1&&Ya(l[0])&&f.some(h=>!h.params.includes(","))){var c=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw c.data=u.data,c}throw u},a.onMismatch=(o,l,f)=>{var u=a.createError(o,l,f);if(["wrongType","mismatch"].includes(u.data.category)&&l.length===1&&Ya(l[0])&&f.some(h=>!h.params.includes(","))){var c=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw c.data=u.data,c}throw u},a});function xu(r){throw new Error("Cannot convert value ".concat(r," into a BigNumber: no class 'BigNumber' provided"))}function Na(r){throw new Error("Cannot convert value ".concat(r," into a Complex number: no class 'Complex' provided"))}function vM(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function yu(r){throw new Error("Cannot convert value ".concat(r," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var $r=9e15,Hi=1e9,Qu="0123456789abcdef",Ja="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",Qa="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",ju={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-$r,maxE:$r,crypto:!1},Lp,pi,ke=!0,mo="[DecimalError] ",Gi=mo+"Invalid argument: ",Np=mo+"Precision limit exceeded",Up=mo+"crypto unavailable",Ip="[object Decimal]",qt=Math.floor,Dt=Math.pow,_M=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,xM=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,yM=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Bp=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Hn=1e7,Be=7,EM=9007199254740991,MM=Ja.length-1,el=Qa.length-1,he={toStringTag:Ip};he.absoluteValue=he.abs=function(){var r=new this.constructor(this);return r.s<0&&(r.s=1),Ne(r)};he.ceil=function(){return Ne(new this.constructor(this),this.e+1,2)};he.clampedTo=he.clamp=function(r,e){var t,n=this,i=n.constructor;if(r=new i(r),e=new i(e),!r.s||!e.s)return new i(NaN);if(r.gt(e))throw Error(Gi+e);return t=n.cmp(r),t<0?r:n.cmp(e)>0?e:new i(n)};he.comparedTo=he.cmp=function(r){var e,t,n,i,s=this,a=s.d,o=(r=new s.constructor(r)).d,l=s.s,f=r.s;if(!a||!o)return!l||!f?NaN:l!==f?l:a===o?0:!a^l<0?1:-1;if(!a[0]||!o[0])return a[0]?l:o[0]?-f:0;if(l!==f)return l;if(s.e!==r.e)return s.e>r.e^l<0?1:-1;for(n=a.length,i=o.length,e=0,t=n<i?n:i;e<t;++e)if(a[e]!==o[e])return a[e]>o[e]^l<0?1:-1;return n===i?0:n>i^l<0?1:-1};he.cosine=he.cos=function(){var r,e,t=this,n=t.constructor;return t.d?t.d[0]?(r=n.precision,e=n.rounding,n.precision=r+Math.max(t.e,t.sd())+Be,n.rounding=1,t=SM(n,Hp(n,t)),n.precision=r,n.rounding=e,Ne(pi==2||pi==3?t.neg():t,r,e,!0)):new n(1):new n(NaN)};he.cubeRoot=he.cbrt=function(){var r,e,t,n,i,s,a,o,l,f,u=this,c=u.constructor;if(!u.isFinite()||u.isZero())return new c(u);for(ke=!1,s=u.s*Dt(u.s*u,1/3),!s||Math.abs(s)==1/0?(t=zt(u.d),r=u.e,(s=(r-t.length+1)%3)&&(t+=s==1||s==-2?"0":"00"),s=Dt(t,1/3),r=qt((r+1)/3)-(r%3==(r<0?-1:2)),s==1/0?t="5e"+r:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+r),n=new c(t),n.s=u.s):n=new c(s.toString()),a=(r=c.precision)+3;;)if(o=n,l=o.times(o).times(o),f=l.plus(u),n=at(f.plus(u).times(o),f.plus(l),a+2,1),zt(o.d).slice(0,a)===(t=zt(n.d)).slice(0,a))if(t=t.slice(a-3,a+1),t=="9999"||!i&&t=="4999"){if(!i&&(Ne(o,r+1,0),o.times(o).times(o).eq(u))){n=o;break}a+=4,i=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(Ne(n,r+1,1),e=!n.times(n).times(n).eq(u));break}return ke=!0,Ne(n,r,c.rounding,e)};he.decimalPlaces=he.dp=function(){var r,e=this.d,t=NaN;if(e){if(r=e.length-1,t=(r-qt(this.e/Be))*Be,r=e[r],r)for(;r%10==0;r/=10)t--;t<0&&(t=0)}return t};he.dividedBy=he.div=function(r){return at(this,new this.constructor(r))};he.dividedToIntegerBy=he.divToInt=function(r){var e=this,t=e.constructor;return Ne(at(e,new t(r),0,1,1),t.precision,t.rounding)};he.equals=he.eq=function(r){return this.cmp(r)===0};he.floor=function(){return Ne(new this.constructor(this),this.e+1,3)};he.greaterThan=he.gt=function(r){return this.cmp(r)>0};he.greaterThanOrEqualTo=he.gte=function(r){var e=this.cmp(r);return e==1||e===0};he.hyperbolicCosine=he.cosh=function(){var r,e,t,n,i,s=this,a=s.constructor,o=new a(1);if(!s.isFinite())return new a(s.s?1/0:NaN);if(s.isZero())return o;t=a.precision,n=a.rounding,a.precision=t+Math.max(s.e,s.sd())+4,a.rounding=1,i=s.d.length,i<32?(r=Math.ceil(i/3),e=(1/vo(4,r)).toString()):(r=16,e="2.3283064365386962890625e-10"),s=fs(a,1,s.times(e),new a(1),!0);for(var l,f=r,u=new a(8);f--;)l=s.times(s),s=o.minus(l.times(u.minus(l.times(u))));return Ne(s,a.precision=t,a.rounding=n,!0)};he.hyperbolicSine=he.sinh=function(){var r,e,t,n,i=this,s=i.constructor;if(!i.isFinite()||i.isZero())return new s(i);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(i.e,i.sd())+4,s.rounding=1,n=i.d.length,n<3)i=fs(s,2,i,i,!0);else{r=1.4*Math.sqrt(n),r=r>16?16:r|0,i=i.times(1/vo(5,r)),i=fs(s,2,i,i,!0);for(var a,o=new s(5),l=new s(16),f=new s(20);r--;)a=i.times(i),i=i.times(o.plus(a.times(l.times(a).plus(f))))}return s.precision=e,s.rounding=t,Ne(i,e,t,!0)};he.hyperbolicTangent=he.tanh=function(){var r,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(r=n.precision,e=n.rounding,n.precision=r+7,n.rounding=1,at(t.sinh(),t.cosh(),n.precision=r,n.rounding=e)):new n(t.s)};he.inverseCosine=he.acos=function(){var r,e=this,t=e.constructor,n=e.abs().cmp(1),i=t.precision,s=t.rounding;return n!==-1?n===0?e.isNeg()?Vn(t,i,s):new t(0):new t(NaN):e.isZero()?Vn(t,i+4,s).times(.5):(t.precision=i+6,t.rounding=1,e=e.asin(),r=Vn(t,i+4,s).times(.5),t.precision=i,t.rounding=s,r.minus(e))};he.inverseHyperbolicCosine=he.acosh=function(){var r,e,t=this,n=t.constructor;return t.lte(1)?new n(t.eq(1)?0:NaN):t.isFinite()?(r=n.precision,e=n.rounding,n.precision=r+Math.max(Math.abs(t.e),t.sd())+4,n.rounding=1,ke=!1,t=t.times(t).minus(1).sqrt().plus(t),ke=!0,n.precision=r,n.rounding=e,t.ln()):new n(t)};he.inverseHyperbolicSine=he.asinh=function(){var r,e,t=this,n=t.constructor;return!t.isFinite()||t.isZero()?new n(t):(r=n.precision,e=n.rounding,n.precision=r+2*Math.max(Math.abs(t.e),t.sd())+6,n.rounding=1,ke=!1,t=t.times(t).plus(1).sqrt().plus(t),ke=!0,n.precision=r,n.rounding=e,t.ln())};he.inverseHyperbolicTangent=he.atanh=function(){var r,e,t,n,i=this,s=i.constructor;return i.isFinite()?i.e>=0?new s(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(r=s.precision,e=s.rounding,n=i.sd(),Math.max(n,r)<2*-i.e-1?Ne(new s(i),r,e,!0):(s.precision=t=n-i.e,i=at(i.plus(1),new s(1).minus(i),t+r,1),s.precision=r+4,s.rounding=1,i=i.ln(),s.precision=r,s.rounding=e,i.times(.5))):new s(NaN)};he.inverseSine=he.asin=function(){var r,e,t,n,i=this,s=i.constructor;return i.isZero()?new s(i):(e=i.abs().cmp(1),t=s.precision,n=s.rounding,e!==-1?e===0?(r=Vn(s,t+4,n).times(.5),r.s=i.s,r):new s(NaN):(s.precision=t+6,s.rounding=1,i=i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=n,i.times(2)))};he.inverseTangent=he.atan=function(){var r,e,t,n,i,s,a,o,l,f=this,u=f.constructor,c=u.precision,h=u.rounding;if(f.isFinite()){if(f.isZero())return new u(f);if(f.abs().eq(1)&&c+4<=el)return a=Vn(u,c+4,h).times(.25),a.s=f.s,a}else{if(!f.s)return new u(NaN);if(c+4<=el)return a=Vn(u,c+4,h).times(.5),a.s=f.s,a}for(u.precision=o=c+10,u.rounding=1,t=Math.min(28,o/Be+2|0),r=t;r;--r)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(ke=!1,e=Math.ceil(o/Be),n=1,l=f.times(f),a=new u(f),i=f;r!==-1;)if(i=i.times(l),s=a.minus(i.div(n+=2)),i=i.times(l),a=s.plus(i.div(n+=2)),a.d[e]!==void 0)for(r=e;a.d[r]===s.d[r]&&r--;);return t&&(a=a.times(2<<t-1)),ke=!0,Ne(a,u.precision=c,u.rounding=h,!0)};he.isFinite=function(){return!!this.d};he.isInteger=he.isInt=function(){return!!this.d&&qt(this.e/Be)>this.d.length-2};he.isNaN=function(){return!this.s};he.isNegative=he.isNeg=function(){return this.s<0};he.isPositive=he.isPos=function(){return this.s>0};he.isZero=function(){return!!this.d&&this.d[0]===0};he.lessThan=he.lt=function(r){return this.cmp(r)<0};he.lessThanOrEqualTo=he.lte=function(r){return this.cmp(r)<1};he.logarithm=he.log=function(r){var e,t,n,i,s,a,o,l,f=this,u=f.constructor,c=u.precision,h=u.rounding,m=5;if(r==null)r=new u(10),e=!0;else{if(r=new u(r),t=r.d,r.s<0||!t||!t[0]||r.eq(1))return new u(NaN);e=r.eq(10)}if(t=f.d,f.s<0||!t||!t[0]||f.eq(1))return new u(t&&!t[0]?-1/0:f.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)s=!0;else{for(i=t[0];i%10===0;)i/=10;s=i!==1}if(ke=!1,o=c+m,a=Ri(f,o),n=e?ja(u,o+10):Ri(r,o),l=at(a,n,o,1),$s(l.d,i=c,h))do if(o+=10,a=Ri(f,o),n=e?ja(u,o+10):Ri(r,o),l=at(a,n,o,1),!s){+zt(l.d).slice(i+1,i+15)+1==1e14&&(l=Ne(l,c+1,0));break}while($s(l.d,i+=10,h));return ke=!0,Ne(l,c,h)};he.minus=he.sub=function(r){var e,t,n,i,s,a,o,l,f,u,c,h,m=this,_=m.constructor;if(r=new _(r),!m.d||!r.d)return!m.s||!r.s?r=new _(NaN):m.d?r.s=-r.s:r=new _(r.d||m.s!==r.s?m:NaN),r;if(m.s!=r.s)return r.s=-r.s,m.plus(r);if(f=m.d,h=r.d,o=_.precision,l=_.rounding,!f[0]||!h[0]){if(h[0])r.s=-r.s;else if(f[0])r=new _(m);else return new _(l===3?-0:0);return ke?Ne(r,o,l):r}if(t=qt(r.e/Be),u=qt(m.e/Be),f=f.slice(),s=u-t,s){for(c=s<0,c?(e=f,s=-s,a=h.length):(e=h,t=u,a=f.length),n=Math.max(Math.ceil(o/Be),a)+2,s>n&&(s=n,e.length=1),e.reverse(),n=s;n--;)e.push(0);e.reverse()}else{for(n=f.length,a=h.length,c=n<a,c&&(a=n),n=0;n<a;n++)if(f[n]!=h[n]){c=f[n]<h[n];break}s=0}for(c&&(e=f,f=h,h=e,r.s=-r.s),a=f.length,n=h.length-a;n>0;--n)f[a++]=0;for(n=h.length;n>s;){if(f[--n]<h[n]){for(i=n;i&&f[--i]===0;)f[i]=Hn-1;--f[i],f[n]+=Hn}f[n]-=h[n]}for(;f[--a]===0;)f.pop();for(;f[0]===0;f.shift())--t;return f[0]?(r.d=f,r.e=go(f,t),ke?Ne(r,o,l):r):new _(l===3?-0:0)};he.modulo=he.mod=function(r){var e,t=this,n=t.constructor;return r=new n(r),!t.d||!r.s||r.d&&!r.d[0]?new n(NaN):!r.d||t.d&&!t.d[0]?Ne(new n(t),n.precision,n.rounding):(ke=!1,n.modulo==9?(e=at(t,r.abs(),0,3,1),e.s*=r.s):e=at(t,r,0,n.modulo,1),e=e.times(r),ke=!0,t.minus(e))};he.naturalExponential=he.exp=function(){return tl(this)};he.naturalLogarithm=he.ln=function(){return Ri(this)};he.negated=he.neg=function(){var r=new this.constructor(this);return r.s=-r.s,Ne(r)};he.plus=he.add=function(r){var e,t,n,i,s,a,o,l,f,u,c=this,h=c.constructor;if(r=new h(r),!c.d||!r.d)return!c.s||!r.s?r=new h(NaN):c.d||(r=new h(r.d||c.s===r.s?c:NaN)),r;if(c.s!=r.s)return r.s=-r.s,c.minus(r);if(f=c.d,u=r.d,o=h.precision,l=h.rounding,!f[0]||!u[0])return u[0]||(r=new h(c)),ke?Ne(r,o,l):r;if(s=qt(c.e/Be),n=qt(r.e/Be),f=f.slice(),i=s-n,i){for(i<0?(t=f,i=-i,a=u.length):(t=u,n=s,a=f.length),s=Math.ceil(o/Be),a=s>a?s+1:a+1,i>a&&(i=a,t.length=1),t.reverse();i--;)t.push(0);t.reverse()}for(a=f.length,i=u.length,a-i<0&&(i=a,t=u,u=f,f=t),e=0;i;)e=(f[--i]=f[i]+u[i]+e)/Hn|0,f[i]%=Hn;for(e&&(f.unshift(e),++n),a=f.length;f[--a]==0;)f.pop();return r.d=f,r.e=go(f,n),ke?Ne(r,o,l):r};he.precision=he.sd=function(r){var e,t=this;if(r!==void 0&&r!==!!r&&r!==1&&r!==0)throw Error(Gi+r);return t.d?(e=Op(t.d),r&&t.e+1>e&&(e=t.e+1)):e=NaN,e};he.round=function(){var r=this,e=r.constructor;return Ne(new e(r),r.e+1,e.rounding)};he.sine=he.sin=function(){var r,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(r=n.precision,e=n.rounding,n.precision=r+Math.max(t.e,t.sd())+Be,n.rounding=1,t=wM(n,Hp(n,t)),n.precision=r,n.rounding=e,Ne(pi>2?t.neg():t,r,e,!0)):new n(NaN)};he.squareRoot=he.sqrt=function(){var r,e,t,n,i,s,a=this,o=a.d,l=a.e,f=a.s,u=a.constructor;if(f!==1||!o||!o[0])return new u(!f||f<0&&(!o||o[0])?NaN:o?a:1/0);for(ke=!1,f=Math.sqrt(+a),f==0||f==1/0?(e=zt(o),(e.length+l)%2==0&&(e+="0"),f=Math.sqrt(e),l=qt((l+1)/2)-(l<0||l%2),f==1/0?e="5e"+l:(e=f.toExponential(),e=e.slice(0,e.indexOf("e")+1)+l),n=new u(e)):n=new u(f.toString()),t=(l=u.precision)+3;;)if(s=n,n=s.plus(at(a,s,t+2,1)).times(.5),zt(s.d).slice(0,t)===(e=zt(n.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!i&&e=="4999"){if(!i&&(Ne(s,l+1,0),s.times(s).eq(a))){n=s;break}t+=4,i=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(Ne(n,l+1,1),r=!n.times(n).eq(a));break}return ke=!0,Ne(n,l,u.rounding,r)};he.tangent=he.tan=function(){var r,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(r=n.precision,e=n.rounding,n.precision=r+10,n.rounding=1,t=t.sin(),t.s=1,t=at(t,new n(1).minus(t.times(t)).sqrt(),r+10,0),n.precision=r,n.rounding=e,Ne(pi==2||pi==4?t.neg():t,r,e,!0)):new n(NaN)};he.times=he.mul=function(r){var e,t,n,i,s,a,o,l,f,u=this,c=u.constructor,h=u.d,m=(r=new c(r)).d;if(r.s*=u.s,!h||!h[0]||!m||!m[0])return new c(!r.s||h&&!h[0]&&!m||m&&!m[0]&&!h?NaN:!h||!m?r.s/0:r.s*0);for(t=qt(u.e/Be)+qt(r.e/Be),l=h.length,f=m.length,l<f&&(s=h,h=m,m=s,a=l,l=f,f=a),s=[],a=l+f,n=a;n--;)s.push(0);for(n=f;--n>=0;){for(e=0,i=l+n;i>n;)o=s[i]+m[n]*h[i-n-1]+e,s[i--]=o%Hn|0,e=o/Hn|0;s[i]=(s[i]+e)%Hn|0}for(;!s[--a];)s.pop();return e?++t:s.shift(),r.d=s,r.e=go(s,t),ke?Ne(r,c.precision,c.rounding):r};he.toBinary=function(r,e){return Nl(this,2,r,e)};he.toDecimalPlaces=he.toDP=function(r,e){var t=this,n=t.constructor;return t=new n(t),r===void 0?t:(un(r,0,Hi),e===void 0?e=n.rounding:un(e,0,8),Ne(t,r+t.e+1,e))};he.toExponential=function(r,e){var t,n=this,i=n.constructor;return r===void 0?t=Qn(n,!0):(un(r,0,Hi),e===void 0?e=i.rounding:un(e,0,8),n=Ne(new i(n),r+1,e),t=Qn(n,!0,r+1)),n.isNeg()&&!n.isZero()?"-"+t:t};he.toFixed=function(r,e){var t,n,i=this,s=i.constructor;return r===void 0?t=Qn(i):(un(r,0,Hi),e===void 0?e=s.rounding:un(e,0,8),n=Ne(new s(i),r+i.e+1,e),t=Qn(n,!1,r+n.e+1)),i.isNeg()&&!i.isZero()?"-"+t:t};he.toFraction=function(r){var e,t,n,i,s,a,o,l,f,u,c,h,m=this,_=m.d,p=m.constructor;if(!_)return new p(m);if(f=t=new p(1),n=l=new p(0),e=new p(n),s=e.e=Op(_)-m.e-1,a=s%Be,e.d[0]=Dt(10,a<0?Be+a:a),r==null)r=s>0?e:f;else{if(o=new p(r),!o.isInt()||o.lt(f))throw Error(Gi+o);r=o.gt(e)?s>0?e:f:o}for(ke=!1,o=new p(zt(_)),u=p.precision,p.precision=s=_.length*Be*2;c=at(o,e,0,1,1),i=t.plus(c.times(n)),i.cmp(r)!=1;)t=n,n=i,i=f,f=l.plus(c.times(i)),l=i,i=e,e=o.minus(c.times(i)),o=i;return i=at(r.minus(t),n,0,1,1),l=l.plus(i.times(f)),t=t.plus(i.times(n)),l.s=f.s=m.s,h=at(f,n,s,1).minus(m).abs().cmp(at(l,t,s,1).minus(m).abs())<1?[f,n]:[l,t],p.precision=u,ke=!0,h};he.toHexadecimal=he.toHex=function(r,e){return Nl(this,16,r,e)};he.toNearest=function(r,e){var t=this,n=t.constructor;if(t=new n(t),r==null){if(!t.d)return t;r=new n(1),e=n.rounding}else{if(r=new n(r),e===void 0?e=n.rounding:un(e,0,8),!t.d)return r.s?t:r;if(!r.d)return r.s&&(r.s=t.s),r}return r.d[0]?(ke=!1,t=at(t,r,0,e,1).times(r),ke=!0,Ne(t)):(r.s=t.s,t=r),t};he.toNumber=function(){return+this};he.toOctal=function(r,e){return Nl(this,8,r,e)};he.toPower=he.pow=function(r){var e,t,n,i,s,a,o=this,l=o.constructor,f=+(r=new l(r));if(!o.d||!r.d||!o.d[0]||!r.d[0])return new l(Dt(+o,f));if(o=new l(o),o.eq(1))return o;if(n=l.precision,s=l.rounding,r.eq(1))return Ne(o,n,s);if(e=qt(r.e/Be),e>=r.d.length-1&&(t=f<0?-f:f)<=EM)return i=zp(l,o,t,n),r.s<0?new l(1).div(i):Ne(i,n,s);if(a=o.s,a<0){if(e<r.d.length-1)return new l(NaN);if(r.d[e]&1||(a=1),o.e==0&&o.d[0]==1&&o.d.length==1)return o.s=a,o}return t=Dt(+o,f),e=t==0||!isFinite(t)?qt(f*(Math.log("0."+zt(o.d))/Math.LN10+o.e+1)):new l(t+"").e,e>l.maxE+1||e<l.minE-1?new l(e>0?a/0:0):(ke=!1,l.rounding=o.s=1,t=Math.min(12,(e+"").length),i=tl(r.times(Ri(o,n+t)),n),i.d&&(i=Ne(i,n+5,1),$s(i.d,n,s)&&(e=n+10,i=Ne(tl(r.times(Ri(o,e+t)),e),e+5,1),+zt(i.d).slice(n+1,n+15)+1==1e14&&(i=Ne(i,n+1,0)))),i.s=a,ke=!0,l.rounding=s,Ne(i,n,s))};he.toPrecision=function(r,e){var t,n=this,i=n.constructor;return r===void 0?t=Qn(n,n.e<=i.toExpNeg||n.e>=i.toExpPos):(un(r,1,Hi),e===void 0?e=i.rounding:un(e,0,8),n=Ne(new i(n),r,e),t=Qn(n,r<=n.e||n.e<=i.toExpNeg,r)),n.isNeg()&&!n.isZero()?"-"+t:t};he.toSignificantDigits=he.toSD=function(r,e){var t=this,n=t.constructor;return r===void 0?(r=n.precision,e=n.rounding):(un(r,1,Hi),e===void 0?e=n.rounding:un(e,0,8)),Ne(new n(t),r,e)};he.toString=function(){var r=this,e=r.constructor,t=Qn(r,r.e<=e.toExpNeg||r.e>=e.toExpPos);return r.isNeg()&&!r.isZero()?"-"+t:t};he.truncated=he.trunc=function(){return Ne(new this.constructor(this),this.e+1,1)};he.valueOf=he.toJSON=function(){var r=this,e=r.constructor,t=Qn(r,r.e<=e.toExpNeg||r.e>=e.toExpPos);return r.isNeg()?"-"+t:t};function zt(r){var e,t,n,i=r.length-1,s="",a=r[0];if(i>0){for(s+=a,e=1;e<i;e++)n=r[e]+"",t=Be-n.length,t&&(s+=wi(t)),s+=n;a=r[e],n=a+"",t=Be-n.length,t&&(s+=wi(t))}else if(a===0)return"0";for(;a%10===0;)a/=10;return s+a}function un(r,e,t){if(r!==~~r||r<e||r>t)throw Error(Gi+r)}function $s(r,e,t,n){var i,s,a,o;for(s=r[0];s>=10;s/=10)--e;return--e<0?(e+=Be,i=0):(i=Math.ceil((e+1)/Be),e%=Be),s=Dt(10,Be-e),o=r[i]%s|0,n==null?e<3?(e==0?o=o/100|0:e==1&&(o=o/10|0),a=t<4&&o==99999||t>3&&o==49999||o==5e4||o==0):a=(t<4&&o+1==s||t>3&&o+1==s/2)&&(r[i+1]/s/100|0)==Dt(10,e-2)-1||(o==s/2||o==0)&&(r[i+1]/s/100|0)==0:e<4?(e==0?o=o/1e3|0:e==1?o=o/100|0:e==2&&(o=o/10|0),a=(n||t<4)&&o==9999||!n&&t>3&&o==4999):a=((n||t<4)&&o+1==s||!n&&t>3&&o+1==s/2)&&(r[i+1]/s/1e3|0)==Dt(10,e-3)-1,a}function za(r,e,t){for(var n,i=[0],s,a=0,o=r.length;a<o;){for(s=i.length;s--;)i[s]*=e;for(i[0]+=Qu.indexOf(r.charAt(a++)),n=0;n<i.length;n++)i[n]>t-1&&(i[n+1]===void 0&&(i[n+1]=0),i[n+1]+=i[n]/t|0,i[n]%=t)}return i.reverse()}function SM(r,e){var t,n,i;if(e.isZero())return e;n=e.d.length,n<32?(t=Math.ceil(n/3),i=(1/vo(4,t)).toString()):(t=16,i="2.3283064365386962890625e-10"),r.precision+=t,e=fs(r,1,e.times(i),new r(1));for(var s=t;s--;){var a=e.times(e);e=a.times(a).minus(a).times(8).plus(1)}return r.precision-=t,e}var at=function(){function r(n,i,s){var a,o=0,l=n.length;for(n=n.slice();l--;)a=n[l]*i+o,n[l]=a%s|0,o=a/s|0;return o&&n.unshift(o),n}function e(n,i,s,a){var o,l;if(s!=a)l=s>a?1:-1;else for(o=l=0;o<s;o++)if(n[o]!=i[o]){l=n[o]>i[o]?1:-1;break}return l}function t(n,i,s,a){for(var o=0;s--;)n[s]-=o,o=n[s]<i[s]?1:0,n[s]=o*a+n[s]-i[s];for(;!n[0]&&n.length>1;)n.shift()}return function(n,i,s,a,o,l){var f,u,c,h,m,_,p,g,d,x,v,y,M,S,D,T,E,b,C,F,L=n.constructor,P=n.s==i.s?1:-1,U=n.d,N=i.d;if(!U||!U[0]||!N||!N[0])return new L(!n.s||!i.s||(U?N&&U[0]==N[0]:!N)?NaN:U&&U[0]==0||!N?P*0:P/0);for(l?(m=1,u=n.e-i.e):(l=Hn,m=Be,u=qt(n.e/m)-qt(i.e/m)),C=N.length,E=U.length,d=new L(P),x=d.d=[],c=0;N[c]==(U[c]||0);c++);if(N[c]>(U[c]||0)&&u--,s==null?(S=s=L.precision,a=L.rounding):o?S=s+(n.e-i.e)+1:S=s,S<0)x.push(1),_=!0;else{if(S=S/m+2|0,c=0,C==1){for(h=0,N=N[0],S++;(c<E||h)&&S--;c++)D=h*l+(U[c]||0),x[c]=D/N|0,h=D%N|0;_=h||c<E}else{for(h=l/(N[0]+1)|0,h>1&&(N=r(N,h,l),U=r(U,h,l),C=N.length,E=U.length),T=C,v=U.slice(0,C),y=v.length;y<C;)v[y++]=0;F=N.slice(),F.unshift(0),b=N[0],N[1]>=l/2&&++b;do h=0,f=e(N,v,C,y),f<0?(M=v[0],C!=y&&(M=M*l+(v[1]||0)),h=M/b|0,h>1?(h>=l&&(h=l-1),p=r(N,h,l),g=p.length,y=v.length,f=e(p,v,g,y),f==1&&(h--,t(p,C<g?F:N,g,l))):(h==0&&(f=h=1),p=N.slice()),g=p.length,g<y&&p.unshift(0),t(v,p,y,l),f==-1&&(y=v.length,f=e(N,v,C,y),f<1&&(h++,t(v,C<y?F:N,y,l))),y=v.length):f===0&&(h++,v=[0]),x[c++]=h,f&&v[0]?v[y++]=U[T]||0:(v=[U[T]],y=1);while((T++<E||v[0]!==void 0)&&S--);_=v[0]!==void 0}x[0]||x.shift()}if(m==1)d.e=u,Lp=_;else{for(c=1,h=x[0];h>=10;h/=10)c++;d.e=c+u*m-1,Ne(d,o?s+d.e+1:s,a,_)}return d}}();function Ne(r,e,t,n){var i,s,a,o,l,f,u,c,h,m=r.constructor;e:if(e!=null){if(c=r.d,!c)return r;for(i=1,o=c[0];o>=10;o/=10)i++;if(s=e-i,s<0)s+=Be,a=e,u=c[h=0],l=u/Dt(10,i-a-1)%10|0;else if(h=Math.ceil((s+1)/Be),o=c.length,h>=o)if(n){for(;o++<=h;)c.push(0);u=l=0,i=1,s%=Be,a=s-Be+1}else break e;else{for(u=o=c[h],i=1;o>=10;o/=10)i++;s%=Be,a=s-Be+i,l=a<0?0:u/Dt(10,i-a-1)%10|0}if(n=n||e<0||c[h+1]!==void 0||(a<0?u:u%Dt(10,i-a-1)),f=t<4?(l||n)&&(t==0||t==(r.s<0?3:2)):l>5||l==5&&(t==4||n||t==6&&(s>0?a>0?u/Dt(10,i-a):0:c[h-1])%10&1||t==(r.s<0?8:7)),e<1||!c[0])return c.length=0,f?(e-=r.e+1,c[0]=Dt(10,(Be-e%Be)%Be),r.e=-e||0):c[0]=r.e=0,r;if(s==0?(c.length=h,o=1,h--):(c.length=h+1,o=Dt(10,Be-s),c[h]=a>0?(u/Dt(10,i-a)%Dt(10,a)|0)*o:0),f)for(;;)if(h==0){for(s=1,a=c[0];a>=10;a/=10)s++;for(a=c[0]+=o,o=1;a>=10;a/=10)o++;s!=o&&(r.e++,c[0]==Hn&&(c[0]=1));break}else{if(c[h]+=o,c[h]!=Hn)break;c[h--]=0,o=1}for(s=c.length;c[--s]===0;)c.pop()}return ke&&(r.e>m.maxE?(r.d=null,r.e=NaN):r.e<m.minE&&(r.e=0,r.d=[0])),r}function Qn(r,e,t){if(!r.isFinite())return Vp(r);var n,i=r.e,s=zt(r.d),a=s.length;return e?(t&&(n=t-a)>0?s=s.charAt(0)+"."+s.slice(1)+wi(n):a>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(r.e<0?"e":"e+")+r.e):i<0?(s="0."+wi(-i-1)+s,t&&(n=t-a)>0&&(s+=wi(n))):i>=a?(s+=wi(i+1-a),t&&(n=t-i-1)>0&&(s=s+"."+wi(n))):((n=i+1)<a&&(s=s.slice(0,n)+"."+s.slice(n)),t&&(n=t-a)>0&&(i+1===a&&(s+="."),s+=wi(n))),s}function go(r,e){var t=r[0];for(e*=Be;t>=10;t/=10)e++;return e}function ja(r,e,t){if(e>MM)throw ke=!0,t&&(r.precision=t),Error(Np);return Ne(new r(Ja),e,1,!0)}function Vn(r,e,t){if(e>el)throw Error(Np);return Ne(new r(Qa),e,t,!0)}function Op(r){var e=r.length-1,t=e*Be+1;if(e=r[e],e){for(;e%10==0;e/=10)t--;for(e=r[0];e>=10;e/=10)t++}return t}function wi(r){for(var e="";r--;)e+="0";return e}function zp(r,e,t,n){var i,s=new r(1),a=Math.ceil(n/Be+4);for(ke=!1;;){if(t%2&&(s=s.times(e),Zf(s.d,a)&&(i=!0)),t=qt(t/2),t===0){t=s.d.length-1,i&&s.d[t]===0&&++s.d[t];break}e=e.times(e),Zf(e.d,a)}return ke=!0,s}function Yf(r){return r.d[r.d.length-1]&1}function Gp(r,e,t){for(var n,i=new r(e[0]),s=0;++s<e.length;)if(n=new r(e[s]),n.s)i[t](n)&&(i=n);else{i=n;break}return i}function tl(r,e){var t,n,i,s,a,o,l,f=0,u=0,c=0,h=r.constructor,m=h.rounding,_=h.precision;if(!r.d||!r.d[0]||r.e>17)return new h(r.d?r.d[0]?r.s<0?0:1/0:1:r.s?r.s<0?0:r:0/0);for(e==null?(ke=!1,l=_):l=e,o=new h(.03125);r.e>-2;)r=r.times(o),c+=5;for(n=Math.log(Dt(2,c))/Math.LN10*2+5|0,l+=n,t=s=a=new h(1),h.precision=l;;){if(s=Ne(s.times(r),l,1),t=t.times(++u),o=a.plus(at(s,t,l,1)),zt(o.d).slice(0,l)===zt(a.d).slice(0,l)){for(i=c;i--;)a=Ne(a.times(a),l,1);if(e==null)if(f<3&&$s(a.d,l-n,m,f))h.precision=l+=10,t=s=o=new h(1),u=0,f++;else return Ne(a,h.precision=_,m,ke=!0);else return h.precision=_,a}a=o}}function Ri(r,e){var t,n,i,s,a,o,l,f,u,c,h,m=1,_=10,p=r,g=p.d,d=p.constructor,x=d.rounding,v=d.precision;if(p.s<0||!g||!g[0]||!p.e&&g[0]==1&&g.length==1)return new d(g&&!g[0]?-1/0:p.s!=1?NaN:g?0:p);if(e==null?(ke=!1,u=v):u=e,d.precision=u+=_,t=zt(g),n=t.charAt(0),Math.abs(s=p.e)<15e14){for(;n<7&&n!=1||n==1&&t.charAt(1)>3;)p=p.times(r),t=zt(p.d),n=t.charAt(0),m++;s=p.e,n>1?(p=new d("0."+t),s++):p=new d(n+"."+t.slice(1))}else return f=ja(d,u+2,v).times(s+""),p=Ri(new d(n+"."+t.slice(1)),u-_).plus(f),d.precision=v,e==null?Ne(p,v,x,ke=!0):p;for(c=p,l=a=p=at(p.minus(1),p.plus(1),u,1),h=Ne(p.times(p),u,1),i=3;;){if(a=Ne(a.times(h),u,1),f=l.plus(at(a,new d(i),u,1)),zt(f.d).slice(0,u)===zt(l.d).slice(0,u))if(l=l.times(2),s!==0&&(l=l.plus(ja(d,u+2,v).times(s+""))),l=at(l,new d(m),u,1),e==null)if($s(l.d,u-_,x,o))d.precision=u+=_,f=a=p=at(c.minus(1),c.plus(1),u,1),h=Ne(p.times(p),u,1),i=o=1;else return Ne(l,d.precision=v,x,ke=!0);else return d.precision=v,l;l=f,i+=2}}function Vp(r){return String(r.s*r.s/0)}function nl(r,e){var t,n,i;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(n=e.search(/e/i))>0?(t<0&&(t=n),t+=+e.slice(n+1),e=e.substring(0,n)):t<0&&(t=e.length),n=0;e.charCodeAt(n)===48;n++);for(i=e.length;e.charCodeAt(i-1)===48;--i);if(e=e.slice(n,i),e){if(i-=n,r.e=t=t-n-1,r.d=[],n=(t+1)%Be,t<0&&(n+=Be),n<i){for(n&&r.d.push(+e.slice(0,n)),i-=Be;n<i;)r.d.push(+e.slice(n,n+=Be));e=e.slice(n),n=Be-e.length}else n-=i;for(;n--;)e+="0";r.d.push(+e),ke&&(r.e>r.constructor.maxE?(r.d=null,r.e=NaN):r.e<r.constructor.minE&&(r.e=0,r.d=[0]))}else r.e=0,r.d=[0];return r}function AM(r,e){var t,n,i,s,a,o,l,f,u;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),Bp.test(e))return nl(r,e)}else if(e==="Infinity"||e==="NaN")return+e||(r.s=NaN),r.e=NaN,r.d=null,r;if(xM.test(e))t=16,e=e.toLowerCase();else if(_M.test(e))t=2;else if(yM.test(e))t=8;else throw Error(Gi+e);for(s=e.search(/p/i),s>0?(l=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),s=e.indexOf("."),a=s>=0,n=r.constructor,a&&(e=e.replace(".",""),o=e.length,s=o-s,i=zp(n,new n(t),s,s*2)),f=za(e,t,Hn),u=f.length-1,s=u;f[s]===0;--s)f.pop();return s<0?new n(r.s*0):(r.e=go(f,u),r.d=f,ke=!1,a&&(r=at(r,i,o*4)),l&&(r=r.times(Math.abs(l)<54?Dt(2,l):hs.pow(2,l))),ke=!0,r)}function wM(r,e){var t,n=e.d.length;if(n<3)return e.isZero()?e:fs(r,2,e,e);t=1.4*Math.sqrt(n),t=t>16?16:t|0,e=e.times(1/vo(5,t)),e=fs(r,2,e,e);for(var i,s=new r(5),a=new r(16),o=new r(20);t--;)i=e.times(e),e=e.times(s.plus(i.times(a.times(i).minus(o))));return e}function fs(r,e,t,n,i){var s,a,o,l,f=r.precision,u=Math.ceil(f/Be);for(ke=!1,l=t.times(t),o=new r(n);;){if(a=at(o.times(l),new r(e++*e++),f,1),o=i?n.plus(a):n.minus(a),n=at(a.times(l),new r(e++*e++),f,1),a=o.plus(n),a.d[u]!==void 0){for(s=u;a.d[s]===o.d[s]&&s--;);if(s==-1)break}s=o,o=n,n=a,a=s}return ke=!0,a.d.length=u+1,a}function vo(r,e){for(var t=r;--e;)t*=r;return t}function Hp(r,e){var t,n=e.s<0,i=Vn(r,r.precision,1),s=i.times(.5);if(e=e.abs(),e.lte(s))return pi=n?4:1,e;if(t=e.divToInt(i),t.isZero())pi=n?3:2;else{if(e=e.minus(t.times(i)),e.lte(s))return pi=Yf(t)?n?2:3:n?4:1,e;pi=Yf(t)?n?1:4:n?3:2}return e.minus(i).abs()}function Nl(r,e,t,n){var i,s,a,o,l,f,u,c,h,m=r.constructor,_=t!==void 0;if(_?(un(t,1,Hi),n===void 0?n=m.rounding:un(n,0,8)):(t=m.precision,n=m.rounding),!r.isFinite())u=Vp(r);else{for(u=Qn(r),a=u.indexOf("."),_?(i=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):i=e,a>=0&&(u=u.replace(".",""),h=new m(1),h.e=u.length-a,h.d=za(Qn(h),10,i),h.e=h.d.length),c=za(u,10,i),s=l=c.length;c[--l]==0;)c.pop();if(!c[0])u=_?"0p+0":"0";else{if(a<0?s--:(r=new m(r),r.d=c,r.e=s,r=at(r,h,t,n,0,i),c=r.d,s=r.e,f=Lp),a=c[t],o=i/2,f=f||c[t+1]!==void 0,f=n<4?(a!==void 0||f)&&(n===0||n===(r.s<0?3:2)):a>o||a===o&&(n===4||f||n===6&&c[t-1]&1||n===(r.s<0?8:7)),c.length=t,f)for(;++c[--t]>i-1;)c[t]=0,t||(++s,c.unshift(1));for(l=c.length;!c[l-1];--l);for(a=0,u="";a<l;a++)u+=Qu.charAt(c[a]);if(_){if(l>1)if(e==16||e==8){for(a=e==16?4:3,--l;l%a;l++)u+="0";for(c=za(u,i,e),l=c.length;!c[l-1];--l);for(a=1,u="1.";a<l;a++)u+=Qu.charAt(c[a])}else u=u.charAt(0)+"."+u.slice(1);u=u+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)u="0"+u;u="0."+u}else if(++s>l)for(s-=l;s--;)u+="0";else s<l&&(u=u.slice(0,s)+"."+u.slice(s))}u=(e==16?"0x":e==2?"0b":e==8?"0o":"")+u}return r.s<0?"-"+u:u}function Zf(r,e){if(r.length>e)return r.length=e,!0}function DM(r){return new this(r).abs()}function bM(r){return new this(r).acos()}function TM(r){return new this(r).acosh()}function CM(r,e){return new this(r).plus(e)}function FM(r){return new this(r).asin()}function RM(r){return new this(r).asinh()}function PM(r){return new this(r).atan()}function LM(r){return new this(r).atanh()}function NM(r,e){r=new this(r),e=new this(e);var t,n=this.precision,i=this.rounding,s=n+4;return!r.s||!e.s?t=new this(NaN):!r.d&&!e.d?(t=Vn(this,s,1).times(e.s>0?.25:.75),t.s=r.s):!e.d||r.isZero()?(t=e.s<0?Vn(this,n,i):new this(0),t.s=r.s):!r.d||e.isZero()?(t=Vn(this,s,1).times(.5),t.s=r.s):e.s<0?(this.precision=s,this.rounding=1,t=this.atan(at(r,e,s,1)),e=Vn(this,s,1),this.precision=n,this.rounding=i,t=r.s<0?t.minus(e):t.plus(e)):t=this.atan(at(r,e,s,1)),t}function UM(r){return new this(r).cbrt()}function IM(r){return Ne(r=new this(r),r.e+1,2)}function BM(r,e,t){return new this(r).clamp(e,t)}function OM(r){if(!r||typeof r!="object")throw Error(mo+"Object expected");var e,t,n,i=r.defaults===!0,s=["precision",1,Hi,"rounding",0,8,"toExpNeg",-$r,0,"toExpPos",0,$r,"maxE",0,$r,"minE",-$r,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(t=s[e],i&&(this[t]=ju[t]),(n=r[t])!==void 0)if(qt(n)===n&&n>=s[e+1]&&n<=s[e+2])this[t]=n;else throw Error(Gi+t+": "+n);if(t="crypto",i&&(this[t]=ju[t]),(n=r[t])!==void 0)if(n===!0||n===!1||n===0||n===1)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Up);else this[t]=!1;else throw Error(Gi+t+": "+n);return this}function zM(r){return new this(r).cos()}function GM(r){return new this(r).cosh()}function kp(r){var e,t,n;function i(s){var a,o,l,f=this;if(!(f instanceof i))return new i(s);if(f.constructor=i,Kf(s)){f.s=s.s,ke?!s.d||s.e>i.maxE?(f.e=NaN,f.d=null):s.e<i.minE?(f.e=0,f.d=[0]):(f.e=s.e,f.d=s.d.slice()):(f.e=s.e,f.d=s.d?s.d.slice():s.d);return}if(l=typeof s,l==="number"){if(s===0){f.s=1/s<0?-1:1,f.e=0,f.d=[0];return}if(s<0?(s=-s,f.s=-1):f.s=1,s===~~s&&s<1e7){for(a=0,o=s;o>=10;o/=10)a++;ke?a>i.maxE?(f.e=NaN,f.d=null):a<i.minE?(f.e=0,f.d=[0]):(f.e=a,f.d=[s]):(f.e=a,f.d=[s]);return}else if(s*0!==0){s||(f.s=NaN),f.e=NaN,f.d=null;return}return nl(f,s.toString())}else if(l!=="string")throw Error(Gi+s);return(o=s.charCodeAt(0))===45?(s=s.slice(1),f.s=-1):(o===43&&(s=s.slice(1)),f.s=1),Bp.test(s)?nl(f,s):AM(f,s)}if(i.prototype=he,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.EUCLID=9,i.config=i.set=OM,i.clone=kp,i.isDecimal=Kf,i.abs=DM,i.acos=bM,i.acosh=TM,i.add=CM,i.asin=FM,i.asinh=RM,i.atan=PM,i.atanh=LM,i.atan2=NM,i.cbrt=UM,i.ceil=IM,i.clamp=BM,i.cos=zM,i.cosh=GM,i.div=VM,i.exp=HM,i.floor=kM,i.hypot=WM,i.ln=XM,i.log=qM,i.log10=YM,i.log2=$M,i.max=ZM,i.min=KM,i.mod=JM,i.mul=QM,i.pow=jM,i.random=eS,i.round=tS,i.sign=nS,i.sin=iS,i.sinh=rS,i.sqrt=sS,i.sub=aS,i.sum=oS,i.tan=uS,i.tanh=lS,i.trunc=cS,r===void 0&&(r={}),r&&r.defaults!==!0)for(n=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<n.length;)r.hasOwnProperty(t=n[e++])||(r[t]=this[t]);return i.config(r),i}function VM(r,e){return new this(r).div(e)}function HM(r){return new this(r).exp()}function kM(r){return Ne(r=new this(r),r.e+1,3)}function WM(){var r,e,t=new this(0);for(ke=!1,r=0;r<arguments.length;)if(e=new this(arguments[r++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return ke=!0,new this(1/0);t=e}return ke=!0,t.sqrt()}function Kf(r){return r instanceof hs||r&&r.toStringTag===Ip||!1}function XM(r){return new this(r).ln()}function qM(r,e){return new this(r).log(e)}function $M(r){return new this(r).log(2)}function YM(r){return new this(r).log(10)}function ZM(){return Gp(this,arguments,"lt")}function KM(){return Gp(this,arguments,"gt")}function JM(r,e){return new this(r).mod(e)}function QM(r,e){return new this(r).mul(e)}function jM(r,e){return new this(r).pow(e)}function eS(r){var e,t,n,i,s=0,a=new this(1),o=[];if(r===void 0?r=this.precision:un(r,1,Hi),n=Math.ceil(r/Be),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(n));s<n;)i=e[s],i>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:o[s++]=i%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(n*=4);s<n;)i=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((e[s+3]&127)<<24),i>=214e7?crypto.randomBytes(4).copy(e,s):(o.push(i%1e7),s+=4);s=n/4}else throw Error(Up);else for(;s<n;)o[s++]=Math.random()*1e7|0;for(n=o[--s],r%=Be,n&&r&&(i=Dt(10,Be-r),o[s]=(n/i|0)*i);o[s]===0;s--)o.pop();if(s<0)t=0,o=[0];else{for(t=-1;o[0]===0;t-=Be)o.shift();for(n=1,i=o[0];i>=10;i/=10)n++;n<Be&&(t-=Be-n)}return a.e=t,a.d=o,a}function tS(r){return Ne(r=new this(r),r.e+1,this.rounding)}function nS(r){return r=new this(r),r.d?r.d[0]?r.s:0*r.s:r.s||NaN}function iS(r){return new this(r).sin()}function rS(r){return new this(r).sinh()}function sS(r){return new this(r).sqrt()}function aS(r,e){return new this(r).sub(e)}function oS(){var r=0,e=arguments,t=new this(e[r]);for(ke=!1;t.s&&++r<e.length;)t=t.plus(e[r]);return ke=!0,Ne(t,this.precision,this.rounding)}function uS(r){return new this(r).tan()}function lS(r){return new this(r).tanh()}function cS(r){return Ne(r=new this(r),r.e+1,1)}he[Symbol.for("nodejs.util.inspect.custom")]=he.toString;he[Symbol.toStringTag]="Decimal";var hs=he.constructor=kp(ju);Ja=new hs(Ja);Qa=new hs(Qa);var fS="BigNumber",hS=["?on","config"],dS=Me(fS,hS,r=>{var{on:e,config:t}=r,n=hs.clone({precision:t.precision,modulo:hs.EUCLID});return n.prototype=Object.create(n.prototype),n.prototype.type="BigNumber",n.prototype.isBigNumber=!0,n.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},n.fromJSON=function(i){return new n(i.value)},e&&e("config",function(i,s){i.precision!==s.precision&&n.config({precision:i.precision})}),n},{isClass:!0});function Wp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xp={exports:{}};/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(r,e){(function(t){var n=Math.cosh||function(c){return Math.abs(c)<1e-9?1-c:(Math.exp(c)+Math.exp(-c))*.5},i=Math.sinh||function(c){return Math.abs(c)<1e-9?c:(Math.exp(c)-Math.exp(-c))*.5},s=function(c){var h=Math.PI/4;if(-h>c||c>h)return Math.cos(c)-1;var m=c*c;return m*(m*(m*(m*(m*(m*(m*(m/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},a=function(c,h){var m=Math.abs(c),_=Math.abs(h);return m<3e3&&_<3e3?Math.sqrt(m*m+_*_):(m<_?(m=_,_=c/h):_=h/c,m*Math.sqrt(1+_*_))},o=function(){throw SyntaxError("Invalid Param")};function l(c,h){var m=Math.abs(c),_=Math.abs(h);return c===0?Math.log(_):h===0?Math.log(m):m<3e3&&_<3e3?Math.log(c*c+h*h)*.5:(c=c/2,h=h/2,.5*Math.log(c*c+h*h)+Math.LN2)}var f=function(c,h){var m={re:0,im:0};if(c==null)m.re=m.im=0;else if(h!==void 0)m.re=c,m.im=h;else switch(typeof c){case"object":if("im"in c&&"re"in c)m.re=c.re,m.im=c.im;else if("abs"in c&&"arg"in c){if(!Number.isFinite(c.abs)&&Number.isFinite(c.arg))return u.INFINITY;m.re=c.abs*Math.cos(c.arg),m.im=c.abs*Math.sin(c.arg)}else if("r"in c&&"phi"in c){if(!Number.isFinite(c.r)&&Number.isFinite(c.phi))return u.INFINITY;m.re=c.r*Math.cos(c.phi),m.im=c.r*Math.sin(c.phi)}else c.length===2?(m.re=c[0],m.im=c[1]):o();break;case"string":m.im=m.re=0;var _=c.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),p=1,g=0;_===null&&o();for(var d=0;d<_.length;d++){var x=_[d];x===" "||x==="	"||x===`
`||(x==="+"?p++:x==="-"?g++:x==="i"||x==="I"?(p+g===0&&o(),_[d+1]!==" "&&!isNaN(_[d+1])?(m.im+=parseFloat((g%2?"-":"")+_[d+1]),d++):m.im+=parseFloat((g%2?"-":"")+"1"),p=g=0):((p+g===0||isNaN(x))&&o(),_[d+1]==="i"||_[d+1]==="I"?(m.im+=parseFloat((g%2?"-":"")+x),d++):m.re+=parseFloat((g%2?"-":"")+x),p=g=0))}p+g>0&&o();break;case"number":m.im=0,m.re=c;break;default:o()}return isNaN(m.re)||isNaN(m.im),m};function u(c,h){if(!(this instanceof u))return new u(c,h);var m=f(c,h);this.re=m.re,this.im=m.im}u.prototype={re:0,im:0,sign:function(){var c=this.abs();return new u(this.re/c,this.im/c)},add:function(c,h){var m=new u(c,h);return this.isInfinite()&&m.isInfinite()?u.NAN:this.isInfinite()||m.isInfinite()?u.INFINITY:new u(this.re+m.re,this.im+m.im)},sub:function(c,h){var m=new u(c,h);return this.isInfinite()&&m.isInfinite()?u.NAN:this.isInfinite()||m.isInfinite()?u.INFINITY:new u(this.re-m.re,this.im-m.im)},mul:function(c,h){var m=new u(c,h);return this.isInfinite()&&m.isZero()||this.isZero()&&m.isInfinite()?u.NAN:this.isInfinite()||m.isInfinite()?u.INFINITY:m.im===0&&this.im===0?new u(this.re*m.re,0):new u(this.re*m.re-this.im*m.im,this.re*m.im+this.im*m.re)},div:function(c,h){var m=new u(c,h);if(this.isZero()&&m.isZero()||this.isInfinite()&&m.isInfinite())return u.NAN;if(this.isInfinite()||m.isZero())return u.INFINITY;if(this.isZero()||m.isInfinite())return u.ZERO;c=this.re,h=this.im;var _=m.re,p=m.im,g,d;return p===0?new u(c/_,h/_):Math.abs(_)<Math.abs(p)?(d=_/p,g=_*d+p,new u((c*d+h)/g,(h*d-c)/g)):(d=p/_,g=p*d+_,new u((c+h*d)/g,(h-c*d)/g))},pow:function(c,h){var m=new u(c,h);if(c=this.re,h=this.im,m.isZero())return u.ONE;if(m.im===0){if(h===0&&c>0)return new u(Math.pow(c,m.re),0);if(c===0)switch((m.re%4+4)%4){case 0:return new u(Math.pow(h,m.re),0);case 1:return new u(0,Math.pow(h,m.re));case 2:return new u(-Math.pow(h,m.re),0);case 3:return new u(0,-Math.pow(h,m.re))}}if(c===0&&h===0&&m.re>0&&m.im>=0)return u.ZERO;var _=Math.atan2(h,c),p=l(c,h);return c=Math.exp(m.re*p-m.im*_),h=m.im*p+m.re*_,new u(c*Math.cos(h),c*Math.sin(h))},sqrt:function(){var c=this.re,h=this.im,m=this.abs(),_,p;if(c>=0){if(h===0)return new u(Math.sqrt(c),0);_=.5*Math.sqrt(2*(m+c))}else _=Math.abs(h)/Math.sqrt(2*(m-c));return c<=0?p=.5*Math.sqrt(2*(m-c)):p=Math.abs(h)/Math.sqrt(2*(m+c)),new u(_,h<0?-p:p)},exp:function(){var c=Math.exp(this.re);return this.im,new u(c*Math.cos(this.im),c*Math.sin(this.im))},expm1:function(){var c=this.re,h=this.im;return new u(Math.expm1(c)*Math.cos(h)+s(h),Math.exp(c)*Math.sin(h))},log:function(){var c=this.re,h=this.im;return new u(l(c,h),Math.atan2(h,c))},abs:function(){return a(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var c=this.re,h=this.im;return new u(Math.sin(c)*n(h),Math.cos(c)*i(h))},cos:function(){var c=this.re,h=this.im;return new u(Math.cos(c)*n(h),-Math.sin(c)*i(h))},tan:function(){var c=2*this.re,h=2*this.im,m=Math.cos(c)+n(h);return new u(Math.sin(c)/m,i(h)/m)},cot:function(){var c=2*this.re,h=2*this.im,m=Math.cos(c)-n(h);return new u(-Math.sin(c)/m,i(h)/m)},sec:function(){var c=this.re,h=this.im,m=.5*n(2*h)+.5*Math.cos(2*c);return new u(Math.cos(c)*n(h)/m,Math.sin(c)*i(h)/m)},csc:function(){var c=this.re,h=this.im,m=.5*n(2*h)-.5*Math.cos(2*c);return new u(Math.sin(c)*n(h)/m,-Math.cos(c)*i(h)/m)},asin:function(){var c=this.re,h=this.im,m=new u(h*h-c*c+1,-2*c*h).sqrt(),_=new u(m.re-h,m.im+c).log();return new u(_.im,-_.re)},acos:function(){var c=this.re,h=this.im,m=new u(h*h-c*c+1,-2*c*h).sqrt(),_=new u(m.re-h,m.im+c).log();return new u(Math.PI/2-_.im,_.re)},atan:function(){var c=this.re,h=this.im;if(c===0){if(h===1)return new u(0,1/0);if(h===-1)return new u(0,-1/0)}var m=c*c+(1-h)*(1-h),_=new u((1-h*h-c*c)/m,-2*c/m).log();return new u(-.5*_.im,.5*_.re)},acot:function(){var c=this.re,h=this.im;if(h===0)return new u(Math.atan2(1,c),0);var m=c*c+h*h;return m!==0?new u(c/m,-h/m).atan():new u(c!==0?c/0:0,h!==0?-h/0:0).atan()},asec:function(){var c=this.re,h=this.im;if(c===0&&h===0)return new u(0,1/0);var m=c*c+h*h;return m!==0?new u(c/m,-h/m).acos():new u(c!==0?c/0:0,h!==0?-h/0:0).acos()},acsc:function(){var c=this.re,h=this.im;if(c===0&&h===0)return new u(Math.PI/2,1/0);var m=c*c+h*h;return m!==0?new u(c/m,-h/m).asin():new u(c!==0?c/0:0,h!==0?-h/0:0).asin()},sinh:function(){var c=this.re,h=this.im;return new u(i(c)*Math.cos(h),n(c)*Math.sin(h))},cosh:function(){var c=this.re,h=this.im;return new u(n(c)*Math.cos(h),i(c)*Math.sin(h))},tanh:function(){var c=2*this.re,h=2*this.im,m=n(c)+Math.cos(h);return new u(i(c)/m,Math.sin(h)/m)},coth:function(){var c=2*this.re,h=2*this.im,m=n(c)-Math.cos(h);return new u(i(c)/m,-Math.sin(h)/m)},csch:function(){var c=this.re,h=this.im,m=Math.cos(2*h)-n(2*c);return new u(-2*i(c)*Math.cos(h)/m,2*n(c)*Math.sin(h)/m)},sech:function(){var c=this.re,h=this.im,m=Math.cos(2*h)+n(2*c);return new u(2*n(c)*Math.cos(h)/m,-2*i(c)*Math.sin(h)/m)},asinh:function(){var c=this.im;this.im=-this.re,this.re=c;var h=this.asin();return this.re=-this.im,this.im=c,c=h.re,h.re=-h.im,h.im=c,h},acosh:function(){var c=this.acos();if(c.im<=0){var h=c.re;c.re=-c.im,c.im=h}else{var h=c.im;c.im=-c.re,c.re=h}return c},atanh:function(){var c=this.re,h=this.im,m=c>1&&h===0,_=1-c,p=1+c,g=_*_+h*h,d=g!==0?new u((p*_-h*h)/g,(h*_+p*h)/g):new u(c!==-1?c/0:0,h!==0?h/0:0),x=d.re;return d.re=l(d.re,d.im)/2,d.im=Math.atan2(d.im,x)/2,m&&(d.im=-d.im),d},acoth:function(){var c=this.re,h=this.im;if(c===0&&h===0)return new u(0,Math.PI/2);var m=c*c+h*h;return m!==0?new u(c/m,-h/m).atanh():new u(c!==0?c/0:0,h!==0?-h/0:0).atanh()},acsch:function(){var c=this.re,h=this.im;if(h===0)return new u(c!==0?Math.log(c+Math.sqrt(c*c+1)):1/0,0);var m=c*c+h*h;return m!==0?new u(c/m,-h/m).asinh():new u(c!==0?c/0:0,h!==0?-h/0:0).asinh()},asech:function(){var c=this.re,h=this.im;if(this.isZero())return u.INFINITY;var m=c*c+h*h;return m!==0?new u(c/m,-h/m).acosh():new u(c!==0?c/0:0,h!==0?-h/0:0).acosh()},inverse:function(){if(this.isZero())return u.INFINITY;if(this.isInfinite())return u.ZERO;var c=this.re,h=this.im,m=c*c+h*h;return new u(c/m,-h/m)},conjugate:function(){return new u(this.re,-this.im)},neg:function(){return new u(-this.re,-this.im)},ceil:function(c){return c=Math.pow(10,c||0),new u(Math.ceil(this.re*c)/c,Math.ceil(this.im*c)/c)},floor:function(c){return c=Math.pow(10,c||0),new u(Math.floor(this.re*c)/c,Math.floor(this.im*c)/c)},round:function(c){return c=Math.pow(10,c||0),new u(Math.round(this.re*c)/c,Math.round(this.im*c)/c)},equals:function(c,h){var m=new u(c,h);return Math.abs(m.re-this.re)<=u.EPSILON&&Math.abs(m.im-this.im)<=u.EPSILON},clone:function(){return new u(this.re,this.im)},toString:function(){var c=this.re,h=this.im,m="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(c)<u.EPSILON&&(c=0),Math.abs(h)<u.EPSILON&&(h=0),h===0?m+c:(c!==0?(m+=c,m+=" ",h<0?(h=-h,m+="-"):m+="+",m+=" "):h<0&&(h=-h,m+="-"),h!==1&&(m+=h),m+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},u.ZERO=new u(0,0),u.ONE=new u(1,0),u.I=new u(0,1),u.PI=new u(Math.PI,0),u.E=new u(Math.E,0),u.INFINITY=new u(1/0,1/0),u.NAN=new u(NaN,NaN),u.EPSILON=1e-15,Object.defineProperty(u,"__esModule",{value:!0}),u.default=u,u.Complex=u,r.exports=u})()})(Xp);var pS=Xp.exports;const Bt=Wp(pS);var mS="Complex",gS=[],vS=Me(mS,gS,()=>(Object.defineProperty(Bt,"name",{value:"Complex"}),Bt.prototype.constructor=Bt,Bt.prototype.type="Complex",Bt.prototype.isComplex=!0,Bt.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},Bt.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},Bt.prototype.format=function(r){var e="",t=this.im,n=this.re,i=Zu(this.re,r),s=Zu(this.im,r),a=lt(r)?r:r?r.precision:null;if(a!==null){var o=Math.pow(10,-a);Math.abs(n/t)<o&&(n=0),Math.abs(t/n)<o&&(t=0)}return t===0?e=i:n===0?t===1?e="i":t===-1?e="-i":e=s+"i":t<0?t===-1?e=i+" - i":e=i+" - "+s.substring(1)+"i":t===1?e=i+" + i":e=i+" + "+s+"i",e},Bt.fromPolar=function(r){switch(arguments.length){case 1:{var e=arguments[0];if(typeof e=="object")return Bt(e);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],n=arguments[1];if(lt(t)){if(gp(n)&&n.hasBase("ANGLE")&&(n=n.toNumber("rad")),lt(n))return new Bt({r:t,phi:n});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},Bt.prototype.valueOf=Bt.prototype.toString,Bt.fromJSON=function(r){return new Bt(r)},Bt.compare=function(r,e){return r.re>e.re?1:r.re<e.re?-1:r.im>e.im?1:r.im<e.im?-1:0},Bt),{isClass:!0}),qp={exports:{}};/**
 * @license Fraction.js v4.3.0 20/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(r,e){(function(t){var n=2e3,i={s:1,n:0,d:1};function s(d,x){if(isNaN(d=parseInt(d,10)))throw p();return d*x}function a(d,x){if(x===0)throw _();var v=Object.create(m.prototype);v.s=d<0?-1:1,d=d<0?-d:d;var y=h(d,x);return v.n=d/y,v.d=x/y,v}function o(d){for(var x={},v=d,y=2,M=4;M<=v;){for(;v%y===0;)v/=y,x[y]=(x[y]||0)+1;M+=1+2*y++}return v!==d?v>1&&(x[v]=(x[v]||0)+1):x[d]=(x[d]||0)+1,x}var l=function(d,x){var v=0,y=1,M=1,S=0,D=0,T=0,E=1,b=1,C=0,F=1,L=1,P=1,U=1e7,N;if(d!=null)if(x!==void 0){if(v=d,y=x,M=v*y,v%1!==0||y%1!==0)throw g()}else switch(typeof d){case"object":{if("d"in d&&"n"in d)v=d.n,y=d.d,"s"in d&&(v*=d.s);else if(0 in d)v=d[0],1 in d&&(y=d[1]);else throw p();M=v*y;break}case"number":{if(d<0&&(M=d,d=-d),d%1===0)v=d;else if(d>0){for(d>=1&&(b=Math.pow(10,Math.floor(1+Math.log(d)/Math.LN10)),d/=b);F<=U&&P<=U;)if(N=(C+L)/(F+P),d===N){F+P<=U?(v=C+L,y=F+P):P>F?(v=L,y=P):(v=C,y=F);break}else d>N?(C+=L,F+=P):(L+=C,P+=F),F>U?(v=L,y=P):(v=C,y=F);v*=b}else(isNaN(d)||isNaN(x))&&(y=v=NaN);break}case"string":{if(F=d.match(/\d+|./g),F===null)throw p();if(F[C]==="-"?(M=-1,C++):F[C]==="+"&&C++,F.length===C+1?D=s(F[C++],M):F[C+1]==="."||F[C]==="."?(F[C]!=="."&&(S=s(F[C++],M)),C++,(C+1===F.length||F[C+1]==="("&&F[C+3]===")"||F[C+1]==="'"&&F[C+3]==="'")&&(D=s(F[C],M),E=Math.pow(10,F[C].length),C++),(F[C]==="("&&F[C+2]===")"||F[C]==="'"&&F[C+2]==="'")&&(T=s(F[C+1],M),b=Math.pow(10,F[C+1].length)-1,C+=3)):F[C+1]==="/"||F[C+1]===":"?(D=s(F[C],M),E=s(F[C+2],1),C+=3):F[C+3]==="/"&&F[C+1]===" "&&(S=s(F[C],M),D=s(F[C+2],M),E=s(F[C+4],1),C+=5),F.length<=C){y=E*b,M=v=T+y*S+b*D;break}}default:throw p()}if(y===0)throw _();i.s=M<0?-1:1,i.n=Math.abs(v),i.d=Math.abs(y)};function f(d,x,v){for(var y=1;x>0;d=d*d%v,x>>=1)x&1&&(y=y*d%v);return y}function u(d,x){for(;x%2===0;x/=2);for(;x%5===0;x/=5);if(x===1)return 0;for(var v=10%x,y=1;v!==1;y++)if(v=v*10%x,y>n)return 0;return y}function c(d,x,v){for(var y=1,M=f(10,v,x),S=0;S<300;S++){if(y===M)return S;y=y*10%x,M=M*10%x}return 0}function h(d,x){if(!d)return x;if(!x)return d;for(;;){if(d%=x,!d)return x;if(x%=d,!x)return d}}function m(d,x){if(l(d,x),this instanceof m)d=h(i.d,i.n),this.s=i.s,this.n=i.n/d,this.d=i.d/d;else return a(i.s*i.n,i.d)}var _=function(){return new Error("Division by Zero")},p=function(){return new Error("Invalid argument")},g=function(){return new Error("Parameters must be integer")};m.prototype={s:1,n:0,d:1,abs:function(){return a(this.n,this.d)},neg:function(){return a(-this.s*this.n,this.d)},add:function(d,x){return l(d,x),a(this.s*this.n*i.d+i.s*this.d*i.n,this.d*i.d)},sub:function(d,x){return l(d,x),a(this.s*this.n*i.d-i.s*this.d*i.n,this.d*i.d)},mul:function(d,x){return l(d,x),a(this.s*i.s*this.n*i.n,this.d*i.d)},div:function(d,x){return l(d,x),a(this.s*i.s*this.n*i.d,this.d*i.n)},clone:function(){return a(this.s*this.n,this.d)},mod:function(d,x){if(isNaN(this.n)||isNaN(this.d))return new m(NaN);if(d===void 0)return a(this.s*this.n%this.d,1);if(l(d,x),i.n===0&&this.d===0)throw _();return a(this.s*(i.d*this.n)%(i.n*this.d),i.d*this.d)},gcd:function(d,x){return l(d,x),a(h(i.n,this.n)*h(i.d,this.d),i.d*this.d)},lcm:function(d,x){return l(d,x),i.n===0&&this.n===0?a(0,1):a(i.n*this.n,h(i.n,this.n)*h(i.d,this.d))},ceil:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):a(Math.ceil(d*this.s*this.n/this.d),d)},floor:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):a(Math.floor(d*this.s*this.n/this.d),d)},round:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):a(Math.round(d*this.s*this.n/this.d),d)},inverse:function(){return a(this.s*this.d,this.n)},pow:function(d,x){if(l(d,x),i.d===1)return i.s<0?a(Math.pow(this.s*this.d,i.n),Math.pow(this.n,i.n)):a(Math.pow(this.s*this.n,i.n),Math.pow(this.d,i.n));if(this.s<0)return null;var v=o(this.n),y=o(this.d),M=1,S=1;for(var D in v)if(D!=="1"){if(D==="0"){M=0;break}if(v[D]*=i.n,v[D]%i.d===0)v[D]/=i.d;else return null;M*=Math.pow(D,v[D])}for(var D in y)if(D!=="1"){if(y[D]*=i.n,y[D]%i.d===0)y[D]/=i.d;else return null;S*=Math.pow(D,y[D])}return i.s<0?a(S,M):a(M,S)},equals:function(d,x){return l(d,x),this.s*this.n*i.d===i.s*i.n*this.d},compare:function(d,x){l(d,x);var v=this.s*this.n*i.d-i.s*i.n*this.d;return(0<v)-(v<0)},simplify:function(d){if(isNaN(this.n)||isNaN(this.d))return this;d=d||.001;for(var x=this.abs(),v=x.toContinued(),y=1;y<v.length;y++){for(var M=a(v[y-1],1),S=y-2;S>=0;S--)M=M.inverse().add(v[S]);if(Math.abs(M.sub(x).valueOf())<d)return M.mul(this.s)}return this},divisible:function(d,x){return l(d,x),!(!(i.n*this.d)||this.n*i.d%(i.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(d){var x,v="",y=this.n,M=this.d;return this.s<0&&(v+="-"),M===1?v+=y:(d&&(x=Math.floor(y/M))>0&&(v+=x,v+=" ",y%=M),v+=y,v+="/",v+=M),v},toLatex:function(d){var x,v="",y=this.n,M=this.d;return this.s<0&&(v+="-"),M===1?v+=y:(d&&(x=Math.floor(y/M))>0&&(v+=x,y%=M),v+="\\frac{",v+=y,v+="}{",v+=M,v+="}"),v},toContinued:function(){var d,x=this.n,v=this.d,y=[];if(isNaN(x)||isNaN(v))return y;do y.push(Math.floor(x/v)),d=x%v,x=v,v=d;while(x!==1);return y},toString:function(d){var x=this.n,v=this.d;if(isNaN(x)||isNaN(v))return"NaN";d=d||15;var y=u(x,v),M=c(x,v,y),S=this.s<0?"-":"";if(S+=x/v|0,x%=v,x*=10,x&&(S+="."),y){for(var D=M;D--;)S+=x/v|0,x%=v,x*=10;S+="(";for(var D=y;D--;)S+=x/v|0,x%=v,x*=10;S+=")"}else for(var D=d;x&&D--;)S+=x/v|0,x%=v,x*=10;return S}},Object.defineProperty(m,"__esModule",{value:!0}),m.default=m,m.Fraction=m,r.exports=m})()})(qp);var _S=qp.exports;const oi=Wp(_S);var xS="Fraction",yS=[],ES=Me(xS,yS,()=>(Object.defineProperty(oi,"name",{value:"Fraction"}),oi.prototype.constructor=oi,oi.prototype.type="Fraction",oi.prototype.isFraction=!0,oi.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},oi.fromJSON=function(r){return new oi(r)},oi),{isClass:!0}),MS="Matrix",SS=[],AS=Me(MS,SS,()=>{function r(){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator")}return r.prototype.type="Matrix",r.prototype.isMatrix=!0,r.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},r.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},r.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},r.prototype.subset=function(e,t,n){throw new Error("Cannot invoke subset on a Matrix interface")},r.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},r.prototype.set=function(e,t,n){throw new Error("Cannot invoke set on a Matrix interface")},r.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},r.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},r.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},r.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},r.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},r.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},r.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},r.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},r.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},r.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},r.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},r},{isClass:!0});function $p(r){return Object.keys(r.signatures||{}).reduce(function(e,t){var n=(t.match(/,/g)||[]).length+1;return Math.max(e,n)},-1)}var wS="DenseMatrix",DS=["Matrix"],bS=Me(wS,DS,r=>{var{Matrix:e}=r;function t(u,c){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(c&&!On(c))throw new Error("Invalid datatype: "+c);if(ut(u))u.type==="DenseMatrix"?(this._data=et(u._data),this._size=et(u._size),this._datatype=c||u._datatype):(this._data=u.toArray(),this._size=u.size(),this._datatype=c||u._datatype);else if(u&&tt(u.data)&&tt(u.size))this._data=u.data,this._size=u.size,qf(this._data,this._size),this._datatype=c||u.datatype;else if(tt(u))this._data=f(u),this._size=wt(this._data),qf(this._data,this._size),this._datatype=c;else{if(u)throw new TypeError("Unsupported type of data ("+gi(u)+")");this._data=[],this._size=[0],this._datatype=c}}t.prototype=new e,t.prototype.createDenseMatrix=function(u,c){return new t(u,c)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return qs(this._data,gi)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(u,c){return new t(u,c)},t.prototype.subset=function(u,c,h){switch(arguments.length){case 1:return n(this,u);case 2:case 3:return s(this,u,c,h);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(u){if(!tt(u))throw new TypeError("Array expected");if(u.length!==this._size.length)throw new je(u.length,this._size.length);for(var c=0;c<u.length;c++)ht(u[c],this._size[c]);for(var h=this._data,m=0,_=u.length;m<_;m++){var p=u[m];ht(p,h.length),h=h[p]}return h},t.prototype.set=function(u,c,h){if(!tt(u))throw new TypeError("Array expected");if(u.length<this._size.length)throw new je(u.length,this._size.length,"<");var m,_,p,g=u.map(function(x){return x+1});l(this,g,h);var d=this._data;for(m=0,_=u.length-1;m<_;m++)p=u[m],ht(p,d.length),d=d[p];return p=u[u.length-1],ht(p,d.length),d[p]=c,this};function n(u,c){if(!Rl(c))throw new TypeError("Invalid index");var h=c.isScalar();if(h)return u.get(c.min());var m=c.size();if(m.length!==u._size.length)throw new je(m.length,u._size.length);for(var _=c.min(),p=c.max(),g=0,d=u._size.length;g<d;g++)ht(_[g],u._size[g]),ht(p[g],u._size[g]);return new t(i(u._data,c,m.length,0),u._datatype)}function i(u,c,h,m){var _=m===h-1,p=c.dimension(m);return _?p.map(function(g){return ht(g,u.length),u[g]}).valueOf():p.map(function(g){ht(g,u.length);var d=u[g];return i(d,c,h,m+1)}).valueOf()}function s(u,c,h,m){if(!c||c.isIndex!==!0)throw new TypeError("Invalid index");var _=c.size(),p=c.isScalar(),g;if(ut(h)?(g=h.size(),h=h.valueOf()):g=wt(h),p){if(g.length!==0)throw new TypeError("Scalar expected");u.set(c.min(),h,m)}else{if(!cs(g,_))try{g.length===0?h=$f([h],_):h=$f(h,_),g=wt(h)}catch{}if(_.length<u._size.length)throw new je(_.length,u._size.length,"<");if(g.length<_.length){for(var d=0,x=0;_[d]===1&&g[d]===1;)d++;for(;_[d]===1;)x++,d++;h=Dp(h,_.length,x,g)}if(!cs(_,g))throw new je(_,g,">");var v=c.max().map(function(S){return S+1});l(u,v,m);var y=_.length,M=0;a(u._data,c,h,y,M)}return u}function a(u,c,h,m,_){var p=_===m-1,g=c.dimension(_);p?g.forEach(function(d,x){ht(d),u[d]=h[x[0]]}):g.forEach(function(d,x){ht(d),a(u[d],c,h[x[0]],m,_+1)})}t.prototype.resize=function(u,c,h){if(!Ya(u))throw new TypeError("Array or Matrix expected");var m=u.valueOf().map(p=>Array.isArray(p)&&p.length===1?p[0]:p),_=h?this.clone():this;return o(_,m,c)};function o(u,c,h){if(c.length===0){for(var m=u._data;tt(m);)m=m[0];return m}return u._size=c.slice(0),u._data=Za(u._data,u._size,h),u}t.prototype.reshape=function(u,c){var h=c?this.clone():this;h._data=Pl(h._data,u);var m=h._size.reduce((_,p)=>_*p);return h._size=Ll(u,m),h};function l(u,c,h){for(var m=u._size.slice(0),_=!1;m.length<c.length;)m.push(0),_=!0;for(var p=0,g=c.length;p<g;p++)c[p]>m[p]&&(m[p]=c[p],_=!0);_&&o(u,m,h)}t.prototype.clone=function(){var u=new t({data:et(this._data),size:et(this._size),datatype:this._datatype});return u},t.prototype.size=function(){return this._size.slice(0)},t.prototype.map=function(u){var c=this,h=$p(u),m=function g(d,x){return tt(d)?d.map(function(v,y){return g(v,x.concat(y))}):h===1?u(d):h===2?u(d,x):u(d,x,c)},_=m(this._data,[]),p=this._datatype!==void 0?qs(_,gi):void 0;return new t(_,p)},t.prototype.forEach=function(u){var c=this,h=function m(_,p){tt(_)?_.forEach(function(g,d){m(g,p.concat(d))}):u(_,p,c)};h(this._data,[])},t.prototype[Symbol.iterator]=function*(){var u=function*c(h,m){if(tt(h))for(var _=0;_<h.length;_++)yield*c(h[_],m.concat(_));else yield{value:h,index:m}};yield*u(this._data,[])},t.prototype.rows=function(){var u=[],c=this.size();if(c.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var h=this._data;for(var m of h)u.push(new t([m],this._datatype));return u},t.prototype.columns=function(){var u=this,c=[],h=this.size();if(h.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var m=this._data,_=function(d){var x=m.map(v=>[v[d]]);c.push(new t(x,u._datatype))},p=0;p<h[1];p++)_(p);return c},t.prototype.toArray=function(){return et(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(u){return pt(this._data,u)},t.prototype.toString=function(){return pt(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(u){if(u){if(bt(u)&&(u=u.toNumber()),!lt(u)||!gt(u))throw new TypeError("The parameter k must be an integer number")}else u=0;for(var c=u>0?u:0,h=u<0?-u:0,m=this._size[0],_=this._size[1],p=Math.min(m-h,_-c),g=[],d=0;d<p;d++)g[d]=this._data[d+h][d+c];return new t({data:g,size:[p],datatype:this._datatype})},t.diagonal=function(u,c,h,m){if(!tt(u))throw new TypeError("Array expected, size parameter");if(u.length!==2)throw new Error("Only two dimensions matrix are supported");if(u=u.map(function(D){if(bt(D)&&(D=D.toNumber()),!lt(D)||!gt(D)||D<1)throw new Error("Size values must be positive integers");return D}),h){if(bt(h)&&(h=h.toNumber()),!lt(h)||!gt(h))throw new TypeError("The parameter k must be an integer number")}else h=0;var _=h>0?h:0,p=h<0?-h:0,g=u[0],d=u[1],x=Math.min(g-p,d-_),v;if(tt(c)){if(c.length!==x)throw new Error("Invalid value array length");v=function(T){return c[T]}}else if(ut(c)){var y=c.size();if(y.length!==1||y[0]!==x)throw new Error("Invalid matrix length");v=function(T){return c.get([T])}}else v=function(){return c};m||(m=bt(v(0))?v(0).mul(0):0);var M=[];if(u.length>0){M=Za(M,u,m);for(var S=0;S<x;S++)M[S+p][S+_]=v(S)}return new t({data:M,size:[g,d]})},t.fromJSON=function(u){return new t(u)},t.prototype.swapRows=function(u,c){if(!lt(u)||!gt(u)||!lt(c)||!gt(c))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return ht(u,this._size[0]),ht(c,this._size[0]),t._swapRows(u,c,this._data),this},t._swapRows=function(u,c,h){var m=h[u];h[u]=h[c],h[c]=m};function f(u){return ut(u)?f(u.valueOf()):tt(u)?u.map(f):u}return t},{isClass:!0});function ln(r,e,t){return r&&typeof r.map=="function"?r.map(function(n){return ln(n,e)}):e(r)}var Jf="isInteger",TS=["typed"],CS=Me(Jf,TS,r=>{var{typed:e}=r;return e(Jf,{number:gt,BigNumber:function(n){return n.isInt()},Fraction:function(n){return n.d===1&&isFinite(n.n)},"Array | Matrix":e.referToSelf(t=>n=>ln(n,t))})}),Ul="number",Il="number, number";function Yp(r){return Math.abs(r)}Yp.signature=Ul;function Zp(r,e){return r+e}Zp.signature=Il;function Kp(r,e){return r-e}Kp.signature=Il;function Jp(r,e){return r*e}Jp.signature=Il;function Qp(r){return-r}Qp.signature=Ul;function il(r){return kE(r)}il.signature=Ul;var jp="number";function em(r){return r>0}em.signature=jp;function tm(r){return r===0}tm.signature=jp;var Qf="isPositive",FS=["typed"],RS=Me(Qf,FS,r=>{var{typed:e}=r;return e(Qf,{number:em,BigNumber:function(n){return!n.isNeg()&&!n.isZero()&&!n.isNaN()},Fraction:function(n){return n.s>0&&n.n>0},Unit:e.referToSelf(t=>n=>e.find(t,n.valueType())(n.value)),"Array | Matrix":e.referToSelf(t=>n=>ln(n,t))})}),jf="isZero",PS=["typed"],LS=Me(jf,PS,r=>{var{typed:e}=r;return e(jf,{number:tm,BigNumber:function(n){return n.isZero()},Complex:function(n){return n.re===0&&n.im===0},Fraction:function(n){return n.d===1&&n.n===0},Unit:e.referToSelf(t=>n=>e.find(t,n.valueType())(n.value)),"Array | Matrix":e.referToSelf(t=>n=>ln(n,t))})});function ta(r,e,t){if(t==null)return r.eq(e);if(r.eq(e))return!0;if(r.isNaN()||e.isNaN())return!1;if(r.isFinite()&&e.isFinite()){var n=r.minus(e).abs();if(n.isZero())return!0;var i=r.constructor.max(r.abs(),e.abs());return n.lte(i.times(t))}return!1}function NS(r,e,t){return zi(r.re,e.re,t)&&zi(r.im,e.im,t)}var na=Me("compareUnits",["typed"],r=>{var{typed:e}=r;return{"Unit, Unit":e.referToSelf(t=>(n,i)=>{if(!n.equalBase(i))throw new Error("Cannot compare units with different base");return e.find(t,[n.valueType(),i.valueType()])(n.value,i.value)})}}),eo="equalScalar",US=["typed","config"],IS=Me(eo,US,r=>{var{typed:e,config:t}=r,n=na({typed:e});return e(eo,{"boolean, boolean":function(s,a){return s===a},"number, number":function(s,a){return zi(s,a,t.epsilon)},"BigNumber, BigNumber":function(s,a){return s.eq(a)||ta(s,a,t.epsilon)},"Fraction, Fraction":function(s,a){return s.equals(a)},"Complex, Complex":function(s,a){return NS(s,a,t.epsilon)}},n)});Me(eo,["typed","config"],r=>{var{typed:e,config:t}=r;return e(eo,{"number, number":function(i,s){return zi(i,s,t.epsilon)}})});var BS="SparseMatrix",OS=["typed","equalScalar","Matrix"],zS=Me(BS,OS,r=>{var{typed:e,equalScalar:t,Matrix:n}=r;function i(p,g){if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if(g&&!On(g))throw new Error("Invalid datatype: "+g);if(ut(p))s(this,p,g);else if(p&&tt(p.index)&&tt(p.ptr)&&tt(p.size))this._values=p.values,this._index=p.index,this._ptr=p.ptr,this._size=p.size,this._datatype=g||p.datatype;else if(tt(p))a(this,p,g);else{if(p)throw new TypeError("Unsupported type of data ("+gi(p)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=g}}function s(p,g,d){g.type==="SparseMatrix"?(p._values=g._values?et(g._values):void 0,p._index=et(g._index),p._ptr=et(g._ptr),p._size=et(g._size),p._datatype=d||g._datatype):a(p,g.valueOf(),d||g._datatype)}function a(p,g,d){p._values=[],p._index=[],p._ptr=[],p._datatype=d;var x=g.length,v=0,y=t,M=0;if(On(d)&&(y=e.find(t,[d,d])||t,M=e.convert(0,d)),x>0){var S=0;do{p._ptr.push(p._index.length);for(var D=0;D<x;D++){var T=g[D];if(tt(T)){if(S===0&&v<T.length&&(v=T.length),S<T.length){var E=T[S];y(E,M)||(p._values.push(E),p._index.push(D))}}else S===0&&v<1&&(v=1),y(T,M)||(p._values.push(T),p._index.push(D))}S++}while(S<v)}p._ptr.push(p._index.length),p._size=[x,v]}i.prototype=new n,i.prototype.createSparseMatrix=function(p,g){return new i(p,g)},Object.defineProperty(i,"name",{value:"SparseMatrix"}),i.prototype.constructor=i,i.prototype.type="SparseMatrix",i.prototype.isSparseMatrix=!0,i.prototype.getDataType=function(){return qs(this._values,gi)},i.prototype.storage=function(){return"sparse"},i.prototype.datatype=function(){return this._datatype},i.prototype.create=function(p,g){return new i(p,g)},i.prototype.density=function(){var p=this._size[0],g=this._size[1];return p!==0&&g!==0?this._index.length/(p*g):0},i.prototype.subset=function(p,g,d){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return o(this,p);case 2:case 3:return l(this,p,g,d);default:throw new SyntaxError("Wrong number of arguments")}};function o(p,g){if(!Rl(g))throw new TypeError("Invalid index");var d=g.isScalar();if(d)return p.get(g.min());var x=g.size();if(x.length!==p._size.length)throw new je(x.length,p._size.length);var v,y,M,S,D=g.min(),T=g.max();for(v=0,y=p._size.length;v<y;v++)ht(D[v],p._size[v]),ht(T[v],p._size[v]);var E=p._values,b=p._index,C=p._ptr,F=g.dimension(0),L=g.dimension(1),P=[],U=[];F.forEach(function(X,Y){U[X]=Y[0],P[X]=!0});var N=E?[]:void 0,V=[],G=[];return L.forEach(function(X){for(G.push(V.length),M=C[X],S=C[X+1];M<S;M++)v=b[M],P[v]===!0&&(V.push(U[v]),N&&N.push(E[M]))}),G.push(V.length),new i({values:N,index:V,ptr:G,size:x,datatype:p._datatype})}function l(p,g,d,x){if(!g||g.isIndex!==!0)throw new TypeError("Invalid index");var v=g.size(),y=g.isScalar(),M;if(ut(d)?(M=d.size(),d=d.toArray()):M=wt(d),y){if(M.length!==0)throw new TypeError("Scalar expected");p.set(g.min(),d,x)}else{if(v.length!==1&&v.length!==2)throw new je(v.length,p._size.length,"<");if(M.length<v.length){for(var S=0,D=0;v[S]===1&&M[S]===1;)S++;for(;v[S]===1;)D++,S++;d=Dp(d,v.length,D,M)}if(!cs(v,M))throw new je(v,M,">");if(v.length===1){var T=g.dimension(0);T.forEach(function(C,F){ht(C),p.set([C,0],d[F[0]],x)})}else{var E=g.dimension(0),b=g.dimension(1);E.forEach(function(C,F){ht(C),b.forEach(function(L,P){ht(L),p.set([C,L],d[F[0]][P[0]],x)})})}}return p}i.prototype.get=function(p){if(!tt(p))throw new TypeError("Array expected");if(p.length!==this._size.length)throw new je(p.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var g=p[0],d=p[1];ht(g,this._size[0]),ht(d,this._size[1]);var x=f(g,this._ptr[d],this._ptr[d+1],this._index);return x<this._ptr[d+1]&&this._index[x]===g?this._values[x]:0},i.prototype.set=function(p,g,d){if(!tt(p))throw new TypeError("Array expected");if(p.length!==this._size.length)throw new je(p.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var x=p[0],v=p[1],y=this._size[0],M=this._size[1],S=t,D=0;On(this._datatype)&&(S=e.find(t,[this._datatype,this._datatype])||t,D=e.convert(0,this._datatype)),(x>y-1||v>M-1)&&(h(this,Math.max(x+1,y),Math.max(v+1,M),d),y=this._size[0],M=this._size[1]),ht(x,y),ht(v,M);var T=f(x,this._ptr[v],this._ptr[v+1],this._index);return T<this._ptr[v+1]&&this._index[T]===x?S(g,D)?u(T,v,this._values,this._index,this._ptr):this._values[T]=g:S(g,D)||c(T,x,v,g,this._values,this._index,this._ptr),this};function f(p,g,d,x){if(d-g===0)return d;for(var v=g;v<d;v++)if(x[v]===p)return v;return g}function u(p,g,d,x,v){d.splice(p,1),x.splice(p,1);for(var y=g+1;y<v.length;y++)v[y]--}function c(p,g,d,x,v,y,M){v.splice(p,0,x),y.splice(p,0,g);for(var S=d+1;S<M.length;S++)M[S]++}i.prototype.resize=function(p,g,d){if(!Ya(p))throw new TypeError("Array or Matrix expected");var x=p.valueOf().map(y=>Array.isArray(y)&&y.length===1?y[0]:y);if(x.length!==2)throw new Error("Only two dimensions matrix are supported");x.forEach(function(y){if(!lt(y)||!gt(y)||y<0)throw new TypeError("Invalid size, must contain positive integers (size: "+pt(x)+")")});var v=d?this.clone():this;return h(v,x[0],x[1],g)};function h(p,g,d,x){var v=x||0,y=t,M=0;On(p._datatype)&&(y=e.find(t,[p._datatype,p._datatype])||t,M=e.convert(0,p._datatype),v=e.convert(v,p._datatype));var S=!y(v,M),D=p._size[0],T=p._size[1],E,b,C;if(d>T){for(b=T;b<d;b++)if(p._ptr[b]=p._values.length,S)for(E=0;E<D;E++)p._values.push(v),p._index.push(E);p._ptr[d]=p._values.length}else d<T&&(p._ptr.splice(d+1,T-d),p._values.splice(p._ptr[d],p._values.length),p._index.splice(p._ptr[d],p._index.length));if(T=d,g>D){if(S){var F=0;for(b=0;b<T;b++){p._ptr[b]=p._ptr[b]+F,C=p._ptr[b+1]+F;var L=0;for(E=D;E<g;E++,L++)p._values.splice(C+L,0,v),p._index.splice(C+L,0,E),F++}p._ptr[T]=p._values.length}}else if(g<D){var P=0;for(b=0;b<T;b++){p._ptr[b]=p._ptr[b]-P;var U=p._ptr[b],N=p._ptr[b+1]-P;for(C=U;C<N;C++)E=p._index[C],E>g-1&&(p._values.splice(C,1),p._index.splice(C,1),P++)}p._ptr[b]=p._values.length}return p._size[0]=g,p._size[1]=d,p}i.prototype.reshape=function(p,g){if(!tt(p))throw new TypeError("Array expected");if(p.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");p.forEach(function(X){if(!lt(X)||!gt(X)||X<=-2||X===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+pt(p)+")")});var d=this._size[0]*this._size[1];p=Ll(p,d);var x=p[0]*p[1];if(d!==x)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var v=g?this.clone():this;if(this._size[0]===p[0]&&this._size[1]===p[1])return v;for(var y=[],M=0;M<v._ptr.length;M++)for(var S=0;S<v._ptr[M+1]-v._ptr[M];S++)y.push(M);for(var D=v._values.slice(),T=v._index.slice(),E=0;E<v._index.length;E++){var b=T[E],C=y[E],F=b*v._size[1]+C;y[E]=F%p[1],T[E]=Math.floor(F/p[1])}v._values.length=0,v._index.length=0,v._ptr.length=p[1]+1,v._size=p.slice();for(var L=0;L<v._ptr.length;L++)v._ptr[L]=0;for(var P=0;P<D.length;P++){var U=T[P],N=y[P],V=D[P],G=f(U,v._ptr[N],v._ptr[N+1],v._index);c(G,U,N,V,v._values,v._index,v._ptr)}return v},i.prototype.clone=function(){var p=new i({values:this._values?et(this._values):void 0,index:et(this._index),ptr:et(this._ptr),size:et(this._size),datatype:this._datatype});return p},i.prototype.size=function(){return this._size.slice(0)},i.prototype.map=function(p,g){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var d=this,x=this._size[0],v=this._size[1],y=$p(p),M=function(D,T,E){return y===1?p(D):y===2?p(D,[T,E]):p(D,[T,E],d)};return m(this,0,x-1,0,v-1,M,g)};function m(p,g,d,x,v,y,M){var S=[],D=[],T=[],E=t,b=0;On(p._datatype)&&(E=e.find(t,[p._datatype,p._datatype])||t,b=e.convert(0,p._datatype));for(var C=function(W,Z,ne){W=y(W,Z,ne),E(W,b)||(S.push(W),D.push(Z))},F=x;F<=v;F++){T.push(S.length);var L=p._ptr[F],P=p._ptr[F+1];if(M)for(var U=L;U<P;U++){var N=p._index[U];N>=g&&N<=d&&C(p._values[U],N-g,F-x)}else{for(var V={},G=L;G<P;G++){var X=p._index[G];V[X]=p._values[G]}for(var Y=g;Y<=d;Y++){var oe=Y in V?V[Y]:0;C(oe,Y-g,F-x)}}}return T.push(S.length),new i({values:S,index:D,ptr:T,size:[d-g+1,v-x+1]})}i.prototype.forEach=function(p,g){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var d=this,x=this._size[0],v=this._size[1],y=0;y<v;y++){var M=this._ptr[y],S=this._ptr[y+1];if(g)for(var D=M;D<S;D++){var T=this._index[D];p(this._values[D],[T,y],d)}else{for(var E={},b=M;b<S;b++){var C=this._index[b];E[C]=this._values[b]}for(var F=0;F<x;F++){var L=F in E?E[F]:0;p(L,[F,y],d)}}}},i.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var p=this._size[1],g=0;g<p;g++)for(var d=this._ptr[g],x=this._ptr[g+1],v=d;v<x;v++){var y=this._index[v];yield{value:this._values[v],index:[y,g]}}},i.prototype.toArray=function(){return _(this._values,this._index,this._ptr,this._size,!0)},i.prototype.valueOf=function(){return _(this._values,this._index,this._ptr,this._size,!1)};function _(p,g,d,x,v){var y=x[0],M=x[1],S=[],D,T;for(D=0;D<y;D++)for(S[D]=[],T=0;T<M;T++)S[D][T]=0;for(T=0;T<M;T++)for(var E=d[T],b=d[T+1],C=E;C<b;C++)D=g[C],S[D][T]=p?v?et(p[C]):p[C]:1;return S}return i.prototype.format=function(p){for(var g=this._size[0],d=this._size[1],x=this.density(),v="Sparse Matrix ["+pt(g,p)+" x "+pt(d,p)+"] density: "+pt(x,p)+`
`,y=0;y<d;y++)for(var M=this._ptr[y],S=this._ptr[y+1],D=M;D<S;D++){var T=this._index[D];v+=`
    (`+pt(T,p)+", "+pt(y,p)+") ==> "+(this._values?pt(this._values[D],p):"X")}return v},i.prototype.toString=function(){return pt(this.toArray())},i.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},i.prototype.diagonal=function(p){if(p){if(bt(p)&&(p=p.toNumber()),!lt(p)||!gt(p))throw new TypeError("The parameter k must be an integer number")}else p=0;var g=p>0?p:0,d=p<0?-p:0,x=this._size[0],v=this._size[1],y=Math.min(x-d,v-g),M=[],S=[],D=[];D[0]=0;for(var T=g;T<v&&M.length<y;T++)for(var E=this._ptr[T],b=this._ptr[T+1],C=E;C<b;C++){var F=this._index[C];if(F===T-g+d){M.push(this._values[C]),S[M.length-1]=F-d;break}}return D.push(M.length),new i({values:M,index:S,ptr:D,size:[y,1]})},i.fromJSON=function(p){return new i(p)},i.diagonal=function(p,g,d,x,v){if(!tt(p))throw new TypeError("Array expected, size parameter");if(p.length!==2)throw new Error("Only two dimensions matrix are supported");if(p=p.map(function(X){if(bt(X)&&(X=X.toNumber()),!lt(X)||!gt(X)||X<1)throw new Error("Size values must be positive integers");return X}),d){if(bt(d)&&(d=d.toNumber()),!lt(d)||!gt(d))throw new TypeError("The parameter k must be an integer number")}else d=0;var y=t,M=0;On(v)&&(y=e.find(t,[v,v])||t,M=e.convert(0,v));var S=d>0?d:0,D=d<0?-d:0,T=p[0],E=p[1],b=Math.min(T-D,E-S),C;if(tt(g)){if(g.length!==b)throw new Error("Invalid value array length");C=function(Y){return g[Y]}}else if(ut(g)){var F=g.size();if(F.length!==1||F[0]!==b)throw new Error("Invalid matrix length");C=function(Y){return g.get([Y])}}else C=function(){return g};for(var L=[],P=[],U=[],N=0;N<E;N++){U.push(L.length);var V=N-S;if(V>=0&&V<b){var G=C(V);y(G,M)||(P.push(V+D),L.push(G))}}return U.push(L.length),new i({values:L,index:P,ptr:U,size:[T,E]})},i.prototype.swapRows=function(p,g){if(!lt(p)||!gt(p)||!lt(g)||!gt(g))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return ht(p,this._size[0]),ht(g,this._size[0]),i._swapRows(p,g,this._size[1],this._values,this._index,this._ptr),this},i._forEachRow=function(p,g,d,x,v){for(var y=x[p],M=x[p+1],S=y;S<M;S++)v(d[S],g[S])},i._swapRows=function(p,g,d,x,v,y){for(var M=0;M<d;M++){var S=y[M],D=y[M+1],T=f(p,S,D,v),E=f(g,S,D,v);if(T<D&&E<D&&v[T]===p&&v[E]===g){if(x){var b=x[T];x[T]=x[E],x[E]=b}continue}if(T<D&&v[T]===p&&(E>=D||v[E]!==g)){var C=x?x[T]:void 0;v.splice(E,0,g),x&&x.splice(E,0,C),v.splice(E<=T?T+1:T,1),x&&x.splice(E<=T?T+1:T,1);continue}if(E<D&&v[E]===g&&(T>=D||v[T]!==p)){var F=x?x[E]:void 0;v.splice(T,0,p),x&&x.splice(T,0,F),v.splice(T<=E?E+1:E,1),x&&x.splice(T<=E?E+1:E,1)}}},i},{isClass:!0}),GS="number",VS=["typed"];function HS(r){var e=r.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);if(e){var t={"0b":2,"0o":8,"0x":16}[e[1]],n=e[2],i=e[3];return{input:r,radix:t,integerPart:n,fractionalPart:i}}else return null}function kS(r){for(var e=parseInt(r.integerPart,r.radix),t=0,n=0;n<r.fractionalPart.length;n++){var i=parseInt(r.fractionalPart[n],r.radix);t+=i/Math.pow(r.radix,n+1)}var s=e+t;if(isNaN(s))throw new SyntaxError('String "'+r.input+'" is not a valid number');return s}var WS=Me(GS,VS,r=>{var{typed:e}=r,t=e("number",{"":function(){return 0},number:function(i){return i},string:function(i){if(i==="NaN")return NaN;var s=HS(i);if(s)return kS(s);var a=0,o=i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);o&&(a=Number(o[2]),i=o[1]);var l=Number(i);if(isNaN(l))throw new SyntaxError('String "'+i+'" is not a valid number');if(o){if(l>2**a-1)throw new SyntaxError('String "'.concat(i,'" is out of range'));l>=2**(a-1)&&(l=l-2**a)}return l},BigNumber:function(i){return i.toNumber()},Fraction:function(i){return i.valueOf()},Unit:e.referToSelf(n=>i=>{var s=i.clone();return s.value=n(i.value),s}),null:function(i){return 0},"Unit, string | Unit":function(i,s){return i.toNumber(s)},"Array | Matrix":e.referToSelf(n=>i=>ln(i,n))});return t.fromJSON=function(n){return parseFloat(n.value)},t}),XS="bignumber",qS=["typed","BigNumber"],$S=Me(XS,qS,r=>{var{typed:e,BigNumber:t}=r;return e("bignumber",{"":function(){return new t(0)},number:function(i){return new t(i+"")},string:function(i){var s=i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);if(s){var a=s[2],o=t(s[1]),l=new t(2).pow(Number(a));if(o.gt(l.sub(1)))throw new SyntaxError('String "'.concat(i,'" is out of range'));var f=new t(2).pow(Number(a)-1);return o.gte(f)?o.sub(l):o}return new t(i)},BigNumber:function(i){return i},Unit:e.referToSelf(n=>i=>{var s=i.clone();return s.value=n(i.value),s}),Fraction:function(i){return new t(i.n).div(i.d).times(i.s)},null:function(i){return new t(0)},"Array | Matrix":e.referToSelf(n=>i=>ln(i,n))})}),YS="complex",ZS=["typed","Complex"],KS=Me(YS,ZS,r=>{var{typed:e,Complex:t}=r;return e("complex",{"":function(){return t.ZERO},number:function(i){return new t(i,0)},"number, number":function(i,s){return new t(i,s)},"BigNumber, BigNumber":function(i,s){return new t(i.toNumber(),s.toNumber())},Fraction:function(i){return new t(i.valueOf(),0)},Complex:function(i){return i.clone()},string:function(i){return t(i)},null:function(i){return t(0)},Object:function(i){if("re"in i&&"im"in i)return new t(i.re,i.im);if("r"in i&&"phi"in i||"abs"in i&&"arg"in i)return new t(i);throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")},"Array | Matrix":e.referToSelf(n=>i=>ln(i,n))})}),JS="fraction",QS=["typed","Fraction"],jS=Me(JS,QS,r=>{var{typed:e,Fraction:t}=r;return e("fraction",{number:function(i){if(!isFinite(i)||isNaN(i))throw new Error(i+" cannot be represented as a fraction");return new t(i)},string:function(i){return new t(i)},"number, number":function(i,s){return new t(i,s)},null:function(i){return new t(0)},BigNumber:function(i){return new t(i.toString())},Fraction:function(i){return i},Unit:e.referToSelf(n=>i=>{var s=i.clone();return s.value=n(i.value),s}),Object:function(i){return new t(i)},"Array | Matrix":e.referToSelf(n=>i=>ln(i,n))})}),eh="matrix",eA=["typed","Matrix","DenseMatrix","SparseMatrix"],tA=Me(eh,eA,r=>{var{typed:e,Matrix:t,DenseMatrix:n,SparseMatrix:i}=r;return e(eh,{"":function(){return s([])},string:function(o){return s([],o)},"string, string":function(o,l){return s([],o,l)},Array:function(o){return s(o)},Matrix:function(o){return s(o,o.storage())},"Array | Matrix, string":s,"Array | Matrix, string, string":s});function s(a,o,l){if(o==="dense"||o==="default"||o===void 0)return new n(a,l);if(o==="sparse")return new i(a,l);throw new TypeError("Unknown matrix type "+JSON.stringify(o)+".")}}),th="matrixFromColumns",nA=["typed","matrix","flatten","size"],iA=Me(th,nA,r=>{var{typed:e,matrix:t,flatten:n,size:i}=r;return e(th,{"...Array":function(l){return s(l)},"...Matrix":function(l){return t(s(l.map(f=>f.toArray())))}});function s(o){if(o.length===0)throw new TypeError("At least one column is needed to construct a matrix.");for(var l=a(o[0]),f=[],u=0;u<l;u++)f[u]=[];for(var c of o){var h=a(c);if(h!==l)throw new TypeError("The vectors had different length: "+(l|0)+" ≠ "+(h|0));for(var m=n(c),_=0;_<l;_++)f[_].push(m[_])}return f}function a(o){var l=i(o);if(l.length===1)return l[0];if(l.length===2){if(l[0]===1)return l[1];if(l[1]===1)return l[0];throw new TypeError("At least one of the arguments is not a vector.")}else throw new TypeError("Only one- or two-dimensional vectors are supported.")}}),nh="unaryMinus",rA=["typed"],sA=Me(nh,rA,r=>{var{typed:e}=r;return e(nh,{number:Qp,"Complex | BigNumber | Fraction":t=>t.neg(),Unit:e.referToSelf(t=>n=>{var i=n.clone();return i.value=e.find(t,i.valueType())(n.value),i}),"Array | Matrix":e.referToSelf(t=>n=>ln(n,t))})}),ih="abs",aA=["typed"],oA=Me(ih,aA,r=>{var{typed:e}=r;return e(ih,{number:Yp,"Complex | BigNumber | Fraction | Unit":t=>t.abs(),"Array | Matrix":e.referToSelf(t=>n=>ln(n,t))})}),rh="addScalar",uA=["typed"],lA=Me(rh,uA,r=>{var{typed:e}=r;return e(rh,{"number, number":Zp,"Complex, Complex":function(n,i){return n.add(i)},"BigNumber, BigNumber":function(n,i){return n.plus(i)},"Fraction, Fraction":function(n,i){return n.add(i)},"Unit, Unit":e.referToSelf(t=>(n,i)=>{if(n.value===null||n.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(i.value===null||i.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!n.equalBase(i))throw new Error("Units do not match");var s=n.clone();return s.value=e.find(t,[s.valueType(),i.valueType()])(s.value,i.value),s.fixPrefix=!1,s})})}),sh="subtractScalar",cA=["typed"],fA=Me(sh,cA,r=>{var{typed:e}=r;return e(sh,{"number, number":Kp,"Complex, Complex":function(n,i){return n.sub(i)},"BigNumber, BigNumber":function(n,i){return n.minus(i)},"Fraction, Fraction":function(n,i){return n.sub(i)},"Unit, Unit":e.referToSelf(t=>(n,i)=>{if(n.value===null||n.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(i.value===null||i.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!n.equalBase(i))throw new Error("Units do not match");var s=n.clone();return s.value=e.find(t,[s.valueType(),i.valueType()])(s.value,i.value),s.fixPrefix=!1,s})})}),hA="matAlgo11xS0s",dA=["typed","equalScalar"],pA=Me(hA,dA,r=>{var{typed:e,equalScalar:t}=r;return function(i,s,a,o){var l=i._values,f=i._index,u=i._ptr,c=i._size,h=i._datatype;if(!l)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=c[0],_=c[1],p,g=t,d=0,x=a;typeof h=="string"&&(p=h,g=e.find(t,[p,p]),d=e.convert(0,p),s=e.convert(s,p),x=e.find(a,[p,p]));for(var v=[],y=[],M=[],S=0;S<_;S++){M[S]=y.length;for(var D=u[S],T=u[S+1],E=D;E<T;E++){var b=f[E],C=o?x(s,l[E]):x(l[E],s);g(C,d)||(y.push(b),v.push(C))}}return M[_]=y.length,i.createSparseMatrix({values:v,index:y,ptr:M,size:[m,_],datatype:p})}}),mA="matAlgo12xSfs",gA=["typed","DenseMatrix"],ms=Me(mA,gA,r=>{var{typed:e,DenseMatrix:t}=r;return function(i,s,a,o){var l=i._values,f=i._index,u=i._ptr,c=i._size,h=i._datatype;if(!l)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=c[0],_=c[1],p,g=a;typeof h=="string"&&(p=h,s=e.convert(s,p),g=e.find(a,[p,p]));for(var d=[],x=[],v=[],y=0;y<_;y++){for(var M=y+1,S=u[y],D=u[y+1],T=S;T<D;T++){var E=f[T];x[E]=l[T],v[E]=M}for(var b=0;b<m;b++)y===0&&(d[b]=[]),v[b]===M?d[b][y]=o?g(s,x[b]):g(x[b],s):d[b][y]=o?g(s,0):g(0,s)}return new t({data:d,size:[m,_],datatype:p})}}),vA="matAlgo14xDs",_A=["typed"],nm=Me(vA,_A,r=>{var{typed:e}=r;return function(i,s,a,o){var l=i._data,f=i._size,u=i._datatype,c,h=a;typeof u=="string"&&(c=u,s=e.convert(s,c),h=e.find(a,[c,c]));var m=f.length>0?t(h,0,f,f[0],l,s,o):[];return i.createDenseMatrix({data:m,size:et(f),datatype:c})};function t(n,i,s,a,o,l,f){var u=[];if(i===s.length-1)for(var c=0;c<a;c++)u[c]=f?n(l,o[c]):n(o[c],l);else for(var h=0;h<a;h++)u[h]=t(n,i+1,s,s[i+1],o[h],l,f);return u}}),xA="matAlgo03xDSf",yA=["typed"],gs=Me(xA,yA,r=>{var{typed:e}=r;return function(n,i,s,a){var o=n._data,l=n._size,f=n._datatype,u=i._values,c=i._index,h=i._ptr,m=i._size,_=i._datatype;if(l.length!==m.length)throw new je(l.length,m.length);if(l[0]!==m[0]||l[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+l+") must match Matrix B ("+m+")");if(!u)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var p=l[0],g=l[1],d,x=0,v=s;typeof f=="string"&&f===_&&(d=f,x=e.convert(0,d),v=e.find(s,[d,d]));for(var y=[],M=0;M<p;M++)y[M]=[];for(var S=[],D=[],T=0;T<g;T++){for(var E=T+1,b=h[T],C=h[T+1],F=b;F<C;F++){var L=c[F];S[L]=a?v(u[F],o[L][T]):v(o[L][T],u[F]),D[L]=E}for(var P=0;P<p;P++)D[P]===E?y[P][T]=S[P]:y[P][T]=a?v(x,o[P][T]):v(o[P][T],x)}return n.createDenseMatrix({data:y,size:[p,g],datatype:d})}}),EA="matAlgo05xSfSf",MA=["typed","equalScalar"],SA=Me(EA,MA,r=>{var{typed:e,equalScalar:t}=r;return function(i,s,a){var o=i._values,l=i._index,f=i._ptr,u=i._size,c=i._datatype,h=s._values,m=s._index,_=s._ptr,p=s._size,g=s._datatype;if(u.length!==p.length)throw new je(u.length,p.length);if(u[0]!==p[0]||u[1]!==p[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+p+")");var d=u[0],x=u[1],v,y=t,M=0,S=a;typeof c=="string"&&c===g&&(v=c,y=e.find(t,[v,v]),M=e.convert(0,v),S=e.find(a,[v,v]));var D=o&&h?[]:void 0,T=[],E=[],b=D?[]:void 0,C=D?[]:void 0,F=[],L=[],P,U,N,V;for(U=0;U<x;U++){E[U]=T.length;var G=U+1;for(N=f[U],V=f[U+1];N<V;N++)P=l[N],T.push(P),F[P]=G,b&&(b[P]=o[N]);for(N=_[U],V=_[U+1];N<V;N++)P=m[N],F[P]!==G&&T.push(P),L[P]=G,C&&(C[P]=h[N]);if(D)for(N=E[U];N<T.length;){P=T[N];var X=F[P],Y=L[P];if(X===G||Y===G){var oe=X===G?b[P]:M,B=Y===G?C[P]:M,W=S(oe,B);y(W,M)?T.splice(N,1):(D.push(W),N++)}}}return E[x]=T.length,i.createSparseMatrix({values:D,index:T,ptr:E,size:[d,x],datatype:v})}}),AA="matAlgo13xDD",wA=["typed"],DA=Me(AA,wA,r=>{var{typed:e}=r;return function(i,s,a){var o=i._data,l=i._size,f=i._datatype,u=s._data,c=s._size,h=s._datatype,m=[];if(l.length!==c.length)throw new je(l.length,c.length);for(var _=0;_<l.length;_++){if(l[_]!==c[_])throw new RangeError("Dimension mismatch. Matrix A ("+l+") must match Matrix B ("+c+")");m[_]=l[_]}var p,g=a;typeof f=="string"&&f===h&&(p=f,g=e.find(a,[p,p]));var d=m.length>0?t(g,0,m,m[0],o,u):[];return i.createDenseMatrix({data:d,size:m,datatype:p})};function t(n,i,s,a,o,l){var f=[];if(i===s.length-1)for(var u=0;u<a;u++)f[u]=n(o[u],l[u]);else for(var c=0;c<a;c++)f[c]=t(n,i+1,s,s[i+1],o[c],l[c]);return f}}),bA="broadcast",TA=["concat"],CA=Me(bA,TA,r=>{var{concat:e}=r;return function(i,s){var a=Math.max(i._size.length,s._size.length);if(i._size.length===s._size.length&&i._size.every((_,p)=>_===s._size[p]))return[i,s];for(var o=t(i._size,a,0),l=t(s._size,a,0),f=[],u=0;u<a;u++)f[u]=Math.max(o[u],l[u]);Ka(o,f),Ka(l,f);var c=i.clone(),h=s.clone();c._size.length<a?c.reshape(t(c._size,a,1)):h._size.length<a&&h.reshape(t(h._size,a,1));for(var m=0;m<a;m++)c._size[m]<f[m]&&(c=n(c,f[m],m)),h._size[m]<f[m]&&(h=n(h,f[m],m));return[c,h]};function t(i,s,a){return[...Array(s-i.length).fill(a),...i]}function n(i,s,a){return e(...Array(s).fill(i),a)}}),FA="matrixAlgorithmSuite",RA=["typed","matrix","concat"],_r=Me(FA,RA,r=>{var{typed:e,matrix:t,concat:n}=r,i=DA({typed:e}),s=nm({typed:e}),a=CA({concat:n});return function(l){var f=l.elop,u=l.SD||l.DS,c;f?(c={"DenseMatrix, DenseMatrix":(p,g)=>i(...a(p,g),f),"Array, Array":(p,g)=>i(...a(t(p),t(g)),f).valueOf(),"Array, DenseMatrix":(p,g)=>i(...a(t(p),g),f),"DenseMatrix, Array":(p,g)=>i(...a(p,t(g)),f)},l.SS&&(c["SparseMatrix, SparseMatrix"]=(p,g)=>l.SS(...a(p,g),f,!1)),l.DS&&(c["DenseMatrix, SparseMatrix"]=(p,g)=>l.DS(...a(p,g),f,!1),c["Array, SparseMatrix"]=(p,g)=>l.DS(...a(t(p),g),f,!1)),u&&(c["SparseMatrix, DenseMatrix"]=(p,g)=>u(...a(g,p),f,!0),c["SparseMatrix, Array"]=(p,g)=>u(...a(t(g),p),f,!0))):(c={"DenseMatrix, DenseMatrix":e.referToSelf(p=>(g,d)=>i(...a(g,d),p)),"Array, Array":e.referToSelf(p=>(g,d)=>i(...a(t(g),t(d)),p).valueOf()),"Array, DenseMatrix":e.referToSelf(p=>(g,d)=>i(...a(t(g),d),p)),"DenseMatrix, Array":e.referToSelf(p=>(g,d)=>i(...a(g,t(d)),p))},l.SS&&(c["SparseMatrix, SparseMatrix"]=e.referToSelf(p=>(g,d)=>l.SS(...a(g,d),p,!1))),l.DS&&(c["DenseMatrix, SparseMatrix"]=e.referToSelf(p=>(g,d)=>l.DS(...a(g,d),p,!1)),c["Array, SparseMatrix"]=e.referToSelf(p=>(g,d)=>l.DS(...a(t(g),d),p,!1))),u&&(c["SparseMatrix, DenseMatrix"]=e.referToSelf(p=>(g,d)=>u(...a(d,g),p,!0)),c["SparseMatrix, Array"]=e.referToSelf(p=>(g,d)=>u(...a(t(d),g),p,!0))));var h=l.scalar||"any",m=l.Ds||l.Ss;m&&(f?(c["DenseMatrix,"+h]=(p,g)=>s(p,g,f,!1),c[h+", DenseMatrix"]=(p,g)=>s(g,p,f,!0),c["Array,"+h]=(p,g)=>s(t(p),g,f,!1).valueOf(),c[h+", Array"]=(p,g)=>s(t(g),p,f,!0).valueOf()):(c["DenseMatrix,"+h]=e.referToSelf(p=>(g,d)=>s(g,d,p,!1)),c[h+", DenseMatrix"]=e.referToSelf(p=>(g,d)=>s(d,g,p,!0)),c["Array,"+h]=e.referToSelf(p=>(g,d)=>s(t(g),d,p,!1).valueOf()),c[h+", Array"]=e.referToSelf(p=>(g,d)=>s(t(d),g,p,!0).valueOf())));var _=l.sS!==void 0?l.sS:l.Ss;return f?(l.Ss&&(c["SparseMatrix,"+h]=(p,g)=>l.Ss(p,g,f,!1)),_&&(c[h+", SparseMatrix"]=(p,g)=>_(g,p,f,!0))):(l.Ss&&(c["SparseMatrix,"+h]=e.referToSelf(p=>(g,d)=>l.Ss(g,d,p,!1))),_&&(c[h+", SparseMatrix"]=e.referToSelf(p=>(g,d)=>_(d,g,p,!0)))),f&&f.signatures&&zE(c,f.signatures),c}}),PA="matAlgo01xDSid",LA=["typed"],im=Me(PA,LA,r=>{var{typed:e}=r;return function(n,i,s,a){var o=n._data,l=n._size,f=n._datatype,u=i._values,c=i._index,h=i._ptr,m=i._size,_=i._datatype;if(l.length!==m.length)throw new je(l.length,m.length);if(l[0]!==m[0]||l[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+l+") must match Matrix B ("+m+")");if(!u)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var p=l[0],g=l[1],d=typeof f=="string"&&f===_?f:void 0,x=d?e.find(s,[d,d]):s,v,y,M=[];for(v=0;v<p;v++)M[v]=[];var S=[],D=[];for(y=0;y<g;y++){for(var T=y+1,E=h[y],b=h[y+1],C=E;C<b;C++)v=c[C],S[v]=a?x(u[C],o[v][y]):x(o[v][y],u[C]),D[v]=T;for(v=0;v<p;v++)D[v]===T?M[v][y]=S[v]:M[v][y]=o[v][y]}return n.createDenseMatrix({data:M,size:[p,g],datatype:d})}}),NA="matAlgo04xSidSid",UA=["typed","equalScalar"],IA=Me(NA,UA,r=>{var{typed:e,equalScalar:t}=r;return function(i,s,a){var o=i._values,l=i._index,f=i._ptr,u=i._size,c=i._datatype,h=s._values,m=s._index,_=s._ptr,p=s._size,g=s._datatype;if(u.length!==p.length)throw new je(u.length,p.length);if(u[0]!==p[0]||u[1]!==p[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+p+")");var d=u[0],x=u[1],v,y=t,M=0,S=a;typeof c=="string"&&c===g&&(v=c,y=e.find(t,[v,v]),M=e.convert(0,v),S=e.find(a,[v,v]));var D=o&&h?[]:void 0,T=[],E=[],b=o&&h?[]:void 0,C=o&&h?[]:void 0,F=[],L=[],P,U,N,V,G;for(U=0;U<x;U++){E[U]=T.length;var X=U+1;for(V=f[U],G=f[U+1],N=V;N<G;N++)P=l[N],T.push(P),F[P]=X,b&&(b[P]=o[N]);for(V=_[U],G=_[U+1],N=V;N<G;N++)if(P=m[N],F[P]===X){if(b){var Y=S(b[P],h[N]);y(Y,M)?F[P]=null:b[P]=Y}}else T.push(P),L[P]=X,C&&(C[P]=h[N]);if(b&&C)for(N=E[U];N<T.length;)P=T[N],F[P]===X?(D[N]=b[P],N++):L[P]===X?(D[N]=C[P],N++):T.splice(N,1)}return E[x]=T.length,i.createSparseMatrix({values:D,index:T,ptr:E,size:[d,x],datatype:v})}}),BA="matAlgo10xSids",OA=["typed","DenseMatrix"],rm=Me(BA,OA,r=>{var{typed:e,DenseMatrix:t}=r;return function(i,s,a,o){var l=i._values,f=i._index,u=i._ptr,c=i._size,h=i._datatype;if(!l)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=c[0],_=c[1],p,g=a;typeof h=="string"&&(p=h,s=e.convert(s,p),g=e.find(a,[p,p]));for(var d=[],x=[],v=[],y=0;y<_;y++){for(var M=y+1,S=u[y],D=u[y+1],T=S;T<D;T++){var E=f[T];x[E]=l[T],v[E]=M}for(var b=0;b<m;b++)y===0&&(d[b]=[]),v[b]===M?d[b][y]=o?g(s,x[b]):g(x[b],s):d[b][y]=s}return new t({data:d,size:[m,_],datatype:p})}}),zA="multiplyScalar",GA=["typed"],VA=Me(zA,GA,r=>{var{typed:e}=r;return e("multiplyScalar",{"number, number":Jp,"Complex, Complex":function(n,i){return n.mul(i)},"BigNumber, BigNumber":function(n,i){return n.times(i)},"Fraction, Fraction":function(n,i){return n.mul(i)},"number | Fraction | BigNumber | Complex, Unit":(t,n)=>n.multiply(t),"Unit, number | Fraction | BigNumber | Complex | Unit":(t,n)=>t.multiply(n)})}),ah="multiply",HA=["typed","matrix","addScalar","multiplyScalar","equalScalar","dot"],kA=Me(ah,HA,r=>{var{typed:e,matrix:t,addScalar:n,multiplyScalar:i,equalScalar:s,dot:a}=r,o=pA({typed:e,equalScalar:s}),l=nm({typed:e});function f(M,S){switch(M.length){case 1:switch(S.length){case 1:if(M[0]!==S[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(M[0]!==S[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+M[0]+") must match Matrix rows ("+S[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+S.length+" dimensions)")}break;case 2:switch(S.length){case 1:if(M[1]!==S[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+M[1]+") must match Vector length ("+S[0]+")");break;case 2:if(M[1]!==S[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+M[1]+") must match Matrix B rows ("+S[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+S.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+M.length+" dimensions)")}}function u(M,S,D){if(D===0)throw new Error("Cannot multiply two empty vectors");return a(M,S)}function c(M,S){if(S.storage()!=="dense")throw new Error("Support for SparseMatrix not implemented");return h(M,S)}function h(M,S){var D=M._data,T=M._size,E=M._datatype,b=S._data,C=S._size,F=S._datatype,L=T[0],P=C[1],U,N=n,V=i;E&&F&&E===F&&typeof E=="string"&&(U=E,N=e.find(n,[U,U]),V=e.find(i,[U,U]));for(var G=[],X=0;X<P;X++){for(var Y=V(D[0],b[0][X]),oe=1;oe<L;oe++)Y=N(Y,V(D[oe],b[oe][X]));G[X]=Y}return M.createDenseMatrix({data:G,size:[P],datatype:U})}var m=e("_multiplyMatrixVector",{"DenseMatrix, any":p,"SparseMatrix, any":x}),_=e("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":g,"DenseMatrix, SparseMatrix":d,"SparseMatrix, DenseMatrix":v,"SparseMatrix, SparseMatrix":y});function p(M,S){var D=M._data,T=M._size,E=M._datatype,b=S._data,C=S._datatype,F=T[0],L=T[1],P,U=n,N=i;E&&C&&E===C&&typeof E=="string"&&(P=E,U=e.find(n,[P,P]),N=e.find(i,[P,P]));for(var V=[],G=0;G<F;G++){for(var X=D[G],Y=N(X[0],b[0]),oe=1;oe<L;oe++)Y=U(Y,N(X[oe],b[oe]));V[G]=Y}return M.createDenseMatrix({data:V,size:[F],datatype:P})}function g(M,S){var D=M._data,T=M._size,E=M._datatype,b=S._data,C=S._size,F=S._datatype,L=T[0],P=T[1],U=C[1],N,V=n,G=i;E&&F&&E===F&&typeof E=="string"&&(N=E,V=e.find(n,[N,N]),G=e.find(i,[N,N]));for(var X=[],Y=0;Y<L;Y++){var oe=D[Y];X[Y]=[];for(var B=0;B<U;B++){for(var W=G(oe[0],b[0][B]),Z=1;Z<P;Z++)W=V(W,G(oe[Z],b[Z][B]));X[Y][B]=W}}return M.createDenseMatrix({data:X,size:[L,U],datatype:N})}function d(M,S){var D=M._data,T=M._size,E=M._datatype,b=S._values,C=S._index,F=S._ptr,L=S._size,P=S._datatype;if(!b)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var U=T[0],N=L[1],V,G=n,X=i,Y=s,oe=0;E&&P&&E===P&&typeof E=="string"&&(V=E,G=e.find(n,[V,V]),X=e.find(i,[V,V]),Y=e.find(s,[V,V]),oe=e.convert(0,V));for(var B=[],W=[],Z=[],ne=S.createSparseMatrix({values:B,index:W,ptr:Z,size:[U,N],datatype:V}),re=0;re<N;re++){Z[re]=W.length;var ee=F[re],ue=F[re+1];if(ue>ee)for(var se=0,fe=0;fe<U;fe++){for(var de=fe+1,z=void 0,we=ee;we<ue;we++){var pe=C[we];se!==de?(z=X(D[fe][pe],b[we]),se=de):z=G(z,X(D[fe][pe],b[we]))}se===de&&!Y(z,oe)&&(W.push(fe),B.push(z))}}return Z[N]=W.length,ne}function x(M,S){var D=M._values,T=M._index,E=M._ptr,b=M._datatype;if(!D)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var C=S._data,F=S._datatype,L=M._size[0],P=S._size[0],U=[],N=[],V=[],G,X=n,Y=i,oe=s,B=0;b&&F&&b===F&&typeof b=="string"&&(G=b,X=e.find(n,[G,G]),Y=e.find(i,[G,G]),oe=e.find(s,[G,G]),B=e.convert(0,G));var W=[],Z=[];V[0]=0;for(var ne=0;ne<P;ne++){var re=C[ne];if(!oe(re,B))for(var ee=E[ne],ue=E[ne+1],se=ee;se<ue;se++){var fe=T[se];Z[fe]?W[fe]=X(W[fe],Y(re,D[se])):(Z[fe]=!0,N.push(fe),W[fe]=Y(re,D[se]))}}for(var de=N.length,z=0;z<de;z++){var we=N[z];U[z]=W[we]}return V[1]=N.length,M.createSparseMatrix({values:U,index:N,ptr:V,size:[L,1],datatype:G})}function v(M,S){var D=M._values,T=M._index,E=M._ptr,b=M._datatype;if(!D)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var C=S._data,F=S._datatype,L=M._size[0],P=S._size[0],U=S._size[1],N,V=n,G=i,X=s,Y=0;b&&F&&b===F&&typeof b=="string"&&(N=b,V=e.find(n,[N,N]),G=e.find(i,[N,N]),X=e.find(s,[N,N]),Y=e.convert(0,N));for(var oe=[],B=[],W=[],Z=M.createSparseMatrix({values:oe,index:B,ptr:W,size:[L,U],datatype:N}),ne=[],re=[],ee=0;ee<U;ee++){W[ee]=B.length;for(var ue=ee+1,se=0;se<P;se++){var fe=C[se][ee];if(!X(fe,Y))for(var de=E[se],z=E[se+1],we=de;we<z;we++){var pe=T[we];re[pe]!==ue?(re[pe]=ue,B.push(pe),ne[pe]=G(fe,D[we])):ne[pe]=V(ne[pe],G(fe,D[we]))}}for(var ve=W[ee],me=B.length,Pe=ve;Pe<me;Pe++){var Te=B[Pe];oe[Pe]=ne[Te]}}return W[U]=B.length,Z}function y(M,S){var D=M._values,T=M._index,E=M._ptr,b=M._datatype,C=S._values,F=S._index,L=S._ptr,P=S._datatype,U=M._size[0],N=S._size[1],V=D&&C,G,X=n,Y=i;b&&P&&b===P&&typeof b=="string"&&(G=b,X=e.find(n,[G,G]),Y=e.find(i,[G,G]));for(var oe=V?[]:void 0,B=[],W=[],Z=M.createSparseMatrix({values:oe,index:B,ptr:W,size:[U,N],datatype:G}),ne=V?[]:void 0,re=[],ee,ue,se,fe,de,z,we,pe,ve=0;ve<N;ve++){W[ve]=B.length;var me=ve+1;for(de=L[ve],z=L[ve+1],fe=de;fe<z;fe++)if(pe=F[fe],V)for(ue=E[pe],se=E[pe+1],ee=ue;ee<se;ee++)we=T[ee],re[we]!==me?(re[we]=me,B.push(we),ne[we]=Y(C[fe],D[ee])):ne[we]=X(ne[we],Y(C[fe],D[ee]));else for(ue=E[pe],se=E[pe+1],ee=ue;ee<se;ee++)we=T[ee],re[we]!==me&&(re[we]=me,B.push(we));if(V)for(var Pe=W[ve],Te=B.length,Ce=Pe;Ce<Te;Ce++){var Le=B[Ce];oe[Ce]=ne[Le]}}return W[N]=B.length,Z}return e(ah,i,{"Array, Array":e.referTo("Matrix, Matrix",M=>(S,D)=>{f(wt(S),wt(D));var T=M(t(S),t(D));return ut(T)?T.valueOf():T}),"Matrix, Matrix":function(S,D){var T=S.size(),E=D.size();return f(T,E),T.length===1?E.length===1?u(S,D,T[0]):c(S,D):E.length===1?m(S,D):_(S,D)},"Matrix, Array":e.referTo("Matrix,Matrix",M=>(S,D)=>M(S,t(D))),"Array, Matrix":e.referToSelf(M=>(S,D)=>M(t(S,D.storage()),D)),"SparseMatrix, any":function(S,D){return o(S,D,i,!1)},"DenseMatrix, any":function(S,D){return l(S,D,i,!1)},"any, SparseMatrix":function(S,D){return o(D,S,i,!0)},"any, DenseMatrix":function(S,D){return l(D,S,i,!0)},"Array, any":function(S,D){return l(t(S),D,i,!1).valueOf()},"any, Array":function(S,D){return l(t(D),S,i,!0).valueOf()},"any, any":i,"any, any, ...any":e.referToSelf(M=>(S,D,T)=>{for(var E=M(S,D),b=0;b<T.length;b++)E=M(E,T[b]);return E})})}),oh="sign",WA=["typed","BigNumber","Fraction","complex"],XA=Me(oh,WA,r=>{var{typed:e,BigNumber:t,complex:n,Fraction:i}=r;return e(oh,{number:il,Complex:function(a){return a.im===0?n(il(a.re)):a.sign()},BigNumber:function(a){return new t(a.cmp(0))},Fraction:function(a){return new i(a.s,1)},"Array | Matrix":e.referToSelf(s=>a=>ln(a,s)),Unit:e.referToSelf(s=>a=>{if(!a._isDerived()&&a.units[0].unit.offset!==0)throw new TypeError("sign is ambiguous for units with offset");return e.find(s,a.valueType())(a.value)})})}),qA="sqrt",$A=["config","typed","Complex"],YA=Me(qA,$A,r=>{var{config:e,typed:t,Complex:n}=r;return t("sqrt",{number:i,Complex:function(a){return a.sqrt()},BigNumber:function(a){return!a.isNegative()||e.predictable?a.sqrt():i(a.toNumber())},Unit:function(a){return a.pow(.5)}});function i(s){return isNaN(s)?NaN:s>=0||e.predictable?Math.sqrt(s):new n(s,0).sqrt()}}),uh="subtract",ZA=["typed","matrix","equalScalar","subtractScalar","unaryMinus","DenseMatrix","concat"],KA=Me(uh,ZA,r=>{var{typed:e,matrix:t,equalScalar:n,subtractScalar:i,unaryMinus:s,DenseMatrix:a,concat:o}=r,l=im({typed:e}),f=gs({typed:e}),u=SA({typed:e,equalScalar:n}),c=rm({typed:e,DenseMatrix:a}),h=ms({typed:e,DenseMatrix:a}),m=_r({typed:e,matrix:t,concat:o});return e(uh,{"any, any":i},m({elop:i,SS:u,DS:l,SD:f,Ss:h,sS:c}))}),JA="matAlgo07xSSf",QA=["typed","DenseMatrix"],ia=Me(JA,QA,r=>{var{typed:e,DenseMatrix:t}=r;return function(s,a,o){var l=s._size,f=s._datatype,u=a._size,c=a._datatype;if(l.length!==u.length)throw new je(l.length,u.length);if(l[0]!==u[0]||l[1]!==u[1])throw new RangeError("Dimension mismatch. Matrix A ("+l+") must match Matrix B ("+u+")");var h=l[0],m=l[1],_,p=0,g=o;typeof f=="string"&&f===c&&(_=f,p=e.convert(0,_),g=e.find(o,[_,_]));var d,x,v=[];for(d=0;d<h;d++)v[d]=[];var y=[],M=[],S=[],D=[];for(x=0;x<m;x++){var T=x+1;for(n(s,x,S,y,T),n(a,x,D,M,T),d=0;d<h;d++){var E=S[d]===T?y[d]:p,b=D[d]===T?M[d]:p;v[d][x]=g(E,b)}}return new t({data:v,size:[h,m],datatype:_})};function n(i,s,a,o,l){for(var f=i._values,u=i._index,c=i._ptr,h=c[s],m=c[s+1];h<m;h++){var _=u[h];a[_]=l,o[_]=f[h]}}}),lh="conj",jA=["typed"],ew=Me(lh,jA,r=>{var{typed:e}=r;return e(lh,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.conjugate(),"Array | Matrix":e.referToSelf(t=>n=>ln(n,t))})}),ch="im",tw=["typed"],nw=Me(ch,tw,r=>{var{typed:e}=r;return e(ch,{number:()=>0,"BigNumber | Fraction":t=>t.mul(0),Complex:t=>t.im,"Array | Matrix":e.referToSelf(t=>n=>ln(n,t))})}),fh="re",iw=["typed"],rw=Me(fh,iw,r=>{var{typed:e}=r;return e(fh,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.re,"Array | Matrix":e.referToSelf(t=>n=>ln(n,t))})}),hh="concat",sw=["typed","matrix","isInteger"],aw=Me(hh,sw,r=>{var{typed:e,matrix:t,isInteger:n}=r;return e(hh,{"...Array | Matrix | number | BigNumber":function(s){var a,o=s.length,l=-1,f,u=!1,c=[];for(a=0;a<o;a++){var h=s[a];if(ut(h)&&(u=!0),lt(h)||bt(h)){if(a!==o-1)throw new Error("Dimension must be specified as last argument");if(f=l,l=h.valueOf(),!n(l))throw new TypeError("Integer number expected for dimension");if(l<0||a>0&&l>f)throw new vr(l,f+1)}else{var m=et(h).valueOf(),_=wt(m);if(c[a]=m,f=l,l=_.length-1,a>0&&l!==f)throw new je(f+1,l+1)}}if(c.length===0)throw new SyntaxError("At least one matrix expected");for(var p=c.shift();c.length;)p=Cp(p,c.shift(),l);return u?t(p):p},"...string":function(s){return s.join("")}})}),dh="column",ow=["typed","Index","matrix","range"],uw=Me(dh,ow,r=>{var{typed:e,Index:t,matrix:n,range:i}=r;return e(dh,{"Matrix, number":s,"Array, number":function(o,l){return s(n(et(o)),l).valueOf()}});function s(a,o){if(a.size().length!==2)throw new Error("Only two dimensional matrix is supported");ht(o,a.size()[1]);var l=i(0,a.size()[0]),f=new t(l,o),u=a.subset(f);return ut(u)?u:n([[u]])}}),ph="diag",lw=["typed","matrix","DenseMatrix","SparseMatrix"],cw=Me(ph,lw,r=>{var{typed:e,matrix:t,DenseMatrix:n,SparseMatrix:i}=r;return e(ph,{Array:function(f){return s(f,0,wt(f),null)},"Array, number":function(f,u){return s(f,u,wt(f),null)},"Array, BigNumber":function(f,u){return s(f,u.toNumber(),wt(f),null)},"Array, string":function(f,u){return s(f,0,wt(f),u)},"Array, number, string":function(f,u,c){return s(f,u,wt(f),c)},"Array, BigNumber, string":function(f,u,c){return s(f,u.toNumber(),wt(f),c)},Matrix:function(f){return s(f,0,f.size(),f.storage())},"Matrix, number":function(f,u){return s(f,u,f.size(),f.storage())},"Matrix, BigNumber":function(f,u){return s(f,u.toNumber(),f.size(),f.storage())},"Matrix, string":function(f,u){return s(f,0,f.size(),u)},"Matrix, number, string":function(f,u,c){return s(f,u,f.size(),c)},"Matrix, BigNumber, string":function(f,u,c){return s(f,u.toNumber(),f.size(),c)}});function s(l,f,u,c){if(!gt(f))throw new TypeError("Second parameter in function diag must be an integer");var h=f>0?f:0,m=f<0?-f:0;switch(u.length){case 1:return a(l,f,c,u[0],m,h);case 2:return o(l,f,c,u,m,h)}throw new RangeError("Matrix for function diag must be 2 dimensional")}function a(l,f,u,c,h,m){var _=[c+h,c+m];if(u&&u!=="sparse"&&u!=="dense")throw new TypeError("Unknown matrix type ".concat(u,'"'));var p=u==="sparse"?i.diagonal(_,l,f):n.diagonal(_,l,f);return u!==null?p:p.valueOf()}function o(l,f,u,c,h,m){if(ut(l)){var _=l.diagonal(f);return u!==null?u!==_.storage()?t(_,u):_:_.valueOf()}for(var p=Math.min(c[0]-h,c[1]-m),g=[],d=0;d<p;d++)g[d]=l[d+h][d+m];return u!==null?t(g):g}}),mh="flatten",fw=["typed","matrix"],hw=Me(mh,fw,r=>{var{typed:e,matrix:t}=r;return e(mh,{Array:function(i){return Ju(i)},Matrix:function(i){var s=Ju(i.toArray());return t(s)}})}),gh="getMatrixDataType",dw=["typed"],pw=Me(gh,dw,r=>{var{typed:e}=r;return e(gh,{Array:function(n){return qs(n,gi)},Matrix:function(n){return n.getDataType()}})}),vh="identity",mw=["typed","config","matrix","BigNumber","DenseMatrix","SparseMatrix"],gw=Me(vh,mw,r=>{var{typed:e,config:t,matrix:n,BigNumber:i,DenseMatrix:s,SparseMatrix:a}=r;return e(vh,{"":function(){return t.matrix==="Matrix"?n([]):[]},string:function(u){return n(u)},"number | BigNumber":function(u){return l(u,u,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, string":function(u,c){return l(u,u,c)},"number | BigNumber, number | BigNumber":function(u,c){return l(u,c,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, number | BigNumber, string":function(u,c,h){return l(u,c,h)},Array:function(u){return o(u)},"Array, string":function(u,c){return o(u,c)},Matrix:function(u){return o(u.valueOf(),u.storage())},"Matrix, string":function(u,c){return o(u.valueOf(),c)}});function o(f,u){switch(f.length){case 0:return u?n(u):[];case 1:return l(f[0],f[0],u);case 2:return l(f[0],f[1],u);default:throw new Error("Vector containing two values expected")}}function l(f,u,c){var h=bt(f)||bt(u)?i:null;if(bt(f)&&(f=f.toNumber()),bt(u)&&(u=u.toNumber()),!gt(f)||f<1)throw new Error("Parameters in function identity must be positive integers");if(!gt(u)||u<1)throw new Error("Parameters in function identity must be positive integers");var m=h?new i(1):1,_=h?new h(0):0,p=[f,u];if(c){if(c==="sparse")return a.diagonal(p,m,0,_);if(c==="dense")return s.diagonal(p,m,0,_);throw new TypeError('Unknown matrix type "'.concat(c,'"'))}for(var g=Za([],p,_),d=f<u?f:u,x=0;x<d;x++)g[x][x]=m;return g}});function sm(){throw new Error('No "bignumber" implementation available')}function vw(){throw new Error('No "fraction" implementation available')}function am(){throw new Error('No "matrix" implementation available')}var _h="range",_w=["typed","config","?matrix","?bignumber","smaller","smallerEq","larger","largerEq","add","isPositive"],xw=Me(_h,_w,r=>{var{typed:e,config:t,matrix:n,bignumber:i,smaller:s,smallerEq:a,larger:o,largerEq:l,add:f,isPositive:u}=r;return e(_h,{string:h,"string, boolean":h,"number, number":function(g,d){return c(m(g,d,1,!1))},"number, number, number":function(g,d,x){return c(m(g,d,x,!1))},"number, number, boolean":function(g,d,x){return c(m(g,d,1,x))},"number, number, number, boolean":function(g,d,x,v){return c(m(g,d,x,v))},"BigNumber, BigNumber":function(g,d){var x=g.constructor;return c(m(g,d,new x(1),!1))},"BigNumber, BigNumber, BigNumber":function(g,d,x){return c(m(g,d,x,!1))},"BigNumber, BigNumber, boolean":function(g,d,x){var v=g.constructor;return c(m(g,d,new v(1),x))},"BigNumber, BigNumber, BigNumber, boolean":function(g,d,x,v){return c(m(g,d,x,v))},"Unit, Unit, Unit":function(g,d,x){return c(m(g,d,x,!1))},"Unit, Unit, Unit, boolean":function(g,d,x,v){return c(m(g,d,x,v))}});function c(p){return t.matrix==="Matrix"?n?n(p):am():p}function h(p,g){var d=_(p);if(!d)throw new SyntaxError('String "'+p+'" is no valid range');return t.number==="BigNumber"?(i===void 0&&sm(),c(m(i(d.start),i(d.end),i(d.step)))):c(m(d.start,d.end,d.step,g))}function m(p,g,d,x){for(var v=[],y=u(d)?x?a:s:x?l:o,M=p;y(M,g);)v.push(M),M=f(M,d);return v}function _(p){var g=p.split(":"),d=g.map(function(v){return Number(v)}),x=d.some(function(v){return isNaN(v)});if(x)return null;switch(d.length){case 2:return{start:d[0],end:d[1],step:1};case 3:return{start:d[0],end:d[2],step:d[1]};default:return null}}}),xh="reshape",yw=["typed","isInteger","matrix"],Ew=Me(xh,yw,r=>{var{typed:e,isInteger:t}=r;return e(xh,{"Matrix, Array":function(i,s){return i.reshape(s,!0)},"Array, Array":function(i,s){return s.forEach(function(a){if(!t(a))throw new TypeError("Invalid size for dimension: "+a)}),Pl(i,s)}})}),yh="size",Mw=["typed","config","?matrix"],Sw=Me(yh,Mw,r=>{var{typed:e,config:t,matrix:n}=r;return e(yh,{Matrix:function(s){return s.create(s.size())},Array:wt,string:function(s){return t.matrix==="Array"?[s.length]:n([s.length])},"number | Complex | BigNumber | Unit | boolean | null":function(s){return t.matrix==="Array"?[]:n?n([]):am()}})}),Eh="zeros",Aw=["typed","config","matrix","BigNumber"],ww=Me(Eh,Aw,r=>{var{typed:e,config:t,matrix:n,BigNumber:i}=r;return e(Eh,{"":function(){return t.matrix==="Array"?s([]):s([],"default")},"...number | BigNumber | string":function(f){var u=f[f.length-1];if(typeof u=="string"){var c=f.pop();return s(f,c)}else return t.matrix==="Array"?s(f):s(f,"default")},Array:s,Matrix:function(f){var u=f.storage();return s(f.valueOf(),u)},"Array | Matrix, string":function(f,u){return s(f.valueOf(),u)}});function s(l,f){var u=a(l),c=u?new i(0):0;if(o(l),f){var h=n(f);return l.length>0?h.resize(l,c):h}else{var m=[];return l.length>0?Za(m,l,c):m}}function a(l){var f=!1;return l.forEach(function(u,c,h){bt(u)&&(f=!0,h[c]=u.toNumber())}),f}function o(l){l.forEach(function(f){if(typeof f!="number"||!gt(f)||f<0)throw new Error("Parameters in function zeros must be positive integers")})}}),Dw="numeric",bw=["number","?bignumber","?fraction"],Tw=Me(Dw,bw,r=>{var{number:e,bignumber:t,fraction:n}=r,i={string:!0,number:!0,BigNumber:!0,Fraction:!0},s={number:a=>e(a),BigNumber:t?a=>t(a):sm,Fraction:n?a=>n(a):vw};return function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"number",f=arguments.length>2?arguments[2]:void 0;if(f!==void 0)throw new SyntaxError("numeric() takes one or two arguments");var u=gi(o);if(!(u in i))throw new TypeError("Cannot convert "+o+' of type "'+u+'"; valid input types are '+Object.keys(i).join(", "));if(!(l in s))throw new TypeError("Cannot convert "+o+' to type "'+l+'"; valid output types are '+Object.keys(s).join(", "));return l===u?o:s[l](o)}}),Mh="divideScalar",Cw=["typed","numeric"],Fw=Me(Mh,Cw,r=>{var{typed:e,numeric:t}=r;return e(Mh,{"number, number":function(i,s){return i/s},"Complex, Complex":function(i,s){return i.div(s)},"BigNumber, BigNumber":function(i,s){return i.div(s)},"Fraction, Fraction":function(i,s){return i.div(s)},"Unit, number | Complex | Fraction | BigNumber | Unit":(n,i)=>n.divide(i),"number | Fraction | Complex | BigNumber, Unit":(n,i)=>i.divideInto(n)})});function om(r){var{DenseMatrix:e}=r;return function(n,i,s){var a=n.size();if(a.length!==2)throw new RangeError("Matrix must be two dimensional (size: "+pt(a)+")");var o=a[0],l=a[1];if(o!==l)throw new RangeError("Matrix must be square (size: "+pt(a)+")");var f=[];if(ut(i)){var u=i.size(),c=i._data;if(u.length===1){if(u[0]!==o)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var h=0;h<o;h++)f[h]=[c[h]];return new e({data:f,size:[o,1],datatype:i._datatype})}if(u.length===2){if(u[0]!==o||u[1]!==1)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");if(vp(i)){if(s){f=[];for(var m=0;m<o;m++)f[m]=[c[m][0]];return new e({data:f,size:[o,1],datatype:i._datatype})}return i}if(_p(i)){for(var _=0;_<o;_++)f[_]=[0];for(var p=i._values,g=i._index,d=i._ptr,x=d[1],v=d[0];v<x;v++){var y=g[v];f[y][0]=p[v]}return new e({data:f,size:[o,1],datatype:i._datatype})}}throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")}if(tt(i)){var M=wt(i);if(M.length===1){if(M[0]!==o)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var S=0;S<o;S++)f[S]=[i[S]];return new e({data:f,size:[o,1]})}if(M.length===2){if(M[0]!==o||M[1]!==1)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var D=0;D<o;D++)f[D]=[i[D][0]];return new e({data:f,size:[o,1]})}throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")}}}var Sh="usolve",Rw=["typed","matrix","divideScalar","multiplyScalar","subtractScalar","equalScalar","DenseMatrix"],Pw=Me(Sh,Rw,r=>{var{typed:e,matrix:t,divideScalar:n,multiplyScalar:i,subtractScalar:s,equalScalar:a,DenseMatrix:o}=r,l=om({DenseMatrix:o});return e(Sh,{"SparseMatrix, Array | Matrix":function(h,m){return u(h,m)},"DenseMatrix, Array | Matrix":function(h,m){return f(h,m)},"Array, Array | Matrix":function(h,m){var _=t(h),p=f(_,m);return p.valueOf()}});function f(c,h){h=l(c,h,!0);for(var m=h._data,_=c._size[0],p=c._size[1],g=[],d=c._data,x=p-1;x>=0;x--){var v=m[x][0]||0,y=void 0;if(a(v,0))y=0;else{var M=d[x][x];if(a(M,0))throw new Error("Linear system cannot be solved since matrix is singular");y=n(v,M);for(var S=x-1;S>=0;S--)m[S]=[s(m[S][0]||0,i(y,d[S][x]))]}g[x]=[y]}return new o({data:g,size:[_,1]})}function u(c,h){h=l(c,h,!0);for(var m=h._data,_=c._size[0],p=c._size[1],g=c._values,d=c._index,x=c._ptr,v=[],y=p-1;y>=0;y--){var M=m[y][0]||0;if(a(M,0))v[y]=[0];else{for(var S=0,D=[],T=[],E=x[y],b=x[y+1],C=b-1;C>=E;C--){var F=d[C];F===y?S=g[C]:F<y&&(D.push(g[C]),T.push(F))}if(a(S,0))throw new Error("Linear system cannot be solved since matrix is singular");for(var L=n(M,S),P=0,U=T.length;P<U;P++){var N=T[P];m[N]=[s(m[N][0],i(L,D[P]))]}v[y]=[L]}}return new o({data:v,size:[_,1]})}}),Ah="usolveAll",Lw=["typed","matrix","divideScalar","multiplyScalar","subtractScalar","equalScalar","DenseMatrix"],Nw=Me(Ah,Lw,r=>{var{typed:e,matrix:t,divideScalar:n,multiplyScalar:i,subtractScalar:s,equalScalar:a,DenseMatrix:o}=r,l=om({DenseMatrix:o});return e(Ah,{"SparseMatrix, Array | Matrix":function(h,m){return u(h,m)},"DenseMatrix, Array | Matrix":function(h,m){return f(h,m)},"Array, Array | Matrix":function(h,m){var _=t(h),p=f(_,m);return p.map(g=>g.valueOf())}});function f(c,h){for(var m=[l(c,h,!0)._data.map(T=>T[0])],_=c._data,p=c._size[0],g=c._size[1],d=g-1;d>=0;d--)for(var x=m.length,v=0;v<x;v++){var y=m[v];if(a(_[d][d],0))if(a(y[d],0)){if(v===0){var S=[...y];S[d]=1;for(var D=d-1;D>=0;D--)S[D]=s(S[D],_[D][d]);m.push(S)}}else{if(v===0)return[];m.splice(v,1),v-=1,x-=1}else{y[d]=n(y[d],_[d][d]);for(var M=d-1;M>=0;M--)y[M]=s(y[M],i(y[d],_[M][d]))}}return m.map(T=>new o({data:T.map(E=>[E]),size:[p,1]}))}function u(c,h){for(var m=[l(c,h,!0)._data.map(oe=>oe[0])],_=c._size[0],p=c._size[1],g=c._values,d=c._index,x=c._ptr,v=p-1;v>=0;v--)for(var y=m.length,M=0;M<y;M++){for(var S=m[M],D=[],T=[],E=x[v],b=x[v+1],C=0,F=b-1;F>=E;F--){var L=d[F];L===v?C=g[F]:L<v&&(D.push(g[F]),T.push(L))}if(a(C,0))if(a(S[v],0)){if(M===0){var V=[...S];V[v]=1;for(var G=0,X=T.length;G<X;G++){var Y=T[G];V[Y]=s(V[Y],D[G])}m.push(V)}}else{if(M===0)return[];m.splice(M,1),M-=1,y-=1}else{S[v]=n(S[v],C);for(var P=0,U=T.length;P<U;P++){var N=T[P];S[N]=s(S[N],i(S[v],D[P]))}}}return m.map(oe=>new o({data:oe.map(B=>[B]),size:[_,1]}))}}),to="equal",Uw=["typed","matrix","equalScalar","DenseMatrix","concat"],Iw=Me(to,Uw,r=>{var{typed:e,matrix:t,equalScalar:n,DenseMatrix:i,concat:s}=r,a=gs({typed:e}),o=ia({typed:e,DenseMatrix:i}),l=ms({typed:e,DenseMatrix:i}),f=_r({typed:e,matrix:t,concat:s});return e(to,Bw({typed:e,equalScalar:n}),f({elop:n,SS:o,DS:a,Ss:l}))}),Bw=Me(to,["typed","equalScalar"],r=>{var{typed:e,equalScalar:t}=r;return e(to,{"any, any":function(i,s){return i===null?s===null:s===null?i===null:i===void 0?s===void 0:s===void 0?i===void 0:t(i,s)}})}),no="smaller",Ow=["typed","config","matrix","DenseMatrix","concat"],zw=Me(no,Ow,r=>{var{typed:e,config:t,matrix:n,DenseMatrix:i,concat:s}=r,a=gs({typed:e}),o=ia({typed:e,DenseMatrix:i}),l=ms({typed:e,DenseMatrix:i}),f=_r({typed:e,matrix:n,concat:s}),u=na({typed:e});return e(no,Gw({typed:e,config:t}),{"boolean, boolean":(c,h)=>c<h,"BigNumber, BigNumber":function(h,m){return h.lt(m)&&!ta(h,m,t.epsilon)},"Fraction, Fraction":(c,h)=>c.compare(h)===-1,"Complex, Complex":function(h,m){throw new TypeError("No ordering relation is defined for complex numbers")}},u,f({SS:o,DS:a,Ss:l}))}),Gw=Me(no,["typed","config"],r=>{var{typed:e,config:t}=r;return e(no,{"number, number":function(i,s){return i<s&&!zi(i,s,t.epsilon)}})}),io="smallerEq",Vw=["typed","config","matrix","DenseMatrix","concat"],Hw=Me(io,Vw,r=>{var{typed:e,config:t,matrix:n,DenseMatrix:i,concat:s}=r,a=gs({typed:e}),o=ia({typed:e,DenseMatrix:i}),l=ms({typed:e,DenseMatrix:i}),f=_r({typed:e,matrix:n,concat:s}),u=na({typed:e});return e(io,kw({typed:e,config:t}),{"boolean, boolean":(c,h)=>c<=h,"BigNumber, BigNumber":function(h,m){return h.lte(m)||ta(h,m,t.epsilon)},"Fraction, Fraction":(c,h)=>c.compare(h)!==1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},u,f({SS:o,DS:a,Ss:l}))}),kw=Me(io,["typed","config"],r=>{var{typed:e,config:t}=r;return e(io,{"number, number":function(i,s){return i<=s||zi(i,s,t.epsilon)}})}),ro="larger",Ww=["typed","config","matrix","DenseMatrix","concat"],Xw=Me(ro,Ww,r=>{var{typed:e,config:t,matrix:n,DenseMatrix:i,concat:s}=r,a=gs({typed:e}),o=ia({typed:e,DenseMatrix:i}),l=ms({typed:e,DenseMatrix:i}),f=_r({typed:e,matrix:n,concat:s}),u=na({typed:e});return e(ro,qw({typed:e,config:t}),{"boolean, boolean":(c,h)=>c>h,"BigNumber, BigNumber":function(h,m){return h.gt(m)&&!ta(h,m,t.epsilon)},"Fraction, Fraction":(c,h)=>c.compare(h)===1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},u,f({SS:o,DS:a,Ss:l}))}),qw=Me(ro,["typed","config"],r=>{var{typed:e,config:t}=r;return e(ro,{"number, number":function(i,s){return i>s&&!zi(i,s,t.epsilon)}})}),so="largerEq",$w=["typed","config","matrix","DenseMatrix","concat"],Yw=Me(so,$w,r=>{var{typed:e,config:t,matrix:n,DenseMatrix:i,concat:s}=r,a=gs({typed:e}),o=ia({typed:e,DenseMatrix:i}),l=ms({typed:e,DenseMatrix:i}),f=_r({typed:e,matrix:n,concat:s}),u=na({typed:e});return e(so,Zw({typed:e,config:t}),{"boolean, boolean":(c,h)=>c>=h,"BigNumber, BigNumber":function(h,m){return h.gte(m)||ta(h,m,t.epsilon)},"Fraction, Fraction":(c,h)=>c.compare(h)!==-1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},u,f({SS:o,DS:a,Ss:l}))}),Zw=Me(so,["typed","config"],r=>{var{typed:e,config:t}=r;return e(so,{"number, number":function(i,s){return i>=s||zi(i,s,t.epsilon)}})}),Kw="ImmutableDenseMatrix",Jw=["smaller","DenseMatrix"],Qw=Me(Kw,Jw,r=>{var{smaller:e,DenseMatrix:t}=r;function n(i,s){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");if(s&&!On(s))throw new Error("Invalid datatype: "+s);if(ut(i)||tt(i)){var a=new t(i,s);this._data=a._data,this._size=a._size,this._datatype=a._datatype,this._min=null,this._max=null}else if(i&&tt(i.data)&&tt(i.size))this._data=i.data,this._size=i.size,this._datatype=i.datatype,this._min=typeof i.min<"u"?i.min:null,this._max=typeof i.max<"u"?i.max:null;else{if(i)throw new TypeError("Unsupported type of data ("+gi(i)+")");this._data=[],this._size=[0],this._datatype=s,this._min=null,this._max=null}}return n.prototype=new t,n.prototype.type="ImmutableDenseMatrix",n.prototype.isImmutableDenseMatrix=!0,n.prototype.subset=function(i){switch(arguments.length){case 1:{var s=t.prototype.subset.call(this,i);return ut(s)?new n({data:s._data,size:s._size,datatype:s._datatype}):s}case 2:case 3:throw new Error("Cannot invoke set subset on an Immutable Matrix instance");default:throw new SyntaxError("Wrong number of arguments")}},n.prototype.set=function(){throw new Error("Cannot invoke set on an Immutable Matrix instance")},n.prototype.resize=function(){throw new Error("Cannot invoke resize on an Immutable Matrix instance")},n.prototype.reshape=function(){throw new Error("Cannot invoke reshape on an Immutable Matrix instance")},n.prototype.clone=function(){return new n({data:et(this._data),size:et(this._size),datatype:this._datatype})},n.prototype.toJSON=function(){return{mathjs:"ImmutableDenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},n.fromJSON=function(i){return new n(i)},n.prototype.swapRows=function(){throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")},n.prototype.min=function(){if(this._min===null){var i=null;this.forEach(function(s){(i===null||e(s,i))&&(i=s)}),this._min=i!==null?i:void 0}return this._min},n.prototype.max=function(){if(this._max===null){var i=null;this.forEach(function(s){(i===null||e(i,s))&&(i=s)}),this._max=i!==null?i:void 0}return this._max},n},{isClass:!0}),jw="Index",eD=["ImmutableDenseMatrix","getMatrixDataType"],tD=Me(jw,eD,r=>{var{ImmutableDenseMatrix:e,getMatrixDataType:t}=r;function n(s){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");this._dimensions=[],this._sourceSize=[],this._isScalar=!0;for(var a=0,o=arguments.length;a<o;a++){var l=arguments[a],f=tt(l),u=ut(l),c=null;if(xp(l))this._dimensions.push(l),this._isScalar=!1;else if(f||u){var h=void 0;t(l)==="boolean"?(f&&(h=i(wh(l).valueOf())),u&&(h=i(wh(l._data).valueOf())),c=l.valueOf().length):h=i(l.valueOf()),this._dimensions.push(h);var m=h.size();(m.length!==1||m[0]!==1||c!==null)&&(this._isScalar=!1)}else if(typeof l=="number")this._dimensions.push(i([l]));else if(typeof l=="string")this._dimensions.push(l);else throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");this._sourceSize.push(c)}}n.prototype.type="Index",n.prototype.isIndex=!0;function i(s){for(var a=0,o=s.length;a<o;a++)if(typeof s[a]!="number"||!gt(s[a]))throw new TypeError("Index parameters must be positive integer numbers");return new e(s)}return n.prototype.clone=function(){var s=new n;return s._dimensions=et(this._dimensions),s._isScalar=this._isScalar,s._sourceSize=this._sourceSize,s},n.create=function(s){var a=new n;return n.apply(a,s),a},n.prototype.size=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var l=this._dimensions[a];s[a]=typeof l=="string"?1:l.size()[0]}return s},n.prototype.max=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var l=this._dimensions[a];s[a]=typeof l=="string"?l:l.max()}return s},n.prototype.min=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var l=this._dimensions[a];s[a]=typeof l=="string"?l:l.min()}return s},n.prototype.forEach=function(s){for(var a=0,o=this._dimensions.length;a<o;a++)s(this._dimensions[a],a,this)},n.prototype.dimension=function(s){return this._dimensions[s]||null},n.prototype.isObjectProperty=function(){return this._dimensions.length===1&&typeof this._dimensions[0]=="string"},n.prototype.getObjectProperty=function(){return this.isObjectProperty()?this._dimensions[0]:null},n.prototype.isScalar=function(){return this._isScalar},n.prototype.toArray=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var l=this._dimensions[a];s.push(typeof l=="string"?l:l.toArray())}return s},n.prototype.valueOf=n.prototype.toArray,n.prototype.toString=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var l=this._dimensions[a];typeof l=="string"?s.push(JSON.stringify(l)):s.push(l.toString())}return"["+s.join(", ")+"]"},n.prototype.toJSON=function(){return{mathjs:"Index",dimensions:this._dimensions}},n.fromJSON=function(s){return n.create(s.dimensions)},n},{isClass:!0});function wh(r){var e=[];return r.forEach((t,n)=>{t&&e.push(n)}),e}var nD="atan",iD=["typed"],rD=Me(nD,iD,r=>{var{typed:e}=r;return e("atan",{number:function(n){return Math.atan(n)},Complex:function(n){return n.atan()},BigNumber:function(n){return n.atan()}})}),um=Me("trigUnit",["typed"],r=>{var{typed:e}=r;return{Unit:e.referToSelf(t=>n=>{if(!n.hasBase(n.constructor.BASE_UNITS.ANGLE))throw new TypeError("Unit in function cot is no angle");return e.find(t,n.valueType())(n.value)})}}),Dh="cos",sD=["typed"],aD=Me(Dh,sD,r=>{var{typed:e}=r,t=um({typed:e});return e(Dh,{number:Math.cos,"Complex | BigNumber":n=>n.cos()},t)}),bh="sin",oD=["typed"],uD=Me(bh,oD,r=>{var{typed:e}=r,t=um({typed:e});return e(bh,{number:Math.sin,"Complex | BigNumber":n=>n.sin()},t)}),Th="add",lD=["typed","matrix","addScalar","equalScalar","DenseMatrix","SparseMatrix","concat"],cD=Me(Th,lD,r=>{var{typed:e,matrix:t,addScalar:n,equalScalar:i,DenseMatrix:s,SparseMatrix:a,concat:o}=r,l=im({typed:e}),f=IA({typed:e,equalScalar:i}),u=rm({typed:e,DenseMatrix:s}),c=_r({typed:e,matrix:t,concat:o});return e(Th,{"any, any":n,"any, any, ...any":e.referToSelf(h=>(m,_,p)=>{for(var g=h(m,_),d=0;d<p.length;d++)g=h(g,p[d]);return g})},c({elop:n,DS:l,SS:f,Ss:u}))}),Ch="dot",fD=["typed","addScalar","multiplyScalar","conj","size"],hD=Me(Ch,fD,r=>{var{typed:e,addScalar:t,multiplyScalar:n,conj:i,size:s}=r;return e(Ch,{"Array | DenseMatrix, Array | DenseMatrix":o,"SparseMatrix, SparseMatrix":l});function a(u,c){var h=f(u),m=f(c),_,p;if(h.length===1)_=h[0];else if(h.length===2&&h[1]===1)_=h[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+h.join(", ")+")");if(m.length===1)p=m[0];else if(m.length===2&&m[1]===1)p=m[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+m.join(", ")+")");if(_!==p)throw new RangeError("Vectors must have equal length ("+_+" != "+p+")");if(_===0)throw new RangeError("Cannot calculate the dot product of empty vectors");return _}function o(u,c){var h=a(u,c),m=ut(u)?u._data:u,_=ut(u)?u._datatype:void 0,p=ut(c)?c._data:c,g=ut(c)?c._datatype:void 0,d=f(u).length===2,x=f(c).length===2,v=t,y=n;if(_&&g&&_===g&&typeof _=="string"){var M=_;v=e.find(t,[M,M]),y=e.find(n,[M,M])}if(!d&&!x){for(var S=y(i(m[0]),p[0]),D=1;D<h;D++)S=v(S,y(i(m[D]),p[D]));return S}if(!d&&x){for(var T=y(i(m[0]),p[0][0]),E=1;E<h;E++)T=v(T,y(i(m[E]),p[E][0]));return T}if(d&&!x){for(var b=y(i(m[0][0]),p[0]),C=1;C<h;C++)b=v(b,y(i(m[C][0]),p[C]));return b}if(d&&x){for(var F=y(i(m[0][0]),p[0][0]),L=1;L<h;L++)F=v(F,y(i(m[L][0]),p[L][0]));return F}}function l(u,c){a(u,c);for(var h=u._index,m=u._values,_=c._index,p=c._values,g=0,d=t,x=n,v=0,y=0;v<h.length&&y<_.length;){var M=h[v],S=_[y];if(M<S){v++;continue}if(M>S){y++;continue}M===S&&(g=d(g,x(m[v],p[y])),v++,y++)}return g}function f(u){return ut(u)?u.size():s(u)}}),Fh="qr",dD=["typed","matrix","zeros","identity","isZero","equal","sign","sqrt","conj","unaryMinus","addScalar","divideScalar","multiplyScalar","subtractScalar","complex"],pD=Me(Fh,dD,r=>{var{typed:e,matrix:t,zeros:n,identity:i,isZero:s,equal:a,sign:o,sqrt:l,conj:f,unaryMinus:u,addScalar:c,divideScalar:h,multiplyScalar:m,subtractScalar:_,complex:p}=r;return ls(e(Fh,{DenseMatrix:function(y){return d(y)},SparseMatrix:function(y){return x()},Array:function(y){var M=t(y),S=d(M);return{Q:S.Q.valueOf(),R:S.R.valueOf()}}}),{_denseQRimpl:g});function g(v){var y=v._size[0],M=v._size[1],S=i([y],"dense"),D=S._data,T=v.clone(),E=T._data,b,C,F,L=n([y],"");for(F=0;F<Math.min(M,y);++F){var P=E[F][F],U=u(a(P,0)?1:o(P)),N=f(U),V=0;for(b=F;b<y;b++)V=c(V,m(E[b][F],f(E[b][F])));var G=m(U,l(V));if(!s(G)){var X=_(P,G);for(L[F]=1,b=F+1;b<y;b++)L[b]=h(E[b][F],X);var Y=u(f(h(X,G))),oe=void 0;for(C=F;C<M;C++){for(oe=0,b=F;b<y;b++)oe=c(oe,m(f(L[b]),E[b][C]));for(oe=m(oe,Y),b=F;b<y;b++)E[b][C]=m(_(E[b][C],m(L[b],oe)),N)}for(b=0;b<y;b++){for(oe=0,C=F;C<y;C++)oe=c(oe,m(D[b][C],L[C]));for(oe=m(oe,Y),C=F;C<y;++C)D[b][C]=h(_(D[b][C],m(oe,f(L[C]))),N)}}}return{Q:S,R:T,toString:function(){return"Q: "+this.Q.toString()+`
R: `+this.R.toString()}}}function d(v){var y=g(v),M=y.R._data;if(v._data.length>0)for(var S=M[0][0].type==="Complex"?p(0):0,D=0;D<M.length;++D)for(var T=0;T<D&&T<(M[0]||[]).length;++T)M[D][T]=S;return y}function x(v){throw new Error("qr not implemented for sparse matrices yet")}}),Rh="det",mD=["typed","matrix","subtractScalar","multiply","divideScalar","isZero","unaryMinus"],gD=Me(Rh,mD,r=>{var{typed:e,matrix:t,subtractScalar:n,multiply:i,divideScalar:s,isZero:a,unaryMinus:o}=r;return e(Rh,{any:function(u){return et(u)},"Array | Matrix":function(u){var c;switch(ut(u)?c=u.size():Array.isArray(u)?(u=t(u),c=u.size()):c=[],c.length){case 0:return et(u);case 1:if(c[0]===1)return et(u.valueOf()[0]);if(c[0]===0)return 1;throw new RangeError("Matrix must be square (size: "+pt(c)+")");case 2:{var h=c[0],m=c[1];if(h===m)return l(u.clone().valueOf(),h);if(m===0)return 1;throw new RangeError("Matrix must be square (size: "+pt(c)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+pt(c)+")")}}});function l(f,u,c){if(u===1)return et(f[0][0]);if(u===2)return n(i(f[0][0],f[1][1]),i(f[1][0],f[0][1]));for(var h=!1,m=new Array(u).fill(0).map((D,T)=>T),_=0;_<u;_++){var p=m[_];if(a(f[p][_])){var g=void 0;for(g=_+1;g<u;g++)if(!a(f[m[g]][_])){p=m[g],m[g]=m[_],m[_]=p,h=!h;break}if(g===u)return f[p][_]}for(var d=f[p][_],x=_===0?1:f[m[_-1]][_-1],v=_+1;v<u;v++)for(var y=m[v],M=_+1;M<u;M++)f[y][M]=s(n(i(f[y][M],d),i(f[y][_],f[p][M])),x)}var S=f[m[u-1]][u-1];return h?o(S):S}}),Ph="inv",vD=["typed","matrix","divideScalar","addScalar","multiply","unaryMinus","det","identity","abs"],_D=Me(Ph,vD,r=>{var{typed:e,matrix:t,divideScalar:n,addScalar:i,multiply:s,unaryMinus:a,det:o,identity:l,abs:f}=r;return e(Ph,{"Array | Matrix":function(h){var m=ut(h)?h.size():wt(h);switch(m.length){case 1:if(m[0]===1)return ut(h)?t([n(1,h.valueOf()[0])]):[n(1,h[0])];throw new RangeError("Matrix must be square (size: "+pt(m)+")");case 2:{var _=m[0],p=m[1];if(_===p)return ut(h)?t(u(h.valueOf(),_,p),h.storage()):u(h,_,p);throw new RangeError("Matrix must be square (size: "+pt(m)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+pt(m)+")")}},any:function(h){return n(1,h)}});function u(c,h,m){var _,p,g,d,x;if(h===1){if(d=c[0][0],d===0)throw Error("Cannot calculate inverse, determinant is zero");return[[n(1,d)]]}else if(h===2){var v=o(c);if(v===0)throw Error("Cannot calculate inverse, determinant is zero");return[[n(c[1][1],v),n(a(c[0][1]),v)],[n(a(c[1][0]),v),n(c[0][0],v)]]}else{var y=c.concat();for(_=0;_<h;_++)y[_]=y[_].concat();for(var M=l(h).valueOf(),S=0;S<m;S++){var D=f(y[S][S]),T=S;for(_=S+1;_<h;)f(y[_][S])>D&&(D=f(y[_][S]),T=_),_++;if(D===0)throw Error("Cannot calculate inverse, determinant is zero");_=T,_!==S&&(x=y[S],y[S]=y[_],y[_]=x,x=M[S],M[S]=M[_],M[_]=x);var E=y[S],b=M[S];for(_=0;_<h;_++){var C=y[_],F=M[_];if(_!==S){if(C[S]!==0){for(g=n(a(C[S]),E[S]),p=S;p<m;p++)C[p]=i(C[p],s(g,E[p]));for(p=0;p<m;p++)F[p]=i(F[p],s(g,b[p]))}}else{for(g=E[S],p=S;p<m;p++)C[p]=n(C[p],g);for(p=0;p<m;p++)F[p]=n(F[p],g)}}}return M}}});function xD(r){var{addScalar:e,subtract:t,flatten:n,multiply:i,multiplyScalar:s,divideScalar:a,sqrt:o,abs:l,bignumber:f,diag:u,size:c,reshape:h,inv:m,qr:_,usolve:p,usolveAll:g,equal:d,complex:x,larger:v,smaller:y,matrixFromColumns:M,dot:S}=r;function D(B,W,Z,ne){var re=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,ee=T(B,W,Z,ne,re);E(B,W,Z,ne,re,ee);var{values:ue,C:se}=b(B,W,Z,ne,re);if(re){var fe=C(B,W,se,ee,ue,Z,ne);return{values:ue,eigenvectors:fe}}return{values:ue}}function T(B,W,Z,ne,re){var ee=ne==="BigNumber",ue=ne==="Complex",se=ee?f(0):0,fe=ee?f(1):ue?x(1):1,de=ee?f(1):1,z=ee?f(10):2,we=s(z,z),pe;re&&(pe=Array(W).fill(fe));for(var ve=!1;!ve;){ve=!0;for(var me=0;me<W;me++){for(var Pe=se,Te=se,Ce=0;Ce<W;Ce++)me!==Ce&&(Pe=e(Pe,l(B[Ce][me])),Te=e(Te,l(B[me][Ce])));if(!d(Pe,0)&&!d(Te,0)){for(var Le=de,ze=Pe,Ze=a(Te,z),A=s(Te,z);y(ze,Ze);)ze=s(ze,we),Le=s(Le,z);for(;v(ze,A);)ze=a(ze,we),Le=a(Le,z);var w=y(a(e(ze,Te),Le),s(e(Pe,Te),.95));if(w){ve=!1;for(var O=a(1,Le),k=0;k<W;k++)me!==k&&(B[me][k]=s(B[me][k],O),B[k][me]=s(B[k][me],Le));re&&(pe[me]=s(pe[me],O))}}}}return re?u(pe):null}function E(B,W,Z,ne,re,ee){var ue=ne==="BigNumber",se=ne==="Complex",fe=ue?f(0):se?x(0):0;ue&&(Z=f(Z));for(var de=0;de<W-2;de++){for(var z=0,we=fe,pe=de+1;pe<W;pe++){var ve=B[pe][de];y(l(we),l(ve))&&(we=ve,z=pe)}if(!y(l(we),Z)){if(z!==de+1){var me=B[z];B[z]=B[de+1],B[de+1]=me;for(var Pe=0;Pe<W;Pe++){var Te=B[Pe][z];B[Pe][z]=B[Pe][de+1],B[Pe][de+1]=Te}if(re){var Ce=ee[z];ee[z]=ee[de+1],ee[de+1]=Ce}}for(var Le=de+2;Le<W;Le++){var ze=a(B[Le][de],we);if(ze!==0){for(var Ze=0;Ze<W;Ze++)B[Le][Ze]=t(B[Le][Ze],s(ze,B[de+1][Ze]));for(var A=0;A<W;A++)B[A][de+1]=e(B[A][de+1],s(ze,B[A][Le]));if(re)for(var w=0;w<W;w++)ee[Le][w]=t(ee[Le][w],s(ze,ee[de+1][w]))}}}}return ee}function b(B,W,Z,ne,re){var ee=ne==="BigNumber",ue=ne==="Complex",se=ee?f(1):ue?x(1):1;ee&&(Z=f(Z));for(var fe=et(B),de=[],z=W,we=[],pe=re?u(Array(W).fill(se)):void 0,ve=re?u(Array(z).fill(se)):void 0,me=0;me<=100;){me+=1;for(var Pe=fe[z-1][z-1],Te=0;Te<z;Te++)fe[Te][Te]=t(fe[Te][Te],Pe);var{Q:Ce,R:Le}=_(fe);fe=i(Le,Ce);for(var ze=0;ze<z;ze++)fe[ze][ze]=e(fe[ze][ze],Pe);if(re&&(ve=i(ve,Ce)),z===1||y(l(fe[z-1][z-2]),Z)){me=0,de.push(fe[z-1][z-1]),re&&(we.unshift([[1]]),P(ve,W),pe=i(pe,ve),z>1&&(ve=u(Array(z-1).fill(se)))),z-=1,fe.pop();for(var Ze=0;Ze<z;Ze++)fe[Ze].pop()}else if(z===2||y(l(fe[z-2][z-3]),Z)){me=0;var A=F(fe[z-2][z-2],fe[z-2][z-1],fe[z-1][z-2],fe[z-1][z-1]);de.push(...A),re&&(we.unshift(L(fe[z-2][z-2],fe[z-2][z-1],fe[z-1][z-2],fe[z-1][z-1],A[0],A[1],Z,ne)),P(ve,W),pe=i(pe,ve),z>2&&(ve=u(Array(z-2).fill(se)))),z-=2,fe.pop(),fe.pop();for(var w=0;w<z;w++)fe[w].pop(),fe[w].pop()}if(z===0)break}if(de.sort(($,R)=>+t(l($),l(R))),me>100){var O=Error("The eigenvalues failed to converge. Only found these eigenvalues: "+de.join(", "));throw O.values=de,O.vectors=[],O}var k=re?i(pe,U(we,W)):void 0;return{values:de,C:k}}function C(B,W,Z,ne,re,ee,ue){var se=m(Z),fe=i(se,B,Z),de=ue==="BigNumber",z=ue==="Complex",we=de?f(0):z?x(0):0,pe=de?f(1):z?x(1):1,ve=[],me=[];for(var Pe of re){var Te=N(ve,Pe,d);Te===-1?(ve.push(Pe),me.push(1)):me[Te]+=1}for(var Ce=[],Le=ve.length,ze=Array(W).fill(we),Ze=u(Array(W).fill(pe)),A=function(){var k=ve[w],$=t(fe,i(k,Ze)),R=g($,ze);for(R.shift();R.length<me[w];){var J=V($,W,R,ee,ue);if(J===null)break;R.push(J)}var K=i(m(ne),Z);R=R.map(H=>i(K,H)),Ce.push(...R.map(H=>({value:k,vector:n(H)})))},w=0;w<Le;w++)A();return Ce}function F(B,W,Z,ne){var re=e(B,ne),ee=t(s(B,ne),s(W,Z)),ue=s(re,.5),se=s(o(t(s(re,re),s(4,ee))),.5);return[e(ue,se),t(ue,se)]}function L(B,W,Z,ne,re,ee,ue,se){var fe=se==="BigNumber",de=se==="Complex",z=fe?f(0):de?x(0):0,we=fe?f(1):de?x(1):1;if(y(l(Z),ue))return[[we,z],[z,we]];if(v(l(t(re,ee)),ue))return[[t(re,ne),t(ee,ne)],[Z,Z]];var pe=t(B,re),ve=t(ne,re);return y(l(W),ue)&&y(l(ve),ue)?[[pe,we],[Z,z]]:[[W,z],[ve,we]]}function P(B,W){for(var Z=0;Z<B.length;Z++)B[Z].push(...Array(W-B[Z].length).fill(0));for(var ne=B.length;ne<W;ne++)B.push(Array(W).fill(0)),B[ne][ne]=1;return B}function U(B,W){for(var Z=[],ne=0;ne<W;ne++)Z[ne]=Array(W).fill(0);var re=0;for(var ee of B){for(var ue=ee.length,se=0;se<ue;se++)for(var fe=0;fe<ue;fe++)Z[re+se][re+fe]=ee[se][fe];re+=ue}return Z}function N(B,W,Z){for(var ne=0;ne<B.length;ne++)if(Z(B[ne],W))return ne;return-1}function V(B,W,Z,ne,re){for(var ee=re==="BigNumber"?f(1e3):1e3,ue,se=0;se<5;++se){ue=G(W,Z,re);try{ue=p(B,ue)}catch{continue}if(v(Y(ue),ee))break}if(se>=5)return null;for(se=0;;){var fe=p(B,ue);if(y(Y(X(ue,[fe])),ne))break;if(++se>=10)return null;ue=oe(fe)}return ue}function G(B,W,Z){var ne=Z==="BigNumber",re=Z==="Complex",ee=Array(B).fill(0).map(ue=>2*Math.random()-1);return ne&&(ee=ee.map(ue=>f(ue))),re&&(ee=ee.map(ue=>x(ue))),ee=X(ee,W),oe(ee,Z)}function X(B,W){var Z=c(B);for(var ne of W)ne=h(ne,Z),B=t(B,i(a(S(ne,B),S(ne,ne)),ne));return B}function Y(B){return l(o(S(B,B)))}function oe(B,W){var Z=W==="BigNumber",ne=W==="Complex",re=Z?f(1):ne?x(1):1;return i(a(re,Y(B)),B)}return D}function yD(r){var{config:e,addScalar:t,subtract:n,abs:i,atan:s,cos:a,sin:o,multiplyScalar:l,inv:f,bignumber:u,multiply:c,add:h}=r;function m(E,b){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e.epsilon,F=arguments.length>3?arguments[3]:void 0,L=arguments.length>4?arguments[4]:void 0;if(F==="number")return _(E,C,L);if(F==="BigNumber")return p(E,C,L);throw TypeError("Unsupported data type: "+F)}function _(E,b,C){var F=E.length,L=Math.abs(b/F),P,U;if(C){U=new Array(F);for(var N=0;N<F;N++)U[N]=Array(F).fill(0),U[N][N]=1}for(var V=S(E);Math.abs(V[1])>=Math.abs(L);){var G=V[0][0],X=V[0][1];P=g(E[G][G],E[X][X],E[G][X]),E=M(E,P,G,X),C&&(U=x(U,P,G,X)),V=S(E)}for(var Y=Array(F).fill(0),oe=0;oe<F;oe++)Y[oe]=E[oe][oe];return T(et(Y),U,C)}function p(E,b,C){var F=E.length,L=i(b/F),P,U;if(C){U=new Array(F);for(var N=0;N<F;N++)U[N]=Array(F).fill(0),U[N][N]=1}for(var V=D(E);i(V[1])>=i(L);){var G=V[0][0],X=V[0][1];P=d(E[G][G],E[X][X],E[G][X]),E=y(E,P,G,X),C&&(U=v(U,P,G,X)),V=D(E)}for(var Y=Array(F).fill(0),oe=0;oe<F;oe++)Y[oe]=E[oe][oe];return T(et(Y),U,C)}function g(E,b,C){var F=b-E;return Math.abs(F)<=e.epsilon?Math.PI/4:.5*Math.atan(2*C/(b-E))}function d(E,b,C){var F=n(b,E);return i(F)<=e.epsilon?u(-1).acos().div(4):l(.5,s(c(2,C,f(F))))}function x(E,b,C,F){for(var L=E.length,P=Math.cos(b),U=Math.sin(b),N=Array(L).fill(0),V=Array(L).fill(0),G=0;G<L;G++)N[G]=P*E[G][C]-U*E[G][F],V[G]=U*E[G][C]+P*E[G][F];for(var X=0;X<L;X++)E[X][C]=N[X],E[X][F]=V[X];return E}function v(E,b,C,F){for(var L=E.length,P=a(b),U=o(b),N=Array(L).fill(u(0)),V=Array(L).fill(u(0)),G=0;G<L;G++)N[G]=n(l(P,E[G][C]),l(U,E[G][F])),V[G]=t(l(U,E[G][C]),l(P,E[G][F]));for(var X=0;X<L;X++)E[X][C]=N[X],E[X][F]=V[X];return E}function y(E,b,C,F){for(var L=E.length,P=u(a(b)),U=u(o(b)),N=l(P,P),V=l(U,U),G=Array(L).fill(u(0)),X=Array(L).fill(u(0)),Y=c(u(2),P,U,E[C][F]),oe=t(n(l(N,E[C][C]),Y),l(V,E[F][F])),B=h(l(V,E[C][C]),Y,l(N,E[F][F])),W=0;W<L;W++)G[W]=n(l(P,E[C][W]),l(U,E[F][W])),X[W]=t(l(U,E[C][W]),l(P,E[F][W]));E[C][C]=oe,E[F][F]=B,E[C][F]=u(0),E[F][C]=u(0);for(var Z=0;Z<L;Z++)Z!==C&&Z!==F&&(E[C][Z]=G[Z],E[Z][C]=G[Z],E[F][Z]=X[Z],E[Z][F]=X[Z]);return E}function M(E,b,C,F){for(var L=E.length,P=Math.cos(b),U=Math.sin(b),N=P*P,V=U*U,G=Array(L).fill(0),X=Array(L).fill(0),Y=N*E[C][C]-2*P*U*E[C][F]+V*E[F][F],oe=V*E[C][C]+2*P*U*E[C][F]+N*E[F][F],B=0;B<L;B++)G[B]=P*E[C][B]-U*E[F][B],X[B]=U*E[C][B]+P*E[F][B];E[C][C]=Y,E[F][F]=oe,E[C][F]=0,E[F][C]=0;for(var W=0;W<L;W++)W!==C&&W!==F&&(E[C][W]=G[W],E[W][C]=G[W],E[F][W]=X[W],E[W][F]=X[W]);return E}function S(E){for(var b=E.length,C=0,F=[0,1],L=0;L<b;L++)for(var P=L+1;P<b;P++)Math.abs(C)<Math.abs(E[L][P])&&(C=Math.abs(E[L][P]),F=[L,P]);return[F,C]}function D(E){for(var b=E.length,C=0,F=[0,1],L=0;L<b;L++)for(var P=L+1;P<b;P++)i(C)<i(E[L][P])&&(C=i(E[L][P]),F=[L,P]);return[F,C]}function T(E,b,C){var F=E.length,L=Array(F),P;if(C){P=Array(F);for(var U=0;U<F;U++)P[U]=Array(F)}for(var N=0;N<F;N++){for(var V=0,G=E[0],X=0;X<E.length;X++)i(E[X])<i(G)&&(V=X,G=E[V]);if(L[N]=E.splice(V,1)[0],C)for(var Y=0;Y<F;Y++)P[N][Y]=b[Y][V],b[Y].splice(V,1)}if(!C)return{values:L};var oe=P.map((B,W)=>({value:L[W],vector:B}));return{values:L,eigenvectors:oe}}return m}var ED="eigs",MD=["config","typed","matrix","addScalar","equal","subtract","abs","atan","cos","sin","multiplyScalar","divideScalar","inv","bignumber","multiply","add","larger","column","flatten","number","complex","sqrt","diag","size","reshape","qr","usolve","usolveAll","im","re","smaller","matrixFromColumns","dot"],SD=Me(ED,MD,r=>{var{config:e,typed:t,matrix:n,addScalar:i,subtract:s,equal:a,abs:o,atan:l,cos:f,sin:u,multiplyScalar:c,divideScalar:h,inv:m,bignumber:_,multiply:p,add:g,larger:d,column:x,flatten:v,number:y,complex:M,sqrt:S,diag:D,size:T,reshape:E,qr:b,usolve:C,usolveAll:F,im:L,re:P,smaller:U,matrixFromColumns:N,dot:V}=r,G=yD({config:e,addScalar:i,subtract:s,column:x,flatten:v,equal:a,abs:o,atan:l,cos:f,sin:u,multiplyScalar:c,inv:m,bignumber:_,complex:M,multiply:p,add:g}),X=xD({config:e,addScalar:i,subtract:s,multiply:p,multiplyScalar:c,flatten:v,divideScalar:h,sqrt:S,abs:o,bignumber:_,diag:D,size:T,reshape:E,qr:b,inv:m,usolve:C,usolveAll:F,equal:a,complex:M,larger:d,smaller:U,matrixFromColumns:N,dot:V});return t("eigs",{Array:function(ee){return Y(n(ee))},"Array, number|BigNumber":function(ee,ue){return Y(n(ee),{precision:ue})},"Array, Object"(re,ee){return Y(n(re),ee)},Matrix:function(ee){return Y(ee,{matricize:!0})},"Matrix, number|BigNumber":function(ee,ue){return Y(ee,{precision:ue,matricize:!0})},"Matrix, Object":function(ee,ue){var se={matricize:!0};return ls(se,ue),Y(ee,se)}});function Y(re){var ee,ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},se="eigenvectors"in ue?ue.eigenvectors:!0,fe=(ee=ue.precision)!==null&&ee!==void 0?ee:e.epsilon,de=oe(re,fe,se);return ue.matricize&&(de.values=n(de.values),se&&(de.eigenvectors=de.eigenvectors.map(z=>{var{value:we,vector:pe}=z;return{value:we,vector:n(pe)}}))),se&&Object.defineProperty(de,"vectors",{enumerable:!1,get:()=>{throw new Error("eigs(M).vectors replaced with eigs(M).eigenvectors")}}),de}function oe(re,ee,ue){var se=re.toArray(),fe=re.size();if(fe.length!==2||fe[0]!==fe[1])throw new RangeError("Matrix must be square (size: ".concat(pt(fe),")"));var de=fe[0];if(W(se,de,ee)&&(Z(se,de),B(se,de,ee))){var z=ne(re,se,de);return G(se,de,ee,z,ue)}var we=ne(re,se,de);return X(se,de,ee,we,ue)}function B(re,ee,ue){for(var se=0;se<ee;se++)for(var fe=se;fe<ee;fe++)if(d(_(o(s(re[se][fe],re[fe][se]))),ue))return!1;return!0}function W(re,ee,ue){for(var se=0;se<ee;se++)for(var fe=0;fe<ee;fe++)if(d(_(o(L(re[se][fe]))),ue))return!1;return!0}function Z(re,ee){for(var ue=0;ue<ee;ue++)for(var se=0;se<ee;se++)re[ue][se]=P(re[ue][se])}function ne(re,ee,ue){var se=re.datatype();if(se==="number"||se==="BigNumber"||se==="Complex")return se;for(var fe=!1,de=!1,z=!1,we=0;we<ue;we++)for(var pe=0;pe<ue;pe++){var ve=ee[we][pe];if(lt(ve)||Fl(ve))fe=!0;else if(bt(ve))de=!0;else if(Cl(ve))z=!0;else throw TypeError("Unsupported type in Matrix: "+gi(ve))}if(de&&z&&console.warn("Complex BigNumbers not supported, this operation will lose precission."),z){for(var me=0;me<ue;me++)for(var Pe=0;Pe<ue;Pe++)ee[me][Pe]=M(ee[me][Pe]);return"Complex"}if(de){for(var Te=0;Te<ue;Te++)for(var Ce=0;Ce<ue;Ce++)ee[Te][Ce]=_(ee[Te][Ce]);return"BigNumber"}if(fe){for(var Le=0;Le<ue;Le++)for(var ze=0;ze<ue;ze++)ee[Le][ze]=y(ee[Le][ze]);return"number"}else throw TypeError("Matrix contains unsupported types only.")}}),ra=dS({config:yn}),Bl=vS({}),Ol=ES({}),zl=AS({}),cn=bS({Matrix:zl}),Oe=gM({BigNumber:ra,Complex:Bl,DenseMatrix:cn,Fraction:Ol}),lm=oA({typed:Oe}),vs=lA({typed:Oe}),AD=rD({typed:Oe}),Gl=$S({BigNumber:ra,typed:Oe}),Vl=KS({Complex:Bl,typed:Oe}),cm=ew({typed:Oe}),wD=aD({typed:Oe}),xr=IS({config:yn,typed:Oe}),DD=pw({typed:Oe}),bD=nw({typed:Oe}),fm=CS({typed:Oe}),TD=RS({typed:Oe}),hm=LS({typed:Oe}),_s=VA({typed:Oe}),dm=WS({typed:Oe}),CD=rw({typed:Oe}),FD=XA({BigNumber:ra,Fraction:Ol,complex:Vl,typed:Oe}),RD=uD({typed:Oe}),_o=zS({Matrix:zl,equalScalar:xr,typed:Oe}),sa=fA({typed:Oe}),yi=YA({Complex:Bl,config:yn,typed:Oe}),xo=sA({typed:Oe}),PD=jS({Fraction:Ol,typed:Oe}),dt=tA({DenseMatrix:cn,Matrix:zl,SparseMatrix:_o,typed:Oe}),LD=Tw({bignumber:Gl,fraction:PD,number:dm}),ND=Ew({isInteger:fm,matrix:dt,typed:Oe}),Hl=Sw({matrix:dt,config:yn,typed:Oe}),UD=ww({BigNumber:ra,config:yn,matrix:dt,typed:Oe}),yr=aw({isInteger:fm,matrix:dt,typed:Oe}),ID=cw({DenseMatrix:cn,SparseMatrix:_o,matrix:dt,typed:Oe}),xs=Fw({numeric:LD,typed:Oe}),pm=Iw({DenseMatrix:cn,concat:yr,equalScalar:xr,matrix:dt,typed:Oe}),mm=hw({matrix:dt,typed:Oe}),gm=gw({BigNumber:ra,DenseMatrix:cn,SparseMatrix:_o,config:yn,matrix:dt,typed:Oe}),BD=Yw({DenseMatrix:cn,concat:yr,config:yn,matrix:dt,typed:Oe}),OD=iA({flatten:mm,matrix:dt,size:Hl,typed:Oe}),zD=pD({addScalar:vs,complex:Vl,conj:cm,divideScalar:xs,equal:pm,identity:gm,isZero:hm,matrix:dt,multiplyScalar:_s,sign:FD,sqrt:yi,subtractScalar:sa,typed:Oe,unaryMinus:xo,zeros:UD}),kl=zw({DenseMatrix:cn,concat:yr,config:yn,matrix:dt,typed:Oe}),GD=KA({DenseMatrix:cn,concat:yr,equalScalar:xr,matrix:dt,subtractScalar:sa,typed:Oe,unaryMinus:xo}),VD=Pw({DenseMatrix:cn,divideScalar:xs,equalScalar:xr,matrix:dt,multiplyScalar:_s,subtractScalar:sa,typed:Oe}),vm=cD({DenseMatrix:cn,SparseMatrix:_o,addScalar:vs,concat:yr,equalScalar:xr,matrix:dt,typed:Oe}),_m=hD({addScalar:vs,conj:cm,multiplyScalar:_s,size:Hl,typed:Oe}),HD=Qw({DenseMatrix:cn,smaller:kl}),kD=tD({ImmutableDenseMatrix:HD,getMatrixDataType:DD}),xm=Xw({DenseMatrix:cn,concat:yr,config:yn,matrix:dt,typed:Oe}),Wl=kA({addScalar:vs,dot:_m,equalScalar:xr,matrix:dt,multiplyScalar:_s,typed:Oe}),WD=Nw({DenseMatrix:cn,divideScalar:xs,equalScalar:xr,matrix:dt,multiplyScalar:_s,subtractScalar:sa,typed:Oe}),XD=gD({divideScalar:xs,isZero:hm,matrix:dt,multiply:Wl,subtractScalar:sa,typed:Oe,unaryMinus:xo}),qD=Hw({DenseMatrix:cn,concat:yr,config:yn,matrix:dt,typed:Oe}),$D=xw({bignumber:Gl,matrix:dt,add:vm,config:yn,isPositive:TD,larger:xm,largerEq:BD,smaller:kl,smallerEq:qD,typed:Oe}),YD=uw({Index:kD,matrix:dt,range:$D,typed:Oe}),ZD=_D({abs:lm,addScalar:vs,det:XD,divideScalar:xs,identity:gm,matrix:dt,multiply:Wl,typed:Oe,unaryMinus:xo}),ym=SD({abs:lm,add:vm,addScalar:vs,atan:AD,bignumber:Gl,column:YD,complex:Vl,config:yn,cos:wD,diag:ID,divideScalar:xs,dot:_m,equal:pm,flatten:mm,im:bD,inv:ZD,larger:xm,matrix:dt,matrixFromColumns:OD,multiply:Wl,multiplyScalar:_s,number:dm,qr:zD,re:CD,reshape:ND,sin:RD,size:Hl,smaller:kl,sqrt:yi,subtract:GD,typed:Oe,usolve:VD,usolveAll:WD});const KD=new B1,JD=KD.load("/textures/matcaps/1.png"),QD=window.location.search,Em=new URLSearchParams(QD);Em.get("size");let Ys=Em.getAll("covariance");console.log(Ys);Ys.length==0&&(Ys=[294.27148057,-337.79763545,-23.01971703,-337.79763545,416.22356906,20.973476,-23.01971703,20.973476,11.1488609]);console.log(Ys);function jD(r){let e=[];for(let t=0;t<r.length;t+=3)e.push(r.slice(t,t+3));return e}const Mm=jD(Ys);ym(Mm);const Xt=ym(Mm,{eigenvectors:!0});let eb=Xt.values[2],Eu=new Q(Xt.eigenvectors[2].vector[0],Xt.eigenvectors[2].vector[1],Xt.eigenvectors[2].vector[2]),tb=Xt.values[1],Mu=new Q(Xt.eigenvectors[1].vector[0],Xt.eigenvectors[1].vector[1],Xt.eigenvectors[1].vector[2]),nb=Xt.values[0],Su=new Q(Xt.eigenvectors[0].vector[0],Xt.eigenvectors[0].vector[1],Xt.eigenvectors[0].vector[2]),Xl=new Tt;Xl.set(Eu.x,Mu.x,Su.x,0,Eu.y,Mu.y,Su.y,0,Eu.z,Mu.z,Su.z,0,0,0,0,1);let ib=new Qs;ib.setFromRotationMatrix(Xl,"XYZ");const ql=new Tl,rl={color:9433252,spin:()=>{pp.to(Rn.rotation,{duration:10,y:Rn.rotation.y+Math.PI*2*2})}};ql.add(rl,"spin");const Sm=document.querySelector("canvas.webgl"),yo=new F1,rb=new cl(1,7),$l=new L1({matcap:JD}),Rn=new di(rb,$l);Rn.applyMatrix4(Xl);Rn.scale.x=yi(eb);Rn.scale.y=yi(tb);Rn.scale.z=yi(nb);Rn.material.wireframe=!0;yo.add(Rn);const Am=new z1(yi(Xt.values[2])/2);yo.add(Am);const ys=ql.addFolder("ellipsoid");ys.add(Rn,"visible").name("ellipsoid visible");ys.addColor(rl,"color").onChange(()=>{$l.color.set(rl.color)});ys.add(Rn.scale,"x",0,10,.01).name("x scale");ys.add(Rn.scale,"y",0,10,.01).name("y scale");ys.add(Rn.scale,"z",0,10,.01).name("z scale");ys.add($l,"wireframe");const sb=ql.addFolder("axes helper");sb.add(Am,"visible");const Wn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Wn.width=window.innerWidth,Wn.height=window.innerHeight,xi.aspect=Wn.width/Wn.height,xi.updateProjectionMatrix(),Zs.setSize(Wn.width,Wn.height),Zs.setPixelRatio(Math.min(window.devicePixelRatio,2))});const xi=new bn(75,Wn.width/Wn.height,.01,1e4);xi.position.x=yi(Xt.values[2]);xi.position.y=yi(Xt.values[2])/2;xi.position.z=yi(Xt.values[2]);xi.up.set(0,0,1);yo.add(xi);const wm=new G1(xi,Sm);wm.enableDamping=!0;const Zs=new hd({canvas:Sm});Zs.setSize(Wn.width,Wn.height);Zs.setPixelRatio(Math.min(window.devicePixelRatio,2));const ab=new O1,Dm=()=>{ab.getElapsedTime(),wm.update(),Zs.render(yo,xi),window.requestAnimationFrame(Dm)};Dm();
//# sourceMappingURL=index-fb7c2844.js.map
