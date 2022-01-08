import authenticationApi from '@/api/http/authentication/authenticationApi'

/**
 * Authentication Service.
 */
export default class authenticationService {

    /**
    * Register a user.
    */
    static async register(userInfo) {
        return await authenticationApi.register(userInfo);
    }

    /**
     * Login a user.
     */
    static async login(userInfo) {
        return await authenticationApi.login(userInfo);
    }

    /**
     * Login a user by certificate.
     */
    static async loginCertificate(file) {
        return await authenticationApi.loginCertificate(file);
    }
}
