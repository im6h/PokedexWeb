<template>
  <div class="container d-flex justify-content-around">
    <transition name="fade" appear>
      <div class="jumbotron">
        <img :src="pokemon.img" />
        <p>{{pokemon.name}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["pokemon"]
};
</script>

<style scoped>
/* css animation */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave {
}
.fade-leave-active {
  opacity: 0;
}
</style>
