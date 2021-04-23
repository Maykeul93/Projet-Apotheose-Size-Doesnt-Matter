# Ajout du style de chaque composant

Dans chaque dossier de mes composants, je viens créer un fichier `style.scss`. Dans ce fichier, je viens créer tous les styles de mon composant. on modularise ainsi les styles du composant pour que celui soit entièrement stylisé de manière propre et indépendante!! Je n'oublie pas d'importer le fichier de style dans mon composant!

**Import dans notre Header :**

```js
import React from 'react';
import './style.scss';

const Header = () => (
  <header>
    <img
      className="header__img"
      src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      alt="Crêpes Raffinées"
    />
    <div className="header__content">
      <h1 className="header__title">Crêpes Raffinées</h1>
      <p className="header__subtitle">John Doeuf - Facile</p>
    </div>
  </header>
);

export default Header;
```

**Styles de notre header :**

```css
.header {
  position: relative;
  margin-bottom: 2rem;
  &__img {
    max-width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &__content {
    position: absolute;

    width: 100%;
    background-color: rgba(0,0,0,.4);
    bottom: 3rem;
    text-align: center;
    padding: 2rem;
    color: white;
  }
  &__title {
    font-size: 3em;
    font-style: italic;
    font-family: serif;
    font-weight: bold;
    margin-bottom: .2em;
  }
}
```

On choisi le format ``.scss`` pour réaliser un css plus dynamique ( parentSelector, mixins, nesting (propriétés imbriquées), etc) puis ensuite être compilé via préprocesseur SASS sous format CSS normal.
Plus d'info sur la [doc](https://sass-lang.com/documentation).

ex de **Nesting** : 
```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

En css normal :

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

**Parent Selector**

Correspond à l'esperluette `&`. Il vient récupérer l'élément parent et l'injecte à l'endroit où se trouve l'esperluette.

```css
.alert {
  &:hover {
    font-weight: bold;
  }

  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }

  // You can even use it as an argument to pseudo-class selectors.
  :not(&) {
    opacity: 0.8;
  }
}
```

Version css standard :

```css
.alert:hover {
  font-weight: bold;
}
[dir=rtl] .alert {
  margin-left: 0;
  margin-right: 10px;
}
:not(.alert) {
  opacity: 0.8;
}
```

## Se servir des varaiables scss

Dans un fichier `_vars.scss`, on peut déclarer des [variables css](https://sass-lang.com/documentation/variables). On donne à nos variables les noms que l'on souhaite, et on leur définit une valeur. On pourra ainsi marquer beaucoup plus rapidement nos styles, et surtout, les modifier beaucoup plus rapidement!
On précise un underscore dans le nom du fichier pour éviter qu'il ne soit interprété par le préprocesseur. Lors de l'import dans nos fichier `scss`, inutile de préciser le underscore ainsi que l'extension de fichier!

fichier `_vars.scss`:

```scss
$color-primary: #f2f3f5;
```

Dans le fichier de scss où je souhaite me servir de ma variable, j'importe mon fichier de variable via un `@use`:

```scss
@use 'src/styles/vars' as v;

.h1 {
    color:v.$color-primary
}
```

On peut spécifier un alias comme `as v` si jamais on se sert de plusieurs fichiers de variables etc, pour pouvoir s'y retrouver!

## Fonctions Sass

Il existe des [fonctions](https://sass-lang.com/documentation/at-rules/function) déjà prêtes à l'emploi dans Sass.

Ici, on va se servir d'une fonction permettant de décliner les couleurs à partir d'une couleur de base. On va se servir d'un [built-in module](https://sass-lang.com/documentation/modules/color)!

La fonction `scale` de `color` nous permet ainsi de faire varier une couleur de base!

```scss
@use "sass:color";

$fond: #2e5849;
$fondInput: color.scale($fond, $lightness: -20%);
```

J'importe le module que je souhaite utiliser via le `@use` puis je me sers de la fonction du module que je souhaite à la manière d'une fonction JS!!