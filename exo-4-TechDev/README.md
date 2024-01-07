## Exercice 4 : Actions ➡️ Réactions

Maintenant que nous savons sélectionner et manipuler le DOM, il nous reste un élément fondamental à voir : comment réagir à des événements utilisateurs ? Par exemple :

- l'utilisateur a cliqué sur le bouton connexion ;
- l'utilisateur est en train de taper un texte dans un input ;
- la souris de l'utilisateur est en train de rentrer dans la div d'id 'toto' ;
- l'utilisateur est en train de redimensionner la fenêtre.

Commencez par réaliser le cours ['Événements du DOM avec jQuery'](https://fr.khanacademy.org/computing/computer-programming/html-js-jquery/dom-events-with-jquery/pt/adding-event-listeners-with-jquery) de Khan Academy. _Ce cours est accessible sans créer de compte sur la plateforme._

Notre site est un site d'e-commerce, nous alons vouloir réagir à certains événements de l'utilisateur sur cette page, nous allons le faire à l'aide de jQuery :

1. si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : "Merci nous vous tiendrons informé des différentes offres" ;
2. récupérer maintenant le contenu de l'input pour adapter votre message : "Merci `adresse email rentrée`, nous vous tiendrons informé des différentes offres" ;
3. si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits' ;
4. si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite pour marquer le fait qu'un produit a été ajouté au panier. S'il clique une fois de plus, on doit avoir le texte Cart(2). Le chiffre entre parenthèses doit s'incrémenter à chaque clic sur une image ;
5. un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit. Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au-dessus d'une image de produit. Vous pouvez ajouter des ids sur les images dans la page HTML. _Bonus_ : faire de même sans utiliser les ids ;
6. maintenant, traquer si un utilisateur est en train de remplir le champ pour la newsletter. Comment récupérer le fait que l'utilisateur vient de cliquer dans le champ pour rentrer son adresse et comment récupérer le fait que l'utilisateur a tapé quelque chose dedans ? ;
7. _Bonus ++_ : récupérer le nombre de produits que l'utilisateur a achetés. Par exemple si l'utilisateur clique sur l'image ipad alors 'Cart' doit être remplacé par 'Cart(25)' puisque l'offre correspond à 25 ipads...
