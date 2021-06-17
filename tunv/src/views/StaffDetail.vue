<template>
  <div class="staff">
    <div class="staff-todo-form">
      <h3 id="title">{{ staff.name }}' todos list</h3>
      <div class="add-todo">
        <v-text-field
          v-model="todo"
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
                :key="index"
                v-for="(todo, index) in staff.todos"
                :todo="todo"
                :todoIndex="index"
                @deleteTodo="deleteTodo"
                @doneEditTodo="doneEditTodo"
              />
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
    <div class="staff-information">
      <img
          :src="imgSrc"
          alt="Avatar"
      >
      <v-form @submit.prevent="checkValidInformation()" class="staff-detail-form">
        <div v-if="errorMessage.length">
          <p :key="index" v-for="(error,index) in errorMessage">{{ error }}</p>
        </div>
        <v-container>
          <v-text-field
            label="Name"
            v-model="staff.name"
          >
          </v-text-field>
          <v-text-field
            label="Age"
            type="number"
            v-model="staff.age"
          >
          </v-text-field>
          <v-text-field
            label="Exprience"
            :value="staff.exprience + ' years'"
          >
          </v-text-field>
          <v-file-input
            @change="changeImage"
            truncate-length="15"
          ></v-file-input>
        </v-container>
        <v-btn
          elevation="2"
          type="submit"
        >
          Save
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import StaffTodo from '../components/StaffTodo.vue';
  import { Todo, Staff } from '@/interfaces/index.js';
  
  @Component({
    components: {
      StaffTodo,
    }
  })
  export default class StaffDetail extends Vue {
    @Prop() readonly name!: string
    todo = '' ;
    staff = {};
    imgSrc = ''
    staffId = this.$route.params.id
    errorMessage: Array<string> = []

    async getStaffFromApi() {
      let respone = await fetch(`http://localhost:3000/staffs/${this.staffId}`)
      let staff: Staff = await respone.json()
      return staff
    }

    async created() {
      let staff = await this.getStaffFromApi()
      this.staff = staff
      this.imgSrc = this.staff.avatar
    }

    async checkValidInformation() {
      if (!this.staff.name.length || this.staff.age <= 0) {
        let error = 'Please enter your information'
        this.errorMessage.push(error)
        return
      }

      let currentStaffInfor = await this.getStaffFromApi()
      let staffUpdate = {...currentStaffInfor, name: this.staff.name, age: this.staff.age, avatar: this.imgSrc}
      this.staff = await this.updateStaffInformation(staffUpdate)
    }

    async updateStaffInformation(staffInformation: Staff) {
      let respone = await fetch(`http://localhost:3000/staffs/${this.staffId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(staffInformation)
      })
        
      let staffUpdated = await respone.json()
      return staffUpdated
    }

    async addNewTodo() {
      if (this.todo.length) {
        let newTodo: Todo = {
          name: this.todo,
          completed: false,
          edit: false
        }
        let currentStaff = await this.getStaffFromApi()
        let staffTodo = currentStaff.todos
        staffTodo.push(newTodo)
        let staffUpdate = {...currentStaff, todos: staffTodo}

        this.staff = await this.updateStaffInformation(staffUpdate)
      }
    }

    async deleteTodo(index: number) {
      let respone = await this.getStaffFromApi()
      let staffTodo = respone.todos
      staffTodo.splice(index, 1)
      let staffUpdated = {...respone, todos: staffTodo}
      this.staff = await this.updateStaffInformation(staffUpdated)
    }

    async doneEditTodo(todoUpdated: Todo) {
      let currentStaff = this.getStaffFromApi()
      let staffUpdated = {...currentStaff, todos: todoUpdated}
      console.log(staffUpdated)
    }

    changeImage(event) {
      this.imgSrc = URL.createObjectURL(event)
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
