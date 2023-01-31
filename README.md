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

Sachez d'abord que avec `VueJS3` toutes les `console.log` de nos données retourne un `Proxy`, les données sont reactifs càd si il y a un changement dans le code, le DOM et tous les appels de la donnée qui a été modifier
vont etre modifier eux aussi

## Les directives

En vuejs on a plusieurs directives dont notamment `v-if`,`v-for`,`v-model`,`v-show`,... mais à par cela on peut créer nos propres directives, et cela permet de rajouter des fonctionnalités particuliere et personnelle.
Pour créer une directive de manière globale on utilise la methode `directive` sur l'Object `Vue` et cette methode prend 2 argument, le nom de la directive qu'on veut créer et ensuite un objet contenant les paramètres de cette directives, cet objet contenant les directive prend à son tour des clé comme:

- bind: Qui est une fonction qui sera appeler lorsque cette directive sera ajouter sur un element du DOM, cette fonction `bind` prend 3 argument
  - L'element sur lequel on a binder notre systeme (notre directive)(`el`)
  - Le `binding`, c'est ce qui nous permet de recuperer les differents `modifier` present sur notre directive
  - Le virtual node `vnode`, c'est un truc créer par vuejs et il faut vraiment en avoir besoin pour l'utiliser.

```{Vue.js}
Vue.directive("salut", {
  bind(el, binding, vnode) {
    // el.value = binding.value;
    console.log(el, binding);
  },
  update: (el, binding, vnode, oldVnode) => {
    console.log("Update");
  },
});
```

- update: Permet de detecter lorsque quelque chose à été ajouter sur cet element

- L'element sur leaue
 `Vue.directive('LeNomDelaDirective',)`

## Les composants

Les composants nous permettent de morceler notre code en plusieurs petits morceau réutilisable.
Le principe c'est de créer nos propres element qui vont englober leurs propres logique et leurs propres fonctionnement.
En utilisant vuejs en CDN on peut créer un composant de deux manière:

- De manière global
- De maniere local à un element donner ou à un composant données

Une fois un composant créer il peut etre constitué de differentes choses, comme

- des propriétés: Sont des données venant de l'exterieur comme des argument qu'on passe à une fonction pour son execution
- Des methodes utiliser dans le composant
- Ainsi que d'autres choses utiliser lors de la definition d'une instance Vuejs comme les proprieter computed, les watchers, les filters, les directives,...

### Créer un composant de manière global

Pour créer un composant de manière global on utilise l'Object `Vue` avec `Vue.component()` cette methode component prend deux arguments dont le nom du composant et ensuite un objet contenant les paramètres du composant comme `template` qui va contenir la description HTML du composant, `data` qui va contenir les etats composants,`props` qui va contenir `methods` aura les methodes present dans le composant,...

```{JS}
Vue.component("message", {
  props: {
    cls: {
      type: [String, Number],
      default: "alert alert-danger",
    },
    message: String,
  },
  template: /* html */ `
  <div :class="cls">{{ message }}
  </div>`,
});
let vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "Salut guy",
    };
  },
});

```

### Créer un composant de manière local

Pour créer un composant de maniere local et utiliser uniquement à l'interieur d'un element viser par vuejs il faut juste créer un objet qui contient la description de ce composant comme on l'a decrit lors de la definition d'un composant globale, Le nom du composant sera le nom de l'objet.
Une fois le composant créer il faut le glisser dans la section `components` du composant où il sera scoper

```{JS}
let message = {
  props: {
    cls: {
      type: [String, Number],
      default: "alert alert-danger",
    },
    message: String,
  },
  template: /* html */ `
  <div :class="cls">{{ message }}
  </div>`,
};

let vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "Salut guy",
    };
  },
  components: {
    message,
  },
});

```

## Animation et transition

### Les transitions

En vuejs pour utiliser les transitions on utilise la balise `transition` puis on va lui donner un nom pour que l'on puisse le cibler avec des classes CSS pour faire des transition particulier `<transition name="LeNomDelaTransition"></transition>`, les transitions fonctionnent avec les `v-if` et les `v-show`.
Si on veut animer un element qui a un `v-if` ou un `v-show` il faut l'entourer de la balise `transition` et à l'interieur de cette balise là on va donner un nom à notre transition ,
Une fois le nom de la transition donner, automatiquement cela veut dire que mainant on va pouvoir y appliquer des classes CSS pour pouvoir gerer cette animation.
Les animations en vuejs utilisent le meme systeme de classe que Angular.
par exemple:

```{VUE}

  <transition name="fade">
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-if="visible"
    >
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="toggle"
      ></button>
      <strong>Alert Heading</strong> {{ message }}
    </div>
  </transition>
```

Pour faire les animation sur un element `<transition name="LeNomDelaTransition"></transition>` on doit ajouter sur son nom dans le CSS 3 classe qui seront utiliser en coupler, et c'est sont `enter-active` et `leave-active`, `enter-active` et `leave-active` sont utiliser pour demarrer l'animation, ils permettent de specifier l'Etat que l'on va avoir au debut et en fin de l'animation, et souvent dans ces genre de cas, on peut une transition sur quelques proprieter CSS sur cet element.

