<template>
  <div>
    <section class="row">
      <article
        class="card shadow col-md-4 mb-3 gap-1"
        v-for="user in users"
        :key="user.id"
      >
        <header class="card-header">
          <input type="text" v-model="user.name" />
        </header>
        <h3>{{ user.name }}</h3>
        <ul>
          <li>Email : {{ user.email }}</li>
          <li>Adresse : {{ user.address.street }} {{ user.address.city }}</li>
          <li>Phone: {{ user.phone }}</li>
          <li>Website: {{ user.website }}</li>
        </ul>
        <div class="mb-3 d-flex">
          <button class="btn btn-warning me-1" @click="save(user)">
            Modifier
          </button>
          <button
            class="btn btn-danger me-1"
            type="button"
            @click="destroy(user)"
          >
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              v-if="loading === user.id"
            ></span>
            <span class="sr-only">Supprimer</span>
          </button>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Users",
  // Protection des composants, utile si vous voulez faire un appel ajax avant que la page ne s'affiche et l'afficher uniquement quant la requete AJAX est terminer.
  // A eviter si votre composant à des props
  // similaire à beforeEnteer des routes
  beforeRouteEnter(route, redirect, next) {
    const confirm = window.confirm("Etes-vous déjà connecter ?");
    if (confirm) {
      next();
    } else {
      console.log(route, redirect);
    }
  },
  beforeRouteLeave(route, redirect, next) {
    const confirm = window.confirm("Voulez-vous vraiment quitter ?");
    if (confirm) {
      next();
    } else {
      console.log(route, redirect);
    }
  },
  data() {
    return {
      users: [],
      loading: false,
      instance: this.axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        timeout: 5000,
      }),
    };
  },
  methods: {
    save(user) {
      this.loading = user.id;
      this.instance
        .put("/users/" + user.id, user)
        .then((response) => {
          console.log(response);
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    destroy(user) {
      this.loading = user.id;
      this.instance
        .delete("users/" + user.id)
        .then((res) => {
          this.loading = false;
          console.log(res);
          this.users = this.users.filter((d) => d.id !== user.id);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
  created() {
    this.instance
      .get("users")
      .then(({ data }) => {
        console.log(data);
        this.users = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
