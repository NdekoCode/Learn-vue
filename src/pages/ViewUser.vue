<template>
  User id {{ id }}
  <div class="shadow-xl card card-side bg-base-100">
    <div class="card-body">
      <h2 class="card-title">{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Watch</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(123);
const user = ref({});
onMounted(async () => {
  id.value = route.params.id;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id.value
  );
  const resData = await res.json();
  if (res.status === 200) {
    user.value = resData;
  }
});
</script>
