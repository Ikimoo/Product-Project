# Projet-qui-n-est-pas-une-bataille-navale

Notre README va nous servir à ce qu'on puisse tracker notre avancement au fur et à mesure :

**17/01/2021 :**

- Création du fichier HTML, CSS et JS avec les fichiers qu'on a besoin
- Dans app.js, on a défini les regex, récupéré les input et le bouton

**24/01/2021 :**

- Création des fonctions newRow et inputVerif
- Quand on test sur le formulaire, on ne récupère pas les inputs, donc à voir où est le problème

**01/02/2021 :**

- Les tr et td se rajoute sur le formulaire ! :parfait: Youpi !
- J'ai créé un fichier tentative.js pour y mettre nos essais, ce qui donnera notre app.js plus lisible, sans perdre ce qu'on a fait avant. Il faudra juste être clair dans nos commentaires et dire où c'était, et pourquoi on l'a enlevé.
  
Quant à la vérification, on prend une autre approche plus simple :

- On a ajouté des balises p sous chaques input, leurs a donnés une classe identique pour les afficher en rouge quand le message apparait et on a également donné à chacun un id différent.
- Le but est d'avoir les messages qui s'affichent en fonction de la vérification. Pour cela, si une entrée est juste, avec la balise reste en display:none. Par contre, si l'entrée saisie est fausse, alors on affiche la balise p grâce à display:block.
- ^ on a fait le même genre d'exercice avec la bataille navale, donc à mon avis il faut juste revoir un peu le code et essayer de le comprendre.

*Fait par Charlotte :*

- Modification du HTML : OK
  
- Ajout des classes CSS : OK
  
- Lorsque Input est true => nouvelle ligne au tableau +  input vidé (fait dans la fonction handleClick, comme cela été le cas dans BN) => fonctionnel

**03/02/2021 :**

- InputVérif fonctionne (youhou !!!!)
- Et tout fonctionne (yyyyyyoooooouuuhhhhh!!!)
- Modif du regex
- Modif CSS/HTML pour forcer la casse

**13/03/2021 :**

- Intégration de la page principal terminé, et première découpe effectuée
- installation de Lumen pour le back-end

**16/03/2021 :**

- Routes dans web.php
- Vues
- Création Models, Controllers
- Création d'une fonction home dans MainController (à vérifier)

-----

## A faire :

- Lier à la base de donnée pour que les champs s'enregistrent dans une BDD (BDD créée, et normalement liée, plus qu'à tester !)
- Continuer les routes pour pouvoir tester si les pages fonctionnent
- Mettre un placeholder (ou value ?) à l'input référence pour indiquer le regex 

## Idée :

- Popup à l'arrivée sur le site : "Salut, t'es qui toi ?" avec un input pour le nom
- Quand on arrive sur le site à la place du nom de l'avatar => le nom rentré
- Encore plus poussé : cookies & session

