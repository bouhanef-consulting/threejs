# Introduction à la 3d, webGL et theejs
Dans cette introduction, nous allons voir les bases de la 3d, de webGL et de threejs.

## Introduction à la 3d
Bienvenue dans ce tutoriel dédié aux concepts mathématiques essentiels en graphiques 3D. Que vous soyez un développeur de jeux, un artiste en animation ou simplement un passionné de technologie, comprendre ces principes de base vous aidera à mieux naviguer dans le monde fascinant de la 3D.

### Concepts mathématiques
Pour faire de la 3d, il faut comprendre les concepts mathématiques suivants:

#### Les Coordonnées 3D
**Définition :**
Les coordonnées 3D sont le fondement de la représentation spatiale. Chaque point dans l'espace 3D est défini par trois valeurs : X (horizontal), Y (vertical), et Z (profondeur).

**Utilisation Pratique :**
Imaginez un cube dans un espace 3D. Chaque coin de ce cube peut être identifié par un ensemble unique de coordonnées (X, Y, Z).

#### Les Vecteurs
**Définition :**
Un vecteur en 3D est un outil mathématique représentant une direction et une magnitude. Il est composé de trois composantes correspondant aux axes X, Y, Z.

**Utilisation Pratique :**
Les vecteurs sont cruciaux pour décrire des mouvements ou des forces. Par exemple, en animation, un vecteur peut déterminer la direction et la vitesse d'un personnage.

#### Les Matrices
**Définition :**
Les matrices 4x4 sont utilisées pour les transformations en 3D. Elles permettent de réaliser des opérations telles que la translation, la rotation, et la mise à l'échelle.

**Utilisation Pratique :**
Pour déplacer un objet dans l'espace, vous utiliserez une matrice de translation. En multipliant les coordonnées de l'objet par cette matrice, vous changez sa position.

#### Les Quaternions
**Définition :**
Les quaternions sont une alternative aux matrices pour représenter des rotations. Ils évitent le problème de blocage d'axes et sont plus efficaces pour les interpolations.

**Utilisation Pratique :**
Dans un jeu vidéo, pour faire tourner un personnage de manière fluide, les quaternions sont souvent préférés.

#### Les Transformations
**Définition :**
Les transformations sont les actions de modifier la position, l'orientation ou la taille d'un objet en 3D. Elles comprennent la translation, la rotation, et la mise à l'échelle.

**Utilisation Pratique :**
Si vous voulez animer une scène où un avion décolle, vous utiliserez des transformations pour simuler son mouvement et son ascension.

#### Les Repères
En modélisation 3D, les repères sont utilisés pour positionner et orienter les objets dans une scène. Par exemple, en plaçant un objet aux coordonnées (x, y, z) dans un repère, on définit précisément où cet objet apparaît dans l'espace 3D. De même, les repères aident à comprendre et à gérer les mouvements des objets, comme lorsqu'on les fait tourner ou les déplace le long d'un axe spécifique

### Concepts 3D
Pour faire de la 3d, il faut comprendre les concepts 3D suivants:

#### Les Objets 3D
Les objets 3D sont des modèles numériques qui représentent des formes ou des entités dans un espace tridimensionnel. Ils sont constitués de polygones, souvent des triangles, qui forment leur surface.

En 3d, on utilise plusieurs extensions de fichier pour représenter les objets 3d. Les extensions les plus utilisées sont les extensions suivantes:
* **.OBJ (Wavefront Object) :** C'est un format de fichier standard et ouvert utilisé pour représenter des formes géométriques en 3D. Il est largement utilisé car il est facile à comprendre et compatible avec de nombreux logiciels de modélisation 3D.
* **.FBX (Filmbox) :** Un format de fichier propriétaire développé par Autodesk. Il est utilisé pour fournir une interopérabilité entre les logiciels de création de contenu numérique, notamment pour les animations, les scènes 3D, et les éléments audio/vidéo.
* **.DAE (Collada) :** COLLAborative Design Activity est un format de fichier basé sur XML utilisé pour échanger des fichiers numériques entre différents logiciels de graphique. Il supporte les animations et est bien adapté pour les échanges de fichiers entre divers outils de modélisation.
* **.GLTF (GL Transmission Format) :** Ce format est conçu pour la distribution efficace de modèles 3D et est souvent appelé le "JPEG de la 3D". Il s'agit d'un format basé sur JSON qui permet une transmission rapide et le chargement de modèles 3D et de leurs animations. Il est particulièrement utile pour les applications web et mobiles, car il est conçu pour minimiser à la fois le temps de téléchargement et le temps de traitement des ressources graphiques.
* **.GLB (Binary GL Transmission Format) :** Le GLB est le format binaire de GLTF, offrant une réduction de taille plus importante et un chargement plus rapide des modèles 3D. Il encapsule les modèles, les shaders et les textures dans un seul fichier, ce qui le rend idéal pour une utilisation dans des environnements où la bande passante ou les ressources de stockage sont limitées.

