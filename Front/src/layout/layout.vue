<template>
  <v-app>
    <VerticalNavMenu></VerticalNavMenu>

    <v-app-bar app flat absolute color="transparent">
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->

          <v-spacer></v-spacer>
          <avatar-menu></avatar-menu>
        </div>
      </div>
    </v-app-bar>


    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <router-view></router-view>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AvatarMenu from "@/components/header-page/avatarMenu.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components: {
    AvatarMenu,
    Footer,
  },

};
</script>
