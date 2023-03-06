<template>
  <div class="container">
    <div class="row gap-3">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="sr-pnly"></span>
      </div>
      <button type="button" @click="fetchUsers">
        Charger les utilisateurs
      </button>
      <div class="card col-md-3 shadow" v-for="user in users">
        <h2>{{ user.name }}</h2>
        <p>
          <a :href="'mailto:' + user.email">{{ user.email }}</a>
        </p>
        <p>
          <a :href="'tel:' + user.phone">{{ user.phone }}</a>
        </p>

        <p>
          <a :href="user.website">{{ user.website }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import useFetch from "../compositions/fetcher";
export default {
  setup(props) {
    const { loading, data, error, fetchData } = useFetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    return { loading, users: data, error, fetchUsers: fetchData };
  },
};
</script>
