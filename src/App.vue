<script setup>
import { ref } from "vue";
import Layout from "./components/Layout.vue";
import UsersComp from "./components/UsersComp.vue";
const isActive = ref(false);
const toggle = () => (isActive.value = !isActive.value);
</script>

<template>
  <Layout>
    <template v-slot:header>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="text-xl normal-case btn btn-ghost">LearnVue</a>
        </div>
        <div class="flex-none">
          <ul class="px-1 menu menu-horizontal">
            <li><a class="font-bold">Welcome</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul class="p-2 bg-base-100">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-slot:default>
      <button class="mb-3 normal-case btn btn-outline" @click="toggle">
        Toggle
      </button>
      <transition>
        <div
          class="block max-w-lg mb-3 rounded-lg min-h-[250px] min-w-[250px] bg-gray-400 mx-auto"
          v-show="isActive"
        ></div>
      </transition>
      <UsersComp />
    </template>
    <template v-slot:footer>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
          <div class="relative">
            <input
              type="text"
              placeholder="username@site.com"
              class="w-full pr-16 input input-bordered"
            />
            <button
              class="absolute top-0 right-0 rounded-l-none btn btn-primary"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.v-enter-from,
.v-leave-active {
  opacity: 0;
  transform: translateY(-5px);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s, transform 0.35s;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
