<template>
  <div>
    <ProjectList :projectList="project.projectList"></ProjectList>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectList from "./ProjectList.vue";
import axios from "axios";
interface project {
  projectList: any[];
}
@Component({
  components: {
    ProjectList,
  },
})
export default class Project extends Vue {
  project: project = {
    projectList: [],
  };
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/project`);

      this.project.projectList = res.data;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>