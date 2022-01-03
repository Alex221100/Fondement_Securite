<template>
  <v-app>
    <div class="auth-wrapper auth-v1">
      <div class="auth-inner">
        <v-card class="auth-card">

          <!-- title -->
          <v-card-text>
            <p class="text-2xl font-weight-semibold text--primary mb-2 text-center">
              Welcome 👋🏻
            </p>
            <p class="mb-2">
              Please sign-in to your account and start the adventure
            </p>
          </v-card-text>

          <!-- login form -->
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="email"
                outlined
                label="Email"
                hide-details
                class="mb-3"
                :rules="[emailRules]"
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
                <v-checkbox label="Remember Me" v-model="remindEmailAdress" hide-details class="me-3 mt-1">
                </v-checkbox>

              </div>

              <v-btn block color="primary" class="mt-6" @click="login">
                Login
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
// eslint-disable-next-line object-curly-newline
export default {
  data: () => ({
      valid : true,
      isPasswordVisible : false,
      email : "",
      password : "",
      remindEmailAdress : ""
    }),

  methods: {
    passwordRules(password) {
      if (!password) return "Le mot de passe est requis";
      return true;
    },
    emailRules(email) {
      if (!email) return "L'email est requis";
      return true;
    },

    login() {
      this.$refs.form.validate();
      try {
        let result = false;
        if (
          this.email.includes("@progress-it.fr") &&
          this.password == "123456"
        ) {
          result = true;
        }


        if (result) {
          store.commit("setRememberMe", this.remindEmailAdress);
          store.commit("setEmail", this.email);
          this.$router.push({ name: "dashboard" });
        }
      } catch (error) {
        console.log(error);
        //Logger.showError(this.$t("LOGIN.AUTH_FAILED"));
      }
    },
  },
  mounted() {
    this.remindEmailAdress = store.getters.getRememberMe;
    if (this.remindEmailAdress){
      this.email = store.getters.getEmail;
    }
  },

};
</script>

<style lang="scss">
@import "~@/plugins/vuetify/default-preset/preset/pages/auth.scss";
</style>