```{CSS}
/** l'Etat que l'on aura au debut et en fin de l'animation */
.LeNomDelaTransition-enter-active,LeNomDelaTransition-leave-active {

}
.fade-enter-active,.fade-leave-active {
  opacity: opacity 0.3s;
  transition: transform(20px);
}

```

Par exemple on a l'element `<transition name="LeNomDelaTransition"></transition>` quand l'element à l'interieur qui a un `v-if` ou un `v-show` va arriver, il va l'injecte direment dans le DOM, il lui donne la classe `LeNomDelaTransition-enter`, il attend un cycle puis ensuite il lui ajoute la classe `LeNomDelaTransition-enter-active`, lorsque un element quitte le DOM il lui donne d'abord la classe `LeNomDelaTransition-leave` puis il attend un cycle et ensuite il lui donne la classe `LeNomDelaTransition-leave-active`.

Sachez que `LeNomDelaTransition-enter-active` veut dire quand l'element est entrer d'etre inserer dans le DOM et `LeNomDelaTransition-leave-active` veut dire quand l'element est entrer de d'etre retirer du DOM.
`LeNomDelaTransition-enter`: veut dire quand l'element entre dans le DOM
``

Sur l'element `<transition name="fade"></transition>` quand l'element à l'interieur qui a un `v-if` ou un `v-show` va arriver il l'injecte direment dans le DOM, il lui donne la classe `fade-enter`, il attend un cycle puis ensuite il lui ajoute la classe `fade-enter-active`, lorsque un element quitte le DOM il lui donne d'abord la classe `fade-leave` puis il attend un cycle et ensuite il lui donne la classe `fade-leave-active`.

En interne ce qu'il fait est qu'il detecte la fin de la transition et de l'animation en utilisant l'element `animation-end` et `transition-end`
Mais dans les cas des animations CSS on passe generalement par 2 classe `LeNomDelANIMATION-ENTER-ACTIVE` ET `LeNomDelANIMATION-LEAVE-ACTIVE`.
Si vous voulez que votre animation demarre au chargement de la page vous pouvez ajouter l'attribut `appear` à votre balise transition.

Sachez aussi que si dans une balise `<transition></transition>` on a des element en `v-if` combiner à `v-else` il faut les piloter car sinon l'animation ou les transition de l'element en `v-else` sera ignorer, ducoup pour remedier à cella il faut utiliser un mode et le plus souvent on utilise le mode `in-out` qui veut dire que le nouvel element va faire un transition ensuite l'ancienne element va disparaitre. et dans l'effet inverse celui que j'adore personnellement c'est le mode `out-in` càd d'abord le premier element va disparaitre et ensuite le second va apparaitre.

Sachez aussi que vuejs detecte les elements qui ont changer de position dans le dom et ducoup si vous avez une transition il va rajouter une classe `LeNomDelaTransition-move` que vous pouvez utiliser en mettant une transition sur la transformation qu'elle applique pour avoir une transition dans le changement de position.

## Quelques trucs et astuces

### General

- Si on a une proprieter et son `v-bind` il aura une fusion de proprieter à la fin
- On ne peut pas ajouter dynamiquement des nouvelles propriéter à un objet et one ne peut pas modifier un element de tableau directement par son index, il faudra utiliser des methodes deriver telle que le `Object.assign`.
- Globalement si vous voulez greffer un comportement particulier sur vos composant, sachez que dans le cycle de vie il y a deux evenement qui vont etre clé `mounted` et `destroy` mais si vous voulez recuperer les données depuis une API pour les inserer dans votre composant, vous pouvez utiliser l'evenement `beforeMounted` pour recuperer les elements puis ensuites les inserer dans votre DOM.
- Dans vue js une variable qui commmence par `$` est une convention pour faire la difference entre les proprieter qui sont des etats et donc appartient à `data` et des proprieter qui servent juste à la logique du code comme la proprieter `$el` pour recuperer l'element, `$data` pour recuperer les etats mais on peut aussi en créer dynamiquement ce qui faira en sorte que notre variable soit globale dans toute notre application, mais faire cela c'est une mauvais pratique car si on veut rendre quelques choses globale, vaut mieux utiliser le systeme de `store`
- Quand on modifie une variable de data, les fonctions dans `methods` sont reappeler à chaque fois car vuejs n'a pas un moyen de savoir qu'elle est la fonction qui modifie la proprieter, et cela souvent nuit en terme de performace donc si la fonction vous retourne un resulat que vous utiliser ensuite dans le DOM, privilegier plutot l'utilisation des `computed`(qui sont des fonctions qui s'utilisent sous forme des proprietés) car la proprieter `computed` va appeler sa function uniquement si le l'etat auquel il est lié est modifier, mais si vous voulez juste observer quand une variable de l'etat est modifier, utiliser alors les watchers. `computed` mais en cache les valeurs et il ne faira la modification que lorsque une variable qui a été utiliser à l'interieur à ete modifier et cela permet d'obtimiser les performances.
- Le systeme de `Watcher` nous permet d'aller un peu plus en interne avec le fonctionnement de `vue.js` et detectez lorsque une variable à été modifier, Sachez que les watchers ne fonctionne que sur les variables de type simple, `string,number, string[], number[]`, leurs fonctionnement de watching ne fonctionne pas sur les objets ou les tableaux des objets

