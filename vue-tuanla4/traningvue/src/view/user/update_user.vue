<template>
  <b-container>
    <form>
      <div class="container">
        <h1>Cập nhật thành viên</h1>
        <form novalidate>
          <div class="form-group">
            <label>Tên đăng nhập</label>
            <input
              class="form-control"
              v-model="userModel.user_name"
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label>Tên người dùng</label>
            <input v-model="userModel.full_name" type="text" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="text"
              required
              class="form-control"
              v-model="userModel.email"
            />
          </div>
          <div>
            <div>
              <label>Giới tính</label>
            </div>
            <input type="radio" id="1" value="true" v-model="userModel.sex" />
            <label for="1">Nam</label>
            <input type="radio" id="1" value="false" v-model="userModel.sex" />
            <label for="2">Nữ</label>
          </div>
          <br />
          <div class="form-group">
            <div>
              <label>Vị trí</label>
            </div>
            <b-form-select v-model="userModel.work_id" :options="works">
            </b-form-select>
          </div>
          <br />
          <div>
            <div>
              <label>Hoạt động</label>
            </div>
            <input
              type="radio"
              id="2"
              value="true"
              v-model="userModel.online"
            />
            <label for="2">Hoạt động</label>
            <input
              type="radio"
              id="2"
              value="false"
              v-model="userModel.online"
            />
            <label for="3">Không hoạt động</label>
          </div>
          <br />
          <div class="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              required
              class="form-control"
              v-model="userModel.pass"
            />
          </div>
          <button @click="getEdit(userModel.id)" type="submit">Cập nhật</button>
        </form>
      </div>
    </form>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { userService } from "@/services/UserService";
import { workService } from "@/services/WorkService";
import { User } from "@/models/user/User";
import { Work } from "@/models/work/Work";

@Component
export default class extends Vue {
  @Prop() private id!: number;
  private userModel: User = new User();
  private workModel: Work[] = [];
  private works = Array();

  private created() {
    this.getDetail(this.id);
    this.getWork();
  }

  private getDetail(id: number) {
    userService.getUserById(id).then((response: any) => {
      if (response.data && response) {
        this.userModel = response.data;
      }
    });
  }

  private getEdit(id: number) {
    userService.updateUser(this.userModel, id).then((response: any) => {
      if (response.data && response) {
        this.getDetail(id);
      }
    });
    this.$router.push("/user").catch(() => {});
  }

  private getWork() {
    workService.getAllWork().then((response) => {
      if (response.data && response) {
        this.works = [];
        response.data.forEach((item: any) => {
          this.works.push({
            value: item.id,
            text: item.name_work,
          });
        });
      }
    });
  }
}
</script>
