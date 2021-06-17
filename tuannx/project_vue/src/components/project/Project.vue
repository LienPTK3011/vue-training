<template>
  <div>
    <ProjectList :projectList="project.projectList"></ProjectList>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectList from "./ProjectList.vue";
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
    projectList: [
      {
        id: 1,
        name: "Xay dung 1",
        pm: "Nguyen Xuan Tuan",
        teamSize: 5,
        customer: "VietNam",
        important: false,
        detail: "Rất quan trọng",
      },
      {
        id: 2,
        name: "Xay dung 2",
        pm: "Tran Thi Duyen",
        teamSize: 10,
        customer: "Japan",
        important: true,
        detail: "Rất quan trọng",
      },
      {
        id: 3,
        name: "Xay dung 3",
        pm: "Nguyen Thi My Duyen",
        teamSize: 20,
        customer: "Vietnam",
        important: false,
        detail: "Đặc biệt",
      },
      {
        id: 4,
        name: "Xay dung 4",
        pm: "Nguyen Thanh Long",
        teamSize: 4,
        customer: "HongKong",
        important: true,
        detail: "Quan trọng",
      },
    ],
  };
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