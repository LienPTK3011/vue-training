<template>
  <div>
      <h1>This is list user page</h1>
      <div class="b">
        <input v-model="searchId" class="search-text" type="number" placeholder="Search by id" />
         <button @click="search">Search</button>
      </div>
       <div class="b">
        <select name="" id="projectId" placehoder="Select project"></select>
        <select name="" id="userId" placehoder="Select user"></select>
        <button @click="add">Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Project</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in this.data" :key="item.id">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ item.projectId }}</td>
            <td>{{ item.userId }}</td>
          </tr>
        </tbody>
        
      </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { userService, projectService, toDoService } from '@/service';
import { UserResponse } from '@/models';

import { component } from 'vue/types/umd';

@Component
export default class ToDoListPage extends Vue {
  private data: any [] = [];
  private searchId?: number | null = null;
   private created() {
    return toDoService.getAllToDo().then((res) => {
       this.data = res.data;
    });
  }
  
  private add() {
    this.$router.push(
      {
        name: 'user_add',
      },
    );
  }
  private search() {
    const id = Number(this.searchId);
    if (id !== 0) {
      userService.getUserById(id).then((res) => {
        this.data = [];
        this.data.push({
          id: res.data.id,
          userName: res.data.userName,
          fullName: res.data.fullName,
          age: res.data.age,
          gender: res.data.gender,
          address: res.data.address,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
        });
    });
    } else {
      userService.getAllUser().then((res) => {
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
select {
  width: 200px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
.search-text {
  width: 300px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
.b {
  margin: 15px;
}
.yellow {
  background-color: yellow;
}
.gray {
  background-color: gray;
}
/* .active-pink-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #f48fb1;
    box-shadow: 0 0 0 1px #f48fb1;
  }
  .active-pink-3 input[type=text] {
    border: 1px solid #f48fb1;
    box-shadow: 0 0 0 1px #f48fb1;
  }
  .active-purple-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #ce93d8;
    box-shadow: 0 0 0 1px #ce93d8;
  }
  .active-purple-3 input[type=text] {
    border: 1px solid #ce93d8;
    box-shadow: 0 0 0 1px #ce93d8;
  }
  .active-cyan-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #4dd0e1;
    box-shadow: 0 0 0 1px #4dd0e1;
  } */
</style>