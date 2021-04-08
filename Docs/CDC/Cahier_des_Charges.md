# Cahier des charges

## Présentation du projet
 
La crise du covid a donné un regain de popularité aux petits jeux multijoueurs (ex: gartic phone) et donc pour divertir les gens nous créeons ce site afin de permettre aux personnes de passer un bon moment entre amis en ces temps de crise. 

## Définitions des besoins/objectifs

En prenant comme référence ce qui se fait aujourd’hui et compte tenu de la crise sanitaire nous avons vu que de plus en plus de jeux ou site internet ayant comme base le jeu entre amis pour passer un bon moment, rigoler, se charrier, etc était de mise.
Nous avons eu du coup comme idée de créer un site web, à l'instar du fameux Gartic Phone (https://garticphone.com/fr) par exemple, sur un principe de quiz exclusivement de comparatif de taille car nous avons trouvé ceci fun et que cela permet de toujours apprendre des petites anecdotes ( toujours plaisant à ressortir lors d’une discussion entre amis).

L’objectif de ce projet étant de travailler sur quasiment l'ensemble des technos et connaissances qui nous ont été apprises durant la formation (et bien plus encore) ainsi que pour les clients : de passer un bon moment entre amis.

## Fonctionnalités du projet

### MVP

Structure de base:
- Accueil
- Authentification
- Profil
- Jeu
- Header
- Footer

Header:
- Logo
- Titre
- Menu

Footer:
- copyright
- Bouton contact

Authentification:
- Création de compte
- Attribution des rôles
- Connexion d'un utilisateur

Profil:
- Accès aux informations personnelles
- Modification des informations personnelles
- Historique des parties

Jeu:
- Créer une partie
- Rejoindre une partie
- Accèder au salon de la partie

Tchat:
- Dialoguer avec les joueurs présents dans le salon de la partie
- Dialoguer avec les joueurs une fois le jeu lancé

Fonctionnalités de base du jeu:
- Décompte de 20secondes pour chaque question
- 10 questions par partie
- A chaque fin de décompte, on passe à une question suivante, le décompte se réinitialise
- Système de barre de progression inhérente à chaque joueur. Celles-ci évoluent en fonction de la réponse du joueur. Pour démarrer, la progression sera indexée sur la bonne réponse. 
- Score de la partie
- Affiche le pseudo des joueurs sous la barre
- Bouton 'Quitter la partie'

### Evolutions potentielles

Animations :
- Timmer qui grossit quand il reste plus beaucoup de temps afin de rajouter du stress,
- Animations générales sur les boutons du site (hover, etc),
- Animation de chargement de partie,
- Messages de pression quand le timmer se rapproche de la fin,
- Animations des barres de progression (),

Paramètre de partie:
- Barre de progression, qui sera indexée en fonction de la moyenne des réponses ou de la plus grande réponse des joueurs 

Mode de jeux : 
- mode speed (10s au timmer, barre de progression des joueurs indéxée sur la bonne réponse, le but est de la trouver le plus vite possible) 
- mode Heroes(chaque joueur dispose d'un super pouvoir (aléatoire) utilisable une seul fois pendant toute la durée de la partie (ex: affichage barre de progression aléatoire, pas de vue des barres de progression des autres joueurs, possibilité d'enlever 15s au timmer à l'enssemble des joueurs ou qu'a un seul joueur, échanger sa réponse avec un joueur, voir les réponses des joueurs ayant confirmer avant la fin du chrono, etc)

Option de sons : 
- activer ou désactiver le son (background sonore / son des notif, ex:timer, efect...10s) 

Authentification : 
- Connexion par compte Facebook / Google
-  mot de passe oublié 

IA pour partie local: 
- développer une IA permettant de jouer en local contre une ou plusieurs IA avec un choix de difficultés (facile, difficile, expert)

Contact: 
- permet à un visiteur ou bien un user d'envoyer sous forme de mail une requête concernant un avis, un bug, etc 

Avis: 
- chaque user peut donner un avis avec une note 

