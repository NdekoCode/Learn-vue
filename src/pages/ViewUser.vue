<template>
  <div class="container px-4 mx-auto max-w-7xl lg:px-0">
    <div class="border border-gray-100 shadow-xl card card-side bg-base-100">
      <div class="card-body">
        <h2 class="card-title">{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <p>User id {{ id }}</p>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const { id } = defineProps({
  id: {
    type: String,
  },
});
const userId = ref(id || null);
const user = ref({});
onMounted(async () => {
  userId.value = id;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId.value
  );
  const resData = await res.json();
  if (res.status === 200) {
    user.value = resData;
  }
});
</script>
