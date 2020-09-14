import {
  httpGet,
} from "./ajaxService";

// Example service
export class Services {
  static async loadConfig() {
    return await httpGet("/master-data");
  }
}