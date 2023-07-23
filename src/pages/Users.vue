<template>
  <div>
    <section class="row">
      <article
        class="relative gap-1 mb-3 shadow card col-md-4"
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
            <span>Supprimer</span>
          </button>
        </div>
        <router-link
          class="absolute inset-0 opacity-0"
          :to="{ name: 'users.show', params: { id: user.id } }"
        ></router-link>
      </article>
    </section>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

// Protection des composants, utile si vous voulez faire un appel ajax avant que la page ne s'affiche et l'afficher uniquement quant la requete AJAX est terminer.
// A eviter si votre composant à des props
// similaire à beforeEnteer des routes
onBeforeRouteLeave((route, redirect, next) => {
  const confirm = window.confirm("Voulez-vous vraiment quitter ?");
  if (confirm) {
    next();
  } else {
    console.log(route, redirect);
  }
});
const users = ref([]);
const loading = ref(false);
const instance = reactive(
  axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  })
);
const save = (user) => {
  loading.value = user.id;
  instance
    .put("/users/" + user.id, user)
    .then((response) => {
      console.log(response);
      loading.value = false;
    })
    .catch((err) => {
      console.log(err);
      loading.value = false;
    });
};
const destroy = (user) => {
  loading.value = user.id;
  instance
    .delete("users/" + user.id)
    .then((res) => {
      loading.value = false;
      console.log(res);
      users.value = users.value.filter((d) => d.id !== user.id);
    })
    .catch((err) => {
      loading.value = false;
      console.log(err);
    });
};

onMounted(() => {
  instance
    .get("users")
    .then(({ data }) => {
      users.value = data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
