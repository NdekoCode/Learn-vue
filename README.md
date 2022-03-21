# Decouverte VueJS3

Pour commencer avec la decouverte de vuejs3 on va d'abord l'utiliser avec un CDN avec le lien suivant:
`https://unpkg.com/vue@3.2.31/dist/vue.global.js`
Apres cela il faudra initialiser `VueJS` grace au code suivant: `const app = Vue.createApp({}).mount('#app')`, ce code veut dire, je créer une instance de Vuejs(ou que greffe une application Vuejs) en le montant sur l'element HTML qui a comme identifiant `app`, l'objet entre `createApp({})` servira à contenir les parametres dont aura besoin d'instance de Vuejs comme par exemple les data avec le code suivant:

```{JS}
const app = Vue.createApp({
    data () {
        return {
            firstname: 'Arick'
        }
    }
}).mount('#app')
```

Mais on peut egalement creer ce code de maniere plus propre en creer avant un objet contenant les parametres dont l'instance a besoin puis par après le charger dans l'instance càd:

```{JS}
const rootComponent = {
    data () {
        return {
            firstname: 'Arick'
        }
    },
    methods: {}
}
const app = Vue.createApp(rootComponent).mount('#app');
```

## Le cycle de vie

Le cycle de vie est très important car c'est toutes les étapes qui se déroulent lorsque l'on fait `Vue.createApp()` et pour ça nous avons un diagramme très utile qui se trouve sur la documentationn de VueJS
![](./lifecycle.png)

- Lors de l'initialisation des evenements et du `lifecycle` on ne peut pas utiliser les données ou les methodes du composants ou encore interagir avec le DOM, c'est vraiment la premiere Etape de l'initialisation
- Lors de l'initialisation des injections et des reactivités à ce moement là on peut utiliser des données `data`
- Ensuite on a une condition qui demande si notre composant a un `template` ou une option `el` pour l'utilisation des composants, si on a pas d'option `template` alors tous ce qu'on veut afficher va etre rendus dans notre HTML càd dans notre page qu'on a monté avec l'identifiant `#app`
- Une fois tous cela il y aura les processus pour faire monter notre element VueJS dans le DOM ainsi le changement va etre effectuer dans le DOM et on va pouvoir voir ce qu'il y a été fait, toutes les modifications et ce que l'on veut afficher.
- Une fois que ça été monté ie que le HTML s'est afficher, dans ce cas on peut agir et il y a un point de vie qui va etre generer à chaque fois qu'une proprieter ou une donnée change
- Enfin on peut detruire notre application avec `unmount` et non avec un `destroy`

### Les données

Les données ses mettent dans le `rootComponent` ou dans le composant en générale, les données sont comprises dans une methode qui retourne un objet, ces données peuvent etre de n'importe quel type (`number`,`String`,`Object`,`Array`,`...`).
Ces données on peut les réutiliser au sein de notre application, au sein des methodes de `Vuejs` et egalement on peut les afficher dans notre `DOM`.
On peut egalement definir le contenus de ces données ou modifier le contenus de ces données durant le cycle de vie mais à certains point de vie de notre cycle seulement grace aux `Hooks`.

### Les hooks

On a plusieurs `Hook` dans notre application VueJS, les `Hooks` sont les moments sur lesquels on peut interagir dans le cycle de vie de `VueJS` et dans l'initialisation de notre application, ces `Hooks` sont:

- beforeCreate: càd avant d'avoir accés aux données de notre application
- created: càd une fois que l'on a accés aux données
- beforeMount: Quand on a accés aux donnés mais que le rendus n'est pas encore effectif dans le HTML
- mounted: càd une fois que le HTML est rendus
- beforeUpdate: Avant chaque modification de donnée
- updated: Après chaque modification de donnée
- beforeUnmount: Avant de detruire notre application
- unmounted: Une fois que l'on detruit notre application

Parmis ces `Hooks` il y en a qui sont utiliser plus que d'autres comme:

- created: Car c'est le moment de notre initialisation où il est préferable d'aller chercher et de consommer des API par exemple
- mounted: Une fois que l'on a rendus le HTML
- unmounted: Quand on veut detruire une action asynchrone lors de la destruction de notre composant à fin d'eviter de problème lier aux performances

### Manipulations des données et des Hooks

