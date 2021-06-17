import Vue from "vue";
import axios from "axios";
import { User } from "../models/user/User";
import { Response } from "../models/shared/Response";

class UserService extends Vue {
  private ROOT_API = "https://60c72a5506f3160017d28aa4.mockapi.io/User";

  public getAllUser() {
    return axios.get(this.ROOT_API);
  }

  public createUser(User: any) {
    return axios.post<Response<any>>(this.ROOT_API, User);
  }

  public updateUser(User: any, id: number) {
    return axios.put<Response<User>>(this.ROOT_API + "/" + id, User);
  }

  public getUserById(id: number) {
    return axios.get<Response<User>>(this.ROOT_API + "/" + id);
  }

  public getUserByEmail(email: string) {
    return axios.get<Response<User>>(this.ROOT_API + "/" + email);
  }

  public getUserByPass(pass: string) {
    return axios.get<Response<User>>(this.ROOT_API + "/" + pass);
  }

  public deleteUserById(id: number) {
    return axios.delete<Response<User>>(this.ROOT_API + "/" + id);
  }
}
export const userService = new UserService();
