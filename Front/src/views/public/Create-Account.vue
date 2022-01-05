<template>
  <v-app>
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

              <div class="d-flex align-center justify-space-between flex-wrap">
                <v-checkbox
                  label="Remember Me"
                  v-model="remindEmailAdress"
                  hide-details
                  class="me-3 mt-1"
                >
                </v-checkbox>
              </div>

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
import store from "@/store/index.js";
import authenticationService from "@/services/authentication/authenticationService";

// eslint-disable-next-line object-curly-newline
export default {
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
        this.$router.push({ name: "login" });
      } catch (error) {
        console.log(error);
        //Logger.showError("Login ou mot de passe incorrect");
      }
    },
  },
  mounted() {
    this.remindEmailAdress = store.getters.getRememberMe;
    if (this.remindEmailAdress) {
      this.email = store.getters.getEmail;
    }
  },
};
</script>

<style lang="scss">
@import "~@/plugins/vuetify/default-preset/preset/pages/auth.scss";
</style>