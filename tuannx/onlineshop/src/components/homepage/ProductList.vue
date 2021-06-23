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
                <v-img :src="product.image" height="256"></v-img>
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
          <v-img :src="product.image" height="256"></v-img>
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
import ProductService from "@/service/ProductService";
import Product from '@/product'
@Component({
  components: {
    ProductDetail,
  },
})
export default class Carts extends Vue {
  private product=Product;
   getAll() {
    ProductService.getAll()
      .then((response) => {
        this.product = response.data;
        console.log(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
  created(){
    this.getAll();
  }

  addToCart(id: any) {
    this.$store.dispatch("addToCart", id);
    alert("Đã thêm vào giỏ hàng");
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