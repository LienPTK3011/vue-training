<template>
  <div id="footer">
    <h1>Footer</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
}
</script>

<style lang="scss">
  #footer {
    height: 120px;
    line-height: 120px;
    text-align: center;
    background: #CCC;
  }
</style>