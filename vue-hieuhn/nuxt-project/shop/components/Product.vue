<template>
  <div id="product">
    <v-container>
      <v-row>
        <v-col md="12" xl="12">
          <Title :name="dataTitle"></Title>
          <p>Special menu for you</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-carousel 
            v-model="dataSlide.model"
            :show-arrows="false"
          >
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="i"
          >
            <v-sheet
              height="100%"
              tile
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="product-list text-h2">
                  <v-col md="4" class="product-item">
                    1
                  </v-col>
                  <v-col md="4" class="product-item">
                    1
                  </v-col>
                  <v-col md="4" class="product-item">
                    1
                  </v-col>
                  <v-col md="4" class="product-item">
                    1
                  </v-col>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Title from './common/Title.vue'

@Component({
  components: {
    Title
  }
})
export default class Product extends Vue {
  dataTitle = "Hungry? What to eat Today?"

  dataSlide = {
    model: 5
  }
  colors = [
    '1',
    '2',
    '3'
  ]
  
}
</script>

<style lang="scss" scoped>
  #product {
    margin-bottom: 50px;

    .product-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .product-item {
      background: red;
    }
  }
</style>