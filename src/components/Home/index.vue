<template>
  <div class="container">
    <app-nav />
    <div class="container">
      <div v-for="pokedex in getPokedex" :key="pokedex.id">
        <div class="row" id="item">
          <div v-for="pokemon in pokedex" :key="pokemon.id">
            <router-link :to="'/'+pokemon.id">
              <app-item :pokemon="pokemon"></app-item>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from "@/components/Header/navbar";
import AppItem from "@/components/Item/item";
import AppFooter from "@/components/Footer/footer"
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    AppNav,
    AppItem,
    AppFooter
  },
  data() {
    return {
      pokedex: []
    };
  },
  computed: mapGetters(["getPokedex"]),
  methods: {
    ...mapActions(["fetchPokedex"])
  },
  created() {
    this.fetchPokedex();
  }
};
</script>

<style scoped>
#item {
  margin-top: 10px;
}
</style>
