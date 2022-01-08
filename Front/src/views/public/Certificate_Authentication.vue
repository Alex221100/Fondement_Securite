<template>
  <v-app>
    <SnackBar />
    <div class="auth-wrapper auth-v1">
      <div class="auth-inner">
        <v-card class="auth-card">
          <!-- title -->
          <v-card-text>
            <p
              class="
                text-2xl
                font-weight-semibold
                text--primary
                mb-2
                text-center
              "
            >
              Verificate certificate
            </p>
          </v-card-text>

          <!-- login form -->
          <v-card-text>
            <v-btn block color="primary" class="mt-6" @click="login">
              Login
            </v-btn>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
import Logger from "@/services/utils/logger.js";
import SnackBar from "@/components/SnackBar.vue";
import authenticationService from "@/services/authentication/authenticationService";

export default {
  components: { SnackBar },
  data() {
    return {
      file: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await authenticationService.loginCertificate();
        Logger.showError("The certificate is not valid");
      } catch (error) {
        Logger.showError("The certificate is not valid");
        //Logger.showError("Login ou mot de passe incorrect");
      }
      Logger.showSuccess("Vous êtes connectés");
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style lang="scss">
@import "~@/plugins/vuetify/default-preset/preset/pages/auth.scss";
</style>