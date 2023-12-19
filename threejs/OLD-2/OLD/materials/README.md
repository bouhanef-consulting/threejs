# Les matériaux
- https://threejs.org/manual/#fr/materials

Three.js propose une variété de matériaux, chacun ayant ses propres propriétés et cas d'utilisation, ce qui en fait un aspect essentiel pour créer des scènes 3D réalistes ou stylisées. Voici un aperçu de certains matériaux couramment utilisés dans Three.js :

## MeshBasicMaterial
C'est le matériau le plus simple de Three.js. Il n'est pas affecté par les lumières, ce qui signifie qu'il ne reflète ni n'absorbe la lumière. Il est souvent utilisé pour des scènes non éclairées ou des matériaux basiques comme une couleur ou un maillage filaire.

## MeshLambertMaterial
Ce matériau est adapté pour créer des surfaces mates, non brillantes. Il réagit aux lumières dans la scène mais n'a pas de reflets spéculaires (les taches brillantes sur une surface).

## MeshPhongMaterial
Semblable au MeshLambertMaterial, mais il peut créer des surfaces brillantes avec des reflets spéculaires. La propriété shininess contrôle le niveau de brillance de la surface.

## MeshStandardMaterial
Ce matériau offre un rendu plus réaliste que le MeshLambertMaterial ou le MeshPhongMaterial. Il utilise les principes du rendu basé sur la physique (PBR) et comprend des propriétés comme roughness et metalness pour simuler des matériaux réels.

## MeshPhysicalMaterial
Une extension de MeshStandardMaterial, il ajoute plus de propriétés comme clearcoat pour simuler des matériaux avec une couche de vernis transparent, offrant plus de réalisme, en particulier pour les peintures de voiture et d'autres matériaux similaires.

## MeshDepthMaterial
Ce matériau utilise la distance de la caméra pour colorer le maillage en nuances de gris, souvent utilisé pour les effets de profondeur.

## MeshNormalMaterial
Il visualise les normales de la géométrie, utile pour le débogage et les effets visuels.

## MeshToonMaterial
Il donne un effet d'ombrage en deux tons de type dessin animé. Ceci est réalisé en utilisant une carte de gradient pour ombrer le matériau.