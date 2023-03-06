<template>
  <div class="container">
    <div class="row gap-3">
      <div class="card col-md-3 shadow" v-for="user in users.data">
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
import { AxiosError } from "axios";

export default {
  data() {
    return {
      instance: this.axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        timeout: 5000,
      }),
      users: [],
      error: null,
      loading: false,
    };
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        this.users = await this.instance.get("users");
      } catch (error) {
        if (error instanceof AxiosError) {
          this.error = "L'utilisateur n'existe pas";
        } else {
          console.error(error);
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchUsers()
      .then((res) => {
        console.info(res);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
