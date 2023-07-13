<template>
  <div class="flex items-center my-1">
    <input
      type="search"
      @keydown.enter="sendvalue"
      name="search"
      class="p-2 my-1 border border-gray-300 rounded rounded-r-none shadow outline-none input input-bordered"
      v-model.trim="input"
    />
    <button
      type="button"
      class="rounded-l-none btn btn-secondary"
      @click="sendvalue"
    >
      Seach
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits<(e: "sendvalue", value: string) => void>();
const props = defineProps({
  searchValue: {
    type: String,
  },
});
const input = ref(props.searchValue);
const sendvalue = () => {
  emit("sendvalue", input.value);
  console.log(input.value);
  input.value = "";
};
</script>
