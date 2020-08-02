<template>
  <div id="app">
    <app-header />
    <div class="container">
      <Nuxt />
    </div>

    <notifications-list />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import NotificationsList from "@/components/NotificationsList";
export default {
  name: "app",
  components: {
    AppHeader,
    NotificationsList
  }
};
</script>