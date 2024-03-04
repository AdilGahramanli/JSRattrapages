console.log('----------');
console.log('Exercice 3');
console.log('----------');

// Faites toutes vos manipulations de DOM ici

// Et pas dans votre fichier HTML ! 

//1. changez le titre "My portfolio" par votre prénom ;
//$("div.container.text-center > h1").text($("div.container.text-center > h1").text().replace("My Portfolio", "mon nouveau texte"));




// $("h3").text("blablalblaldldlssdfsd");

// let monH1 = document.querySelector('h1');
// monH1.textContent="modification de mon h1";

$('h1').text("modif Jquery de h1");


//2. changez aussi le texte 'Some text that represents "Me"...' par une tagline vous représentant ;

// let maTagline = document.getElementById('tagline');
// maTagline.textContent="ceci est la tagline qui me représente";

// maTagline = $('p#tagline');
// maTagline.text('je modifier ce qui em représente');

$('#tagline').text("modif Jquery de tagline");


/*3. votre portfolio ne comprendra qu'une page : supprimez la navigation de la navbar 
mais laissez le bouton Login ;*/

$('#myNavbar > ul:nth-child(1)').remove();

/*4. changez l'icone de ce bouton d'ailleurs, elle n'est pas très jolie, choisissez-en une dans 
la [liste possible de bootstrap](https://icons.getbootstrap.com/) 
(n'utilisez pas npm pour les installer, mais le cdn disponible en bas de page);*/

// $('#myNavbar > ul > li > a > span').remove('.glyphicon glyphicon-log-in');
// add('<i class="bi bi-door-open"></i>')


$('#myNavbar > ul > li > a > span.glyphicon.glyphicon-log-in').remove();

$('#myNavbar > ul > li > a').prepend('<span class="bi bi-universal-access-circle"></span>');


//5. changez votre footer en mettant **Copyright 2021** ( respecter le gras );

$('body > footer > p').html("<b>**Copyright 2024**</b>")

/*6. modifiez le texte des paragraphes de la première ligne d'images. Tous les textes 
"Some text..." doivent être remplacés par "Mon projet" ;*/
$('#work1 > div:nth-child(n) > p').text("Mon projet")

 //  _Bonus_ : ajouter le numéro du projet c'est-à-dire 'Mon projet 1', 'Mon projet 2'...


/*7. choisissez une image sur internet et changez toutes les images du projet par 
cette image. _Bonus_ : personnalisez chacune des images ; */


/*8. vous venez de réaliser un nouveau projet et vous souhaitez le mettre sur votre portfolio. 
De plus, comme c'est le dernier, vous souhaitez qu'il apparaisse au-dessus des autres 
et qu'il soit plus grand pour être mis en valeur. Choisissez une image et un texte et 
ajoutez-le au-dessous de "Some of my work". Ajustez la taille de l'image pour être 
de 250px de haut ;*/


/*9. la classe intro a été définie dans le fichier 'index.css'. Ajoutez cette classe 
au footer afin de changer l'affichage en rouge.*/