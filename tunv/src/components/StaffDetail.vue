<template>
  <div class="staff">
    <div class="staff-todo-form">
      <h3 id="title">{{ staffName }}' todos list</h3>
      <div class="add-todo">
        <v-text-field
          v-model="newTodo"
          label="New todo"
          required
          @keyup.enter="addNewTodo()"
        ></v-text-field>
        <v-btn
         @click="addNewTodo()"
          elevation="2"
          id="add-todo-btn"
        >Add</v-btn>
      </div>

      <div class="todos-list">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <StaffTodo 
                v-for="(todo, index) in staff.todos"
                :key="index"
                :todo="todo"
                :index="index"
                @deleteTodo="deleteTodo"
              />
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
    <div class="staff-information">
      <img
          :src="'../../' + staff.avatar"
          alt="Avatar"
      >
      <v-form class="staff-detail-form">
        <v-container>
          <v-text-field
              label="Name"
              v-model="staff.name"
          >
          </v-text-field>
          <v-text-field
              label="Age"
              v-model="staff.age"
          >
          </v-text-field>
          <v-text-field
              label="Exprience"
              :value="staff.exprience + ' years'"
          >
          </v-text-field>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import StaffTodo from './StaffTodo.vue'
  @Component({
    components: {
      StaffTodo,
    }
  })
  export default class StaffDetail extends Vue {
    @Prop() readonly name!: unknown
    newTodo = '' ;
    staffName = this.$route.params.name;
    staff = this.$route.params.items;

    addNewTodo() {
      if (this.newTodo.length) {
        let newTodo = {
          name: this.newTodo,
          completed: false,
          edit: false
        }
        this.staff.todos.push(newTodo);
        // this.$emit('add-todo', newTodo)
        this.newTodo = '';
      }
    }

    deleteTodo(index: number) {
      this.staff.todos.splice(index, 1);
    }

    editTodo(todo: object) {
      todo.edit = true;
    }

    doneEditTodo(todo: object) {
      if (todo.edit) {
        todo.edit = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .staff-todo-form {
    width: 40%;
    margin: auto;
  }

  .todo input {
    margin: 2%;
  }

  .add-todo {
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 1%;
    margin-bottom: 2%;
  }

  #add-todo-btn {
    margin-left: 2%;
  }

  .staff {
    display: flex;
    align-items: center;
  }

  .delete-todo {
    cursor: pointer;
  }

  .delete-todo:hover {
    color: red;
  }

  .todo {
    display: flex;
    align-items: center;
    width: 80%;
    position: relative;
  }

  .completed {
    text-decoration: line-through;
  }

  .staff-information {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    margin: auto;
    box-shadow: 2px 2px 2px 2px;
  }

  .staff-detail-form {
    width: 70%;
  }

  h3#title {
    text-align: center;
  }
</style>