<template>
  <div>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h2>
          Prodcut
          <v-btn to="" color="primary" small> View All </v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row>
          <v-col sm="6" md="4" v-for="product in product" :key="product.id">
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card
                outlined
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
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
          </v-col>
        </v-row>
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
  ];

  addToCart(id:any){
      this.$store.dispatch('addToCart',id);
  }
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
    background-color: rgba(#FFF, 0.8)
>.v-card__text
    color: #000
</style>