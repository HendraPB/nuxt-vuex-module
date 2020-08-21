import Cart from "../../../apis/Cart";

export default {
    addProductToCart({ commit, dispatch }, { product, quantity }) {
        commit('ADD_TO_CART', { product, quantity });

        dispatch('notification/addNotification', {
            type: 'success',
            message: 'Product added to cart.'
        }, { root: true });

        Cart.store({
            product_id: product.id,
            quantity
        });
    },

    getCartItems({ commit }) {
        Cart.all().then(response => {
            commit('SET_CART', response.data);
        })
    },

    removeProductFromCart({ commit, dispatch }, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product);

        dispatch('notification/addNotification', {
            type: 'success',
            message: 'Product removed from cart.'
        }, { root: true });

        Cart.delete(product.id);
    },

    clearCartItems({ commit, dispatch }) {
        commit('CLEAR_CART_ITEMS');

        dispatch('notification/addNotification', {
            type: 'success',
            message: 'All products removed from cart.'
        }, { root: true });

        Cart.deleteAll();
    },

    clearStateCartItems({ commit, dispatch }) {
        commit('CLEAR_CART_ITEMS');
    }
}