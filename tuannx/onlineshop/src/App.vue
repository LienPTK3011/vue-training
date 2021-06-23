<template>
  <v-app>
    <Menu/>
    <v-main>
      <router-view />
    </v-main> 
  </v-app>
</template>
 <script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Menu from "./components/menu/Menu.vue";
import Login from './views/Login.vue'
@Component({
  components: {
    Menu,
    Login
  },
})
export default class App extends Vue {
  private check =1;
}
</script>