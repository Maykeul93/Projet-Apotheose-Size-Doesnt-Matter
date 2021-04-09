# Dictionnaire de données

## MVP

Numero |   Endpoint                     | HTTP   | Données à transmettre                              | Description                     |
-------|--------------------------------|--------|----------------------------------------------------|---------------------------------|
1      |  /login                   | POST   | email, password                                    | Récupération des données de connexion de l'utilisateur
2      |  /signin                       | POST   | email, password, pseudo                            | Création de compte d'un utilisateur 
3      |  /profil/[id]                  | GET    | id, email, pseudo                                  | Afficher les données de l'utilisateur connecté
4      |  /profil                       | POST   | email, password, pseudo                            | Modifier les données de son profil
5      |  /history/[id]                 | GET    | user_id, room, score, position, date               | Récupère l'id de l'utilisateur plus une fonction qui donnera des moyennes sur toutes les données de toute les games              |
6      |  /admin/question               | GET    | id, question, answer                                   | Récupère toutes les questions
7      |  /admin/question/[id]          | GET    | id, question, answer                                   | Récupère une seule question
8      |  /admin/question               | POST   | id_admin, password, question, answer, id_tag       | Ajout d'une nouvelle question/réponse, attachée à un thème existant
9      |  /admin/question/[id]          | PUT    | id, question, answer                                   | Modifier une question/réponse
10     |  /admin/question/[id]          | DELETE | id, question                                               | Supprimer une question
11     |  /admin/tag                    | GET    | id, name                                               | Récupère tous les tags
12     |  /admin/tag/[id]               | GET    | id, name                                               | Récupère un tag en particulier
13     |  /admin/tag/[id]               | DELETE | id, name                                               | Supprimer un tag
14     |  /admin/tag                    | POST   | id_admin, name, password                           | Ajout d'un tag
15     |  /admin/user/[id]              | DELETE | user_id, pseudo                                    | Supprimer un utilisateur
16     |  /admin/question/[id]/tag/[id] | PUT    | id_question, id_tag                                | Modifier une appartenance d'une question / réponse à un thème



         
## Evolutions potentielles

Numero      |   Endpoint           | HTTP | Données à transmettre | Description                     |
------------|----------------------|------|-----------------------|---------------------------------|
1           |  /contact            | GET  | subject, content      | Récupère les messages des formulaires de contact
2           |  /profil/user/[id]   | DELETE| id,pseudo            | L'utilisateur peut supprimer définitivement son compte