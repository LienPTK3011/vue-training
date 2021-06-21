<template>
  <div id="wrapper">
    <Header></Header>
    <Banner></Banner>
    <Brand></Brand>
    <Promotion></Promotion>
    <Product></Product>
    <New></New>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import Brand from '../components/Brand.vue'
import Promotion from '../components/Promotion.vue'
import Product from '../components/Product.vue'
import New from '../components/New.vue'
import Footer from '../components/Footer.vue'

@Component({
  components: {
    Header, Banner, Brand, Promotion, Product, New, Footer
  }
})
export default class Home extends Vue {

}

</script>

<style lang="scss">
  @import url("~/assets/css/reset.css");
</style>