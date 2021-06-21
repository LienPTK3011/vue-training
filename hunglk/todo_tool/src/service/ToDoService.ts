import Vue from 'vue';
import axios from 'axios';

class ToDoService extends Vue {
  private ROOT_API = 'https://5ef1cf3f1587790016bdb597.mockapi.io/api/todo';

  public getAllToDo() {
    return axios.get(this.ROOT_API);
  }

  public saveToDo(todoInfo: any) {
    return axios.post<any>(this.ROOT_API, todoInfo);
  }

  public updateTodo(todoInfo: any) {
    return axios.put<any>(this.ROOT_API + '/' + todoInfo.id, todoInfo);
  }

  public getTodoById(id: number) {
    return axios.get(this.ROOT_API + '/' + id);
  }

  public deleteById(id: number) {
    return axios.delete(this.ROOT_API + '/' + id);
  }
}
export const toDoService = new ToDoService();
