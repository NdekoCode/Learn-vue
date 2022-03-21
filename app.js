/**
 * Logique de l'Application
- On va dire que j'ai rediger plusieurs articles de bloG ET donc j'ai une liste des posts(DANS UN TABLEAU)
- Toutes les données que l'on va etre à utiliser durant notre application doivent etre inserer dans `data(){}` dès le début 
 */
/** @type {Object} */
const Learning = {
   data () {
      return {
        firstname: 'Arick',
        posts: []
      }
   },
   created () {
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(res => {
       this.posts = res;
     }).catch(res =>{
       console.error(res);
     })
   }


}
const app = Vue.createApp(Learning).mount('#app');
