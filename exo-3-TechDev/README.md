## Exercice 3 : Manipulation

Une fois un élément sélectionné, on veut pouvoir faire des opérations sur celui-ci, par exemple :

- changer le texte du paragraphe si on a sélectionné un paragraphe ;
- changer la couleur de la div sélectionnée ;
- ajouter une div après l'élément sélectionné ;
- supprimer un élément ;
- cacher l'élément.

Commencez par réaliser les cours de Khan Academy :

- ['Accès au DOM avec jQuery'](https://fr.khanacademy.org/computing/computer-programming/html-js-jquery/jquery-dom-access/pt/finding-elements-with-jquery)
- ['Modification du DOM avec jQuery'](https://fr.khanacademy.org/computing/computer-programming/html-js-jquery/dom-modification-with-jquery/pt/modifying-elements-with-jquery)
  _Ces cours sont accessibles sans créer de compte sur la plateforme._

L'objectif de l'exercice est d'utiliser uniquement du code JavaScript pour faire les modifications. Autrement dit, interdiction de modifier le fichier index.html (ça serait un peu trop facile...)

Ce répertoire présente une page de site d'un portfolio. Ce portfolio est très générique et nous allons utiliser jQuery pour le personnaliser :

1. changez le titre "My portfolio" par votre prénom ;
2. changez aussi le texte 'Some text that represents "Me"...' par une tagline vous représentant ;
3. votre portfolio ne comprendra qu'une page : supprimez la navigation de la navbar mais laissez le bouton Login ;
4. changez l'icone de ce bouton d'ailleurs, elle n'est pas très jolie, choisissez-en une dans la [liste possible de bootstrap](https://icons.getbootstrap.com/) (n'utilisez pas npm pour les installer, mais le cdn disponible en bas de page);
5. changez votre footer en mettant **Copyright 2021** ( respecter le gras );
6. modifiez le texte des paragraphes de la première ligne d'images. Tous les textes "Some text..." doivent être remplacés par "Mon projet" ;
   _Bonus_ : ajouter le numéro du projet c'est-à-dire 'Mon projet 1', 'Mon projet 2'...
7. choisissez une image sur internet et changez toutes les images du projet par cette image. _Bonus_ : personnalisez chacune des images ;
8. vous venez de réaliser un nouveau projet et vous souhaitez le mettre sur votre portfolio. De plus, comme c'est le dernier, vous souhaitez qu'il apparaisse au-dessus des autres et qu'il soit plus grand pour être mis en valeur. Choisissez une image et un texte et ajoutez-le au-dessous de "Some of my work". Ajustez la taille de l'image pour être de 250px de haut ;
9. la classe intro a été définie dans le fichier 'index.css'. Ajoutez cette classe au footer afin de changer l'affichage en rouge.
