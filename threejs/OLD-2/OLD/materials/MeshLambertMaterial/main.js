// Import three.js
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
// or camera.position.set(0, 0, 5);

// Create the renderer, set its size and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0xFFA500 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Should add light to see the cube
const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(2, 2, 2);
scene.add(light);

const animate = () => {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();