export default {
    ADD_TO_CART(state, { product, quantity }) {

        let productInCart = state.cart.find(item => {
            return item.product.id === product.id;
        });

        if (productInCart) {
            productInCart.quantity += quantity;
            return;
        }

        state.cart.unshift({
            product,
            quantity
        })
    },

    SET_CART(state, cartItems) {
        state.cart = cartItems;
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.cart = state.cart.filter(item => {
            return item.product.id !== product.id;
        })
    },

    CLEAR_CART_ITEMS(state) {
        state.cart = [];
    },

    SET_TEMP_CART(state, cartItem) {
        state.tempCart = cartItem;
    },

    CLEAR_TEMP_CART_ITEM(state) {
        state.tempCart = {};
    },
}