<template>
  <div>
    <v-row>
    </v-row>
    <v-row>
      <StaffCon 
        v-for="(item, i) in lists" 
        :key="i" 
        :item="item" 
        :i="i" 
        @deleteItem="prepareDelete($event)"
      ></StaffCon>
      <Modal 
        :status="status"
        @update-dialog="status = $event"
        @confirm="onConfirm"
      ></Modal>
    </v-row>

    <Add @data="addStaff($event)"></Add>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import StaffCon from './StaffCon.vue'
import Add from './Add.vue'
import Api from '../../services/Api'
import Modal from '../common/Modal.vue'

@Component({
  components: {
    StaffCon, Add, Modal
  }
})
export default class Staff extends Vue {

  private lists: Array<any> = []
  status = false
  idToDel = 0

  beforeMount() {
    this.apiList()
  }

  apiList() {
    Api.getAll().then((response: any) => {
      this.lists = response.data
    }).catch((errors) => {
      console.log(errors)
    });
  } 

  addStaff(data: any) {
    Api.create(data).then((response: any) => {
      this.apiList()
    })
  }

  deleteItem(id: number) {
    Api.delete(id).then((response: any) => {
      this.apiList()
    })
  }

  prepareDelete(id: number) {
    this.idToDel = id
    this.status = true
  }

  onConfirm() {
    this.deleteItem(this.idToDel)
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
