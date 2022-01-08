import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      visible: false,
      text: null,
      timeout: 6000,
      color: "info",
    },
    token: null,
    username: null,
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
     * Gets the current username.
     * @returns {*} The current username.
     */
    getUsername: (state) => state.username,
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
     * Sets the username of the user.
     * @param {*} state The store state.
     * @param {String} token The current username.
     */
    setUsername(state, username) {
      state.username = username;
    },
    /**
     * Sets the status of remember me.
     * @param {*} state The store state.
     * @param {Boolean} status The status.
     */
    setRememberMe(state, status) {
      state.rememberMe = status;
    },
    /**
     * Show snackbar.
     * @param {*} state The store state.
     * @param {object} set log to show in snackbar.
     */

    showSnackbar(state, payload) {
      state.snackbar.text = payload.text;
      state.snackbar.color = payload.color;

      if (payload.timeout) {
        state.snackbar.timeout = payload.timeout;
      }

      state.snackbar.visible = true;

      setTimeout(() => {
        this.commit("closeSnackbar");
        // Timeout is greater than the timeout, to keep the transition
      }, state.snackbar.timeout * 1.2);
    },
    /**
     * Show persistent snackbar .
     * @param {*} state The store state.
     * @param {object} set log to show in snackbar.
     */

    showPersistentSnackbar(state, payload) {
      state.snackbar.text = payload.text;
      state.snackbar.color = payload.color;
      state.snackbar.visible = true;
    },
    /**
     * close snackbar=> clear.
     * @param {*} state The store state.
     */

    closeSnackbar(state) {
      state.snackbar.visible = false;
      state.snackbar.timeout = -1;
      state.snackbar.text = null;
      state.snackbar.color = "";
    },
    /**
     * Show dialog .
     * @param {*} state The store state.
     * @param {object} set info to show in dialog.
     */

    showDialog(state, payload) {
      if (!state.dialog.visible) {
        state.dialog.context = payload.context;
        state.dialog.text = payload.text;
        state.dialog.title = payload.title;
        state.dialog.visible = true;
        state.dialog.data = payload.data;
      }
    },
    /**
     * close dialog => clear.
     * @param {*} state The store state.
     */
    closeDialog(state) {
      state.dialog.text = null;
      state.dialog.title = null;
      state.dialog.visible = false;
    },

  },
  actions: {},
  modules: {},
});
