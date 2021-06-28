<template>
  <div>
    <v-app-bar style="background: #fed100">
      <v-toolbar-title><router-link style="text-decoration: none;color:black" to="/">SHOP HIHI</router-link></v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer"> Menu </v-btn>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon small left>fa-home</v-icon>
          Home
          <p>{{ test }}</p>
        </v-btn>
        <v-btn to="/store" text>
          <v-icon small left>fa-shopping-basket</v-icon>
          Store
        </v-btn>
        <v-btn to="/cart" text>
          <v-icon small left>fa-shopping-cart</v-icon>
          Cart {{ numberCart }}
        </v-btn>
        <v-btn to="/signup" text> SignUp </v-btn>
        <v-btn text v-if="user.username != null" @click="clear"> Logout </v-btn>
        <v-btn to="/login" text v-else > Login </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="item in item"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon small>fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
//import axios from "axios";
//import headerauth from "@/store/DataService";
@Component
export default class Menu extends Vue {
  private drawer = false;
  private check = false;
  private tem = {};
  private test = "";
  item = [
    { title: "Home", link: "/", icon: "home" },
    { title: "Store", link: "store", icon: "shopping-basket" },
    { title: "Cart", link: "cart", icon: "shopping-cart" },
  ];

  get numberCart() {
    return this.$store.state.cart.length;
  }
  get user() {
    return this.$store.state.user;
  }
  clear(){
    console.log("xóa");
    this.$store.dispatch('clear')
    this.$router.push('/login')
  }
  
}
</script>

if (this.user != null) {
      axios
        .get(`http://localhost:8993/api/test/user/${this.user.username}`, {
          headers: headerauth(),
        })
        .then((res) => {
          console.log(res.data);
          this.test = res.data.username;
        });
    }