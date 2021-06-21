<template>
  <b-container>
    <form>
      <div class="container">
        <h1>Cập nhật dự án</h1>
        <form novalidate>
          <div class="form-group">
            <label>Mã dự án</label>
            <input
              class="form-control"
              v-model="projectModel.code"
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label>Tên dự án</label>
            <input v-model="projectModel.name" type="text" required />
          </div>
          <div class="form-group">
            <label>Ghi chú</label>
            <input
              type="text"
              required
              class="form-control"
              v-model="projectModel.description"
            />
          </div>
          <div class="form-group">
            <div>
              <label>Tên thành viên</label>
            </div>
            <b-form-select v-model="projectModel.user_id" :options="users">
            </b-form-select>
          </div>
          <div class="form-group">
            <label>Ngày bắt đầu</label>
            <input
              type="Date"
              required
              class="form-control"
              v-model="projectModel.startDate"
            />
          </div>
          <div>
            <label>Ngày kết thúc</label>
            <input
              type="Date"
              required
              class="form-control"
              v-model="projectModel.endDate"
            />
          </div>
          <button @click="getEdit(projectModel.id)" type="submit">
            Cập nhật
          </button>
        </form>
      </div>
    </form>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { userService } from "@/services/UserService";
import { projectService } from "@/services/ProjectService";
import { User } from "@/models/user/User";
import { Project } from "@/models/project/Project";

@Component
export default class extends Vue {
  @Prop() private id!: number;
  private projectModel: Project = new Project();
  private userModel: User[] = [];
  private users = Array();

  private created() {
    this.getDetail(this.id);
    this.getUser();
  }

  private getDetail(id: number) {
    projectService.getProjectById(id).then((response: any) => {
      if (response.data && response) {
        this.projectModel = response.data;
      }
    });
  }

  private getEdit(id: number) {
    projectService
      .updateProject(this.projectModel, id)
      .then((response: any) => {
        if (response.data && response) {
          this.getDetail(id);
        }
      });
    this.$router.push("/project").catch(() => {});
  }

  private getUser() {
    userService.getAllUser().then((response) => {
      if (response.data && response) {
        this.users = [];
        response.data.forEach((item: any) => {
          this.users.push({
            value: item.id,
            text: item.user_name,
          });
        });
      }
    });
  }
}
</script>
