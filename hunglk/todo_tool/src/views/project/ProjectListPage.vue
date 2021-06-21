<template>
  <div>
      <h1>This is list project page</h1>
      <div class="b">
        <input v-model="searchId" class="search-text" type="number" placeholder="Search by id" />
         <button @click="search">Search</button>
         <button @click="add">Add Project</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Project name</th>
            <th>Project manager</th>
            <th>Team size</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in this.data" :key="item.id">
          <tr @dblclick="edit(item)">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }} {{item.teamSize > 50 ? '*' : ''}}</td>
            <td>{{ item.pm }}</td>
            <td>{{ item.teamSize }}</td>
            <td>{{ item.customer }}</td>
          </tr>
        </tbody>
        
      </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { projectService } from '@/service';
import { ProjectResponse } from '@/models';

@Component
export default class ProjectListPage extends Vue {
  private data: ProjectResponse [] = [];
  private datas: any;
  private searchId?: number | null = null;

   private created() {
    return projectService.getAllProject().then((res) => {
       this.data = res.data;
    });
  }
  private edit(item: any) {
     if (!item.id) {
      return;
    }
    this.$router.push(
      {
        name: 'project_edit',
        params: { id: item.id },
      },
    );
  }
  private add() {
    this.$router.push(
      {
        name: 'project_add',
      },
    );
  }
  private search() {
    const id = Number(this.searchId);
    if (id !== 0) {
      projectService.getProjectById(id).then((res) => {
        this.data = [];
        this.data.push({
          id: res.data.id,
          name: res.data.name,
          pm: res.data.pm,
          teamSize: res.data.teamSize,
          customer: res.data.customer,
        });
    });
    } else {
      projectService.getAllProject().then((res) => {
       this.data = res.data;
      });
    }
  }
}
</script>

<style scoped>
table {
  margin: auto;
  border: 2px solid #42b983;
  border-radius: 3px;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
button {
  background-color: #066eb4;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  float: none;
  margin-left: 30px;
}
tr:hover {
  background-color: #d3db60;
}
.search-text {
  width: 300px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
.b {
  margin: 10px;
}
</style>