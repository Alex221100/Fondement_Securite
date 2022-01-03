import HttpClient from "@/api/http/httpClient";
import { defaultConfig } from "@/api/http/httpConfig";

const baseUrl = process.env.VUE_APP_BACK_URL;

/**
 * Health Checks API.
 */
export default class HealthChecksAPI {
  /**
   * Gets the list of health checks.
   */
  static async getHealthChecks() {
    return HttpClient.get(`${baseUrl}/healthchecks`, defaultConfig);
  }

  /**
   * Gets global information of health checks.
   */
  static async getHealthCheckSummary() {
    var url = `${baseUrl}/healthchecks/summary`;
    return HttpClient.get(url, defaultConfig);
  }
}
