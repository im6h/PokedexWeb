import axios from 'axios'

// getter dung de render component 
const getters = {
    allPokemon(state) {
        return state.pokemons
    },
    searchWord(state) { return state.searchWord },
    filterPokemon(state) { return state.filterPokemon },
    pokemon(state) { return state.pokemon },
    id(state) { return state.id }
}
// action lang nghe su kien tu component roi commit voi mutation
const actions = {
    async ALL_POKEMON({ commit }) {
        const res = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
        commit("ALL_POKEMON", res.data.pokemon)
    },

    async FILTERED_POKEMONS({ state, commit }) {
        const res = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
        commit("FILTERED_POKEMONS", res.data.pokemon.filter(function (pokemon) {
            return pokemon.name.toLowerCase().includes(state.searchWord)
        }))
    },

    async GET_POKEMON({ state, commit }) {
        const res = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
        commit("GET_POKEMON", res.data.pokemon.filter(function (pokemon) {
            return pokemon.num == state.id
        }))
    }


}
// mutation trien khai nhung bien doi tu action roi gan cho state 
const mutations = {
    ALL_POKEMON(state, pokemons) {
        state.pokemons = pokemons
    },
    SET_WORD(state, word) {
        state.searchWord = word
    },
    FILTERED_POKEMONS(state, pokemons) {
        state.filterPokemon = pokemons
    },
    GET_POKEMON(state, pokemon) {
        state.pokemon = pokemon
    },
    SET_ID(state,id){
        state.id = id
    }
}
// state luu tru trang thai roi chuyen den cho getter
const state = {

    searchWord: "",
    pokemons: [],
    filterPokemon: [],
    pokemon: {},
    id: ""
}
export default {
    state,
    getters,
    actions,
    mutations
}   