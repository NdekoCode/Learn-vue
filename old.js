// ---------------------------------- 01 -------------------------------------------
const rootComponent = {
  data () {
    return {
      surname: 'NdekoCode',
      firstname:'Arick',
      lastname: 'Bulakali',
      age: 23,
      activities: ['Mentor','Redacteur','Etudiant ingénieur']

    }
  },
  methods: {}
}
const app = Vue.createApp({
  data() {
    return {
      firstname: 'Arick'
    }
  }
}).mount('#app');
// Dans la console on va nous afficher un Proxy
console.log(app);

// Le cycle de vie de vuejs puis les HOOKS
