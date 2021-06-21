<template>
  <div id="promotion">
    <v-container>
      <v-row>
        <v-col lg="12">
          <Title :name="dataTitle"></Title>
        </v-col>
      </v-row>
      <v-row>
        <PromotionItem v-for="(promotion, i) in dataPromotion" :key="i" :promotion="promotion"></PromotionItem>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PromotionItem from './Promotion/PromotionItem.vue'
import Title from './common/Title.vue'

@Component({
  components: {
    PromotionItem, Title
  }
})
export default class Promotion extends Vue {
  dataPromotion = [
    {
      id: 1,
      img: "/promotion/daitiecsacmau-web_thumnail.jpg",
      endTime: "30/08/2021",
      desc: '"TRIỆU LỜI CẢM ƠN", SINCERE THANKS TO OUR BELOVED CUSTOMERS',
      url: '/'
    },
    {
      id: 2,
      img: "/promotion/daitiecsacmau-web_thumnail.jpg",
      endTime: "30/08/2021",
      desc: '"TRIỆU LỜI CẢM ƠN", SINCERE THANKS TO OUR BELOVED CUSTOMERS',
      url: '/'
    },
    {
      id: 3,
      img: "/promotion/daitiecsacmau-web_thumnail.jpg",
      endTime: "30/08/2021",
      desc: '"TRIỆU LỜI CẢM ƠN", SINCERE THANKS TO OUR BELOVED CUSTOMERS',
      url: '/'
    },
    {
      id: 4,
      img: "/promotion/daitiecsacmau-web_thumnail.jpg",
      endTime: "30/08/2021",
      desc: '"TRIỆU LỜI CẢM ƠN", SINCERE THANKS TO OUR BELOVED CUSTOMERS',
      url: '/'
    },
  ]
  dataTitle = "Promotions"
}

</script>

<style lang="scss">
  #promotion {
    margin-bottom: 50px;
  }
</style>