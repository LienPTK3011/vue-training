<template>
  <div>
    <router-link
      :to="{ name: 'Test', query: { query: 'hihi', query2: 'haha' } }"
    >
      <v-btn class="btn"> Query string </v-btn>
    </router-link>
    <router-link
      :to="{ name: 'TestParam', params: { param: 'haha', param2: 'hihi' } }"
    >
      <v-btn class="btn"> Param string </v-btn>
    </router-link>
    <router-link :to="{ name: 'Guard' }">
      <v-btn class="btn"> Router Guard Check Login </v-btn>
    </router-link>
    <router-link :to="{ name: 'Login' }">
      <v-btn class="btn"> Đăng nhập </v-btn>
    </router-link>
    <router-link :to="{ name: 'Logout' }">
      <v-btn class="btn"> Đăng xuất </v-btn>
    </router-link>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
.btn {
  margin: 10px;
}
</style>
