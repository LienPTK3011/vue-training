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
      text
    >
      <router-link
          style="color: white; text-decoration: none; padding: 5px"
          to="/login"
          ><span class="mr-2">Login</span></router-link>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
    listMenu= [
      {
        id: 1,
        name: "Home",
        url: "/",
      },
      {
        id: 2,
        name: "Project",
        url: "/project",
      },
      {
        id: 3,
        name: "Employee",
        url: "/employee",
      },
      {
        id: 4,
        name: "Customer",
        url: "/customer",
      },
      {
        id: 4,
        name: "User",
        url: "/user",
      },
    ]
}
</script>