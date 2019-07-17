<template>
  <div class="container d-flex justify-content-around">
    <div>
      <img :src="pokemon.img" />
      <p >{{pokemon.name}}</p>
        
    </div>
    
  </div>
</template>

<script>
export default {
  name: "item",
  props:['pokemon']
};
</script>

<style scoped>
</style>
