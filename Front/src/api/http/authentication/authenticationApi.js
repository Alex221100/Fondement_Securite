import HttpClient from "@/api/http/httpClient";
import { defaultConfig, multipartConfig } from "@/api/http/httpConfig";

const baseUrl = "http://localhost:5000/api/user";

/**
 * Authentication API.
 */
export default class authenticationAPI {
    /**
     * Register a user.
     */
    static async register(userInfo) {
        return HttpClient.post(`${baseUrl}/register`, userInfo, defaultConfig);
    }

    /**
     * Login a user.
     */
    static async login(userInfo) {
        return HttpClient.post(`${baseUrl}/login`, userInfo, defaultConfig);
    }

    /**
         * Login a user by certificate.
         */
    static async loginCertificate() {
        return HttpClient.get(`http://localhost:5001/api/Authentication/certificate`, defaultConfig);
    }
}
