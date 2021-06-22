<template>
  <div class="component">
    <p>Ten toi la {{ users.name }}</p>
    <p>Toi nam nay {{ users.age }} tuoi</p>
    <hr />
    <v-btn @click="restAge">Thay đổi</v-btn>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-6">
        <UserDetail 
        :customAge="users.age" 
        @changeAge="users.age=$event"
        :testChangeAgefn="testChangeAge"
        :userAge="users.age"
        ></UserDetail>
      </div>
      <div class="col-xs-12 col-sm-6 col-6">
        <UserEdit :userAge="users.age"></UserEdit>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
@Component({
  components: {
    UserDetail,
    UserEdit,
  },
})
export default class User extends Vue {
    private users =
        {
            name:"Tuan",
            age:14
        }
        restAge(){
            this.users.age=26;
        }

        testChangeAge(){
          this.users.age = 60;
        }
}
</script>