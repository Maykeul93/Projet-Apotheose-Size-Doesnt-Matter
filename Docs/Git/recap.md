# Utilisation de Git

[Lien decouverte de Git](https://www.atlassian.com/fr/git/tutorials/learn-git-with-bitbucket-cloud)
[Lien recap kourou Git Branch](https://kourou.oclock.io/ressources/fiche-recap/branches/)
[Lien fiche recap git Kourou](https://kourou.oclock.io/ressources/fiche-recap/git-et-github/)
[Lien fiche recap git Remote Kourou](https://kourou.oclock.io/ressources/fiche-recap/git-remotes/)

## Utiliser les branches

Lors de la création de branche pour la 1ere fois, afin que tout le monde puisse y avoir accès:
- `git branch NomDeLaBranche`
- `git push -u origin NomDeLaBranche`
- Se déplacer dessus `git checkout NomDeLaBranche`

Si cette commande **n'a pas été éxécutée**:

Pour pouvoir se déplacer sur les branches distantes (hors branches locales) afin de travailler dessus:
- Afficher les branches en remote, `git branch -r`,
- Basculer sur la branche distante pour pouvoir travailler dessus, `git checkout --track origin/NomDeLaBranche` (si elle part d'origin)
- `git pull` pour récupérer les éventuelles modifications apportées à la branche si d'autres ont travaillé dessus
- `git add lesFichier`
- `git commit -m ""`
- `git push origin NomDeLaBranche`.

OU

- `git remote update`
- `git checkout NomDeLaBranche`

Basculer sur une branche locale:
- `git checkout NomDeLABranche`
- `git pull origin master` pour récupérer le contenu ajouté par d'autres

Merger une branche
- `git checkout master`
- `git pull`
- `git merge NomDeLaBranche`
- `git push origin master`

Supprimer Une Branche en local
- `git checkout master`
- `git branch -d NomDeLaBrancheASupprimer`

Supprimer une branche en distant
- `git push origin --delete [nom_de_la_branche]`

Mettre à jour les branches supprimées en distant sur son vsCode en local
- `git remote prune origin`