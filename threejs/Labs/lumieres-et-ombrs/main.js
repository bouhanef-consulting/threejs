// Import three.js
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create the camera and set its position
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
// or camera.position.set(0, 0, 5);

// Create a cube and add it to the scene
const geometryCube = new THREE.BoxGeometry();
const materialCube = new THREE.MeshLambertMaterial({ color: 0xFFA500 });
const cube = new THREE.Mesh(geometryCube, materialCube);
// cube.castShadow = true;
cube.position.set(0, 1, 0);
scene.add(cube);

// Ajouter un plan
const geometryPlan = new THREE.PlaneGeometry( 10, 10 );
const materialPlan = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const plane = new THREE.Mesh(geometryPlan, materialPlan);
plane.rotation.x = 2;
plane.receiveShadow = true;
scene.add( plane );



// Ajout un AmbientLight
// const light = new THREE.AmbientLight(0xFFFFFF, 1);
// scene.add(light);

// Ajouter un PointLight
const light = new THREE.PointLight(0xFFFFFF, 10);
light.position.set(0, 2, 2);
scene.add(light);
// light.castShadow = true;

// Ajouter un SpotLight
// const light = new THREE.SpotLight(0xFFFFFF, 10);
// light.position.set(0, 2, 2);
// light.castShadow = true;
// scene.add(light);

// Ajouter un DirectionalLight
// const light = new THREE.DirectionalLight(0xFFFFFF, 1);
// light.position.set(0, 2, 2);
// light.castShadow = true;
// scene.add(light);


// Create the renderer, set its size and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const animate = () => {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();