import axios from "axios";
const BASE_URL = "http://localhost:5000"

class Api {
  getAllMenu() {
    return axios.get(`${BASE_URL}/menus`)
  }
}

export default new Api