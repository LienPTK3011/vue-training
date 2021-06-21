<template>
  <v-col md="3">
    <nuxtLink :to="newItem.url" class="new-item">
      <v-card>
        <img :src="newItem.img" alt="">
        <div class="new-name">
          <p>{{ newItem.name }}</p>
          <span class="new-time">
            {{ newItem.time }}
          </span>
        </div>
        <v-divider></v-divider>
        <p class="new-detail">See more</p>
      </v-card>
    </nuxtLink>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class NewItem extends Vue {
  dataTitle = "News"

  @Prop() readonly newItem?: Array<string>
}
</script>

<style lang="scss" scoped>
  .new-item {
    text-align: center;

    img {
      margin-bottom: 10px;
    }

    .new-name {
      padding: 0 20px;
      padding-bottom: 20px;
      p {
        text-align: left;
        font-weight: bold;
      }

      span {
        display: block;
        text-align: left;
        color: #CCC;
      }
    }
      .new-detail {
        padding: 10px 0;
        font-weight: bold;
      }
  }
</style>