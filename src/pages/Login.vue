<template>
  <div
    class="flex flex-col justify-center min-h-screen bg-gray-100 flex-center sm:py-12"
  >
    <div class="p-10 mx-auto xs:p-0 md:w-full flex-center md:max-w-md">
      <h1 class="mb-5 text-2xl font-bold text-center">se connecter</h1>
      <form
        method="POST"
        @submit.prevent="login"
        class="w-full bg-white divide-y divide-gray-200 rounded-lg shadow"
      >
        <div class="px-5 py-7">
          <label class="block pb-1 text-sm font-semibold text-gray-600"
            >E-mail</label
          >
          <input
            type="text"
            class="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg outline-none"
          />
          <label class="block pb-1 text-sm font-semibold text-gray-600"
            >Password</label
          >
          <input
            type="text"
            class="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg outline-none"
          />
          <button
            type="submit"
            class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span class="inline-block mr-2">Se connecter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const login = () => {
  localStorage.setItem("token", "Ndekocode");
  router.push("/");
};
</script>
