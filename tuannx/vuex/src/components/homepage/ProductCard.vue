<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-card
      outlined
      :elevation="hover ? 16 : 2"
      :class="{ 'on-hover': hover }"
      height="410"
      width="260"
      class="ma-4"
    >
      <v-img :src="product.image" height="256"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>${{ product.price }}</v-card-subtitle>
      <v-card-actions>
        <v-btn outlined @click="addToCart()">
          <v-icon left small>fa-plus</v-icon>
          Add to cart
        </v-btn>
        <ProductDetail :product="product" />
      </v-card-actions>
    </v-card>
  </v-hover>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ProductDetail from "../homepage/ProductDetail.vue";
interface Product {
  id: number;
  name: string;
  image: string;
  qty: number;
  price: number;
}
@Component({
    components:{
        ProductDetail
    }
})
export default class ProductCard extends Vue {
  private mess = true;
  alert = false;
  @Prop() private product?: Product;

  addToCart() {
    this.$store.dispatch("addToCart", {
      product: this.product,
      qty: 1,
    });
    this.alert = true;
    this.$emit("Success", this.alert);
  }
}
</script>
