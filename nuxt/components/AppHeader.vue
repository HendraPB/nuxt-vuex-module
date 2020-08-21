<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <nuxt-link to="/" class="nav-item nav-link active">Home</nuxt-link>
          <template  v-if="authenticated">
            <nuxt-link to="/dashboard" class="nav-item nav-link active">Dashboard</nuxt-link>
            <a @click.prevent="logout" href="#" class="nav-item nav-link active">Logout</a>
          </template>
          <template v-else>
            <nuxt-link to="/auth/login" class="nav-item nav-link active">Login</nuxt-link>
            <nuxt-link to="/auth/register" class="nav-item nav-link active">Register</nuxt-link>
          </template>
        </div>

        <div v-if="authenticated">
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{ cartItemCount }} Cart</button>
            <div @click="$event.stopPropagation()">
              <mini-cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MiniCart from "./MiniCart";

export default {
  components: { MiniCart },

  computed: {
    ...mapGetters("cart", ["cartItemCount"])
  },

  methods: {
    ...mapActions("cart", ["clearStateCartItems"]),

    async logout() {
      try {
        await this.$auth.logout();
      } catch(e) {
        return;
      }
      this.clearStateCartItems();
    }
  }
};
</script>

<style>
</style>