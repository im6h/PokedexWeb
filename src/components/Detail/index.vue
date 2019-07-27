
<template>
  <div class="container-fluid">
    <app-nav class="font-weight-bold mb-5 mt-2"></app-nav>
    <div class="container">
      <transition name="fade" appear>
        <div class="col" >
          <div class v-for="pokemon in getPokemon" :key="pokemon.id">
            <div class="text-center custom-img" >
              <img class="rounded" :src="pokemon.img" :alt="pokemon.name" />
            </div>
            <div class="col jumbotron custom-info">
              <h3 class="mt-0 text-center">{{pokemon.name}}</h3>
              <p>Height: {{pokemon.height}}</p>
              <p>Weith: {{pokemon.weight}}</p>
              <p>
                Type:
                <span
                  v-for="typePokemon in pokemon.type"
                  :key="typePokemon.name"
                  class="badge badge-pill m-1 text-light custom"
                  :style="{backgroundColor:type[typePokemon]}"
                >
                  <h6>{{typePokemon}}</h6>
                </span>
              </p>
              <p>
                Weaknesses:
                <span
                  v-for="weaknessesPokemon in pokemon.weaknesses"
                  :key="weaknessesPokemon.name"
                  class="badge badge-pill m-1 text-light custom"
                  :style="{backgroundColor:type[weaknessesPokemon]}"
                >
                  <h6>{{weaknessesPokemon}}</h6>
                </span>
              </p>
              <p>
                Prev evolution:
                <span
                  @click="getEvoPokemon"
                  v-for="prev_evolution in pokemon.prev_evolution"
                  :key="prev_evolution.pokemon"
                  class="btn btn-danger m-2"
                >
                  <router-link
                    :to="'/'+prev_evolution.num"
                    replace
                    class="text-light"
                  >{{prev_evolution.name}}</router-link>
                </span>
              </p>
              <p>
                Next evolution:
                <span
                  v-on:click="getEvoPokemon"
                  v-for="next_evolution in pokemon.next_evolution"
                  :key="next_evolution.pokemon"
                  class="btn btn-success m-2"
                >
                  <router-link
                    :to="'/'+next_evolution.num"
                    replace
                    class="text-light"
                  >{{next_evolution.name}}</router-link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <app-footer class="fixed-bottom" />
  </div>
</template>

<script>
import AppNav from "@/components/Header/navbar";
import AppFooter from "@/components/Footer/footer";
import {mixins} from "../../mixins/mixin.js";
export default {
  name: "Detail",
  mixins:[mixins],
  components: {
    AppNav,
    AppFooter
  },

  computed: {
    getPokemon() {
      return this.$store.getters.pokemon;
    }
  },
  methods: {
    getEvoPokemon() {
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
.custom {
  width: 6rem;
}
.custom-img {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;
  z-index: 2;
}
.custom-info {
  position: absolute;
  z-index: 1;
  margin-top: 4rem;
}
.custom-content{
  background-color: black;
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
