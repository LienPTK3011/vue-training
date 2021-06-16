<template>
  <div>
    <h1 class="project-header">Project List</h1>
    <v-row>
      <ProjectCon
        v-for="(item, i) in listProject"
        :key="i"
        :item="item"
      ></ProjectCon>
    </v-row>
    <router-link class="home" to="/">
      <v-btn>Trang chu</v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectCon from "./ProjectCon.vue";

@Component({
  components: {
    ProjectCon,
  },
})
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
