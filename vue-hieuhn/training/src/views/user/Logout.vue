<template>
  <div>
    <h1>Logout thanh cong</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  token: any = "";
  created(): void {
    this.token = localStorage.removeItem("token");
  }
}
</script>
