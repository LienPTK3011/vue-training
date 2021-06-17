<template>
  <form>
    <div class="container">
      <h1>Quản lý nhân viên</h1>
      <button class="buttoncreate" @click="createUser">
        Tạo mới nhân viên
      </button>
      <table>
        <thead>
          <tr>
            <th>Tên đăng nhập</th>
            <th>Tên nhân viên</th>
            <th>Email</th>
            <th>Giới tính</th>
            <th>Vị trí</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userData" :key="user.id">
            <td>{{ user.user_name }}</td>
            <td>{{ user.full_name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.sex ? "Nam" : "Nữ" }}</td>
            <td>{{ user.work_id }}</td>
            <td>{{ user.online ? "Hoạt động" : "Không hoạt động" }}</td>
            <td>
              <tr>
                <button @click="getDetail(user.id)">Xem</button>
              </tr>
              <tr>
                <button @click="editUser(user.id)">Sửa</button>
              </tr>
              <tr>
                <button @click="deleteUser(user.id)">Xóa</button>
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
import { userService } from "@/services/UserService";
import { User } from "@/models/user/User";

@Component
export default class extends Vue {
  @Prop() private id!: number;
  private userData: User[] = [];
  private userModel: User = new User();

  private created() {
    this.getUser();
  }
  //gọi trang thêm mới
  private createUser() {
    this.$router.push("/create-user");
  }

  //gọi trang xem
  private getDetail(id: number) {
    this.$router.push("/detail-user/" + id);
  }

  //gọi trang sửa
  private editUser(id: number) {
    this.$router.push("/update-user/" + id);
  }

  //find dữ liệu
  private getUser() {
    userService.getAllUser().then((response) => {
      if (response.data && response) {
        this.userData = response.data;
      }
    });
    this.$router.push("/user").catch(() => {});
  }

  private deleteUser(id: number) {
    userService.deleteUserById(id).then((response: any) => {
      if (response.data && response) {
        this.getUser();
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
</style>
