<template>
    <v-card outlined>
           <v-img :src="product.image" height="256"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-actions>
             <router-link :to="{name:'Productdetail', params:{id:product.id}}">
              <v-btn outlined>
                Details
              </v-btn>
            </router-link> 
            <v-btn color="primary" @click="addToCart()">Add to cart</v-btn>
          </v-card-actions> 
        </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

interface Product{
    id:number,
    name:string,
    image:string,
    qty:number,
    price:number
}
@Component
export default class ProductCard extends Vue {
    private mess = true;
    alert = false
    @Prop() private product? : Product;

    addToCart(){
        this.$store.dispatch('addToCart',{
            product:this.product,
            qty:1
        })
        this.alert = true
        this.$emit('Success', this.alert)
    }
}
</script>