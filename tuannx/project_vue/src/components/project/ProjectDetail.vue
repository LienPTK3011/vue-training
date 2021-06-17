<template>
  <div>
    <h1 class="project-header">Chi tiết Project</h1>
    <table id="customers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Pm</th>
          <th>TeamSize</th>
          <th>Customer</th>
          <th>Deatil</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ project.name }} <span v-show="project.important">*</span></td>
          <td>{{ project.pm }}</td>
          <td>{{ project.teamSize }}</td>
          <td>{{ project.customer }}</td>
          <td>{{ project.detail }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios"
@Component
export default class ProjectDetail extends Vue {
  @Prop() readonly id?:number;
  project={};
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/project/${this.id}`);

      this.project = res.data;
    } catch (e) {
      console.error(e);
    }
  }
  
}
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}
#customers tr:hover {
  background-color: #ddd;
}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
}
</style>