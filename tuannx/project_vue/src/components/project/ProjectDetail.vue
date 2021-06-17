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
          <td>{{ item.name }} <span v-show="item.important">*</span></td>
          <td>{{ item.pm }}</td>
          <td>{{ item.teamSize }}</td>
          <td>{{ item.customer }}</td>
          <td>{{ item.detail }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ProjectDetail extends Vue {
  item = this.$attrs.item;
}
</script>

<style scoped>
.project-header{
  margin-top:30px;
  text-align:center;
}
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