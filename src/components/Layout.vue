<template class="flex flex-col min-h-screen">
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot />
  </main>
  <footer class="p-10 mt-auto footer bg-base-200 text-base-content">
    <slot name="footer"
      ><p>Valeur par defaut si on ne donne pas de slot pour le footer</p></slot
    >
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
