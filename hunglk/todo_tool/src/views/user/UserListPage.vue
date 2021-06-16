<template>
  <div>
      <h1>This is list user page</h1>
      
      <!-- <b-table :items="this.data"></b-table> -->
      <button @click="add">Add User</button>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>User name</th>
            <th>Full name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>email</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody v-for="item in this.data" :key="item.id">
          <tr @dblclick="edit(item)">
            <td>{{ item.id }}</td>
            <td>{{ item.userName }}</td>
            <td>{{ item.fullName }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phoneNumber }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { userService } from '@/service';
import { UserResponse } from '@/models';

@Component
export default class UserListPage extends Vue {
  private data: UserResponse [] = [];
   private created() {
    return userService.getAllUser().then((res) => {
       this.data = res.data;
    });
  }
  private edit(item: any) {
     if (!item.id) {
      return;
    }
    this.$router.push(
      {
        name: 'user_edit',
        params: { id: item.id },
      },
    );
  }
  private add() {
    this.$router.push(
      {
        name: 'user_add',
      },
    );
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
  background-color: #f51010;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  float: none;
}
tr:hover {
  background-color: #d3db60;
}
</style>