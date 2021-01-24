const app = {
// Etape à suivre pour ce profjet trop cool qui n'est pas une bataille navale
// Vérification des champs entrées

// - référence 

        // On défini les regex + les input + le bouton
        referenceRegex : new RegExp('([a-z]){3}-([0-9]){3}'), // autorise 3 lettres maj et min et 3 chiffre entre 0 et 9
        nameRegex : new RegExp('([A-Z]){1}([a-z]){9}'), // autorise les caractères de a à z avec seulement 10 min et max


        inputReference : document.querySelector("#reference-input").value,
        inputName : document.querySelector("#produit-input").value,
        inputPrix : document.querySelector("#prix-input").value,
        button : document.querySelector("#button"),

// On va devoir par la suite faire un AddEventListener à chaque fois qu'on appuye sur le bouton


    /**
     * Méthode d'initialisation de notre module
     */
    init: function() {
        console.log(nameRegex),
        button.addEventListener('click', app.handleClick);
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
        let nodeTr = document.createElement("td");
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

    }
};

