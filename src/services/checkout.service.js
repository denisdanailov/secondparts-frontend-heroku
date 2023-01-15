import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://secondparts-env.eba-5isfb6gk.eu-central-1.elasticbeanstalk.com/api/shopping-card/";

class CheckoutService {
  addOfferToCard(data) {
    return axios.post(API_URL + "add", data, {
      headers: authHeader(),
    });
  }
  getAllOffersForCurrentUser(userId) {
    return axios.get(`${API_URL}${userId}`, {
      headers: authHeader(),
    });
  }

  soldOffers() {
    return axios.delete(API_URL + "checkout", {
      headers: authHeader(),
    });
  }
}
export default new CheckoutService();
