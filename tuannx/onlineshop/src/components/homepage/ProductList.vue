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
          <v-slide-item
            v-for="product in product"
            :key="product.id"
            v-slot="{ toggle }"
          >
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card
                outlined
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                height="410"
                width="260"
                class="ma-4"
                @click="toggle"
              >
                <v-img :src="product.url"></v-img>
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-subtitle>${{ product.price }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn outlined @click="addToCart(product.id)">
                    <v-icon left small>fa-plus</v-icon>
                    Add to cart
                  </v-btn>
                  <ProductDetail :product="product" />
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
    <v-row class="mx-auto banner">
      <v-col md="4">
        <v-card>
          <v-img
            src="//cdn.tgdd.vn/2021/06/banner/samsung-390-210-390x210-2.png"
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-img src="//cdn.tgdd.vn/2021/06/banner/DT-390x210-2.png"></v-img>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-img src="//cdn.tgdd.vn/2021/06/banner/Laptop-390x210.png"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-auto banner">
      <v-col md="3" v-for="product in product" :key="product.id">
        <v-card outlined>
          <v-img :src="product.url"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-actions>
            <v-btn outlined @click="addToCart(product.id)">
              <v-icon left small>fa-plus</v-icon>
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProductDetail from "../homepage/ProductDetail.vue";
@Component({
  components: {
    ProductDetail,
  },
})
export default class Carts extends Vue {
  product = [
    {
      id: "0",
      name: "Sp1",
      price: 40,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 1",
    },
    {
      id: "1",
      name: "Sp2",
      price: 60,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 2",
    },
    {
      id: "2",
      name: "Sp3",
      price: 80,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 3",
    },
    {
      id: "3",
      name: "Sp4",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
    {
      id: "4",
      name: "Sp5",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
    {
      id: "5",
      name: "Sp6",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
    {
      id: "6",
      name: "Sp7",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
    {
      id: "7",
      name: "Sp8",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
    {
      id: "8",
      name: "Sp9",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
    {
      id: "9",
      name: "Sp10",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
    {
      id: "10",
      name: "Sp11",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
    {
      id: "11",
      name: "Sp12",
      price: 10,
      url: "https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg",
      detail: "Đây là sản phẩm số 4",
    },
  ];

  addToCart(id: any) {
    this.$store.dispatch("addToCart", id);
    alert('Đã thêm vào giỏ hàng')
  }
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