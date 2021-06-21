<template>
  <h1 class="title">
    {{ name }}
  </h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Title extends Vue {
  @Prop() private name?: string
}
</script>

<style lang="scss" scoped>
  .title {
    font-weight: bold;
    font-size: 40px !important;
    display: inline-block;
    padding: 12px 0;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 50%;
      height: 4px;
      background: red;
      left: 0;
      top: 0;
    }
  }
</style>