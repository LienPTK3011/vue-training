<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>
    <v-row justify="center" style="margin-right: 450px">
      <v-btn
        v-for="(menu, i) in listMenu"
        :key="i"
        color="white"
        text
        rounded
        class="my-2"
      >
        <router-link
          style="color: white; text-decoration: none; padding: 5px"
          :to="menu.url"
          >{{ menu.name }}</router-link
        >
      </v-btn>
    </v-row>
    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  @Prop() private listMenu?: any[];
}
</script>