<script setup>
import { ref } from "vue";

const sexe = ref("male");
const province = ref("");
const about = ref("");
const jobs = ref([]);
const radios = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];
const options = [
  {
    label: "Nord-Kivu",
    value: "nord-kivue",
  },
  {
    label: "Sud-Kivu",
    value: "sud-kivue",
  },
  {
    label: "Maniema",
    value: "maniema",
  },
];
const checkbox = [
  {
    value: "React.js Developer",
    label: "React",
  },
  {
    value: "Vue.js Developer",
    label: "Vue",
  },
  {
    value: "Angular Developer",
    label: "Angular",
  },
];
const saveForm = () => {
  console.log(sexe.value, jobs.value, province.value);
};
</script>
<template>
  <form @submit.prevent="saveForm">
    <div class="mb-3">
      <label for="firstName">firstName</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        class="px-2 py-2 transition-all border border-gray-300 rounded shadow input input-bordered"
      />
    </div>
    <div class="mb-3">
      <label for="lastName">lastName</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        class="px-2 py-2 transition-all border border-gray-300 rounded shadow input input-bordered"
      />
    </div>
    <div class="mb-3">
      <p class="my-1">Sexe</p>

      <template v-for="item of radios">
        <label :for="item.label">{{ item.label }}</label>
        <input
          type="radio"
          class="radio"
          name="sexe"
          v-model="sexe"
          :id="item.label"
          :value="item.value"
          :checked="item.value === sexe"
        />
      </template>
    </div>

    <div class="mb-3">
      ]
      <template v-for="item of checkbox">
        <label for="react">{{ item.label }}</label>
        <input
          type="checkbox"
          class="checkbox"
          name="job"
          v-model="jobs"
          :id="item.label"
          :value="item.value"
        />
      </template>
    </div>
    <div class="mb-3">
      <label for="province">Province</label>
      <select
        class="select select-bordered"
        name="province"
        id="province"
        v-model="province"
      >
        <option value="" disabled selected>Select your province</option>
        <option v-for="option of options" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="p-1 mb-3">
      <label for="about" class="mb-3">Tell us something about you</label>
      <textarea
        name="about"
        id="about"
        placeholder="Tell us something about you"
        class="w-full p-3 border border-gray-100 rounded-md outline-none textared textarea-bordered"
        cols="5"
        rows="5"
        v-model="about"
      ></textarea>
    </div>
    <button class="btn btn-secondary">Submit</button>
  </form>
</template>
