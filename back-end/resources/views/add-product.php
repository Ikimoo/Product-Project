<main>
            <h1>Ajouter un nouveau produit</h1>
            <section id="formulaire">
                <form action="">
                    <div id="labels">
                        <div>
                            <label for="reference" id="reference-label">Référence du produit</label>
                            <p class="error-message message-display" id="reference-input-message">Veuillez entrer une référence valide</p>
                        </div>
                        <div>
                            <label for="produit" id="produit-label">Nom du produit</label>
                            <p class="error-message message-display" id="produit-input-message">Veuillez entrer un produit valide</p>
                        </div>
                        <label for="prix" id="prix-label">Prix</label>
                    </div>
                    <div id="inputs">
                        <input type="text" id="reference-input" autofocus required>
                        <input type="text" id="produit-input" required>
                        <input type="number" id="prix-input" required>
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
                        <tr>
                            <td>123-ATT</td>
                            <td>Shampoing Blabla</td>
                            <td>28 €</td>
                            <td>
                                <a href="#"><i class="fas fa-pen"></i></a>
                                <a href="#"><i class="fas fa-times-circle"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>123-AET</td>
                            <td>Shampoing Bibi</td>
                            <td>50 €</td>
                        </tr>
                    </tbody>
                </table>
            </section>
