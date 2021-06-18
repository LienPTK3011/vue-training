<template>
  <v-row>
    <Header></Header>
    <FormAdd></FormAdd>
    <Todo></Todo>
  </v-row>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Header from '../components/Header/Header.vue'
import FormAdd from '../components/Todo/FormAdd.vue'
import Todo from '../components/Todo/Todo.vue'

@Component({
  components: {
    Header, FormAdd, Todo
  }
})
export default class Home extends Vue {

}

</script>
