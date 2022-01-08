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

          <!-- Upload File-->
          <div class="container">
            <div class="large-12 medium-12 small-12 cell">
              <label
                >File
                <input
                  type="file"
                  id="file"
                  ref="file"
                  @change="handleFileUpload"
                />
              </label>
            </div>
          </div>

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
        const response = await authenticationService.loginCertificate(
          this.file
        );
        console.log(response);
        const status = 200;
        switch (status) {
          case 200:
            Logger.showSuccess("Vous êtes connectés");
            this.$router.push({ name: "Home" });
            break;
          case 400:
            break;
          case 500:
            break;
        }
      } catch (error) {
        console.log(error);
        //Logger.showError("Login ou mot de passe incorrect");
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style lang="scss">
@import "~@/plugins/vuetify/default-preset/preset/pages/auth.scss";
</style>