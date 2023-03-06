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
import useFetch from "../compositions/fetcher";
export default {
  setup(props) {
    const { loading, users, error, fetchUsers } = useFetch();
    return { loading, users, error, fetchUsers };
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
