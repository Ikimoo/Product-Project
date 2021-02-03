const app = {
    // Etape à suivre pour ce profjet trop cool qui n'est pas une bataille navale
    // Vérification des champs entrées

    // - référence 

    // On défini les regex + les input + le bouton
    referenceRegex: new RegExp('([0-9]){3}-([a-zA-Z]){3}'), // autorise 3 lettres maj et min et 3 chiffre entre 0 et 9
    nameRegex: new RegExp('([a-zA-Z]){2,50}'), // autorise les caractères de a à z avec seulement 10 min et max
    inputReference: document.getElementById('reference-input'),
    inputName: document.getElementById('produit-input'),
    inputPrix: document.getElementById('prix-input'),
    form: document.getElementById('formulaire'),

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


    },

    //ici, il faut récupérer les éléments input de Reférence, name et prix
    // on créer un nouveau noeud 'tr' et 'td' pour faire une nouvelle ligne dans le tableau
    //on créer trois classes : 'colonnesRef', 'colonnesProduit' et 'colonnesPrix'
    // mettre les values dans sa classe correspondantes -> inputRef dans colonnesRef etc
    // on place le noeud dans le DOM avec appendChild !
    //On appelle cette fonction si des valeurs sont entrées dans les input et qu'elles
    //sont true à la vérification !

    handleClick: function(evt) {

        evt.preventDefault();
        let referenceValue = app.inputReference.value;
        let produitValue = app.inputName.value;
        let prixValue = app.inputPrix.value;

        // cette partie fonctionne
        if (app.inputVerif(referenceValue,produitValue) === true){
            app.newRow(referenceValue, produitValue, prixValue);
            app.inputReference.value = "";
            app.inputName.value = "";
            app.inputPrix.value = "";
            document.getElementById("produit-input-message").style.display = "none";
            document.getElementById("reference-input-message").style.display = "none";
        }
    },

    inputVerif: function(referenceValue, produitValue) {

        // on vérifie dans un premier temps l'input Reference
        $matchCheck = referenceValue.match(app.referenceRegex);
        if (referenceValue.match(app.referenceRegex) === null || produitValue.match(app.nameRegex) === null ){
            console.log($matchCheck)

            if (referenceValue.match(app.referenceRegex) === null) {
                    document.getElementById("reference-input-message").style.display = "block";
                } 
            if (produitValue.match(app.nameRegex) === null) {                   
                    document.getElementById("produit-input-message").style.display = "block";
                } 
            return false;
        }
         else {
            return true;       
        }
    },

    newRow: function(inputReference, inputName, inputPrix) {

        let newTr = document.createElement("tr");
        let tbody = document.querySelector("#tableau > table > tbody");
        tbody.appendChild(newTr);
        let nodeTd1 = document.createElement("td");
        let nodeTd2 = document.createElement("td");
        let nodeTd3 = document.createElement("td");
        nodeTd1.className = 'colonnesRef';
        nodeTd2.className = 'colonnesProduit';
        nodeTd3.className = 'colonnesPrix';
        nodeTd1.textContent = inputReference;
        nodeTd2.textContent = inputName;
        nodeTd3.textContent = inputPrix + "€";
        newTr.appendChild(nodeTd1);
        newTr.appendChild(nodeTd2);
        newTr.appendChild(nodeTd3);
    }

}


// ici, on écoute Init au chargement du DOM



document.addEventListener('DOMContentLoaded', app.init);