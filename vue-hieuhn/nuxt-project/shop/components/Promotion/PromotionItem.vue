<template>
  <v-col md="3">
    <nuxt-link :to="promotion.url">
      <v-card>
        <div class="promotion-item">
          <div class="promotion-img">
            <img :src="promotion.img" alt="">
          </div>
          <div class="promotion-info">
            <div class="promotion-top">
              <span>{{ promotion.endTime }}</span>
              <nuxt-link to="">
                see more ->
              </nuxt-link>
            </div>
            <div class="promotion-desc">
              {{ promotion.desc }}
            </div>
          </div>
        </div>
      </v-card>
    </nuxt-link>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PromotionItem extends Vue {
  @Prop() private promotion?: Array<string>
}
</script>

<style lang="scss" scoped>
  .promotion-item {
    padding-bottom: 12px;
    border-radius: 6px;
    overflow: hidden;

    .promotion-img {
      overflow: hidden;
    }

    &:hover img {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      transition: 1s;
    }
    .promotion-info {
      padding: 6px;
      .promotion-top {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin-bottom: 10px;

        a {
          font-size: 14px;
        }
      }
    }
  }
</style>