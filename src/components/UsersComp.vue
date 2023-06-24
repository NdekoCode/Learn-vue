<template>
  <div class="container">
    <div class="row">
      <button class="btn btn-secondary" type="button" @click="fetchUsers">
        Charger les utilisateurs
      </button>
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="sr-pnly">Loading...</span>
      </div>
      <div class="flex flex-wrap gap-3 mt-5">
        <div class="flex flex-col p-3 rounded shadow-lg" v-for="user in users">
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
  </div>
</template>

<script>
import useFetch from "../compositions/fetcher";
export default {
  setup(props) {
    const {
      loading,
      data,
      error,
      fetchData: fetchUsers,
    } = useFetch("https://jsonplaceholder.typicode.com/users");
    return { loading, users: data, error, fetchUsers };
  },
};
</script>
