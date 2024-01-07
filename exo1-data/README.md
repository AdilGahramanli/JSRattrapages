# Manipulation de données/tableaux en JS

> **Objectif pédagogique:**
> Les deux exercices suivants ont pour but de se rappeler comment on parcourt un tableau et de préparer les exercices suivants, qui vont introduire une autre logique pour faire la même chose.


## Exercice 1.1

Affichez dans la console le nom et la population des communes de plus de 300 000 habitants, sous la forme: "nom (population)".


## Exercice 1.2

Affichez les dans l'ordre décroissant.

Voir [Array.sort sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)

## Ensuite...

Faites valider par le formateur 😓, pour s'assurer que vous partez sur de bonnes bases.
Puis basculez sur la branche `exo-2`.
>**Objectif pédagogique:**
> Les exercices suivants ont pour but d'apprendre à utiliser les méthodes natives des tableaux en JS.

## Exercice 2.1

Vous avez probablement, dans l'exercice 1, utilisé une boucle `for` pour itérer sur le tableau et un `if` pour parvenir au résultat demandé. Et, afin de trier, copié les données dans un tableau intermédiaire.

Trouvez des informations sur les fonctions `Array.filter` et `Array.forEach` et refaire l'exercice en utilisant ces fonctions.

_En cas de difficulté, commencez par afficher la liste non triée._

[Array.filter sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)
[Array.forEach sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach)

> **Note:** Ce style de programmation s'appelle la programmation fonctionnelle. Nous n'allons qu'effleurer le sujet, mais cela nous permettra d'écrire du code beaucoup plus court et compréhensible et donc, au final, plus facile à maintenir.


## Exercices 2.2

Il est important, pour la clarté du code, de créer des petites fonctions autonomes qui ne font qu'une chose mais bien.

Nous allons donc commencer par extraire la partie qui parcourt la liste filtrée.

1. Écrivez une fonction `getCitiesByDept` qui prend en *paramètre* un code de département et retourne un tableau avec uniquement les communes de ce département
2. Utilisez cette fonction pour afficher dans la console le nom des villes de Haute-Savoie


## Exercice 2.3

Maintenant nous allons extraire la partie qui formate les données pour l'affichage.

1. Écrivez une fonction `displayCity` qui prend en paramètre les données d'une commune (`city`), c'est à dire un élément du tableau `cities` ou `getCitiesByDept`, et retourne sous forme de chaîne de caractères `"Code département - nom de la ville"`. (exemple : `74 - Annecy`)
2. En utilisant les fonctions précédentes, affichez la liste de villes de Haute-Savoie dans la console.



## Ensuite...

Faire valider par le formateur.

Copiez-coller les fonctions `getCitiesByDept` et `displayCity`, vous en aurez besoin pour les exercices suivants.

Puis basculez sur la branche `exo-3`.
