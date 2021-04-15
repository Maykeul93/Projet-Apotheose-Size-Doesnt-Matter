# Fonctionement du dossier Back 

## Heroku

Heroku est une plateforme d'hébergement "as a service" qui propose une méthode un peu plus "actuelle" de mettre en ligne nos applications.On s'en est donc servis pour mettre en ligne notre bdd.

Pour commencer il faut créer un compte sur : ```https://www.heroku.com```

Puis installer le client Heroku sur la machine de dev : https://devcenter.heroku.com/articles/heroku-cli#download-and-install.


On créer notre application sur heroku.

Sur notre terminal on va choisir une méthode de déploiement. Je recommande la méthode de "git remote". On va définir les serveurs de Heroku comme un remote de notre repository et y git push notre code pour le déployer.

On se place donc à la racine de notre projet (là où on a fait le git init) et on utilise la commande suivante :

```
# On ajoute le remote
heroku git:remote -a le-nom-de-votre-app

# On peut voir le nouveau remote
git remote -v
```

On ajoute un buildpacks NodeJS directement sur Heroku (il faut que heroku puisse faire un npm install pour installer les depedencies ainsi qu'un npm start pour démarrer l'application).

On rajoute un buildpack PostgreSQL pour notre base de données via : https://elements.heroku.com/addons

Nous avons ensuite ajouté dans notre ```./back/.env``` notre DATABASE_URL. 

```
DATABASE _URL=postgres://user:password@localhost/database
```

Dans notre ```./back/dataMapper/client.js``` nous avons ajouter notre database url d enotre .env et un paramètre ssl pour avoir tout les droits sur Heroku lors du deploiement. 

```
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
```

Pour finir nous avons deploy tout les fichiers de sqitch en mettant comme url de deploiement l'url de la base de données du projet Heroku (trouvable sur le site).

Pour finir il suffit de faire ces commandes :

```
git add . 
git commit -m"description" 
git push 

*puis*
git push heroku 

# comme nous avons tout nos documents back dans un dossiers back et non en racine de notre repo il faut effectuer cette commande 
git subtree push –prefix back heroku master
```
lien de notre bdd en ligne : https://size-doesnt-matter.herokuapp.com/

## Sqitch

Sqitch est un outil de versionning pour la DB.

Il faut tout d'abord télécharger sqitch: ```https://sqitch.org/download/```

Une fois installé, dans le projet faire la commande ```sqitch init NomDeLaBdd --engine pg```
Ceci initialisera sqitch sur votre projet et créera un dossier Migration avec 3 sous dossier deploy, revert, verify ainsi que un sqitch.plan et enfin un sqitch.conf.

On se place alors dans le dossier deploy et on effectue cette commande ```sqitch add NomQueVousVoulezDonner -n "Commentaire sur ce que vous deployez"```
Ceci créera un fichier.sql dans le deploy et un dans le revert ainsi que dans verify.

Vous pouvez maintenant implementer le fichier dans le deploy avec du SQL (ceci peut etre la création de vos tables CREATE TABLE "user"....) et/ou vos modifications.

Ensuite dans le revert on ecrit le SQL nécéssaire pour pouvoir supprimer ce qu'on a ecrit dans le deploy (DROP TABLE "user"....)

Une fois le deploy et le revert correctement implementer on peut faire la commande :
 ``` sqitch deploy db:pg://NomRole:MotDePasse@localhost:5432/NomDb```.

Le versionning est maintenant enregistré vous pouvez jonglé sur la version de votre deploiment.

Si je veux revenir en arrière :
 ``` sqitch revert db:pg://NomRole:MotDePasse@localhost:5432/NomDb```

Si je veux re-deployer mon Sql :
``` sqitch deploy db:pg://NomRole:MotDePasse@localhost:5432/NomDb```

Liens Kourou : ```https://kourou.oclock.io/ressources/recap-quotidien/pan-data-04-sqitch/ ```