
<h1>Ajouter un nouveau produit</h1>
<section id="formulaire">
    <form action="">
        <div id="labels">
            <div>
                <label for="reference" id="reference-label">Référence du produit</label>
                <p class="error-message message-display" id="reference-input-message" placeholder="Référence de type 123-ABC">Veuillez entrer une référence valide</p>
            </div>
            <div>
                <label for="produit" id="produit-label">Nom du produit</label>
                <p class="error-message message-display" id="produit-input-message">Veuillez entrer un produit valide</p>
            </div>
            <label for="prix" id="prix-label">Prix</label>
        </div>
        <div id="inputs">
            <input type="text" id="reference-input" placeholder ="Référence de type ABC-123" autofocus required>
            <input type="text" id="produit-input" placeholder="Nom du produit" required>
            <input type="number" id="prix-input" placeholder="Prix en euros"required>
        </div>
        <div id="button">
            <button>Ajouter</button>
        </div>

    </form>
</section>
<section id="tableau">
    <table>
        <thead>
            <th>Référence</th>
            <th>Nom du produit</th>
            <th>Prix</th>
            <th>Modifier <br>
                Supprimer</th>
        </thead>
        <tbody>
            <!--Inserted rows thanks to the template-->
        </tbody>
    </table>
</section>

<template>
    <tr class="new-row">
        <td class="new-reference"></td>
        <td class="new-name"></td>
        <td class="new-price">€</td>
        <td>
            <a href="#"><i class="fas fa-pen"></i></a>
            <a href="#"><i class="fas fa-times-circle"></i></a>
        </td>
    </tr>
</template>
