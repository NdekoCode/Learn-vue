<template>
  <div class="container">
    <div class="row">
      <button class="btn btn-secondary" type="button" @click="getUser">
        Charger les utilisateurs
      </button>
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="sr-pnly">Loading...</span>
      </div>
      <Search @sendvalue="searchUser" :searchValue="searchValue" />
      <div class="flex flex-wrap gap-3 mt-5">
        <div
          class="flex flex-col p-3 rounded shadow-lg"
          v-for="user in filteredUsers"
        >
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

<script setup>
import { ref, watch } from "vue";
import useFetch from "../compositions/fetcher";

import Search from "./Search.vue";
const filteredUsers = ref([]);
const searchValue = ref("");

const {
  loading,
  data: users,
  error,
  fetchData: fetchUsers,
} = useFetch("https://jsonplaceholder.typicode.com/users");
const getUser = async () => {
  await fetchUsers();
  filteredUsers.value = users.value;
};
const searchUser = (userName) => {
  searchValue.value = userName;
};

watch(searchValue, (newValue, oldValue) => {
  console.log(newValue, oldValue);
  if (newValue.length > 1) {
    filteredUsers.value = users.value.filter((u) => u.name.includes(newValue));
  } else {
    filteredUsers.value = users.value;
  }
});
</script>
