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
          <h1>Slide Item, Coming Soon!!!</h1>
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

}
</script>

<style lang="scss" scoped>
  #product {
    margin-bottom: 50px;
    height: 450px;

    .product-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .agile {
      width: 100%;
      height: 100px;

      &__actions {
        margin-top: 20px;
      }
      &__nav-button {
        background: transparent;
        border: none;
        color: #ccc;
        cursor: pointer;
        font-size: 24px;
        transition-duration: .3s;

        &:hover {
          color: #888;
        }
      }
      &__dot {
        margin: 0 10px

        button {
          background-color: #eee;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: block;
          height: 10px;
          font-size: 0;
          line-height: 0;
          margin: 0;
          padding: 0;
          transition-duration: .3s;
          width: 10px;
        }
      }
    }

    .slide {
      align-items: center;
      color: #fff;
      display: flex;
      justify-content: center;

      h3 {
        font-size: 32px;
        font-weight: 300;
      }
    }
  }
</style>