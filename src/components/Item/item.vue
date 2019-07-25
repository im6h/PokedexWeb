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
export default {
  name: "item",
  props: ["pokemon"],
  data(){
    return{
      type: {
        Fire: "#FF6144",
        Water: "#52A9FF",
        Ghost: "#7D7DC5",
        Grass: "#8CD46F",
        Steel: "#B7B7C5",
        Dragon: "#8C7DF1",
        Ground: "#E2C56F",
        Electric: "#FFD452",
        Dark: "#8C6F61",
        Normal: "#B7B7A9",
        Psychic: "#FF6FA9",
        Bug: "#B7C544",
        Rock: "#C5B77D",
        Fighting: "#C56F61",
        Ice: "#7DD4FF",
        Flying: "#98A7FF",
        Poison: "#B76FA9",
        Fairy: "#F1A9F1"
      }
    }
  }
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
