<template>
  <form>
    <div>
      <h1>Quản lý dự án</h1>
      <button class="buttoncreate" @click="createProject">
        Tạo mới dự án
      </button>
      <table>
        <thead>
          <tr>
            <th>Mã dự án</th>
            <th>Tên dự án</th>
            <th>Ghi chú</th>
            <th>Tên thành viên</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
          </tr>
        </thead>
        <tbody v-for="project in projectData" :key="project.id">
          <tr>
            <td>{{ project.code }}</td>
            <td>{{ project.name }}</td>
            <td>{{ project.description }}</td>
            <td>{{ project.user_id }}</td>
            <td>{{ project.startDate }}</td>
            <td>{{ project.endDate }}</td>
            <td>
              <tr>
                <button @click="getDetail(project.id)">Xem</button>
              </tr>
              <tr>
                <button @click="editProject(project.id)">Sửa</button>
              </tr>
              <tr>
                <button @click="deleteProject(project.id)">Xóa</button>
              </tr>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { projectService } from "@/services/ProjectService";
import { Project } from "@/models/project/Project";

@Component
export default class extends Vue {
  @Prop() private id!: number;
  private projectData: Project[] = [];
  private projectModel: Project = new Project();

  private created() {
    this.getProject();
  }
  //gọi trang thêm mới
  private createProject() {
    this.$router.push("/create-project");
  }

  //gọi trang xem
  private getDetail(id: number) {
    this.$router.push("/detail-project/" + id);
  }

  //gọi trang sửa
  private editProject(id: number) {
    this.$router.push("/update-project/" + id);
  }

  //find dữ liệu
  private getProject() {
    projectService.getAllProject().then((response) => {
      if (response.data && response) {
        this.projectData = response.data;
      }
    });
    this.$router.push("/project").catch(() => {});
  }

  private deleteProject(id: number) {
    projectService.deleteProjectById(id).then((response: any) => {
      if (response.data && response) {
        this.getProject();
      }
    });
  }
}
</script>

<style scoped>
.buttoncreate {
  width: 200px;
  height: 50px;
}
.color1 {
  background-color: #ffff99;
}
.color2 {
  background-color: #dddddd;
}
</style>
