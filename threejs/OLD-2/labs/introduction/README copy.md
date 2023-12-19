# Introduction à la 3d, webGL et theejs
Dans cette introduction, nous allons voir les bases de la 3d, de webGL et de threejs.

## Introduction à la 3d
La 3d est un domaine très vaste.

Il y a plusieurs concepts à comprendre pour pouvoir faire de la 3d, c'est intimidant au début mais on va voir que c'est pas si compliqué.

### Concepts mathématiques
Pour faire de la 3d, il faut comprendre les concepts mathématiques suivants:

#### Les coordonnées
Les coordonnées sont utilisées pour définir la position d'un point dans l'espace 3D. Il y a plusieurs systèmes de coordonnées, les plus utilisés sont le système de coordonnées cartésiennes et le système de coordonnées sphériques.

#### Les vecteurs
Les vecteurs sont utilisés pour représenter une direction et une longueur. Ils sont utilisés pour définir la position d'un point dans l'espace 3D. Ils sont reprépresentés par un vecteur de 3 nombres. Le premier nombre est la position du point sur l'axe X, le deuxième nombre est la position du point sur l'axe Y et le troisième nombre est la position du point sur l'axe Z. x et y sont la longueur du vecteur et z est la direction du vecteur.

#### Les matrices 
Les matrices sont des tableaux à deux dimensions. Elles sont utilisées pour effectuer des transformations dans l'espace 3D. Elles sont utilisées pour déplacer, faire pivoter et mettre à l'échelle les objets 3D. 

Voici un exemple de matrice de transformation 4x4:
```
[ a, b, c, d ]
[ e, f, g, h ]
[ i, j, k, l ]
[ m, n, o, p ]
```

* **Éléments a, b, c, e, f, g, i, j, k :** Ces éléments composent la partie supérieure gauche 3x3 de la matrice. Ils sont responsables des transformations linéaires telles que la rotation et la mise à l'échelle. Par exemple, pour une matrice de rotation, ces valeurs sont calculées en fonction de l'angle de rotation et de l'axe autour duquel l'objet doit être tourné.

* **Éléments d, h, l :** Ces éléments représentent la translation dans l'espace 3D. Ils déterminent combien et dans quelle direction un objet est déplacé le long des axes X, Y, et Z.

* **Éléments m, n, o :** Ces éléments sont souvent utilisés dans la perspective ou d'autres transformations non linéaires. Dans une matrice de transformation standard pour la modélisation ou l'animation, ils sont généralement définis à 0.

* **Élément p :** Cet élément est connu comme le facteur de normalisation homogène. Dans la plupart des cas, il est fixé à 1. Cependant, il peut être différent de 1 dans certaines transformations plus complexes comme la projection en perspective.

#### Les quaternions
Les quaternions sont utilisés pour représenter une rotation. Ils sont idéal pour les animations car ils sont plus efficaces que les matrices.

#### les repères
Les repères sont utilisés pour définir la position d'un point dans l'espace 3D. Il y a plusieurs systèmes de repères, les plus utilisés sont le système de repères cartésiens et le système de repères sphériques. dans la 3d on utilise le système de repères cartésiens.

### Concepts 3D
Pour faire de la 3d, il faut comprendre les concepts 3D suivants:

#### Les objets 3D
Les objets 3D sont utilisés pour représenter des objets dans l'espace 3D. Ils sont composés de plusieurs faces. Chaque face est composée de plusieurs sommets. Chaque sommet est composé de plusieurs coordonnées. Les coordonnées sont utilisées pour définir la position d'un point dans l'espace 3D. Les objets 3D sont représentés par des points, qu'on appel des sommets (vertex en anglais). Les sommets sont reliés entre eux par des lignes, qu'on appel des arêtes (edges en anglais). Les arêtes forment des faces (faces en anglais). Les faces forment des polygones (polygons en anglais). Les polygones forment des objets 3D (meshes en anglais).

#### Les textures
Les textures sont utilisées pour ajouter des détails aux objets 3D. Elles sont utilisées pour ajouter des couleurs, des images, des motifs, des effets spéciaux, etc. aux objets 3D.

#### La scène
La scéne est le monde 3D qu'on crée. Il est composé de plusieurs objets 3D, de plusieurs lumières et de plusieurs caméras.

