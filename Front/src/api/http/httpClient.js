import axios from 'axios';

/**
 * Http client.
 */
export default class HttpClient {
    
    /**
     * Sends a GET HTTP request.
     * @param {String} url Target URL.
     * @param {*} config Request configuration.
     */
    static async get(url, config) {
        return axios.get(url, config);
    }

    /**
     *  Sends a POST HTTP request. 
     * @param {String} url Target URL
     * @param {*} data Data to post.
     * @param {*} config Request configuration.
     */
    static async post(url, data, config) {
        return axios.post(url, data, config);
    }

    /**
     *  Sends a PUT HTTP request. 
     * @param {String} url Target URL
     * @param {*} data Data to put.
     * @param {*} config Request configuration.
     */
    static async put(url, data, config) {
        return axios.put(url, data, config);
    }

      /**
     *  Sends a DELETE HTTP request. 
     * @param {String} url Target URL
     * @param {*} data Data to put.
     * @param {*} config Request configuration.
     */
    static async delete(url, data, config) {
        return axios.delete(url, data, config);
    }
}
