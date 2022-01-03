import axios from "axios";

/**
 * Interceptor plugin
 */
export default {
  /**
   * Installs the interceptor plugin.
   */
  install() {
    // Set the authentication token for each axios request
    axios.interceptors.request.use(
      function(config) {
        config.headers["x-service-from"] = process.env.VUE_APP_SERVICE_ID;
        return config;
      },
      function(err) {
        return Promise.reject(err);
      }
    );
  },
};
