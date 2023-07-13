<template class="flex flex-col min-h-screen">
  <header>
    <slot name="header"></slot>
  </header>
  <slot name="main"></slot>
  <footer class="p-10 mt-auto footer bg-base-200 text-base-content">
    <slot name="footer"></slot>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
