<template>
   <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link :to="{name:'home'}" class="nav-link px-2 link-secondary">Home</router-link></li>
        <li><router-link :to="{name:'blog'}" class="nav-link px-2 link-secondary">Blog</router-link></li>
        <li><router-link to="/contact" class="nav-link px-2 link-secondary">Contact</router-link></li>
        <li><router-link to="/article/1" class="nav-link px-2 link-secondary">Article</router-link></li>
      </ul>
    </header>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
</style>