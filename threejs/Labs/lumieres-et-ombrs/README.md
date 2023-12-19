Il y a plusieurs types de lumière dans Three.js.

Bien sûr, voici les définitions des différents types de lumières et composants liés aux ombres dans Three.js :

# AmbientLight (`THREE.AmbientLight`)
Une lumière qui émet un éclairage uniforme sur tous les objets de la scène, sans créer d'ombres ni de directionnalité. C'est comme une lumière globale qui éclaire tout de manière égale.
```diff
+ const light = new THREE.AmbientLight(0xFFFFFF, 1);
+ scene.add(light);
```
> - `const light = new THREE.AmbientLight(0xFFFFFF, 1);` permet de créer une nouvelle lumière de type `AmbientLight` avec la couleur blanche et une intensité de 1
> - `scene.add(light);` permet d'ajouter la lumière à la scène

# PointLight (`THREE.PointLight`)
Une source lumineuse qui émet de la lumière dans toutes les directions à partir d'un point unique, similaire à une ampoule. Elle peut projeter des ombres et sa portée peut être limitée.
```diff
+ const light = new THREE.PointLight(0xFFFFFF, 10);
+ light.position.set(0, 2, 2);
+ scene.add(light);
```
> - `const light = new THREE.PointLight(0xFFFFFF, 10);` permet de créer une nouvelle lumière de type `PointLight` avec la couleur blanche et une intensité de 10
> - `light.position.set(0, 2, 2);` permet de définir la position de la lumière sur l'axe x à 0, sur l'axe y à 2 et sur l'axe z à 2
> - `scene.add(light);` permet d'ajouter la lumière à la scène

# SpotLight (`THREE.SpotLight`)
Une lumière qui émet un cône de lumière dans une direction spécifique, comme un projecteur. Elle peut projeter des ombres et est souvent utilisée pour créer des effets dramatiques ou pour attirer l'attention sur certaines parties de la scène.
```diff
+ const light = new THREE.SpotLight(0xFFFFFF, 10);
+ light.position.set(0, 2, 2);
+ scene.add(light);
```
> - `const light = new THREE.SpotLight(0xFFFFFF, 10);` permet de créer une nouvelle lumière de type `SpotLight` avec la couleur blanche et une intensité de 10
> - `light.position.set(0, 2, 2);` permet de définir la position de la lumière sur l'axe x à 0, sur l'axe y à 2 et sur l'axe z à 2
> - `scene.add(light);` permet d'ajouter la lumière à la scène


# DirectionalLight (`THREE.DirectionalLight`):**
Une source lumineuse qui émet des rayons parallèles dans une direction spécifique, simulant l'effet de la lumière du soleil. Idéale pour les grandes scènes extérieures, elle peut projeter des ombres avec une directionnalité constante.
```diff
+ const light = new THREE.DirectionalLight(0xFFFFFF, 10);
+ light.position.set(0, 2, 2);
+ scene.add(light);
```
> - `const light = new THREE.DirectionalLight(0xFFFFFF, 10);` permet de créer une nouvelle lumière de type `DirectionalLight` avec la couleur blanche et une intensité de 10
> - `light.position.set(0, 2, 2);` permet de définir la position de la lumière sur l'axe x à 0, sur l'axe y à 2 et sur l'axe z à 2
> - `scene.add(light);` permet d'ajouter la lumière à la scène

# HemisphereLight (`THREE.HemisphereLight`):**
Une lumière qui éclaire la scène de manière semi-globale, avec une couleur émanant du ciel et une autre du sol, créant ainsi un effet de lumière naturelle et douce. Elle ne projette pas d'ombres.

# **RectAreaLight (`THREE.RectAreaLight`):**
Une source lumineuse qui émet de la lumière uniformément à partir d'une surface rectangulaire, simulant l'éclairage de fenêtres ou de panneaux d'éclairage. Elle est idéale pour créer des effets de lumière douce et diffusée.

# Les ombres
## Types de Lumières Produisant des Ombres
Certaines lumières dans Three.js sont capables de projeter des ombres :

1. **Directional Light (`THREE.DirectionalLight`):** Projette des ombres qui sont parallèles, simulant ainsi la lumière du soleil. Idéal pour les scènes extérieures ou de grandes scènes.

2. **Spot Light (`THREE.SpotLight`):** Projette des ombres coniques et peut être utilisé pour focaliser l'attention sur des objets spécifiques.

3. **Point Light (`THREE.PointLight`):** Projette des ombres dans toutes les directions à partir d'un point. Peut être utilisé pour simuler des sources de lumière comme des bougies ou des ampoules.

## Configuration des Ombres
Pour utiliser les ombres, quelques étapes de configuration sont nécessaires :

1. **Activer les Ombres dans le Renderer :**
```diff
+ renderer.shadowMap.enabled = true;
```
> - `renderer.shadowMap.enabled = true;` permet d'activer les ombres dans le renderer

2. **Configurer les Lumières pour Projeter des Ombres :**
Pour chaque lumière qui doit projeter des ombres, activez cette capacité :
```javascript
light.castShadow = true;
```

3. **Configurer les Objets pour projeter des Ombres :**
```diff
object.castShadow = true;
```
> - `object.castShadow = true;` permet d'activer les ombres sur l'objet
4. **Configurer les Objets pour Recevoir des Ombres :**
```javascript
object.receiveShadow = true;
```
> - `object.receiveShadow = true;` permet d'activer les ombres sur l'objet

### Paramètres Importants pour les Ombres
- **Qualité et Résolution des Ombres :** Définie par `shadow.mapSize.width` et `shadow.mapSize.height`. Des valeurs plus élevées donnent de meilleures ombres mais nécessitent plus de ressources de calcul.

- **Portée et Précision des Ombres :** Paramètres comme `shadow.camera.near`, `shadow.camera.far`, et `shadow.camera.fov` (pour les SpotLights) définissent la portée et la précision des ombres.

- **Optimisation des Performances :**
  - Utiliser des ombres uniquement lorsque nécessaire.
  - Limiter la résolution des ombres pour les scènes moins détaillées.
  - Ajuster la portée de la caméra d'ombre pour qu'elle soit juste assez grande pour couvrir votre scène.

### Autres Considérations
- **Pénombre :** Three.js supporte la pénombre (soft shadows) qui donne un aspect plus naturel. Cela peut être ajusté via des paramètres tels que `light.shadow.radius`.

- **Débogage :** Utiliser `THREE.CameraHelper` pour