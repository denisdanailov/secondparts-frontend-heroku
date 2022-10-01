import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://hidden-harbor-97046.herokuapp.com/api/models/";

class ModelService {
  getModelsFromBrandVw() {
    return axios.get(API_URL + "vw", { headers: authHeader() });
  }
  getModelsFromBrandMercedesBenz() {
    return axios.get(API_URL + "mercedes-benz", { headers: authHeader() });
  }
  getModelsFromBrandBmw() {
    return axios.get(API_URL + "bmw", { headers: authHeader() });
  }
  getModelsFromBrandAudi() {
    return axios.get(API_URL + "audi", { headers: authHeader() });
  }
  getModelsFromBrandOpel() {
    return axios.get(API_URL + "opel", { headers: authHeader() });
  }
  getModelsFromBrandPorsche() {
    return axios.get(API_URL + "porsche", { headers: authHeader() });
  }
}

export default new ModelService();
