<template>
  <div id="brand">
    <v-card
      class="brand-card"
      max-width="560"
      min-height="120"
    >
      <div class="brand-item">
        <nuxt-link to="/" class="brand-link">
          <img src="~/static/brand/icon-1.png" alt="">
          <div class="brand-text">
            <p>Customer</p>
            <p>Feedback</p>
          </div>
        </nuxt-link>
      </div>
      <div class="brand-line"></div>
      <div class="brand-item">
        <nuxt-link to="/" class="brand-link">
          <img src="~/static/brand/icon-order.png" alt="">
          <div class="brand-text">
            <p>Order now</p>
          </div>
        </nuxt-link>
      </div>
    </v-card>
    <h1 class="text-center my-4">Brands</h1>
    <v-row>
      <v-col lg="12" md="12">
        <div class="brand-history">
          <BrandItem v-for="(brand, i) in dataBrand" :key="i" :brand="brand"></BrandItem>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BrandItem from './Brand/BrandItem.vue'

@Component({
  components: {
    BrandItem
  }
})
export default class Brand extends Vue {
  dataBrand = [
    {
      img: '/brand/lotteria.png',
      urlLeft: '/brand-history',
      urlRight: '/find',
      textLeft: "Brand's story",
      textRight: "Find store"
    },
    {
      img: '/brand/angel-in-us.png',
      urlLeft: '/brand-history-angel',
      urlRight: '/menu',
      textLeft: "Brand's story",
      textRight: "Menu"
    },
  ]
}
</script>

<style lang="scss">
  #brand {
    margin-bottom: 50px;

    .brand-card {
      margin: 0 auto;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -60px;

      .brand-item {
        width: 50%;

        .brand-link {
          display: flex;
          align-items: center;
          padding: 0 25px;

          .brand-text {
            margin-left: 10px;

            p {
              font-weight: bold;
              text-transform: uppercase;
              font-size: 18px;
              color: black;
            }
          }
        }
      }
      .brand-line {
        width: 1px;
        background: red;
        height: 80px;
      }
    }
    .brand-history {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }
</style>