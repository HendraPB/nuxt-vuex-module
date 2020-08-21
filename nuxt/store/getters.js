export default {
    authenticated(state) {
        return state.auth.loggedIn;
    },
    
    user(state) {
        return state.auth.user;
    }
}