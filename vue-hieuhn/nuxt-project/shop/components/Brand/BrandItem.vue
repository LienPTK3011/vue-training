<template>
  <v-card class="brand-history-item">
    <div class="title">
      <img :src="brand.img" alt="">
    </div>
    <v-card-text>
      <ul class="brand-list">
        <li>
          <router-link :to="brand.urlLeft">
            {{ brand.textLeft }}
          </router-link>
        </li>
        <div class="brand-line"></div>
        <li>
          <router-link :to="brand.urlRight">
            {{ brand.textRight }}
          </router-link>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BrandItem extends Vue {
  @Prop() private brand?: Array<string>
}
</script>

<style lang="scss">
  .brand-history-item {
    width: 50%;
    text-align: center;
    margin: 0 10px;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      background: #fff3e0;
    }
    .brand-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 24px;

      li {
        width: 50%;
        a {
          color: rgb(179, 175, 175);
        }
      }
      .brand-line {
        width: 1px;
        height: 100%;
        background: red;
      }
    }
  }
</style>