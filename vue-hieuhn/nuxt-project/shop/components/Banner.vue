<template>
  <v-carousel
    class="banner"
    v-model="itemIndex"
    hide-delimiters
    :touch="{ left, right }"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      class="banner-item"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Banner extends Vue {
  items = [
    {
      src: '/bannerweb_1920x655.png'
    },
    {
      src: '/bannerweb-ccscv-1.png'
    },
    {
      src: 'xinchao_web_banner.png'
    }
  ]

  itemIndex = 0

  left () {
    this.itemIndex = (this.itemIndex + 1) % this.items.length
  }

  right () {
    this.itemIndex = (this.itemIndex - 1 + this.items.length) % this.items.length
  }
}
</script>

<style lang="scss" scoped>
.banner {

  .v-image__image {
    height: 100%;
  }
}
</style>