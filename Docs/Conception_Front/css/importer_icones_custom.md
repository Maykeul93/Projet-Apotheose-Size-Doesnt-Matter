# Import d'icônes custom avec React-icons

## Etapes

1. Se rendre sur le [site pour choisir un icône](https://react-icons.github.io/react-icons)
2. Utiliser la barre de recherche pour chercher un icône spécifique (ici on tapera `plus`).
3. Tous les icônes s'affichent, en choisir un et cliquer dessus pour copier son nom (ex: on choisit l'icône `FaPlus`).
4. Tous les noms d'icône sont précédés de deux lettres (ex: `Fa`, `Bi`, `Hi`...), on en aura besoin pour l'import de l'icône. Ces 2 lettres correspondent à un sous-dossier.
5. Dans le fichier `monFichier.js`, on importe l'icône que l'on souhaite utiliser en copiant son nom dans la déstructuration. On importe l'icône de la librairie `react-icons` dans laquelle on va choisir le dossier où se trouve l'icône choisi (ici, on choisit l'icône `FaPlus` donc il se trouve dans le sous-dossier `fa`).

```js
import { FaPlus } from 'react-icons/fa';
```

6. Il n'y a plus qu'à insérer notre icône sous forme de composant auto-fermant (on vient fermer sa balise de fin en la précédant avec un `/`) où l'on souhaite le mettre!

```js
import { FaPlus } from 'react-icons/fa';

const monComposant = () => {
    return (
        <div>
            <h2>Mon titre</h2>
            <button
                type="button" // ATTENTION, pour les boutons, on précisera toujours un type (submit si soumission de form ou button si pas d'action spéciale)
            >
                <FaPlus />
            </button>
        </div>
    );
}

export default monComposant;
```

7. Notre composant est importé!

## Customiser sa taille

Pour customiser sa taille, il va falloir passer par ses propriétés.
On ajoute simplement une props `size` au composant à laquelle on passe une valeur entre double quotes `"value"`.

```js
    <button
        type="button" // ATTENTION, pour les boutons, on précisera toujours un type (submit si soumission de form ou button si pas d'action spéciale)
    >
        <FaPlus
            size="25"
        />
    </button>
```

## Ajouter une classe à notre composant

Pour ajouter une classe à notre composant, il faut passer par un composant englobant `IconContext`.

1. On importe le composant:

```js
import { FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
```

2. On va venir englober notre composant icône dans le `Provider` de `IconContext`

```js
import { FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const monComposant = () => {
    return (
        <div>
            <h2>Mon titre</h2>
            <button
                type="button" // ATTENTION, pour les boutons, on précisera toujours un type (submit si soumission de form ou button si pas d'action spéciale)
            >
                <IconContext.Provider>
                    <FaPlus />
                </IconContext.Provider>
            </button>
        </div>
    );
}

export default monComposant;
```

3. **ETAPE ESSENTIELLE SINON CA NE MARCHERA PAS**. On vient passer à `IconContext.Provider` une props `value` à laquelle on passe un objet qui contiendra un autre objet contenant notre future classe!

```js
import { FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const monComposant = () => {
    return (
        <div>
            <h2>Mon titre</h2>
            <button
                type="button" // ATTENTION, pour les boutons, on précisera toujours un type (submit si soumission de form ou button si pas d'action spéciale)
            >
                <IconContext.Provider
                    value={{className: "NomDeLaClasseQueJeVeux__Ajouter"}}
                >
                    <FaPlus />
                </IconContext.Provider>
            </button>
        </div>
    );
}

export default monComposant;
```

4. Je peux cibler en CSS cette classe comme normalement pour styliser le margin etc.
**ATTENTION** pour gérer la taille de l'icone par exemple, il faut absolument passer la propriété `size` (cf. `customiser sa taille`).