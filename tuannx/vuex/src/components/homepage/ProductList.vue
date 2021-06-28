<template>
  <div>
    <v-row>
      <v-col class="mx-auto banner">
        <v-img
          src="//cdn.tgdd.vn/2021/05/banner/Desktopbanner-1200x60.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-sheet class="mx-auto" elevation="8" max-width="1300">
        <p class="title">Sản phẩm bán chạy</p>
        <v-slide-group class="pa-4" multiple show-arrows>
          <v-slide-item v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
    <v-row class="mx-auto banner">
      <v-col md="4" v-for="item in item" :key="item.url">
        <v-card>
          <v-img :src="item.url"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-auto banner">
      <v-col md="3" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProductDetail from "../homepage/ProductDetail.vue";
import ProductCard from "./ProductCard.vue";
@Component({
  components: {
    ProductDetail,
    ProductCard,
  },
})
export default class Carts extends Vue {
  mounted() {
    this.$store.dispatch("getAllProduct");
  }
  get products() {
    // lấy ra products trong state
    return this.$store.state.products;
  }
  get numberCart() {
    // lấy ra cart trong state
    return this.$store.state.cart.length;
  }
  get totalCart() {
    //lấy toatlCarts trong getters
    return this.$store.getters.cartTotal;
  }
  item = [
    {
      url: "//cdn.tgdd.vn/2021/06/banner/samsung-390-210-390x210-2.png",
    },
    {
      url: "//cdn.tgdd.vn/2021/06/banner/DT-390x210-2.png",
    },
    {
      url: "//cdn.tgdd.vn/2021/06/banner/Laptop-390x210.png",
    },
  ];
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
>.v-card__text
  color: #000
.banner
  max-width: 1300px
  padding: 12px 0
.title
  color: #000
  font-size: 30px
  font-weight: bold
  font-style: italic
  line-height: 30px
  padding: 0 0 0 40px
  margin: 0
  background: #fed100
.v-slide-group
  background: #fed100
.v-sheet
  border-radius: 5px
</style>