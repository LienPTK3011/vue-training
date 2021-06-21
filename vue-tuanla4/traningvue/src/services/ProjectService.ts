import Vue from "vue";
import axios from "axios";
import { Project } from "../models/project/Project";
import { Response } from "../models/shared/Response";

class ProjectService extends Vue {
  private ROOT_API = "https://60c72a5506f3160017d28aa4.mockapi.io/Project";

  public getAllProject() {
    return axios.get(this.ROOT_API);
  }

  public createProject(Project: any) {
    return axios.post<Response<any>>(this.ROOT_API, Project);
  }

  public updateProject(Project: any, id: number) {
    return axios.put<Response<Project>>(this.ROOT_API + "/" + id, Project);
  }

  public getProjectById(id: number) {
    return axios.get<Response<Project>>(this.ROOT_API + "/" + id);
  }

  public deleteProjectById(id: number) {
    return axios.delete<Response<Project>>(this.ROOT_API + "/" + id);
  }
}
export const projectService = new ProjectService();
