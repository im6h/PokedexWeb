<template>
  <div>
    <transition name="fade" appear>
      <h2 class="navbar-brand text-warning">Pokedex version 1</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
/* css animation */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  opacity: 0;
}
</style>
