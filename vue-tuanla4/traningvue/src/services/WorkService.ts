import Vue from "vue";
import axios from "axios";
import { Work } from "../models/work/Work";
import { Response } from "../models/shared/Response";

class WorkService extends Vue {
  private ROOT_API = "https://60c72a5506f3160017d28aa4.mockapi.io/Work";

  public getAllWork() {
    return axios.get(this.ROOT_API);
  }

  public createWork(Work: any) {
    return axios.post<Response<any>>(this.ROOT_API, Work);
  }

  public updateWork(Work: any, id: number) {
    return axios.put<Response<Work>>(this.ROOT_API + "/" + id, Work);
  }

  public getWorkById(id: number) {
    return axios.get<Response<Work>>(this.ROOT_API + "/" + id);
  }

  public deleteWorkById(id: number) {
    return axios.delete<Response<Work>>(this.ROOT_API + "/" + id);
  }
}
export const workService = new WorkService();
