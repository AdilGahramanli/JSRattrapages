## Exercice 6 : Un cas très classique en web : contrôler les données d'un formulaire

⚠️ Nous allons voir dans cet exercice un contrôle côté navigateur des données du formulaire. Il doit néanmoins **toujours** y avoir un contrôle côté serveur (même s'il ne sera pas évoqué dans ce projet), car le Javascript peut facilement être désactivé (et les contrôles devenir donc inefficaces).

1. créez un formulaire en HTML avec un champ pour un email et un champ pour un mot de passe. Ajouter un bouton avec le titre **'Se connecter'** ;
2. nous voulons contrôler les données lorsque l'utilisateur clique sur le bouton 'Se connecter'. Faites en sorte de réagir à cet événement en utilisant un `alert()` dans un premier temps ;
3. nous devons maintenant récupérer les valeurs des champs email et mot de passe dans la fonction déclenchée par l'événement (et donc appelée) déclarée à la question précédente. Ecrivez du code jQuery permettant de récupérer la valeur de ces inputs. Affichez ces valeurs dans la console dans un premier temps.

Nous allons maintenant ajouter des contrôles :

1. vérifiez que le champ email est non vide. Si ce n'est pas le cas, afficher une div avec les classes bootstrap [`alert alert-warning`](https://getbootstrap.com/docs/3.4/components/#alerts) en précisant dedans le texte email obligatoire
2. vérifiez la même chose pour le champ mot de passe
3. ajoutez un contrôle supplémentaire sur le champ mot de passe pour obliger l'utilisateur à rentrer au minimum 6 lettres. Ajustez le message en fonction
4. vérifiez maintenant que le champ email comporte bien une adresse email, sinon afficher un message à l'utilisateur. Remarque : il va falloir trouver comment vérifier qu'une chaine de charactères est un email... le moteur de recherche est votre ami...
5. Maintenant faites en sorte que si l'utilisateur rentre 'hello@me.com' dans l'email et 'secret8' dans le mot de passe alors un message de confirmation apparait : **'Vous êtes connecté'**
