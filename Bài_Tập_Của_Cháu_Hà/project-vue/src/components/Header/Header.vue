<template>
  <div class="wrapHeadertop">
    <v-container>
      <div class="wrapHeader">
        <div class="logo">
            <img
             :src="Menu.logo" 
              @click="$router.push({ name: 'Home' })"
            />
        </div>
        <div class="wrapTopBar">
          <TopBar :getDataTopBar="Menu.menu" />
        </div>
      </div>
    </v-container>
  </div>
</template>
<style lang="scss">
.wrapHeadertop {
  width: 100%;
  box-shadow: 25px -4px 7px 3px;

  .wrapHeader {
    width: 100%;
    display: flex;
    height: 200px;
    .logo {
      width: 200px;
      display: flex;
      justify-content: center;
      align-content: center;
    }
    .wrapTopBar {
      display: block;
      width: 100%;
    }
  }
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TopBar from "./TopBar.vue";
interface dataHeader {
  menu: any[];
  logo: string;
}
@Component({
  components: {
    TopBar,
  },
})
export default class Header extends Vue {
  Menu: dataHeader = {
    menu: [
      {
        title: "Information",
        routeName: "Information",
      },
      // {
      //   name: "McCafé",
      //   url: "/mccafe",
      // },
      // {
      //   name: "About Our Food",
      //   url: "/aboutourfood",
      // },
      // {
      //   name: "Exclusive Deals",
      //   url: "/exclusivedeals",
      // },
      // {
      //   name: "Download App",
      //   url: "/downloadapp",
      // },
      // {
      //   name: "locate",
      //   url: "/locate",
      // },
      // {
      //   name: "Information",
      //   url: "/information",
      // },
      // {
      //   name: "Login",
      //   url: "/login",
      // },
    ],
    logo: "../img/logo.jpg",
  };
}
</script>
