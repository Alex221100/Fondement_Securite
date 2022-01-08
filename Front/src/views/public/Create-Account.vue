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
              Create Account
            </p>
            <p class="mb-2">Please enter a username and a password</p>
          </v-card-text>

          <!-- login form -->
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="username"
                outlined
                label="Username"
                hide-details
                class="mb-3"
                :rules="[usernameRules]"
              ></v-text-field>

              <v-text-field
                v-model="password"
                outlined
                :type="isPasswordVisible ? 'text' : 'password'"
                label="Password"
                :append-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                hide-details
                @click:append="isPasswordVisible = !isPasswordVisible"
                :rules="[passwordRules]"
              ></v-text-field>

              <v-btn block color="primary" class="mt-6" @click="register">
                Create Account
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
import authenticationService from "@/services/authentication/authenticationService";
import Logger from "@/services/utils/logger.js";
import SnackBar from "@/components/SnackBar.vue";

// eslint-disable-next-line object-curly-newline
export default {
  components: { SnackBar },
  data: () => ({
    valid: true,
    isPasswordVisible: false,
    username: "",
    password: "",
    remindEmailAdress: "",
  }),

  methods: {
    passwordRules(password) {
      if (!password) return "A password is required";
      return true;
    },
    usernameRules(email) {
      if (!email) return "A username is required";
      return true;
    },

    async register() {
      this.$refs.form.validate();

      try {
        const userInfo = {
          username: this.username,
          password: this.password,
        };

        const response = await authenticationService.register(userInfo);

        console.log(response);
        switch (response.status) {
          case 200:
            Logger.showSuccess("Creation ok ");
            this.$router.push({ name: "login" });
            break;
          case 400:
            Logger.showError("An error has occured");
            break;
          case 500:
            Logger.showError("An user with this username already exists");
            break;
        }
      } catch (error) {
        console.log(error);
        Logger.showError("An error has occured");
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@/plugins/vuetify/default-preset/preset/pages/auth.scss";
</style>