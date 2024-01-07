## Exercice 7 : Afficher des données sous format JSON.

Il est très courant en web de demander à un serveur distant des données afin de les afficher dans le navigateur. Pensez à LinkedIn, lorsque vous arrivez sur votre fil d'actualité : LinkedIn a écrit du Javascript pour demander à ses serveurs de leur renvoyer tous les posts de votre fil d'actualité. Ensuite grâce à jQuery et Javascript, LinkedIn parcourt la liste des posts et les ajoutent un à un dans votre page web. Ces données, lorsqu'elles sont reçues, sont généralement formatées en [JSON](https://en.wikipedia.org/wiki/JSON), un standard.

Dans cet exercice, nous allons récupérer des données et les afficher dans notre page web. Nous ne verrons pas la partie requête à un serveur qui est un peu complexe et aborde la notion d'asynchrone que nous gardons au chaud pour plus tard (rassurez-vous quand-même, vous en faites déjà sans le savoir 😉).

Dans le répertoire exo-7, vous trouverez un fichier DATA.js contenant un bien joli tableau avec 1000 éléments, il s'agit de données typiques d'un site contenant des informations sur des utilisateurs.

Dans le fichier script.js, vous avez une fonction getData qui vous retourne le tableau de données, notre objectif va être d'afficher ces données dans une [table HTML](https://getbootstrap.com/docs/3.4/css/#tables) :

1. créez un tableau HTML avec pour colonne email, nom, prénom, numéro de téléphone ;
2. créez une fonction addLineToTable qui prend en paramètre un objet et dont l'objectif est d'ajouter une ligne à notre tableau avec jQuery. La méthode [append](http://api.jquery.com/append/) de jQuery devrait vous aider ;
3. parcourir le tableau des données et pour chaque élément du tableau, ajoutez une ligne dans votre table en appelant la fonction précédemment créée.

**Bonus 1** : LinkedIn n'affiche pas tous vos posts d'un coup (ça serait trop long et trop gourmand en termes de ressources pour votre navigateur). Il fait ce que l'on appelle de la [pagination](https://en.wikipedia.org/wiki/Pagination), dans notre exemple nous avons 1000 éléments : paginez ces éléments par groupe de 50.

**Bonus 2** : Faites un champ de recherche sur votre tableau afin de filter les éléments du tableau. Choisissez d'abord une colonne (par exemple le prénom) avant de traiter toutes les colonnes.

**Bonus 3** : Ajoutez la possibilité de trier les lignes de votre tableau par ordre alphabétique.

**Bonus 4** : Faites un bouton avec un formulaire d'ajout d'une ligne dans votre tableau.

**Bonus 5** : Faites un bouton de suppression d'une ligne.

**Bingo 1** : Ajoutez la possibilité d'éditer une ligne du tableau directement dans le tableau comme dans cet [exemple](https://editor.datatables.net/examples/inline-editing/simple).

**Bingo 2** : Ajoutez un bouton pour pouvoir faire un export CSV de votre tableau.
