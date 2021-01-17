const app = {
// Etape à suivre pour ce profjet trop cool qui n'est pas une bataille navale
// Vérification des champs entrées

// - référence 

        // On défini les regex + les input + le bouton
        referenceRegex = new RegExp('([a-z]){3}-([0-9]){3}'), // autorise 3 lettres maj et min et 3 chiffre entre 0 et 9
        nameRegex  = new RegExp('([A-Z]){1}([a-z]){9}'), // autorise les caractères de a à z avec seulement 10 min et max
        inputReference = document.querySelector("#reference-input").value,
        inputNAme = document.querySelector("#produit-input").value,
        inputPrix = document.querySelector("#prix-input").value,
        button = document.querySelector("#formulaire > form > button"),

// On va devoir par la suite faire un AddEventListener à chaque fois qu'on appuye sur le bouton


    /**
     * Méthode d'initialisation de notre module
     */
    init: function() {

        button.addEventListener('click', app.handleClick);
    },

    handleClick: function (evt){

    }
};