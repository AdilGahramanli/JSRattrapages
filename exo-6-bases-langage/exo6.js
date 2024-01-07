// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo["cars"].length);


// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo["bathrooms"] = 1;
console.log(joeInfo["bathrooms"]);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo["garage"] = true;
console.log(joeInfo["garage"]);


let team = {
    players: [],
    games: [],
    addNewGamer(prenom, nom, lage) {
        team.players.push({firstName:prenom, lastName:nom, age:lage});
    },
    addGames(opposant, pointsDeJeu, PointsOpposants) {
        team.games.push({Opponent:opposant, teamPoints:pointsDeJeu,opponentPoints:PointsOpposants})
    },
    // sumPoints() {
    //   console.log(this.teamPoints);
    // }
}

team.players = [
    {
        firstName : "Pablo",
        lastName : "Sanchez",
        age : 11
    },

    {
        firstName : "Ramirez",
        lastName : "Hernandez",
        age : 75
    }
]


team.games = [
    {
    Opponent: "Broncos",
    teamPoints: 42,
    opponentPoints: 27
    }
];


console.log(team);

team.addNewGamer("julius", "Tartelette",44);
team.addNewGamer("Volvic", "Racine", 85);


team.addGames("Les Zorrophiles patibulaires", 45, 28);
team.addGames("Les Arrivistes Printaniers", 32, 23);
team.addGames("Les PilouPilou de l'Arkansas", 55, 75)

console.log("la nouvelle équipe et ses matchs = " + team);

// Pas sûr = Je veux récupérer la valeur teamPoints de chaque objet du tableau. 
// Je vais faire une boucle
// dans laquelle i va être un index de teamPoints. 
// On va poser une condition , si l'indexOf de
// teamPoints == i, alors on affiche team.games["teamPoints"][i]

// for (i=0; i<=games.length; i++) {
//     if(team.games.indexOf(teamPoints) == i) {console.log(team.games["teamPoints"][i])}
// }
// function somme (objet) {
//     console.log(objet.games.this.teamPoints);
// }



let scores =[] ;

/*le chemin est le suivant : team > .la variable(propriété) > ici c'est un 
tableau donc on peut indiquer un numero d'index, et à chaque index on a un objet 
qui regroupe des propriétés (variables) et leurs valeurs*/
console.log(team.games[1].teamPoints);

/* La somme = On crée un tableau score qui comporte les valeurs du tableau games 
à l'index i. On va ensuite à l'aide de reduce additionner les valeurs de score
et stoquer le résultat dans gamesScore */ 
for(i=0; i<team.games.length; i++) {
   scores.push(team.games[i].teamPoints) ;
};

console.log("tableau des scores ") + console.log(scores);
const initialValue=0;
const gamesScore = scores.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log("La somme est de " + gamesScore);

//la moyenne
let moyenne =gamesScore/team.games.length;
console.log("La moyenne est de " + moyenne);

/*Pour trouver l'âge maximumn, récupérer 
dans un tableau tous les âges et avec reduce et Math.max, trouver l'âge maximum*/
let ages=[];
for(i=0; i<team.players.length; i++) {
    ages.push(team.players[i].age);
}
console.log("tableau des ages " + ages);

//ici on crée la variable maxAge, puis la fonction maxAgesPlayers...
let maxAge;
function maxAgePlayers(tabAges) {
         maxAge = tabAges.reduce((a, b) => Math.max(a ,b), -Infinity);}

maxAgePlayers(ages);
console.log("l'âge maximum est  " + maxAge);











// team.players.push({firstName:"Jose", lastName:"Luis", age:14});

// team = { addNewGamer(first, last, lage) {
// push({firstName:first, lastName:last, age:lage});
// }
// }

// team.players= {addNewGamer(first, last, lage) {
//      return team.players.push(first, last, lage);}}

// function addPlayer(tab, tab1, firstName0, lastName0, age0){
//     tab.tab1.push(firstName0, lastName0, age0);
// }

// // function addPlayer()

// addPlayer(team.players);
// addPlayer(team, players, firstName, lastName, age);


// forEach(team.players as player) {
// console.log(player);
// }










