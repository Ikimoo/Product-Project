    // première vérification des input,
    // ça marche pas, trop de soucis, et on essaye une façon différentes, donc je mets ça là pour rien perdre !


    // ici, on va faire la vérification des input !
    // Pour le moment, il me semble plus judicieux de faire un if et un else
    // dans le if, on veut vérifier si inputReference == referenceRegex, que 
    // inputName == nameRegex et que le prix == à un number !
    // si c'est le cas, on utilise la fonction dans handleClick qui nous
    // permet de rentrer ses valeurs dans le tableau
    // si ce n'est pas le cas, on veux afficher des messages d'erreurs 
    // sous la case de l'input correspondante !

    inputVerif: function(referenceValue, produitValue) {

            //TODO revoir la vérification des regex*
    // on vérifie dans un premier temps l'input Reference
    if (referenceValue.match(app.referenceRegex) === null) {
            console.log("referenceValue");
            // on va chercher le message d'erreur 
            let referenceInputErrorMessage = document.querySelectorbyId('reference-input-message');
            //on passe sont affichage en display block
            referenceInputErrorMessage.style.display = 'block';
        } 
    else if (produitValue.match(app.nameRegex) === null) {
            // on va chercher le message d'erreur 
            let produitInputErrorMessage = document.querySelectorbyId('reference-input-message');
            //on passe sont affichage en display block
            produitInputErrorMessage.style.display = 'block';
        } 
    else {
            app.newRow();
        }
    }

                /*
        ----------------------------------------------------------------------------------------------------
        CODE RECUPERÉ DANS LA BATAILLE NAVALE ET QUI POURRA SERVIR A AFFICHER/CACHER LES MESSAGES D'ERREUR
        -----------------------------------------------------------------------------------------------------
        const handleActionsToggle = function(evt) {
    // On récupère la div actions
    const actionsHistoryElement = document.getElementById('actions');

    // Si la div est cachée (none ou vide au départ, car uniquement en CSS)
  if (actionsHistoryElement.style.display === 'none' || actionsHistoryElement.style.display === '') {
    // alors, on affiche la div de l'historique
    actionsHistoryElement.style.display = 'block';
  } else {
    // sinon on cache la div de l'historique
    actionsHistoryElement.style.display = 'none';
  }
};
     --------------------------------------------   
        
        
        