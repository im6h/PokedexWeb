import axios from 'axios'

// getter dung de render component 
const getters = {
    allPokemon: (state) => state.pokemons,
    getPokemon: (state) => state.pokemon,
    getSearchWord: (state) => state.searchWord,
    getFilteredWord: (state) => state.filteredPokemons

}
// action lang nghe su kien tu component roi commit voi mutation
const actions = {
    SET_POKEMON({ commit }, pokemon) {
        commit('SET_POKEMON', pokemon)
    },
    FILTERED_POKEMONS({ commit }, word) {
        commit('FILTERED_POKEMONS', word)
    }

}
// mutation trien khai nhung bien doi tu action roi gan cho state 
const mutations = {
    SET_POKEMON(state, pokemon) {
        state.pokemon = pokemon
    },
    FILTERED_POKEMONS(state, word) {
        if (word =="") {
            state.searchWord = null
            state.filteredPokemons = null
        } else {
            state.searchWord = word
            state.filteredPokemons = state.pokemons.filter(function (pokemon) {
                return pokemon.name.toLowerCase().includes(word)
            })
        }
    }
}
// state luu tru trang thai roi chuyen den cho getter
const state = {
    pokemons: [{
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "0.71 m",
        "weight": "6.9 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.69,
        "avg_spawns": 69,
        "spawn_time": "20:00",
        "multipliers": [1.58],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "next_evolution": [{
            "num": "002",
            "name": "Ivysaur"
        }, {
            "num": "003",
            "name": "Venusaur"
        }]
    }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "0.99 m",
        "weight": "13.0 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.042,
        "avg_spawns": 4.2,
        "spawn_time": "07:00",
        "multipliers": [
            1.2,
            1.6
        ],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "prev_evolution": [{
            "num": "001",
            "name": "Bulbasaur"
        }],
        "next_evolution": [{
            "num": "003",
            "name": "Venusaur"
        }],
        pokemon: {},
        searchWord: "",
        filteredPokemons: [],
    }]
}
export default {
        state,
        getters,
        actions,
        mutations
    }   