<template>
  <div class="container">
    <div class="container" id="content">
      <app-nav />
      <div class="container">
        <transition name="fade" appear>
          <form>
            <div class="form-group row">
              <input
                class="form-control col-sm-10"
                type="search"
                v-model="searchWord"
                @input="filter"
                placeholder="Search pokemon"
              />
              <div class="col-sm-2">
                <button type="submit" class="btn btn-primary btn-block">Search</button>
              </div>
            </div>
          </form>
        </transition>
      </div>
      <transition-group name="fade" tag="div" class="row" >
        <div v-for="pokemon in filterPokemon" :key="pokemon.id">
          <router-link :to="'/'+pokemon.num">
            <app-item :pokemon="pokemon"></app-item>
          </router-link>
        </div>
      </transition-group>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from "@/components/Header/navbar";
import AppItem from "@/components/Item/item";
import AppFooter from "@/components/Footer/footer";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    AppNav,
    AppItem,
    AppFooter
  },
  data() {
    return {
      pokemons: []
    };
  },
  computed: {
    filterPokemon() {
      if (this.searchWord) {
        return this.$store.getters.filterPokemon;
      } else {
        return this.$store.getters.allPokemon;
      }
    },
    searchWord: {
      get() {
        return this.$store.getters.searchWord;
      },
      set(value) {
        this.$store.commit("SET_WORD", value);
      }
    }
  },
  methods: {
    filter() {
      if (this.searchWord) {
        return this.$store.dispatch("FILTERED_POKEMONS");
      } else {
        return this.$store.dispatch("ALL_POKEMON");
      }
    }
  },
  created() {
    return this.$store.dispatch("ALL_POKEMON");
  }
};
</script>

<style scoped>
#item {
  margin-top: 10px;
}
#form {
  margin-top: 5px;
}
#navbar {
  margin-top: 60px;
}
/* css animation */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 5s;
}
.fade-leave {
}
.fade-leave-active {
  opacity: 0;
}
.fade-move{
  transition: transform 1s;
}
</style>
