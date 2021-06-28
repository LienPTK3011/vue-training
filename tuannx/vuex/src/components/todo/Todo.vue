<template>
    <div class="app">
        <h1>To do List</h1>
        <Todolist v-for="(todo, index) in todos" :key="index" :todo="todo"/>
        <Todofrom/>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import Todolist from './Todolist.vue'
import Todofrom from './Todofrom.vue'
@Component({
    components:{
        Todolist,
        Todofrom
    },
    computed:{
        todos(){
            return this.$store.state.todos;
        }
    }
})
export default class Todo extends Vue{

}
</script>

<style lang="sass" scoped>
.app
    margin-top:40px
    text-align: center
</style>>
