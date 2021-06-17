<template>
  <v-col xl="2">
    <router-link
      :to="{ name: 'DetailProject', params: { id: item.id, item: item } }"
      class="projectItem"
    >
      <v-card class="mx-auto">
        <v-card-text>
          <h1 class="project-title">
            {{ item.name }}
            <span class="project-important" v-show="item.important">*</span>
          </h1>
          <div class="project-content">
            <h4 class="project-auth">PM: {{ item.pm }}</h4>
            <p class="bold">Teamsize: {{ item.teamSize }}</p>
            <p class="bold">Khach hang: {{ item.customer }}</p>
          </div>
        </v-card-text>
      </v-card>
    </router-link>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ProjectCon extends Vue {
  @Prop() private item?: any;
}
</script>

<style></style>
