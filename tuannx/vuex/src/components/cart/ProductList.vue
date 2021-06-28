<template>
  <div>
    <v-row>
      <v-col class="mx-auto banner">
        <v-img
          src="//cdn.tgdd.vn/2021/05/banner/Desktopbanner-1200x60.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-alert type="success" v-if="check">
      Thêm thành công
    </v-alert>
    <p>Cart{{numberCart}}</p>
    <p>Total {{totalCart}}</p>
    <v-row class="mx-auto banner">
      <v-col md="3" v-for="product in products" :key="product.id">
        <ProductCard :product="product" @Success="mess"/>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProductCard from "./ProductCard.vue";
@Component({
  components: {
    ProductCard,
  },
})
export default class Carts extends Vue {
  private alert = false;
  private check = false
  mounted() {
    this.$store.dispatch("getAllProduct");
  }
  get products() { // lấy ra products trong state
    return this.$store.state.products;
  }
  get numberCart(){ // lấy ra cart trong state
      return this.$store.state.cart.length
  }
  get totalCart(){
      return this.$store.getters.cartTotal;
  }
  mess(mess1:any){
    this.check= mess1;
    console.log(mess1);
    setTimeout(() => {
      this.check=false;
    },3000);
    
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