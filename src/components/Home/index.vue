// TODO: làm cho sroll mượt hơn trong khi lăn chuột
<template>
  <div class="container" id="content">
    <div class="container" >
      <div class="container">
        <transition name="fade" appear>
          <nav class="conatainer navbar navbar-light bg-dark fixed-top">
            <app-nav class="w-25 text-light" />
            <form class="w-75">
              <div class="form-row">
                <div class="col-8">
                  <input
                    class="form-control"
                    type="search"
                    v-model="searchWord"
                    @input="filter"
                    placeholder="Search pokemon"
                  />
                </div>
              </div>
            </form>
          </nav>
        </transition>
      </div>
      <transition-group name="fade" tag="div" class="row justify-content-center custom">
        <div v-for="pokemon in filterPokemon" :key="pokemon.id" class="col-lg-3 w-100">
          <router-link :to="'/'+pokemon.num">
            <app-item :pokemon="pokemon" class="w-100"></app-item>
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
#content{
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
.custom{
  margin-top:80px;
}


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
.fade-move {
  transition: transform 0.2s;
}
</style>
