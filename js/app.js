const app = {
// Etape à suivre pour ce profjet trop cool qui n'est pas une bataille navale
// Vérification des champs entrées

// - référence 

        // On défini les regex + les input + le bouton
        referenceRegex : new RegExp('([a-z]){3}-([0-9]){3}'), // autorise 3 lettres maj et min et 3 chiffre entre 0 et 9
        nameRegex : new RegExp('([A-Z]){1}([a-z]){9}'), // autorise les caractères de a à z avec seulement 10 min et max
        inputReference : document.getElementById('reference-input').value,
        inputName : document.getElementById('produit-input').value,
        inputPrix : document.getElementById('prix-input').value,
        form : document.getElementById('formulaire'),

// On va devoir par la suite faire un AddEventListener à chaque fois qu'on appuye sur le bouton


    /**
     * Méthode d'initialisation de notre module
     * https://medium.com/better-programming/click-vs-submit-eventlisteners-536b62be9359
     */
    init: function() {
    //TODO : RÉCUPÉRER LES VALEURS DES INPUTS + VÉRIFIER LES AUTRES FONCTIONS
    // Raison : quand on appuye sur envoyer, on arrive pas à les voir dans le console.log, ni à voir les messages d'erreurs
    // Mais où est la couille (de) Simone ?
        app.form.addEventListener('submit', app.handleClick);
        console.log(app.inputReference);
    },

    //ici, il faut récupérer les éléments input de Reférence, name et prix
    // on créer un nouveau noeud 'tr' et 'td' pour faire une nouvelle ligne dans le tableau
    //on créer trois classes : 'colonnesRef', 'colonnesProduit' et 'colonnesPrix'
    // mettre les values dans sa classe correspondantes -> inputRef dans colonnesRef etc
    // on place le noeud dans le DOM avec appendChild !
    //On appelle cette fonction si des valeurs sont entrées dans les input et qu'elles
    //sont true à la vérification !

    handleClick: function (evt){
        evt.preventDefault();
        app.inputVerif(app.inputReference, app.inputName, app.inputPrix);
    },
    
    newRow : function (){
        let nodeTd1 = document.createElement("tr");
        let nodeTd2 = document.createElement("tr");
        let nodeTd3 = document.createElement("tr");
        console.log(nodeTd1);
        console.log(nodeTd2);
        console.log(nodeTd3);
        nodeTd1.className = 'colonnesRef';
        nodeTd2.className = 'colonnesProduit';
        nodeTd3.className = 'colonnesPrix';
        nodeTd1.textContent = inputReference;
        nodeTd2.textContent = inputNAme;
        nodeTd3.textContent = inputPrix;
        inputReference.appendChild = nodeTd1;
        inputName.appendChild = nodeTd2;
        inputPrix.appendChild = nodeTd3;
    },
    

    // ici, on va faire la vérification des input !
    // Pour le moment, il me semble plus judicieux de faire un if et un else
    // dans le if, on veut vérifier si inputReference == referenceRegex, que 
    // inputName == nameRegex et que le prix == à un number !
    // si c'est le cas, on utilise la fonction dans handleClick qui nous
    // permet de rentrer ses valeurs dans le tableau
    // si ce n'est pas le cas, on veux afficher des messages d'erreurs 
    // sous la case de l'input correspondante !

    inputVerif : function () {
        if (app.inputReference !== app.referenceRegex || app.inputName !== app.nameRegex ){

           if(app.inputReference !== app.referenceRegex) {
                let errorRef = document.querySelector("#reference-input");
                let errorMessageRef = document.createElement('p');
                errorMessageRef.className = 'error-message';
                errorMessageRef.textContent = 'Veuillez entrer une référence valide';
                errorRef.appendChild = errorMessageRef;
            }
            else if(app.inputName !== app.nameRegex || inputName == '') {
                let errorName = document.querySelector("#produit-input");
                let errorMessageName = document.createElement('p');
                errorMessageName.className = 'error-message';
                errorMessageName.textContent = 'Veuillez entrer un nom de produit valide';
                errorName.appendChild = errorMessageName;
            }
            else if(app.inputPrix == '') {
                let errorName = document.querySelector("#produit-input");
                let errorMessageName = document.createElement('p');
                errorMessageName.className = 'error-message';
                errorMessageName.textContent = 'Veuillez entrer un prix';
                errorName.appendChild = errorMessageName;
            } 
        } else {
            app.newRow();
        }
    }
}

// ici, on écoute Init au chargement du DOM

document.addEventListener('DOMContentLoaded', app.init);