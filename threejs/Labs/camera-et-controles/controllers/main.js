// Import three.js
import * as THREE from 'three';

// Import OrbitControls
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Import TrackballControls
// import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
// or camera.position.set(0, 0, 5);

// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create the renderer, set its size and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// const controls = new TrackballControls(camera, renderer.domElement);

controls.update();

const animate = () => {
    requestAnimationFrame(animate);
    
    controls.update();  

	renderer.render( scene, camera );
}
animate();