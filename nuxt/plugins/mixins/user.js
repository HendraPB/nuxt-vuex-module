import Vue from 'vue';

import { mapGetters } from 'vuex';

const Auth = {
    install(Vue, options) {
        Vue.mixin({
            computed: {
                ...mapGetters(['user', 'authenticated'])
            }
        })
    }
}

Vue.use(Auth);