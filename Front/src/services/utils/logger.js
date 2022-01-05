import store from "../../store";

export default {
    showInfo(message) {
        const log = {
            text: message,
            color: "info",
            timeout: "4000",
        };
        store.commit("showSnackbar", log);
    },
    showPersistentInfo(message) {
        const log = {
            text: message,
            color: "info",
        };
        store.commit("showPersistentSnackbar", log);
    },
    showSuccess(message) {
        const log = {
            text: message,
            color: "success",
            timeout: "4000",
        };
        store.commit("showSnackbar", log);
    },
    showError(message) {
        const log = {
            text: message,
            color: "error",
            timeout: "4000",
        };
        store.commit("showSnackbar", log);
    },
    showPersistentError(message) {
        const log = {
            text: message,
            color: "error",
        };
        store.commit("showPersistentSnackbar", log);
    },

    showCallNotification(message) {
        const log = {
            text: message,
            color: "info",
        };
        store.commit("showPersistentSnackbar", log);
    },
    closeSnackbar() {
        store.commit("closeSnackbar");
    },
};
