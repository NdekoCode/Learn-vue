<template>
  <div
    class="flex-shrink-0 p-3 d-flex flex-column bg-light"
    style="width: 280px"
  >
    <a
      href="/"
      class="mb-3 d-flex align-items-center mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul class="mb-auto nav nav-pills flex-column">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#home"></use>
          </svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#table"></use>
          </svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#grid"></use>
          </svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <button
        class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        @click.prevent="toggleMenu"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>mdo</strong>
      </button>
      <ul v-if="activeMenu">
        <li>
          <router-link class="dropdown-item" :to="{ name: 'home' }"
            >New project...</router-link
          >
        </li>
        <li>
          <router-link class="dropdown-item" :to="{ name: 'settings' }"
            >Settings</router-link
          >
        </li>
        <li>
          <router-link class="dropdown-item" :to="{ name: 'home' }"
            >Profile</router-link
          >
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <router-link class="dropdown-item" :to="{ name: 'home' }"
            >Sign out</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeMenu = ref(false);

const toggleMenu = () => {
  console.log("Hey");
  this.activeMenu = !this.activeMenu;
};
</script>