#### Les Textures 
Les textures sont des images appliquées sur la surface des objets 3D pour ajouter des détails visuels tels que la couleur, le motif ou même l'illusion de la profondeur et du relief.

#### Les Scènes
Une scène en 3D est un environnement virtuel qui contient des objets 3D, des sources de lumière, des caméras, et parfois d'autres éléments comme des effets atmosphériques.

#### Les Lumières
Les lumières en 3D sont des éléments qui simulent l'éclairage réel. Elles affectent la manière dont les objets sont vus, en termes de luminosité, de couleur, et d'ombres.

#### Les Caméras
Les caméras en 3D définissent le point de vue de l'observateur. Elles déterminent ce qui est visible à l'écran et comment c'est présenté, par exemple la perspective et le champ de vision.

#### **Les Shaders
Les shaders sont des programmes informatiques utilisés pour déterminer l'aspect final des objets 3D à l'écran, en calculant comment la lumière et la couleur sont appliquées.

#### Les Matériaux
Les matériaux en 3D sont des propriétés attachées aux objets qui définissent comment ils interagissent avec la lumière, influençant leur apparence finale.

#### Les Animations
L'animation en 3D est le processus de création de mouvements pour les objets 3D, souvent en modifiant leurs positions, rotations, ou autres propriétés au fil du temps.

#### La Physique
La physique en 3D est la simulation des lois physiques réelles dans un environnement virtuel, comme la gravité, les collisions, ou la dynamique des fluides.

#### Les Particules
Les systèmes de particules en 3D sont utilisés pour simuler des phénomènes naturels complexes tels que la fumée, le feu, ou les explosions.

#### Les Collisions
La détection des collisions en 3D est le processus permettant de déterminer quand deux objets se touchent ou s'intersectent.

#### UV Mapping
L'UV mapping est une technique utilisée pour projeter des textures 2D sur la surface d'un objet 3D. Elle définit comment l'image de la texture s'adapte à la forme de l'objet.

#### Les Effets Spéciaux
Les effets spéciaux en 3D sont des techniques utilisées pour créer des effets visuels impressionnants, comme des explosions, des effets de lumière, ou des illusions visuelles.

## Introduction à WebGL

WebGL (Web Graphics Library) est une technologie puissante et versatile pour la création de graphiques 3D dans les navigateurs web. C'est une API basée sur OpenGL ES, une spécification de graphiques utilisée dans les applications mobiles. WebGL permet aux développeurs de créer des visuels complexes et interactifs directement dans le navigateur, sans avoir besoin de plugins externes.

L'avantage principal de WebGL est sa capacité à tirer parti de l'accélération matérielle des cartes graphiques, offrant ainsi des performances élevées pour les graphiques 3D. Cela ouvre la porte à une multitude d'applications, telles que des jeux vidéo, des visualisations de données, des expériences artistiques interactives, et bien plus encore.

Grâce à WebGL, il est possible de développer des applications 3D riches et immersives qui fonctionnent de manière fluide sur la plupart des navigateurs modernes et des appareils, y compris les smartphones et les tablettes.

# Introduction à Three.js

Three.js est une bibliothèque JavaScript qui offre une couche d'abstraction sur WebGL, rendant le développement de scènes 3D beaucoup plus accessible. Elle fournit un ensemble d'outils et de composants pour construire et manipuler des graphiques 3D de manière intuitive et efficace.

Avec Three.js, les développeurs peuvent créer des scènes 3D, ajouter des objets, des lumières, des caméras, des animations, et bien plus, en utilisant une syntaxe simplifiée. La bibliothèque gère les aspects complexes de WebGL, permettant aux développeurs de se concentrer sur la création de l'expérience 3D elle-même plutôt que sur les détails techniques de bas niveau.

Un des grands avantages de Three.js est sa communauté active et ses nombreuses ressources disponibles, incluant des exemples, des tutoriels et une documentation complète. Cela en fait un excellent point de départ pour ceux qui souhaitent se lancer dans le développement de projets 3D pour le web.

En résumé, WebGL et Three.js forment ensemble un duo puissant pour le développement de graphiques 3D sur le web, offrant à la fois performance et facilité d'utilisatio