console.log(`${cities.length} communes chargées`);

for(i=0; i<cities.length; i++) {
    if (cities[i].population > 300000) {
    console.log(
        cities[i].nom + "(" + cities[i].population + ")"
        ); 
    }
}

//créer un tableau de nombre de la population au-dessus de 300000
let cities300k =[];
for(i=0; i<cities.length; i++) {
    if (cities[i].population > 300000) {
    cities300k.push(cities[i].population);
    }
}
console.log(cities300k);

//créer une fonction byNumber qui servira de méthode de tri croissant
byNumber = (a,b) => a-b;
cities300k_byNumber = [...cities300k].sort(byNumber);
console.log(cities300k_byNumber);

//afficher de manière décroissante
console.log(cities300k_byNumber.reverse());

