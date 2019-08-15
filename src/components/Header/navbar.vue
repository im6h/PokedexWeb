<template>
  <div>
    <transition name="fade" appear>
      <h5>Pokedex </h5>
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
