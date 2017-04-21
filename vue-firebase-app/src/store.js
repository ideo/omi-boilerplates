import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authProfile: null,
    },

    mutations: {
        authProfile (state, payload) {
            state.authProfile = payload;
        }
    }
});
