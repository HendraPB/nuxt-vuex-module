// import Vue from 'vue';
import Vuex from "vuex";

import state from "./state";
import getters from './getters';
import mutations from "./mutations";
import actions from "./actions";

import product from "./modules/product";
import cart from "./modules/cart";
import notification from "./modules/notification";
import validation from "./modules/validation";


export const store = () => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
        actions,

        modules: {
            product,
            cart,
            notification,
            validation
        }
    })
}

export default store