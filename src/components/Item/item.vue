<template>
  <div class="container d-flex justify-content-around">
    <transition name="fade" appear>
      <div class="jumbotron" :style="{background: type[pokemon.type[0]]}">
        <p class="text-light">#{{pokemon.num}}</p>
        <img :src="pokemon.img" />
        <p class="text-light">{{pokemon.name}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixins } from '../../mixins/mixin';
export default {
  name: "item",
  props: ["pokemon"],
  mixins:[
    mixins
  ]
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
