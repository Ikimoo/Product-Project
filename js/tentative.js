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

    /*inputVerif: function(referenceValue, produitValue, prixValue) {

         if (referenceValue !== app.referenceRegex || produitValue !== app.nameRegex) {
            //TODO: revoir la vérification des regex*
            
            RegExp.prototype[@ @match]()
            https: //developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/@@match
            
            if (referenceValue !== app.referenceRegex) {
                console.log("referenceValue");
                if (document.querySelector("#errorRef") == null) {
                    let errorRef = document.querySelector("#reference-input");
                    let errorMessageRef = document.createElement('p');
                    errorMessageRef.id = 'errorRef';
                    errorMessageRef.className = 'error-message';
                    errorMessageRef.textContent = 'Veuillez entrer une référence valide';
                    errorRef.appendChild(errorMessageRef); 
                    errorRef.insertAdjacentElement("afterend", errorMessageRef)
                }
            } else
            if (produitValue !== app.nameRegex || produitValue == '') {
                let errorName = document.querySelector("#produit-input");
                let errorMessageName = document.createElement('p');
                errorMessageName.className = 'error-message';
                //errorMessageName.textContent = 'Veuillez entrer un nom de produit valide';
                /*errorName.appendChild(errorMessageName); 
                errorName.insertAdjacentHTML("afterend", '<p>Veuillez entrer une référence valide<p>')
            } else if (prixValue == '') {
                let errorName = document.querySelector("#produit-input");
                let errorMessageName = document.createElement('p');
                errorMessageName.className = 'error-message';
                errorMessageName.textContent = 'Veuillez entrer un prix';
                errorName.appendChild(errorMessageName);
            }
        } else {
            app.newRow();
        } */