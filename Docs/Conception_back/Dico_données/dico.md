# Dictionnaire de données

## MVP

Numero |   Endpoint                     | HTTP   | Données à transmettre                              | Description                     |
-------|--------------------------------|--------|----------------------------------------------------|---------------------------------|
1      |  /login                        | POST   | email, password                                    | Récupération des données de connexion de l'utilisateur
2      |  /signin                       | POST   | email, password, firstname, lastname, pseudo       | Création de compte d'un utilisateur 
3      |  /profil/[id]                  | GET    | email,firstname, lastname, pseudo                  | Afficher les données de l'utilisateur connecté
4      |  /profil                       | POST   | email, password, firstname, lastname, pseudo       | Modifier les données de son profil
5      |  /history/[id]                 | GET    | user_id, room, score, position, number_player, date| Récupère l'id de l'utilisateur plus une fonction qui donnera des moyennes sur toutes les données de toute les games              |
6      |  /admin/[id]                   | GET    | email,firstname, lastname, pseudo                  | Affiche toute les données
7      |  /admin/question               | GET    | question, answer                                   | Récupère toutes les questions
8      |  /admin/question/[id]          | GET    | question, answer                                   | Récupère une seule question
9      |  /admin/question               | POST   | id_admin, password, question, answer, id_tag       | Ajout d'une nouvelle question/réponse, attachée à un thème existant
10     |  /admin/question/[id]          | PUT    | question, answer                                   | Modifier une question/réponse
11     |  /admin/question/[id]          | DELETE | id,                                                | Supprimer une question
12     |  /admin/tag                    | GET    | name                                               | Récupère tous les tags
13     |  /admin/tag/[id]               | GET    | name                                               | Récupère un tag en particulier
14     |  /admin/tag/[id]               | DELETE | id,                                                | Supprimer un tag
15     |  /admin/tag                    | POST   | id_admin, name, password                           | Ajout d'un tag
16     |  /admin/[id]                   | DELETE | question, answer                                   | Supression d'une question / réponse
17     |  /admin/question/[id]/tag/[id] | PUT    | id_question, id_tag                                | Modifier une appartenance d'une question / réponse à un thème



         
## Evolutions potentielles

Numero      |   Endpoint           | HTTP | Données à transmettre | Description                     |
------------|----------------------|------|-----------------------|---------------------------------|
1           |  /contact            | GET  | subject, content      | Récupère les messages des formulaires de contact
