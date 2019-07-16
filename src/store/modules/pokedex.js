import axios from 'axios'
import { stat } from 'fs';

// state
const state = {
    pokedex:[]
}

// getter
const getters = {
    getPokedex: state => state.pokedex
}

// actions
const actions = {
    async fetchPokedex({commit}){
        const res = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').catch(err => console.log(err));
        commit('setPokedex',res.data);
    }
}

// mutations
const mutations = {
    setPokedex:(state,pokedex) => (state.pokedex = pokedex)
}

export default {
    state,
    getters,
    actions,
    mutations
}