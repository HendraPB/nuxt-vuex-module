// import Vue from 'vue';
import Vuex from "vuex";

// Vue.use(Vuex);

import state from "./state";
import getters from './getters';
import mutations from "./mutations";
import actions from "./actions";

import product from "./modules/product";
import cart from "./modules/cart";

export const store = () => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
        actions,

        modules: {
            product,
            cart
        }
    })
}

export default store