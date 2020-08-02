import Product from "../../../apis/Product";

export default {
    getProducts({ commit }) {
        Product.all().then(response => {
            commit('SET_PRODUCTS', response.data);
        })
    },

    getProduct({ commit }, productId) {
        Product.show(productId).then(response => {
            commit('SET_PRODUCT', response.data);
        })
    }
}