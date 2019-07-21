<template>
  <div class="container">
    <app-nav></app-nav>
    <div class="container-fluid">
      <transition name="fade" appear>
        <div class="jumbotron">
          <div class="media" id="item" v-for="pokemon in getPokemon" :key="pokemon">
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
                  v-on:click="getEvoPokemon"
                  v-for="next_evolution in pokemon.next_evolution"
                  :key="next_evolution"
                >
                  <router-link :to="'/'+next_evolution.num" replace>[{{next_evolution.name}}]</router-link>
                </span>
              </p>
              <p>
                Prev evolution :
                <span
                  @click="getEvoPokemon"
                  v-for="prev_evolution in pokemon.prev_evolution"
                  :key="prev_evolution"
                >
                  <router-link :to="'/'+prev_evolution.num" replace>[{{prev_evolution.name}}]</router-link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </transition>
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
  methods: {
    getEvoPokemon() {
      location.reload();
    },
    goBack() {
      location.reload();
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
#item {
  margin-left: 10%;
}
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
