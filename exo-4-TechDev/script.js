console.log("exercice 4");

// 1. si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : 
// "Merci nous vous tiendrons informé des différentes offres" ;

// $('body > footer > form > button').click(function(){alert("Merci nous vous tiendrons informé des différentes offres");});


// 2. récupérer maintenant le contenu de l'input pour adapter votre message : 
// "Merci `adresse email rentrée`, nous vous tiendrons informé des différentes offres" ;

$('body > footer > form > button').click(function(){
    let inputVal = $('body > footer > form > input').val();
    alert('Merci ' + inputVal + ' nous vous tiendrons informé des différentes offres')});



// 3. si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits' ;
$('#myNavbar > ul:nth-child(1) > li:nth-child(2) > a').dblclick(function(){
    $(this).hide();
})


// 4. si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite 
// pour marquer le fait qu'un produit a été ajouté au panier. S'il clique une fois de plus, 
// on doit avoir le texte Cart(2). Le chiffre entre parenthèses doit s'incrémenter à chaque 
// clic sur une image ;
let click_count = 0;
$('img').click(function(){
    click_count ++
    // let click_count_plus = click_count.val();

    $('#myNavbar > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a').text('Cart ' + click_count)

})

// 5. un site ecommerce traque la position de la souris pour savoir si vous êtes 
// intéréssés par un produit. Affichez dans la console 'L'utilisateur regarde ' + 
// le nom du produit si la souris est au-dessus d'une image de produit. Vous pouvez 
// ajouter des ids sur les images dans la page HTML.

// $('body > div.container > div > div:nth-child(1) > div > div.panel-body > img').hover(
//     function(){
        
//         console.log("l'utilisateur regarde " + $(this).attr("src").split(".jpg"))
//     }
// )


$('img').hover(
    function(){
        
        console.log("l'utilisateur regarde " + $(this).attr("src"))
        // console.log("l'utilisateur regarde " + $(this).attr("src").split(".jpg"))
    }
)


// 6. maintenant, traquer si un utilisateur est en train de remplir le champ pour 
// la newsletter. Comment récupérer le fait que l'utilisateur vient de cliquer dans 
// le champ pour rentrer son adresse et comment récupérer le fait que l'utilisateur a tapé 
// quelque chose dedans ? ;


$('body > footer > form > input').click(
    function(){

        console.log("clic de user")
        $('body > footer > form > input').keypress(
            function(){
                console.log("user tape au clavier")
            }
        )
    }
)