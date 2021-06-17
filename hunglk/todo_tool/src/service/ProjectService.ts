import Vue from 'vue';
import axios from 'axios';

class ProjectService extends Vue {
  private ROOT_API = 'https://5ef1cf3f1587790016bdb597.mockapi.io/api/project';

  public getAllProject() {
    return axios.get(this.ROOT_API);
  }

  public saveProject(projectInfo: any) {
    return axios.post<any>(this.ROOT_API, projectInfo);
  }

  public updateProject(projectInfo: any) {
    return axios.put<any>(this.ROOT_API + '/' + projectInfo.id, projectInfo);
  }

  public getProjectById(id: number) {
    return axios.get(this.ROOT_API + '/' + id);
  }

  public deleteById(id: number) {
    return axios.delete(this.ROOT_API + '/' + id);
  }
}
export const projectService = new ProjectService();
