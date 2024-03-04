console.log("exercice 6");
// 2. nous voulons contrôler les données lorsque l'utilisateur clique sur le bouton 'Se connecter'. Faites en sorte de réagir à cet événement en utilisant un `alert()` dans un premier temps ;
// $('body > div > form > button').click(
//     function(){
//         alert("alerte clic")
//     }
// )


// 3. nous devons maintenant récupérer les valeurs des champs email et mot de passe dans la fonction déclenchée par l'événement (et donc appelée) déclarée à la question précédente. 
// Ecrivez du code jQuery permettant de récupérer la valeur de ces inputs. Affichez ces valeurs dans la console dans un premier temps.
let email=$('#email').val()
let passwd=$('#password').val()
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// $('body > div > form > button').click(
    
//     function(){
        
//         console.log( email + "  " + passwd)
//     }
// )


// Nous allons maintenant ajouter des contrôles :

// 1. vérifiez que le champ email est non vide. Si ce n'est pas le cas, afficher une div avec les classes bootstrap 
// [`alert alert-warning`](https://getbootstrap.com/docs/3.4/components/#alerts) en précisant dedans le texte email obligatoire


// $('body > div > form > button').click(
    
//     function(){
//         if (email === "") {
//             $('#email').after('<div class="alert alert-warning" role="alert">email obligatoire</div>')
//             return;
//         }
//     }
// )



// 2. vérifiez la même chose pour le champ mot de passe


// $('body > div > form > button').click(
    
//     function(){
    
//         if(passwd === "") {
//             $('#password').after('<div class="alert alert-warning" role="alert">mot de passe obligatoire</div>')
//             return;
//         }
//     }
// )



// 3. ajoutez un contrôle supplémentaire sur le champ mot de passe pour obliger l'utilisateur à rentrer au minimum 6 lettres. Ajustez le message en fonction

// $('body > div > form > button').click(
    
//     function(){


//         if(passwd.length <6) {
//             $('#password').after('<div class="alert alert-warning" role="alert">mot de passe au moins 6 lettres</div>');
//             // e.preventDefault();
//         }
//     }
// )


// 4. vérifiez maintenant que le champ email comporte bien une adresse email, sinon afficher un message à l'utilisateur. Remarque : il va falloir trouver 
// comment vérifier qu'une chaine de charactères est un email... le moteur de recherche est votre ami...

// $('body > div > form > button').click(
    
//     function(){

//         if (!emailRegex.test(email)) {
//             $('#email').after('<div class="alert alert-warning" role="alert">email non valide</div>')
//             return;
//         }
//     }
// )



// 5. Maintenant faites en sorte que si l'utilisateur rentre 'hello@me.com' dans l'email et 'secret8' dans le mot de passe alors un message de confirmation 
// apparait : **'Vous êtes connecté'**

let email_valide = 'hello@me.com'
let passwd_valide = 'secret8'

$('body > div > form > button').click(
    
    function(){

        if (!emailRegex.test(email)) {
            $('#email').after('<div class="alert alert-warning" role="alert">email non valide</div>')
            return;
        }
    }
)