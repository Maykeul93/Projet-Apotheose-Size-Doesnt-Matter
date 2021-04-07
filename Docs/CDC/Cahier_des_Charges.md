# Cahier des charges

## Présentation du projet

`Size Doesn't Matter` est un projet 

En prenant comme référence ce qui se fait aujourd’hui et compte tenu de la crise sanitaire nous avons vu que de plus en plus de jeux ou site internet ayant comme base le jeu entre amis pour passer un bon moment, rigoler, se charrier, etc était de mise.
Nous avons eu du coup comme idée de créer un site web, à la star du fameux Gartic Phone (https://garticphone.com/fr) par exemple, sur un principe de quiz exclusivement de comparatif de taille car nous avons trouvé ceci fun et que cela permet de toujours apprendre des petites anecdotes ( toujours plaisant à ressortir lors d’une discussion entre amis).

L’objectif de ce projet étant de travailler sur quasiment l'ensemble des technos et connaissances qui nous ont été apprises durant la formation (et bien plus encore) ainsi que pour les clients : de passer un bon moment entre amis.

## Définitions des besoins/objectifs


## Fonctionnalités du projet

### MVP

### Evolutions potentielles

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