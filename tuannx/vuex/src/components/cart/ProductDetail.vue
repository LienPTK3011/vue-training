
<template>
  <v-card>
    <div style="display: flex" class="detail">
      <v-col md="4">
        <v-img :src="product.image" height="350"></v-img>
      </v-col>
      <v-col md="8">
        <v-card-text style="font-size: 18px">
          <div>
            <span>Name: {{ product.name }}</span>
          </div>
          <div>
            <span>Price: ${{ product.price }}</span>
          </div>
          <div>
            <span>Detail: {{ product.detail }}</span>
          </div>
          <div>
            <v-btn color="primary" @click="addToCart()">Add to cart</v-btn>
          </div>
        </v-card-text>
      </v-col>
    </div>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component
export default class ProductDetail extends Vue {
  @Prop() private id?: "";

  mounted() {
    this.$store.dispatch("getById", this.id);
  }
  get product() {
    return this.$store.state.products;
  }
  addToCart(){
      this.$store.dispatch('addToCart',{
          product:this.product,
          qty:1
      })
  }

}
</script>
<style lang="sass" scoped>
.v-card__text
div
    padding: 10px
</style>