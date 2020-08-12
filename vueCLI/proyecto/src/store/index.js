import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        frutas: [
            {nombre: 'Manzana', cantidad: 1},
            {nombre: 'Pera', cantidad: 2},
            {nombre: 'Naranja', cantidad: 0},
        ]
    },
    mutations: {

    },
    actions: {

    }
})