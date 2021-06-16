<template>
  <div>
    <h1 v-if="!isShowMessageEmpty">
      Tu khoa '{{ messageEmpty }}' co {{ users.length }} ket qua
    </h1>
    <v-row>
      <StaffCon
        v-for="(user, i) in users"
        :key="i"
        :item="user"
        @deleteItem="prepareDelete($event)"
      ></StaffCon>
      <Modal
        :status="status"
        @update-dialog="status = $event"
        @confirm="onConfirm"
      ></Modal>
    </v-row>
    <h1 v-if="isShowMessageEmpty">
      Khong tim thay ket qua cho: {{ messageEmpty }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Api from "../../services/Api";
import StaffCon from "./StaffCon.vue";
import Modal from "../common/Modal.vue";
@Component({
  components: {
    StaffCon,
    Modal,
  },
})
export default class Search extends Vue {
  name = "";
  users: Array<any> = [];
  textSearch = "";
  status = false;
  idToDel = 0;
  isShowMessageEmpty = false;
  messageEmpty = this.$route.query.key;

  created(): void {
    this.onSearch();
  }

  onSearch(): void {
    Api.search(this.$route.query.key)
      .then((response: any) => {
        this.users = response.data;
        if (this.users[0] == undefined) {
          this.isShowMessageEmpty = true;
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  }

  deleteItem(id: number): void {
    Api.delete(id).then(() => {
      this.onSearch();
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
}
</script>
