<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Watch } from 'vue-property-decorator'
import Api from '../../services/Api'
import StaffCon from './StaffCon.vue'
import Modal from '../common/Modal.vue'

@Component({
  components: {
    StaffCon, Modal
  }
})
export default class Search extends Vue {
    name = ''
    users: Array<any> = []
    textSearch = ''
    status = false
    idToDel = 0

    created() {
      this.onSearch()
    }

    onSearch() {
      Api.search(this.$route.query.key).then((response: any) => {
        this.users = response.data
      }).catch((errors) => {
        console.log(errors)
      }) 
    }

    deleteItem(id: number) {
      Api.delete(id).then((response: any) => {
        this.onSearch()
        this.$notify({
          group: 'noti',
          title: 'Xoá',
          text: 'Bạn đã xoá thành công',
          width: '300px',
          closeOnClick: true
        });
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