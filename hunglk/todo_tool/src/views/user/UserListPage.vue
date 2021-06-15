<template>
  <div>
      áđấáđádasd
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { userService } from '@/service';
import axios from 'axios';
import { UserResponse } from '@/models';
@Component
export default class UserListPage extends Vue {
  private data: UserResponse [] = [];
   private created() {
    return userService.getAllUser().then((res) => {
       this.data = res.data;
       console.log(this.data);
    });
  }
}
</script lang="ts">
<style>

</style>