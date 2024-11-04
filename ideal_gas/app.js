// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 40;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Initial variables
let containerSize = 30;
const molecules = [];
const moleculeCount = 500;

// Function to create a molecule
function createMolecule() {
    const geometry = new THREE.SphereGeometry(0.5, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x0077be });
    const molecule = new THREE.Mesh(geometry, material);

    molecule.position.set(
        (Math.random() - 0.5) * containerSize,
        (Math.random() - 0.5) * containerSize,
        (Math.random() - 0.5) * containerSize
    );

    molecule.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
    );

    molecule.rotationSpeed = new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
    );

    molecules.push(molecule);
    scene.add(molecule);
}

// Create molecules
for (let i = 0; i < moleculeCount; i++) createMolecule();

// Add lights
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(20, 20, 20);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Create transparent container walls
const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0xff00ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.15
});

// Create six walls for the container
const halfSize = containerSize / 2;
const walls = [
    { position: [halfSize, 0, 0], rotation: [0, Math.PI / 2, 0] }, // Right
    { position: [-halfSize, 0, 0], rotation: [0, Math.PI / 2, 0] }, // Left
    { position: [0, halfSize, 0], rotation: [Math.PI / 2, 0, 0] }, // Top
    { position: [0, -halfSize, 0], rotation: [Math.PI / 2, 0, 0] }, // Bottom
    { position: [0, 0, halfSize], rotation: [0, 0, 0] }, // Front
    { position: [0, 0, -halfSize], rotation: [0, 0, 0] }  // Back
];

// Add each wall as a plane to the scene
walls.forEach(wall => {
    const geometry = new THREE.PlaneGeometry(containerSize, containerSize);
    const wallMesh = new THREE.Mesh(geometry, wallMaterial);
    wallMesh.position.set(...wall.position);
    wallMesh.rotation.set(...wall.rotation);
    scene.add(wallMesh);
});

// Create and add the container edges
const edgesGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(containerSize, containerSize, containerSize));
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2 });
const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
scene.add(edges);

// Volume slider control
document.getElementById('volume').addEventListener('input', (event) => {
    containerSize = event.target.value;
    const newHalfSize = containerSize / 2;

    // Adjust wall positions and sizes to match new container size
    walls.forEach((wall, index) => {
        const wallMesh = scene.children[scene.children.length - 7 + index];
        wallMesh.scale.set(containerSize / 30, containerSize / 30, 1);
        wallMesh.position.set(
            wall.position[0] ? Math.sign(wall.position[0]) * newHalfSize : 0,
            wall.position[1] ? Math.sign(wall.position[1]) * newHalfSize : 0,
            wall.position[2] ? Math.sign(wall.position[2]) * newHalfSize : 0
        );
    });

    // Update the edges geometry to reflect the new container size
    scene.remove(edges); // Remove old edges
    const newEdgesGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(containerSize, containerSize, containerSize));
    edges.geometry.dispose(); // Clean up memory
    edges.geometry = newEdgesGeometry;
    edges.position.set(0, 0, 0);
    scene.add(edges); // Add updated edges
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update molecules
    molecules.forEach(molecule => {
        molecule.position.add(molecule.velocity);
        molecule.rotation.x += molecule.rotationSpeed.x;
        molecule.rotation.y += molecule.rotationSpeed.y;
        molecule.rotation.z += molecule.rotationSpeed.z;

        // Check for collision with container walls and reflect if needed
        ['x', 'y', 'z'].forEach(axis => {
            if (molecule.position[axis] > containerSize / 2) {
                molecule.position[axis] = containerSize / 2;
                molecule.velocity[axis] *= -1; // Reverse velocity on collision
            } else if (molecule.position[axis] < -containerSize / 2) {
                molecule.position[axis] = -containerSize / 2;
                molecule.velocity[axis] *= -1; // Reverse velocity on collision
            }
        });
    });

    renderer.render(scene, camera);
    controls.update();
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