### Les formulaires

- Pour lier un etat à un champs de formulaire on utilise `v-model` par exemple `<input type="text" v-model="message" class="form-control" />` ici on dit que ce champ input sera lier à la valeur de l'etat message et donc la modification de ce champ va automatiquement induire la modification de l'etat message
- Pour les checkbox on peut utiliser quelques proprieter de `vuejs` quand sur ce checkbox on veut faire des assignation de l'etat d'une maniere dynamic avec les `v-model` comme `:true-value='une valeur quelconque'` cette proprieter s'utilise surtout quand le le checkbox est cocher ou que sa valeur vaut `true` et on a aussi `:false-value` qui s'utilise quand le checkbox est decocher ou sa valeur vaut `false` et donc: `<input type="checkbox" v-model="cls" :true-value="'success'" :false-value="'error'" />`, ici on dit que si le `checkbox` est cocher alors la variable `cls` on va lui assigneer la valeur `success` et s'il ne pas cocher on va lui assigner la valeur `error`

### Les modifiers

Dans vuejs lors de l'utilisation des evenement on peux utiliser quelques modifier pour faire quelques actions particulier. ces modifier s'utilisent directement sur l'evenement dans la partie HTML avec un point `.` suivis de du nom du modifier, et parmis eux on a :

- **`prevent`**: s'utilise pour faire un `preventDefault` sur un element pour eviter un comportement par defaut de cet element, par exemple `<a href="https://www.ndekocode.com" @click.prevent="funcToCall">Aller sur ce site </a>`,
- **`stop`**: S'utilise pour faire un `stopPropagation`, et cela va permettre d'eviter que l'evenement fasse des bulles vers le haut c-à-d d'eviter que l'evenement sur un element remote vers les elements parent, par exemple `<p @click="funcToP"><a href="https://www.ndekocode.com" @click.stop="funcToCall">Aller sur ce site </a></p>`, en faisant un `@click.prevent` on evite que l'evenement du paragraphe soit declencher quand on va cliquer sur le lien, ainsi l'evenement du lien ne va pas remonter vers le paragraphe.
- **`self`**:Est un peu similaire à `stop` à la seule difference est que lui permet de dire que il faut que l'evenement soit detecter uniquement sur cet element là et pas par exemple sur un element enfant.
- **`lazy`**: qui s'utilise souvent sur les evenement type formulaire et de redimensionnement , et cela permet de faire de la performance de notre application, c'est vraiment très interessant pour eviter d'avoir trop d'evenement qui sont lancer sur un element ou sur un formulaire en particulier
- **`number`** : S'utilise sur un champ de formulaire et permet de convertir tous ce qui est entrer en nombre.
- **`trim`** : S'utilise aussi sur un champ de formulaire et permet d'enlever les espaces de trop et les saut à la ligne
  
**NB**: `lazy`,`number`,`trim`, lorsqu'elle sont utiliser sur un element de formulaire, elle sont appliquer sur un `v-model` c-à-d `v-model.lazy`,`v-model.number`,`v-model.trim`.
Avec certain evenement particulier notamment `@keyup` on peut peut lui appliquer quelques modifier particulier pour faire un raccourcie des choses que l'on veut faire par exemple `@keyup.enter` pour detecter quand on clique sur la touche "Enter" et `@keyup.space` pour detecter quand on clique sur la touche "Espace", cela est très pratique pour eviter d'avoir des test de Key code à faire au niveau de notre code.

### Animation

Il est possible de créer des animation avec vuejs lorsqu'on a un changement de status, càd quand un element du DOM passe du cacher au visible ou du visible au cacher avec les `v-if` et `v-show`,...

### Differences entre v-if et v-show

- `v-if` : Si la condition n'est pas bonne il supprime l'element du DOM
- `v-show` : Si la condition n'est pas bonne il met l'element en `display:none`

### Verité sur le slot

⚠️ Les slots sont executer au moment où ils sont ecrit, donc les changement des etats ne les affectent pas.

### Store personnaliser

Vus que vue.js est capable de detecter les modifications, on peut utiliser un simple objet javascript pour pouvoir stocker cela

## Guide pour Vue 3

- Les evenement avec vue3
- v-bind avec vue3
- Les etats ou les datas ou encore les variable avec vue3
- Les methodes avec vue3
- Les computed et watcher avec vue3
- Les modifier en vue3
- Les filtres en Vue3
- Comment créer un composant de manière globale avec Vuejs 3
- Les animations en vuejs3
- Les mixins avec vuejs 3
