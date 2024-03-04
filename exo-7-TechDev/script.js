console.log("exercice 7");



function getData() {
  return data; // data is defined in DATA.js file
}

// Il est très courant en web de demander à un serveur distant des données afin de les afficher dans le navigateur. Pensez à LinkedIn, lorsque vous arrivez sur votre fil 
// d'actualité : LinkedIn a écrit du Javascript pour demander à ses serveurs de leur renvoyer tous les posts de votre fil d'actualité. Ensuite grâce à jQuery et Javascript, 
// LinkedIn parcourt la liste des posts et les ajoutent un à un dans votre page web. Ces données, lorsqu'elles sont reçues, sont généralement formatées 
// en [JSON](https://en.wikipedia.org/wiki/JSON), un standard.

// Dans cet exercice, nous allons récupérer des données et les afficher dans notre page web. Nous ne verrons pas la partie requête à un serveur qui est un peu complexe 
// et aborde la notion d'asynchrone que nous gardons au chaud pour plus tard (rassurez-vous quand-même, vous en faites déjà sans le savoir 😉).

// Dans le répertoire exo-7, vous trouverez un fichier DATA.js contenant un bien joli tableau avec 1000 éléments, il s'agit de données typiques d'un site 
// contenant des informations sur des utilisateurs.

// Dans le fichier script.js, vous avez une fonction getData qui vous retourne le tableau de données, notre objectif va être d'afficher ces données dans une 
// [table HTML](https://getbootstrap.com/docs/3.4/css/#tables) :

// 1. créez un tableau HTML avec pour colonne email, nom, prénom, numéro de téléphone ;
$('body > div').html('<table class="table"></table>');
$('body > div > table').html(
  '<td>mail</td> <td>nom</td> <td>prenom</td> <td>telephone</td>'
);

// 2. créez une fonction addLineToTable qui prend en paramètre un objet et dont l'objectif est d'ajouter une ligne à notre tableau avec jQuery. La méthode 
// [append](http://api.jquery.com/append/) de jQuery devrait vous aider ;


// function addLineToTable(obj){

//     const newRow = $('<tr>');
//     const email = person.email;
//     const nom = person.name.last;
//     const prenom = person.name.first;
//     const telephone = person.phone;
  
//     newRow.append($('<td>').text(email));
//     newRow.append($('<td>').text(nom));
//     newRow.append($('<td>').text(prenom));
//     newRow.append($('<td>').text(telephone));

//     return tab.append(newRow);
// }


// for (const person of data) {
  
//   $('body > div > table').addLineToTable(person);

// }


 for (const person of data) {
  // Extract email and name
  const email = person.email;
  const nom = person.name.last;
  const prenom = person.name.first;
  const telephone = person.phone;

  // Create a new table row
  // const newRow = $('<tr>');

  // // Create and append cells for email and name
  // newRow.append($('<td>').text(email));
  // newRow.append($('<td>').text(nom));
  // newRow.append($('<td>').text(prenom));
  // newRow.append($('<td>').text(telephone));
const newRowToAdd = createLine(email,nom,prenom,telephone);
console.log(newRowToAdd)
  // Append the row to the table body
  $('body > div > table').append(newRowToAdd);

}

// function addLineToTable(newRow){
//     // Extract email and name
//   for(person in obj) {
//   const email = person.email;
//   const nom = person.name.last;
//   const prenom = person.name.first;
//   const telephone = person.phone;
  

//   // newRow = $('<tr>');


//   // Create and append cells for email and name
//   newRow.append($('<td>').text(email));
//   newRow.append($('<td>').text(nom));
//   newRow.append($('<td>').text(prenom));
//   newRow.append($('<td>').text(telephone));

//   return newRow;
//   }
//   return newRow;
// }
// for (const person of data) {
  
//   $('body > div > table').addLineToTable($('<tr>'));

// }

// 3. parcourir le tableau des données et pour chaque élément du tableau, ajoutez une ligne dans votre table en appelant la fonction précédemment créée.

function createLine(email,nom,prenom,telephone){
  const newRow = $('<tr>');

  // Create and append cells for email and name
  newRow.append($('<td>').text(email));
  newRow.append($('<td>').text(nom));
  newRow.append($('<td>').text(prenom));
  newRow.append($('<td>').text(telephone));
  return newRow;
}
