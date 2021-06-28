<template>
  <v-app>
    <Menu />
    <v-main>
      <router-view />
    </v-main> 
  </v-app>
</template>
 <script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Menu from "./components/menu/Menu.vue";
@Component({
  components: {
    Menu,
  },
})
export default class App extends Vue {
  
}
</script>