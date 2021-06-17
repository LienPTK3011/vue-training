<template>
  <div>
    <h1>login thành công, vui lòng về trang trủ để test token</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  token = "kjahdkasghdakshdsjkahdkajshdkjasdaskjdhajkhdjkasdhkasjd";
  created(): void {
    localStorage.setItem("token", this.token);
  }
}
</script>
