<template>
  <form>
    <div>
      <h1>Quản lý công việc</h1>
      <button class="buttoncreate" @click="createWork">
        Tạo mới công việc
      </button>
      <table>
        <thead>
          <tr>
            <th>Tên công việc</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody v-for="work in workData" :key="work.id">
          <tr>
            <td>{{ work.name_work }}</td>
            <td>{{ work.description }}</td>
            <td>
              <tr></tr>
              <tr>
                <button @click="editWork(work.id)">Sửa</button>
              </tr>
              <tr>
                <button @click="deleteWork(work.id)">Xóa</button>
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
import { workService } from "@/services/WorkService";
import { Work } from "@/models/work/Work";

@Component
export default class extends Vue {
  @Prop() private id!: number;
  private workData: Work[] = [];
  private workModel: Work = new Work();

  private created() {
    this.getWork();
  }
  //gọi trang thêm mới
  private createWork() {
    this.$router.push("/create-work");
  }

  //gọi trang sửa
  private editWork(id: number) {
    this.$router.push("/update-work/" + id);
  }

  //find dữ liệu
  private getWork() {
    workService.getAllWork().then((response) => {
      if (response.data && response) {
        this.workData = response.data;
      }
    });
    this.$router.push("/work").catch(() => {});
  }

  private deleteWork(id: number) {
    workService.deleteWorkById(id).then((response: any) => {
      if (response.data && response) {
        this.getWork();
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
