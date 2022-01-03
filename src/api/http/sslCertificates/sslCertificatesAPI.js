import HttpClient from "@/api/http/httpClient";
import { defaultConfig } from "@/api/http/httpConfig";

const baseUrl = process.env.VUE_APP_BACK_URL;

/**
 * SSL Certificate API.
 */
export default class sslCertificatesAPI {
  /**
   * Gets the list of ssl certificates.
   */
  static async getSslCertificates() {
    return HttpClient.get(`https://localhost:5000/api/v1/sslcertificates`, defaultConfig);
  }

  /**
   * Gets global information of ssl certificates.
   */
  static async getSslCertificateSummary() {
    var url = `https://localhost:5000/api/v1/sslcertificates/summary`;
    return HttpClient.get(url, defaultConfig);
  }
}
