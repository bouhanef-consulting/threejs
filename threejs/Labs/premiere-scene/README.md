Dans cet exemple nous allons voir comment créer une scène 3d avec un cube qui tourne.

# Setup
- `index.html`
```diff 
+ <html lang="en">
+ 
+ <head>
+     <meta charset="UTF-8" />
+     <title>Votre première scène</title>
+     <style>
+         body {
+             margin: 0;
+         }
+     </style>
+     <script type="importmap">
+         { "imports": { "three": "https://unpkg.com/three@0.159.0/build/three.module.js", "three/addons/": "https://unpkg.com/three@0.+ 159.0/examples/jsm/" } }
+     </script>
+ </head>
+ 
+ <body>
+     <!--  Our code  -->
+     <script type="module" src="main.js"></script>
+ </body>
+ 
+ </html>
```
> - `importmap` permet d'importer des modules sans avoir à spécifier le chemin complet
> - `<script type="module" src="main.js"></script>"` permet d'importer le module `main.js` qui contient notre code

- `main.js`
```diff
+ import * as THREE from 'three';
```
> - `import * as THREE from 'three';` permet d'importer le module `three` et de l'assigner à la variable `THREE`

# Créer ma scène
```diff
+ const scene = new THREE.Scene();
```
> - `const scene = new THREE.Scene();` permet de créer une nouvelle scène

# Camera
```diff
+ const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
+ camera.position.z = 5;
```
> - `const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);` permet de créer une nouvelle caméra avec les paramètres suivants:
>   - `75` est le champ de vision vertical en degrés, plus il est grand plus on voit large
>   - `window.innerWidth / window.innerHeight` est le ratio de l'écran, il est important de le mettre à jour si la taille de l'écran change
>   - `0.1` est la distance minimale de rendu, tout ce qui est plus proche ne sera pas visible
>   - `1000` est la distance maximale de rendu, tout ce qui est plus loin ne sera pas visible

# Cube
```diff
+ const geometry = new THREE.BoxGeometry();
+ const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
+ const cube = new THREE.Mesh(geometry, material);
+ scene.add(cube);
```
> - `const geometry = new THREE.BoxGeometry();` permet de créer une nouvelle géométrie de type cube
> - `const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });` permet de créer un nouveau matériau de type `MeshBasicMaterial` avec la couleur orange
> - `const cube = new THREE.Mesh(geometry, material);` permet de créer un nouveau mesh avec la géométrie et le matériau précédemment créés

# Renderer
```diff
+ const renderer = new THREE.WebGLRenderer();
+ renderer.setSize(window.innerWidth, window.innerHeight);
+ document.body.appendChild(renderer.domElement);
```
> - `const renderer = new THREE.WebGLRenderer();` permet de créer un nouveau renderer, le renderer est ce qui va permettre de rendre la scène 3d dans le navigateur en utilisant WebGL

# Animation
```diff
+ const animate = () => {
+     requestAnimationFrame(animate);
+     cube.rotation.x += 0.01;
+     cube.rotation.y += 0.01;
+     renderer.render(scene, camera);
+ }
+ animate();
```
> - `requestAnimationFrame(animate);` permet de demander au navigateur d'appeler la fonction `animate` à chaque frame, généralement 60 fois par seconde
> - `cube.rotation.x += 0.01;` permet de faire tourner le cube sur l'axe x de 0.01 radians à chaque frame
> - `cube.rotation.y += 0.01;` permet de faire tourner le cube sur l'axe y de 0.01 radians à chaque frame
> - `renderer.render(scene, camera);` permet de rendre la scène avec la caméra
> - `animate();` permet d'appeler la fonction `animate` pour la première fois

# Redimensionner la fenêtre
```diff
+ window.addEventListener('resize', () => {
+     camera.aspect = window.innerWidth / window.innerHeight;
+     camera.updateProjectionMatrix();
+     renderer.setSize(window.innerWidth, window.innerHeight);
+ });
```
> - `window.addEventListener('resize', () => {` permet d'ajouter un écouteur d'événement sur le redimensionnement de la fenêtre
> - `camera.aspect = window.innerWidth / window.innerHeight;` permet de mettre à jour le ratio de la caméra
> - `camera.updateProjectionMatrix();` permet de mettre à jour la matrice de projection de la caméra
> - `renderer.setSize(window.innerWidth, window.innerHeight);` permet de mettre à jour la taille du renderer
> - `});` permet de fermer la fonction fléchée

# Conclusion
Vous avez maintenant une scène 3d avec un cube qui tourne, vous pouvez maintenant passer à la suite pour apprendre à sur les objets.