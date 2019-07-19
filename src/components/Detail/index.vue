<template>
  <div class="container">
    <app-nav />
    <div class="container-fluid">
      <div class="jumbotron">
        <div class="media" id="item" v-for="pokemon in getPokemon" :key="pokemon.id">
          <div class="align-self-center mr-3 text-center" :src="pokemon.img" :alt="pokemon.name">
            <img class="rounded" :src="pokemon.img" :alt="pokemon.name" />
          </div>
          <div class="media-body">
            <h5 class="mt-0 text-center">{{pokemon.name}}</h5>
            <p>Height: {{pokemon.height}}</p>
            <p>Weith: {{pokemon.weight}}</p>
            <p>
              Type :
              <span v-for="type in pokemon.type" :key="type">[{{type}}]</span>
            </p>
            <p>
              Weaknesses :
              <span
                v-for="weaknesses in pokemon.weaknesses"
                :key="weaknesses"
              >[{{weaknesses}}]</span>
            </p>
            <p>
              Next evolution :
              <span
                v-for="next_evolution in pokemon.next_evolution"
                :key="next_evolution"
              >
                <router-link
                  @click="getPokemon"
                  :to="'/'+next_evolution.num"
                >[{{next_evolution.name}}]</router-link>
              </span>
            </p>
            <p>
              Prev evolution :
              <span
                v-for="prev_evolution in pokemon.prev_evolution"
                :key="prev_evolution"
              >
                <router-link
                  @click="getPokemon"
                  :to="'/'+prev_evolution.num"
                >[{{prev_evolution.name}}]</router-link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppNav from "@/components/Header/navbar";
import AppFooter from "@/components/Footer/footer";
export default {
  name: "Detail",
  components: {
    AppNav,
    AppFooter
  },

  data() {
    return {
      pokemon: {}
    };
  },
  computed: {
    getPokemon() {
      return this.$store.getters.pokemon;
    }
  },
  created() {
    if (this.$route.params.id) {
      return (
        this.$store.commit("SET_ID", this.$route.params.id) &
        this.$store.dispatch("GET_POKEMON")
      );
    }
  }
};
</script>

<style scoped>
#item{
  margin-left: 10%;
}
</style>