#### Les lumières
Les lumières sont utilisées pour éclairer les objets 3D. Elles sont utilisées pour définir la couleur et la reflection des objets 3D. Elle permet aussi de définir l'ombre, les relièfs etc.

#### Les caméras
Les caméras sont utilisées pour définir la partie de la scène qui sera affichée à l'écran. Elles sont utilisées pour définir la position, la rotation et le zoom de la caméra.

#### Les shaders
Les shaders sont utilisés pour calculer la couleur de chaque pixel de l'écran. ils sont utilisé parcequ'ils sont performants.

#### Les matériaux
Les matériaux sont utilisés pour définir la couleur des objets 3D. Ils sont utilisés pour définir la couleur, la reflection, la transparence, etc. des objets 3D.

##### Le système de coordonnées cartésiennes
Le système de coordonnées cartésiennes est le système de coordonnées le plus utilisé. Il est utilisé pour définir la position d'un point dans l'espace 3D. Il est composé de 3 axes, l'axe X, l'axe Y et l'axe Z. Chaque axe est perpendiculaire aux deux autres axes. L'axe X est orienté vers la droite, l'axe Y est orienté vers le haut et l'axe Z est orienté vers l'avant. L'origine du système de coordonnées est le point (0, 0, 0). La position d'un point dans l'espace 3D est définie par 3 nombres, le premier nombre est la position du point sur l'axe X, le deuxième nombre est la position du point sur l'axe Y et le troisième nombre est la position du point sur l'axe Z. La position d'un point dans l'espace 3D est définie par un vecteur de 3 nombres.

Pour un document que je réalise pour comprendre la 3D, j'ai le programme suivant. Donne moi une définition de chacun 
- Les coordonnées : Ils sont utilisés pour définir la position d'un point dans l'espace 3D. 
- Les vecteurs : Ils sont utilisés pour représenter une direction et une longueur.
- Les matrices : Elles sont utilisées pour effectuer des transformations dans l'espace 3D.
- Les quaternions : Ils sont utilisés pour représenter une rotation.
- Les transformations : Elles sont utilisées pour déplacer, faire pivoter et mettre à l'échelle les objets 3D.

### Concepts 3D
Pour faire de la 3d, il faut comprendre les concepts 3D suivants:

Pour un document que je réalise pour comprendre la 3D, j'ai le programme suivant. Donne moi une définition de chacun des concepts suivantes 

- Les objets 3D : Ils sont utilisés pour représenter des objets dans l'espace 3D.
- Les textures : Elles sont utilisées pour ajouter des détails aux objets 3D.
- Les scènes : Elles sont utilisées pour définir les objets 3D, les lumières et les caméras.
- Les lumières : Elles sont utilisées pour éclairer les objets 3D.
- Les caméras : Elles sont utilisées pour définir la vue de la scène.
- Les shaders : Ils sont utilisés pour calculer la couleur de chaque pixel de l'écran.
- Les matériaux : Ils sont utilisés pour définir la couleur des objets 3D.
- Les animations : Elles sont utilisées pour animer les objets 3D.
- Ma physique : Elle est utilisée pour simuler les lois de la physique dans la scène.
- Les particules : Elles sont utilisées pour simuler des effets spéciaux dans la scène.
- Les collisions : Elles sont utilisées pour détecter les collisions entre les objets 3D.
- UV mapping : Il est utilisé pour définir comment les textures sont appliquées aux objets 3D.
- Les effets spéciaux : Ils sont utilisés pour simuler des effets spéciaux dans la scène.



## Introduction à webGL
webGL est une API qui permet de faire de la 3d dans un navigateur web. Elle permet de faire du rendu 3d en utilisant le GPU de l'ordinateur. Elle est basée sur OpenGL ES 2.0. Elle est supportée par tous les navigateurs modernes.




## Introduction à threejs
threejs est une bibliothèque javascript qui permet de faire de la 3d dans un navigateur web. Elle permet de faire du rendu 3d en utilisant webGL. Elle est basée sur webGL. Elle est supportée par tous les navigateurs modernes.
ThreeJs utilise WebGL pour simplifier la création d'applications 3D dans le navigateur. Il fournit une API de haut niveau pour la création de scènes 3D et d'objets 3D, et il utilise WebGL pour le rendu.