const rootComponent = {
  data () {
    return {
      firstname:'Arick'
    }
  },
  methods: {}
}
const app = Vue.createApp(rootComponent).mount('#app');
console.log(app);
