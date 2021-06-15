<template>
  <div>
    <v-item-group>
      <v-container>
        <h1 
          style="padding: 50px 0;"
        >Project Management</h1>
        <v-row>
          <v-col
            v-for="(item, key) in ListInformationProduct.projectItem"
            :key="key"
            cols="12"
            md="2"
            class="wrap-item-information"
          >
            <router-link
              :to="{
                name: 'productdesc',
                params: { id: item.id, items: item },
              }"
            >
              <v-item>
                <v-card class="item-information" height="300">
                  <div class="titleInforMation">
                    <span>{{ item.product }}</span>
                  </div>
                  <div class="item-user namePm">
                    <div class="title">Pm:</div>
                    <div class="namePm">{{ item.pm }}</div>
                  </div>
                  <div class="item-user teamsize">
                    <div class="title">Teamsize:</div>
                    <div class="namePm">{{ item.teamsize }}</div>
                  </div>
                  <div class="item-user customer">
                    <div class="title">Customer:</div>
                    <div class="namePm">{{ item.customer }}</div>
                  </div>
                </v-card>
              </v-item>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<style lang="scss">
.wrap-item-information {
  .item-information {
    background: #fafafa !important;
    .titleInforMation {
      display: flex;
      width: 100%;
      background: #00bcd4;
      color: white;
      height: 60px;
      align-items: center;
      font-size: 20px;
      padding: 0 10px;
    }
    .item-user {
      margin: 10px 0;
      display: flex;
      align-items: center;
      padding: 0 15px;
    }
  }
  .urlProduct {
    text-decoration: none;
  }
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
interface ProjectItem {
  projectItem: any[];
}
@Component({})
export default class index extends Vue {
  ListInformationProduct: ProjectItem = {
    projectItem: [
      {
        id: "1",
        product: "Kowa-ih-suite.com",
        pm: "Hoàng Trọng Hà",
        teamsize: "4",
        customer: "Japan",
      },
      {
        id: "2",
        product: "Flippa.jp",
        pm: "Hoàng Trọng Hà",
        teamsize: "4",
        customer: "Japan",
      },
      {
        id: "3",
        product: "Auction.jp",
        pm: "Hoàng Trọng Hà",
        teamsize: "4",
        customer: "Laos",
      },
      {
        id: "4",
        product: "Soccer",
        pm: "Hoàng Trọng Hà",
        teamsize: "4",
        customer: "Việt Nam",
      },
    ],
  };
}
</script>
