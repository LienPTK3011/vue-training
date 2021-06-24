import axios from "axios";

class TodoService {
  getWorkList() {
    return axios.get(
      "https://60c2fe85917002001739dd39.mockapi.io/api/v1/ListWork"
    );
  }

  getWorkListById(id: any) {
    return axios.get(
      "https://60c2fe85917002001739dd39.mockapi.io/api/v1/ListWork/" + id
    );
  }

  createWorkList(data: any) {
    return axios.post(
      "https://60c2fe85917002001739dd39.mockapi.io/api/v1/ListWork",
      data
    );
  }

  updateWorkList(id: any, data: any) {
    return axios.put(
      "https://60c2fe85917002001739dd39.mockapi.io/api/v1/ListWork/" + id,
      data
    );
  }

  deleteWorkList(id: any) {
    return axios.delete(
      "https://60c2fe85917002001739dd39.mockapi.io/api/v1/ListWork/" + id
    );
  }

  existByWorkName(name: string) {
    return axios.get(
      "https://60c2fe85917002001739dd39.mockapi.io/api/v1/ListWork/" + name
    );
  }

  yesNoQuestion() {
    return axios.get(
      "https://yesno.wtf/api"
    );
  }
}

export default new TodoService();
