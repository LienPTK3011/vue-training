<template>
  <div>
    <h1 class="project-header">Danh sách Employee</h1>
    <table id="customers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Seniority</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in employeeList"
          :key="i"
          :class="{
            working: item.seniority > 5 && item.isWork,
            notworking: !item.isWork,
          }"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.seniority }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class EmployeeList extends Vue {
  @Prop() private employeeList?: any[];
}
</script>
<style lang="scss">
.project-header{
  margin-top:30px;
  text-align:center;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top:30px;
}
#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
#customers tr:hover {
  background-color: #ddd;
}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04aa6d;
  text-align:left;
  color: white;
}
.working {
  background: yellow;
}
.notworking {
  background: gray;
}
</style>