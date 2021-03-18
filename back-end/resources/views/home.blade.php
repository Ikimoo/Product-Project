
<h1>Accueil</h1>
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
                <?php foreach ($productsToDisplay as $product):?>
                    <tr class="table-row">
                        <td class="table-product-id"><?= $product['id']?></td>
                        <td class="table-product-name"><?= $product['name']?></td>
                        <td class="table-product-price"><?= $product['price']?> €</td>
                        <td>
                            <a href="#"><i class="fas fa-pen"></i></a>
                            <a href="#"><i class="fas fa-times-circle"></i></a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </section>
