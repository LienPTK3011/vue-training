<template>
  <v-col md="2"
    ><v-card elevation="4" outlined>
      <h1 class="cart-header" :class="{ isWorking: item.year < 2015 }">
        <v-avatar
          color="primary"
          size="40"
          class="cart-avatar"
          v-if="item.avatar != ''"
        >
          <img :src="item.avatar" alt="" />
        </v-avatar>
        <v-avatar
          color="primary"
          size="40"
          class="cart-avatar"
          v-if="item.avatar == ''"
        >
          <img
            src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
            alt=""
          />
        </v-avatar>
        <span>{{ item.name }}</span>
      </h1>

      <v-card-text class="text-cart">
        <p>
          Have worked: <span class="bold">{{ item.year }} year</span>
        </p>
        <p>
          Working status: <span class="bold">{{ item.is_work }}</span>
        </p>
        <p>
          Level: <span class="bold">{{ item.level }}</span>
        </p>
      </v-card-text>

      <div class="cart-action">
        <router-link
          class="cart-button"
          :to="{ name: 'StaffAction', params: { id: item.id } }"
        >
          <v-btn small class="cart-button-detail"> DETAIL </v-btn>
        </router-link>
        <v-btn small @click="deleteStaff(item.id)"> DELETE </v-btn>
      </div>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class StaffCon extends Vue {
  @Prop() private item?: any;
  @Prop() private i?: string;

  @Emit("deleteItem")
  deleteStaff(i: number): number {
    return i;
  }
}
</script>

<style>
.isWorking {
  background: #ccc !important;
}
</style>
