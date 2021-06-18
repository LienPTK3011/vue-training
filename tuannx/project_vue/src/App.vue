<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from "./components/header/Header.vue";

@Component({
  components: { Header },
})
export default class App extends Vue {

}
</script>