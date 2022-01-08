<template>
  <v-container class="px-0 py-0">
    <v-main class="fill-height no-gutters">
      <v-card elevation="12" class="main-container">
        <v-snackbar
          v-model="snackbar.visible"
          :color="snackbar.color"
          :timeout="snackbar.timeout"
          top
          class="pre-formatted"
        >
          {{ snackbar.text }}

          <template v-slot:action="{ attrs }">
            <v-btn dark icon v-bind="attrs" @click="closeSnackbar">
              <v-icon>mdi-close-thick</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-card>
    </v-main>
  </v-container>
</template>

<script>
import store from "@/store";
import Logger from "@/services/utils/logger.js";

export default {
  name: "SnackBar",
  components: {},
  data: () => ({}),

  methods: {
    closeSnackbar() {
      Logger.closeSnackbar();
    },
  },
  computed: {
    snackbar() {
      return store.state.snackbar;
    },
  },
};
</script>
