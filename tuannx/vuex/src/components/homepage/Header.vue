<template>
  <v-container>
    <v-row>
      <v-col md="8">
        <v-carousel height="425">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col md="4" style="padding: 12px 0 12px 12px">
        <v-row>
          <v-col md="6" v-for="product in product" :key="product.url">
            <v-card outlined>
              <v-img :src="product.url"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
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
      src: "//cdn.tgdd.vn/2021/06/banner/hotsale-830-300-830x300-1.png",
    },
    {
      src: "//cdn.tgdd.vn/2021/05/banner/euro-oppo-830-300-830x300.png",
    },
    {
      src: "//cdn.tgdd.vn/2021/06/banner/830-300-830x300-8.png",
    },
    {
      src: "//cdn.tgdd.vn/2021/06/banner/830-300-830x300-1.png",
    },
  ];
  product = [
    {
      url: "//cdn.tgdd.vn/2021/06/banner/diệnthoaidesk-340x340-2.jpg",
    },
    {
      url: "//cdn.tgdd.vn/2021/06/banner/bannerdt-340x340-2.jpg",
    },
    {
      url: "//cdn.tgdd.vn/2021/06/banner/laptopdesk-340x340.jpg",
    },
    {
      url: "//cdn.tgdd.vn/2021/06/banner/─æie╠ú╠énthoaidesk-340x340.jpg",
    },
  ];
}
</script>
<style lang="sass" scoped>
.container
  max-width: 1300px
  padding: 12px 12px 12px 0
</style>