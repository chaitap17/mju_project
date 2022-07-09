<template>
  <v-app id="app" data-app >
    <AdminMenu></AdminMenu>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AdminMenu from "./AdminMenu";
import Footer from "./Footer.vue";



export default {
  name: "app",
  components: { AdminMenu, Footer },
};
</script>


