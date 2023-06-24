<template>
  <div class="container">
    <header
      class="flex-wrap py-3 mb-4 d-flex align-items-center justify-content-center justify-content-md-between border-bottom"
    >
      <router-link
        :to="{ name: 'home' }"
        class="mb-2 d-flex align-items-center col-md-3 mb-md-0 text-dark text-decoration-none"
      >
        <svg
          class="bi me-2"
          width="40"
          height="32"
          role="img"
          aria-label="Bootstrap"
        >
          <use xlink:href="#bootstrap"></use>
        </svg>
      </router-link>

      <ul class="mb-2 nav col-12 col-md-auto justify-content-center mb-md-0">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="px-2 nav-link link-secondary"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'blog' }"
            class="px-2 nav-link link-secondary"
            >Blog</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="px-2 nav-link link-secondary"
            >Contact</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'article', params: { id: 1 } }"
            class="px-2 nav-link link-secondary"
            >Article</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'composition' }"
            class="px-2 nav-link link-secondary"
            >composition</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'userscomp' }"
            class="px-2 nav-link link-secondary"
            >Comp users</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'user' }"
            class="px-2 nav-link link-secondary"
            >Users</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'settings' }"
            class="px-2 nav-link link-secondary"
            >Items</router-link
          >
        </li>
      </ul>
    </header>
  </div>
</template>
