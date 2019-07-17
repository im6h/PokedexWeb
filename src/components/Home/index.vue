<template>
  <div class="container">
    <app-nav />
    <div class="container" id="content">
      <div class="container">
        <form>
          <div class="form-group row">
            <input
              class="form-control col-sm-10"
              type="search"
              v-model="searchWord"
              placeholder="Search pokemon"
            />
            <div class="col-sm-2">
              <button type="submit" class="btn btn-primary btn-block">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div class="row" id="item">
        <div v-for="pokemon in filterPokemon" :key="pokemon.id">
          <router-link :to="'/'+pokemon.id">
            <app-item :pokemon="pokemon"></app-item>
          </router-link>
          <hr class="my-4" />
        </div>
      </div>
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
      pokemons: [],
    };
  },
  computed: {
    filterPokemon(){
      return this.$store.getters.getFilteredWord|| this.$store.getters.allPokemon
    },
    searchWord:{
      get(){
        return this.$store.state.searchWord
      },
      set(value){
        this.$store.dispatch('FILTERED_POKEMONS',value)
      }
    }
  },
  
};
</script>

<style scoped>
#item {
  margin-top: 10px;
}
</style>
