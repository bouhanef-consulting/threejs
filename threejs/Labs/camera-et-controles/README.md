# plan
- PerspectiveCamera
- OrthographicCamera
- CameraControls

Dans three.js, il existe deux types de caméra: la caméra perspective et la caméra orthographique.

# PerspectiveCamera
La caméra perspective est la caméra la plus utilisée. Elle permet de simuler la perspective et la profondeur de champ. Elle est utilisée pour les scènes 3D.
```diff
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
```
> - `const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);` permet de créer une nouvelle caméra avec les paramètres suivants:
>   - `75` est le champ de vision vertical en degrés, plus il est grand plus on voit large
>   - `window.innerWidth / window.innerHeight` est le ratio de l'écran, il est important de le mettre à jour si la taille de l'écran change
>   - `0.1` est la distance minimale de rendu, tout ce qui est plus proche ne sera pas visible
>   - `1000` est la distance maximale de rendu, tout ce qui est plus loin ne sera pas visible

# OrthographicCamera
La caméra orthographique est utilisée pour les scènes 2D. Elle ne simule pas la perspective et la profondeur de champ.
```diff
- const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
+ const frustumSize = 10;
+ const aspect = window.innerWidth / window.innerHeight;
+ const camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
```
> - `const frustumSize = 10;` permet de définir la taille de la caméra
> - `const aspect = window.innerWidth / window.innerHeight;` permet de définir le ratio de l'écran
> - `const camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);` permet de créer une nouvelle caméra avec les paramètres suivants:
>   - `frustumSize * aspect / -2` est la position de la gauche de la caméra
>   - `frustumSize * aspect / 2` est la position de la droite de la caméra
>   - `frustumSize / 2` est la position du haut de la caméra
>   - `frustumSize / -2` est la position du bas de la caméra
>   - `1` est la distance minimale de rendu, tout ce qui est plus proche ne sera pas visible
>   - `1000` est la distance maximale de rendu, tout ce qui est plus loin ne sera pas visible

# Différence entre les deux caméras
La différence entre les deux caméras est que la caméra perspective simule la perspective et la profondeur de champ, alors que la caméra orthographique ne simule pas la perspective et la profondeur de champ.

# CameraControls
La caméra peut être contrôlée avec la souris et le clavier grâce à la classe `CameraControls` du module `three/examples/jsm/controls/OrbitControls.js`.
```diff
+ import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
```

Il y a plusieurs types de controllers, voici quelques exemples :
- **`OrbitControls` :** Permet à la caméra de pivoter autour d'un point cible (orbite), de se déplacer latéralement (panoramique) et de zoomer. Très populaire pour les applications où l'utilisateur doit examiner un objet sous tous les angles.
```diff
+ import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
+ const controls = new OrbitControls(camera, renderer.domElement);
+ controls.update();
```
> - `import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';` permet d'importer la classe `OrbitControls`
> - `const controls = new OrbitControls(camera, renderer.domElement);` permet de créer un nouveau controller de caméra avec les paramètres suivants:
>   - `camera` est la caméra à contrôler
>   - `renderer.domElement` est l'élément HTML sur lequel le controller doit écouter les événements
> - `controls.update();` permet de mettre à jour le controller de caméra
>
> Ref : https://threejs.org/docs/#examples/en/controls/OrbitControls


- **`TrackballControls` :** Fournit des fonctionnalités similaires à OrbitControls, mais avec une sensation différente dans la manipulation de la caméra. Permet des rotations libres de la caméra plutôt que de la limiter à l'orbite autour d'un point fixe.
```diff
- import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
+ import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
- const controls = new OrbitControls(camera, renderer.domElement);
+ const controls = new TrackballControls(camera, renderer.domElement);
```
> - `import { TrackballControls } from 'three/addons/controls/TrackballControls.js';` permet d'importer la classe `TrackballControls`
> - `const controls = new TrackballControls(camera, renderer.domElement);` permet de créer un nouveau controller de caméra avec les paramètres suivants:
>   - `camera` est la caméra à contrôler
>   - `renderer.domElement` est l'élément HTML sur lequel le controller doit écouter les événements
>
> Ref : https://threejs.org/docs/#examples/en/controls/TrackballControls

- **`FirstPersonControls` :** Simule la vue à la première personne, permettant à l'utilisateur de se déplacer dans la scène comme s'il se déplaçait lui-même. C'est idéal pour les simulations de marche ou les jeux en vue à la première personne.
> Ref : https://threejs.org/docs/#examples/en/controls/FirstPersonControls

- **`FlyControls` :** Permet à la caméra de se déplacer librement dans toutes les directions, comme si elle volait. Contrairement aux FirstPersonControls, FlyControls n'essaie pas de maintenir une orientation "verticale" fixe.
> Ref : https://threejs.org/docs/#examples/en/controls/FlyControls

- **`PointerLockControls` :** Conçu pour les jeux et les applications en vue à la première personne, il capture le pointeur de la souris pour une expérience plus immersive. Il est souvent utilisé en combinaison avec FirstPersonControls ou FlyControls.
> Ref : https://threejs.org/docs/#examples/en/controls/PointerLockControls

- **`DragControls` :** Permet de cliquer et de faire glisser des objets dans la scène. Bien que ce ne soit pas un contrôleur de caméra à proprement parler, il est souvent utilisé pour interagir avec des objets dans une scène contrôlée par la caméra.
> Ref : https://threejs.org/docs/#examples/en/controls/DragControls

# Conclusion
Dans ce lab, nous avons vu comment créer une caméra et comment la contrôler avec la souris et le clavier. Dans la prochaine partie, nous verrons les lumières.

# Références
Vous pouvez trouver plus d'informations sur les caméras dans la documentation de Three.js: https://threejs.org/manual/#fr/cameras