<template>
  <div class="wrapper">
    <h1>So luong hoan thanh: {{ todoIsCompleted }} cong viec</h1>
    <ul>
      <li v-for="(todo, i) in todos" :key="i" :class="{isCompleted: todo.isCompleted}">
        {{ todo.name }}
        <input type="checkbox" @click="checkedTodo(todo.id)" :checked="todo.isCompleted">
        <button @click="deleteTodo(i)">Xoa</button>
      </li>
    </ul>
    <p class="percent">Da hoan thanh: {{ percent }} %</p>
    <div class="add">
      <v-text-field
          hide-details="auto"
          v-model="todoName"
        ></v-text-field>
        <v-btn
          depressed
          color="primary"
          @click="add"
        >
          Primary
        </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters(['todos', 'todoIsCompleted', 'percent', 'lengthTodo'])
  }
})
export default class Home extends Vue {
  private todoName = ''

  // get todos(): Array<string> {
  //   return this.$store.getters.getAllTodo
  // }

  // get todoIsCompleted(): number {
  //   return this.$store.getters.getTodoIsCompleted
  // }

  // get getPerson(): number {
  //   return this.$store.getters.getPerson
  // }

  // get getAuthenticate(): boolean {
  //   return this.$store.getters.getAuthenticate
  // }

  checkedTodo(id: number): void {
    this.$store.dispatch('checkedTodo', id)
  }

  deleteTodo(i: number): void {
    this.$store.dispatch('deleteTodo', i)
  }

  add(): void {
    let i = this.$store.getters.lastElementId
    const todo = {
      id: i + 1,
      name: this.todoName,
      isCompleted: false
    }
    this.todoName = ''
    this.$store.dispatch('add', todo)
  }

}

</script>

<style>
  li {
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding: 20px;
    background: #DDD;
    margin: 10px;
  }

  input[type=checkbox] {
    width: 20px;
    height: 20px;
  }
  
  .percent {
    text-align: center;
    padding: 20px;
    background: greenyellow;
  }

  .add {
    padding: 30px;
  }

  .add button {
    margin-top: 20px;
  }
  .isCompleted {
    background: greenyellow;
  }
</style>