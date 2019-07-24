// TODO: style màu cho type của pokemon 

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
                Type :
                <span
                  v-for="typePokemon in pokemon.type"
                  :key="typePokemon.name"
                  class="badge badge-pill m-2 text-dark "
                >
                  <h6>{{typePokemon}}</h6>
                </span>
              </p>
              <p>
                Weaknesses :
                <span
                  v-for="weaknessesPokemon in pokemon.weaknesses"
                  :key="weaknessesPokemon"
                  class="badge badge-pill m-2 text-dark"
                >
                  <h6>{{weaknessesPokemon}}</h6>
                </span>
              </p>
              <p>
                Next evolution :
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
                Prev evolution :
                <span
                  @click="getEvoPokemon"
                  v-for="prev_evolution in pokemon.prev_evolution"
                  :key="prev_evolution.pokemon"
                  class="btn btn-success m-2"
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
      type:"",
    };
  },
  computed: {
    getPokemon() {
      return this.$store.getters.pokemon;
    },
    getType() {
      switch (this.type) {
        case "Fire":
          return {
            backgroundColor: "#ff6900"
          };
          break;
        case "Water":
          return {
            backgroundColor: "#14b9ff"
          };
          break;
        case "Ghost":
          return {
            backgroundColor: "#55508e"
          };
          break;
        case "Grass":
          return {
            backgroundColor: "#93c606"
          };
          break;
        case "Steel":
          return {
            backgroundColor: "#aac8f0"
          };
          break;
        case "Dragon":
          return {
            backgroundColor: "#4468be"
          };
          break;
        case "Ground":
          return {
            backgroundColor: "#c8a24d"
          };
          break;
        case "Electric":
          return {
            backgroundColor: "#ffe100"
          };
          break;
        case "Dark":
          return {
            backgroundColor: "#787878"
          };
          break;
        case "Normal":
          return {
            backgroundColor: "#535a61"
          };
          break;
        case "Pyschic":
          return {
            backgroundColor: "#e083ce"
          };
          break;
        case "Bug":
          return {
            backgroundColor: "#2d7c36"
          };
          break;
        case "Rock":
          return {
            backgroundColor: "#b38b63"
          };
          break;
        case "Fighting":
          return {
            backgroundColor: "#cb6202"
          };
          break;
        case "Flying":
          return {
            backgroundColor: "#78dcff"
          };
          break;
        case "Poison":
          return {
            backgroundColor: "#cf8acf"
          };
          break;
          case "Ice":
            return{
              backgroundColor: "#14e8f2"
            }
        default:
          break;
      }
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
.type-fire {
  background: #ff6900;
}
.type-normal {
  background: #535a61;
}
.type-water {
  background: #14b9ff;
}
.type-grass {
  background: #93c606;
}
.type-electric {
  background: #ffe100;
}
.type-ice {
  background: #14e8f2;
}
.type-fighting {
  background: #cb6202;
}
.type-poison {
  background: #cf8acf;
}
.type-ground {
  background: #c8a24d;
}
.type-flying {
  background: #78dcff;
}
.type-bug {
  background: #2d7c36;
}
.type-pyschic {
  background: #e083ce;
}
.type-rock {
  background: #b38b63;
}
.type-ghost {
  background: #55508e;
}
.type-dragon {
  background: #4468be;
}
.type-dark {
  background: #787878;
}
.type-steel {
  background: #aac8f0;
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
