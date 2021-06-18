<template>
  <div>
    <h1 class="project-header">Project List</h1>
    <button @click="$emit('toParent', 'Phát đi thông báo')">
      Emit
    </button>
    <v-row>
      <v-col xl="2" v-for="project in listProject" v-bind:key="project.id">
        <v-card class="mx-auto">
          <v-card-text>
            <h1 class="project-title">
              {{ project.projectName }}
              <span class="project-important" v-show="project.important"
                >*</span
              >
            </h1>
            <div class="project-content">
              <h4 class="project-auth">PM: {{ project.pm }}</h4>
              <p class="bold">Teamsize: {{ project.teamSize }}</p>
              <p class="bold">Client: {{ project.client }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ListProject extends Vue {
  @Prop() private listProject?: any[];
}
</script>

<style lang="scss">
.project-header {
  font-size: 100px;
  padding: 20px;
}
.projectItem {
  text-align: left;
  text-decoration: none;

  .project-title {
    padding: 10px 0;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
    color: black;
  }

  .bold {
    font-weight: bold;
  }

  .project-important {
    color: red;
  }
}
.home {
  display: block;
  text-align: right;
  margin: 20px 0;
  text-decoration: none;
}
</style>
