import Vue from 'vue'
import Vuex from 'vuex'
import Pokedex from './modules/pokedex'

// load vuex
Vue.use(Vuex);

// create store

export default new Vuex.Store({
    modules:{
        Pokedex
    }
})