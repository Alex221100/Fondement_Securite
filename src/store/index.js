import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    email: null,
    rememberMe: false,
  },
  getters: {
    /**
     * Gets the authentication token.
     * @returns {String} The authentication token.
     */
    getToken: (state) => state.token,
    /**
     * Gets auth status current user.
     * @returns {boolean} auth status.
     */
    isAuthenticated: (state) => state.token != null && state.token.length > 0,
    /**
     * Gets the current email.
     * @returns {*} The current email.
     */
    getEmail: (state) => state.email,
    /**
       * Gets the status of remember me.
       * @returns {Boolean} The status.
       */
    getRememberMe: (state) => state.rememberMe,
  },
  mutations: {
    /**
     * Sets the authentication token.
     * @param {*} state The store state.
     * @param {String} token The authentication token.
     */
    setToken(state, token) {
      state.token = token;
    },
    /**
     * Removes the authentication token.
     * @param {*} state The store state.
     */
    removeToken(state) {
      state.token = null;
    },
    /**
     * Sets the email of the user.
     * @param {*} state The store state.
     * @param {String} token The current email.
     */
    setEmail(state, email) {
      state.email = email;
    },
    /**
     * Sets the status of remember me.
     * @param {*} state The store state.
     * @param {Boolean} status The status.
     */
    setRememberMe(state, status) {
      state.rememberMe = status;
    },
  },
  actions: {},
  modules: {},
});
