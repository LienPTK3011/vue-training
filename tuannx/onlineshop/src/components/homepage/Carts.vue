<template>
  <div>
    <v-row style="margin-top: 20px">
      <v-col sm="12" offset-sm="1" md="4" offset-md="2">
        <v-row>
          <v-col sm="6" md="12" v-for="product in Cart" :key="product.id">
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card
                outlined
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-row>
                  <v-col md="4"
                    ><v-img :src="product.product.image" height="100%"></v-img
                  ></v-col>
                  <v-col md="8">
                    <v-card-title>{{ product.product.name }}</v-card-title>
                    <v-card-subtitle
                      >${{ product.product.price }}</v-card-subtitle
                    >
                    <v-card-subtitle>{{ product.qty }}</v-card-subtitle>
                    <v-card-actions>
                      <v-btn
                        color="red"
                        @click="removeFromCart(product.product.id)"
                      >
                        <v-icon left>mdi-delete</v-icon>
                        Delete
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="5">
        <v-card outlined>
          <v-card-title>Payment Details</v-card-title>

          <v-card-text>
            <v-text-field label="Name" />
            <v-text-field label="Email" />
            <v-text-field label="Phone" />
            <v-text-field label="Address" />

            <p style="color: red; font-size: 20px">Total: ${{ total }}</p>
            <v-btn color="primary"> Checkout </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Carts extends Vue {
  get Cart() {
    return this.$store.state.cart;
  }
  get total() {
    return this.$store.getters.cartTotal;
  }
  removeFromCart(id: any) {
    this.$store.dispatch("removeFromCart", id);
    console.log("xóa",id);
  }
}
</script>
<style lang="sass" scoped>
.v-card__text
  div
    padding: 10px
    p
      color: red
      font-size: 20px
</style>