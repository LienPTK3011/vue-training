import Vue from 'vue';
import axios from 'axios';
import {UserResponse, Response, UserRequest} from '@/models';

class UserService extends Vue {
  private ROOT_API = 'https://5ef1cf3f1587790016bdb597.mockapi.io/api/users';

  public getAllUser() {
    return axios.get(this.ROOT_API);
  }

  public saveUser(userInfo: any) {
    return axios.post<any>(this.ROOT_API, userInfo);
  }

  public updateUser(userInfo: any) {
    return axios.put<any>(this.ROOT_API + '/' + userInfo.id, userInfo);
  }

  public getUserById(id: number) {
    return axios.get<UserRequest>(this.ROOT_API + '/' + id);
  }

  public deleteById(id: number) {
    return axios.delete(this.ROOT_API + '/' + id);
  }
}
export const userService = new UserService();
