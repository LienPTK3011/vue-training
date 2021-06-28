<template>
  <v-col cols="auto">
    <v-dialog transition="dialog-top-transition" max-width="1100">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">Detail</v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark>Product Detail</v-toolbar>
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
              </v-card-text>
            </v-col>
          </div>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component
export default class ProductDetail extends Vue {
  @Prop() private product?: any[];
}
</script>
<style lang="sass" scoped>
.v-card__text
  div
    padding: 10px
</style>