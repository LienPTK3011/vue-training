<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-carousel >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Header extends Vue {
  get sheetHeight(): string {
    switch (this.$vuetify.breakpoint.name) {
      case "xs":
        return "200px";
      case "sm":
        return "300px";
      case "md":
        return "300px";
      case "lg":
        return "300px";
      case "xl":
        return "350px";
    }
    return "300px";
  }

  items = [
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    },
  ];
}
</script>
<style lang="sass" scoped>
.container
  padding: 50px 0 50px 0
</style>>