Thèmes: 
- choix par thème classiques 
- aléatoire complet qui regroupe toutes les questions de tout les thèmes
- aléatoire par thèmes (système de roulante en présentation visuel par exemple) 
- sytème de vote pour un thème ou  une fonction (aléatoire, etc) en particulier


Mode d'affichage :
- mode nuit pour avoir l'interface web en sombre
  
Réseaux sociaux : 
- compte Discord/Instagram/Facebook/Youtube/Twitch/...

## Liste des technologies utilisées pour le projet

### Front

- React 
- Redux
- Axios
- React-Router-Dom
- socket.io-client

### Back

-Nodejs
-Express
-Sqitch 
-Postgres

## Définition de la cible

Ce projet vise tout public de tout âge (à partir de 12ans et plus).

## Navigateur Compatibles

Google Chrome / Mozilla Firefox / Safari / Edge

## Arborescence de l'application

<img src="./arbo.png" width="500px">

## Liste des routes

### Back

- login: permet de se connecter `/login`
- contact: permet de contacter les admins du site  `/contact`
- inscription: permet qu'un visiteur se créer un compte `/signin`
- profil: permet de modifier ses informations `/profil` 
- partie: lors d'un join ou suite à une création de partie `/room`
- 

### Front

- Page d'accueil
- Page de connexion
- Page "Qui-Sommes-Nous?"
- Page Contact
- Page Création de compte
- Page Création de Partie
- Page Profil
- Page Salon de la partie
- Page de jeu
- Page gestion Erreurs

## Liste des User Stories

En tant que |   Je veux pouvoir que             | Afin de
------------|---------------------------------- |---------
admin       | Se connecter                      | 
admin       | Ajouter de nouvelles questions    |   Améliorer les Quizz et le plaisir de jeu
admin       | Supprimer de nouvelles questions  |   Améliorer les Quizz et le plaisir de jeu
admin       | Bannir des utilisateurs           |   Améliorer le plaisir de jeu 
admin       | Ajouter de nouveaux thèmes        |   Améliorer les Quizz et le plaisir de jeu
admin       | Supprimer des thèmes              |   Améliorer les Quizz et le plaisir de jeu
admin       | Changer le rôle d'un utilisateur  |   
admin       | Se déconnecter                    |   
admin       | Consulter mon profil              |   Modifier mes informations personnelles
admin       | Consulter la liste des messages reçues via contact | Lire les desideratas des utilisateurs



En tant que |   Je veux pouvoir que              | Afin de
------------|------------------------------------|---------
user        | Me connecter                       |  
user        | Se déconnecter                     |  
user        | Consulter mon profil               |  Modifier mes informations personnelles  
user        | Consulter mon historique de parties|  Me donner plus d'informations sur le résumé de mes parties
user        | Rejoindre une partie               |  Pouvoir jouer avec mes amis
user        | Quitter une partie                 |  
user        | Créer une partie                   |  Pouvoir jouer avec mes amis
user        | Ajouter un ami                     |  Pouvoir jouer avec mes amis
user        | Supprimer un ami                   |  Améliorer mon plaisir de jeu
user        | Consulter sa liste d'amis          |  
user        | Utiliser le tchat                  |  Communiquer avec les personnes de la partie 
user        | Rechercher un utilisateur (pseudo) |  Communiquer avec lui/ Ajouter à sa liste d'amis



En tant que |   Je veux pouvoir que                 | Afin de
------------|---------------------------------------|---------
visitor     |  Créer un compte                      | Pouvoir jouer  
visitor     |  Accèder à la page accueil            | Pouvoir regarder le tuto de fonctionnement de partie  
visitor     |  Accèder à la page création de compte | Pouvoir créer un compte  
visitor     |  Accèder à la page "Qui sommes-nous?" |   
visitor     |                                       |   


## Liste des rôles

- Arnaud Gueresse: **Product Owner**, **lead Dev Back**,
- Nicolas Mellinger: **Scrum Master**,
- Michaël Mittoo: **lead Dev Front**,
- Alexandre Bobichon: **Git Master**,