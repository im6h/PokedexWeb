// TODO: style màu cho type của pokemon : pass
//  25/7: style ảnh lên chính giữa, còn thống tin xuống dưới

<template>
  <div class="container">
    <app-nav></app-nav>
    <div class="container-fluid">
      <transition name="fade" appear>
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
      pokemon: {},
      type:{
        "Fire":"#FF6144",
        "Water":"#52A9FF",
        "Ghost": "#7D7DC5",
        "Grass":"#8CD46F",
        "Steel":"#B7B7C5",
        "Dragon":"#8C7DF1",
        "Ground":"#E2C56F",
        "Electric":"#FFD452",
        "Dark":"#8C6F61",
        "Normal": "#B7B7A9",
        "Psychic":"#FF6FA9",
        "Bug":"#B7C544",
        "Rock":"#C5B77D",
        "Fighting":"#C56F61",
        "Ice": "#7DD4FF",
        "Flying":"#98A7FF",
        "Poison":"#B76FA9",
        "Fairy":"#F1A9F1",
      },
    };
  },
  computed: {
    getPokemon() {
      return this.$store.getters.pokemon;
    },
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
.custom{
  width: 6rem;
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
