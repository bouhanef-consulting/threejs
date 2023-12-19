// Import three.js
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
// or camera.position.set(0, 0, 5);

// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();

// Chargement de textture
// const texture = new THREE.TextureLoader().load('wood.jpg');
// const material = new THREE.MeshBasicMaterial({ map: texture });

// Utilisation de MeshBasicMaterial
const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });

// MeshLambertMaterial
// const material = new THREE.MeshLambertMaterial({ color: 0xFFA500 });
// const light = new THREE.AmbientLight(0xFFFFFF, 1);
// scene.add(light);


// MeshPhongMaterial
// const material = new THREE.MeshPhongMaterial({color: 0xFFA500, specular: 0xffffff, shininess: 100 });
// const light1 = new THREE.PointLight(0xFFFFFF, 10);
// light1.position.set( 0, 10, 0 );
// scene.add(light1);
// 
// const light2 = new THREE.PointLight(0xFFFFFF, 10);
// light2.position.set( 0, -10, 0 );
// scene.add(light2);
// 
// const light3 = new THREE.PointLight(0xFFFFFF, 10);
// light3.position.set( 0, 0, 10 );
// scene.add(light3);



const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create the renderer, set its size and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const animate = () => {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();