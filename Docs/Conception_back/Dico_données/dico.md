# Dictionnaire de données

## MVP

<!-- - login: permet de se connecter `/login`
- contact: permet de contacter les admins du site  `/contact`
- inscription: permet qu'un visiteur se créer un compte `/signin`
- profil: permet de modifier ses informations `/profil`
- historique: permet de récupérer les informations de l'historique des partie de l'utilisateur `/history`
- admin: permet d'effectuer les actions inhérente au rôle d'administrateur du site (lire les contacts, rajouter des questions, etc) `/admin`
- partie: lors d'un join ou suite à une création de partie `/room` -->

Nom |   Description                     | Type   | Commentaire                              | Entité                     |
-------|--------------------------------|--------|----------------------------------------------------|---------------------------------|
|   email     |   informaitons obligatoire pour se connecter      |    VARCHAR (60) NOT NULL UNIQUE     |   adresse unique    |     user    |
|   password     |   informaitons obligatoire pour se connecter      |    VARCHAR (60) NOT NULL     |   propre à chaque utilisateur    |     user    |
|   pseudo     |   informaitons obligatoire pour se connecter      |    VARCHAR (15) NOT NULL      |   propre à chaque utilisateur    |     user    |
|   role     |   informaitons pour avoir des fonctions supplémentaires possibles      |    TEXT     |   user / admin    |     user    |
|   room     |   salle regroupant les joueurs avant que le début de la partie      |    TEXT     |   sous forme de code    |     game    |
|   score     |   score du joueur      |    INT DEFAULT 0     |   spécifique à une partie  |     play    |
|   position     |   position du joueur      |    INT     |   spécifique à une partie    |     play    |
|   number player     |   nombre de joueurs total       |    INT     |   spécifique à une partie    |     play    |
|   date     |   date de partie      |    TIMESTAMPZ     |   spécifique à une partie    |     play    |
|   exact answer     |   nombre de bonne réponse      |    INT DEFAULT 0     |   spécifique à une partie    |     play    |
|   answer     |   réponse à une question      |    TEXT NOT NULL     |   spécifique à une question    |     question    |
|   content     |   question      |    TEXT NOT NULL     |   spécifique à une réponse    |      question    |
|   Thème     |   nom du thème      |    VARCHAR (60)     |       |     tag    |

         
<!-- ## Evolutions potentielles

Numero      |   Endpoint           | HTTP | Données à transmettre | Description                     |
------------|----------------------|------|-----------------------|---------------------------------|
1           |  /contact            | GET  | subject, content      | Récupère les messages des formulaires de contact
2           |  /profil/user/[id]   | DELETE| id,pseudo            | L'utilisateur peut supprimer définitivement son compte -->