// Import three.js
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
// const frustumSize = 10;
// const aspect = window.innerWidth / window.innerHeight;
// const camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(8, 3, 20);
camera.rotation.set(-0.2, 0.5, 0);

// Create a cube and add it to the scene
const cubesPositions = [
    {
        "x": 0,
        "y": 0,
        "z": 0
    },
    {
        "x": 2,
        "y": 0,
        "z": 0
    },
    {
        "x": 0,
        "y": 2,
        "z": 0
    },
    {
        "x": 0,
        "y": 0,
        "z": 15
    },
    {
        "x": 2,
        "y": 2,
        "z": 0
    },
    {
        "x": 2,
        "y": 0,
        "z": 15
    },
    {
        "x": 0,
        "y": 2,
        "z": 15
    },
    {
        "x": 2,
        "y": 2,
        "z": 15
    }
];

const cubes = [];

for (let index = 0; index < cubesPositions.length; index++) {
    const cubeParams = cubesPositions[index];
    const geometry = new THREE.BoxGeometry();
    geometry.translate( cubeParams.x, cubeParams.y, cubeParams.z );
    const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubes.push(cube);
}

// Create the renderer, set its size and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const animate = () => {
    requestAnimationFrame(animate);

	renderer.render( scene, camera );
}
animate();