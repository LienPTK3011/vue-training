<template>
  <div>
    
    <Modal
      :status="status"
      @update-dialog="status = $event"
      @confirm="onConfirm"
    ></Modal>
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field
          label="Search"
          v-model="textSearch"
          v-on:keydown.enter.prevent="onKey"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <StaffCon
        v-for="(item, i) in listsAll"
        :key="i"
        :item="item"
        :i="i"
        @deleteItem="prepareDelete($event)"
      ></StaffCon>
    </v-row>

    <Add @data="addStaff($event)"></Add>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StaffCon from "./StaffCon.vue";
import Add from "./Add.vue";
import Api from "../../services/Api";
import Modal from "../common/Modal.vue";
import Search from "./Search.vue";

@Component({
  components: {
    StaffCon,
    Add,
    Modal,
    Search,
  },
})
export default class Staff extends Vue {
  private lists: Array<any> = [];
  private listsAll?: Array<any> = [];
  status = false;
  idToDel = 0;
  textSearch = "";

  beforeMount(): void {
    this.apiList();
  }

  apiList(): void {
    Api.getAll()
      .then((response: any) => {
        this.lists = response.data;
        this.listsAll = this.lists;
      })
      .catch((errors) => {
        console.log(errors);
      });
  }

  addStaff(data: Array<any>): void {
    Api.create(data).then(() => {
      this.apiList();
      this.$notify({
        group: "noti",
        title: "Thêm",
        text: "Bạn đã thêm thành công",
        type: "success",
      });
    });
  }

  deleteItem(id: number): void {
    Api.delete(id).then(() => {
      this.apiList();
      this.$notify({
        group: "noti",
        title: "Xoá",
        text: "Bạn đã xoá thành công",
        type: "success",
      });
    });
  }

  prepareDelete(id: number): void {
    this.idToDel = id;
    this.status = true;
  }

  onConfirm(): void {
    this.deleteItem(this.idToDel);
  }

  onKey(): void {
    if (this.textSearch == "") {
      this.$notify({
        group: "noti",
        title: "Lỗi",
        text: "Vui lòng nhập từ khoá",
        type: "warn",
      });
      return;
    }
    this.$router.push({ name: "Search", query: { key: this.textSearch } });
  }
}
</script>

<style lang="scss">
.isWorking {
  background: #ccc;
}
.seniority {
  background: rgb(253, 253, 93);
}
.btn-detail {
  background: rgb(37, 122, 37) !important;
  color: white !important;
}
.btn-del {
  background: rgb(223, 73, 73) !important;
  color: white !important;
  margin: 0 10px;
}
.btn-link {
  text-decoration: none;
}
.icon-color {
  background: green;
}
.cart-header {
  padding: 10px;
  background: green;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.text-cart {
  text-align: left;
}
.cart-action {
  padding: 10px;
}
.cart-button {
  margin: 0 6px;
  text-decoration: none;
}
.cart-button-detail {
  background: green !important;
  color: white !important;
}
.disabled {
  background: #ccc;
}
.cart-img {
  border-radius: 50%;
  object-fit: cover;
}
.cart-avatar {
  margin-right: 10px;
}
.staff {
  background: white;
  color: black;
}
</style>
