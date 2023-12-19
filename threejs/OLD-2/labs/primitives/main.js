// Import three.js
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;
// or camera.position.set(0, 0, 20);

// Create the renderer, set its size and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// Create a cube and add it to the scene
// All primitive geometries can be found here  https://threejs.org/manual/#en/primitives
const width = 8;
const height = 8;
const depth = 8;
const widthSegments = 4;
const heightSegments = 4;
const depthSegments = 4;
const geometry = new THREE.BoxGeometry(
  width,
  height,
  depth,
  widthSegments,
  heightSegments,
  depthSegments
);
const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const animate = () => {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();