# Se servir de Create React App

## Faire des imports abolus

Pour réaliser les imports absolus des `components`, `container`, ..., depuis de dossier `src`:

```js
    import App from 'components/App';
```

## Utiliser les variables dans les fichiers scss

- Dans `src`, présence d'un dossier `styles` contenant le fichier `vars.scss` (possibilité de splitter les variables en plusieurs fichiers)

```scss
    $nomDeVariable: #fff;
```

- Import des variables dans le fichier `.scss`;

```scss
    @import 'src/styles/vars.scss';

    body {
        color: $nomDeVariable
    }
```

## Plus besoin d'importer react dans tous les composants

La ligne `import React from 'react';` n'a plus besoin d'être précisée lors de la création des composants.