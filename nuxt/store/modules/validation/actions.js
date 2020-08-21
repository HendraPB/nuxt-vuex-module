export default {
    setErrors({ commit }, errors) {
        commit('SET_VALIDATION_ERRORS', errors);
    },

    clearErrors({ commit }) {
        commit('SET_VALIDATION_ERRORS', {});
    }
}