<template>
  <div>
    <h1 class="project-header">Danh sách Project</h1>
    <table id="customers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Pm</th>
          <th>TeamSize</th>
          <th>Customer</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in projectList" :key="i">
          <td>{{ item.name }} <span v-show="item.important">*</span></td>
          <td>{{ item.pm }}</td>
          <td>{{ item.teamSize }}</td>
          <td>{{ item.customer }}</td>
          <td>
            <router-link
              :to="{
                name: 'ProjectDetail',
                params: { id: item.id, item: item },
              }"
              >Chi tiết</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    projectList: {
      type: Array as () => Array<any>,
    },
  },
  data() {
    return {
    };
  },
};
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
  margin-top:30px;
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
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
.form-group {
  text-align: right;
}
.form-group input {
  border: 1px solid black;
}
</style>