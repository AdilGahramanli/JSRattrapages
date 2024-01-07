console.log(`${cities.length} communes chargées`);

const cities300k = cities.filter((city) => city.population > 300000);
console.log(cities300k);



cities300k.forEach((city) => console.log(city.nom + "  (" + city.population + ")"));

/* Retourner une valeur n'est pas nécessaireent utiliser return. Dans cette 
fonction taillé sur mesure pour le tableau cities, on  filtre, crée une variable
locale et fait un console.log visible à l'extérieur. Notons que le fait d'avoir
une variable locale ne pose pas de souci car elle n'est pas vraiment utilisée à l'extérieur.
C'est seulement console.log qu'on utilise. */
function getCitiesByDept(value) {
    console.log(cities.filter(
        (city) => city.codeDepartement == value));

}
getCitiesByDept("01");
getCitiesByDept("74");

/*2.3 une fonction displayCity (en paramètre le tableau crée par getCitiesByDept)
et retourne de ce tableau un tableau sous la forme Code Departement - Nom(de la ville) 
Avec filter on crée un nouveau tableau filtré que l'on place dans une constante
cityFiltered pour pouvoir l'utiliser en dehors du bloc de cities.filter. On 
le récupère donc pour y appliquer un forEach et afficher telle ou telle partie de
ce tableau*/

function displayCity(value) {
    const cityFiltered = cities.filter((city) => city.codeDepartement == value);
    cityFiltered.forEach(
        (city) => console.log (city.codeDepartement + "  "+ city.nom));
}
    

/*Je souhaite isoler les villes selon un certain critère et afficher de ces 
villes une partie des données */

displayCity("74");


/* Deuxième essai

city300k = cities.filter((city) => city.population > 300000);
console.log(city300k);


function getCitiesByDept(value) {
    console.log (cities.filter(
        (city) => city.codeDepartement == value));
    

}

function displayCity(value) {
    const cityFiltered = cities.filter((city) => city.codeDepartement == value);
    cityFiltered.forEach(
        (city) => console.log (city.codeDepartement + "  "+ city.nom));
    }

getCitiesByDept ("74");

displayCity("74");
*/


