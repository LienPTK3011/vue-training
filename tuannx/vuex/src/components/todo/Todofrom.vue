<template>
    <div>
        <v-text-field outlined v-model="newTodo"></v-text-field>
        <v-btn color="primary" @click="addTodo">Add</v-btn>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';

@Component
export default class Todofrom extends Vue{
    private newTodo = "";
    addTodo(){
        this.$store.dispatch('addTodo',this.newTodo);
        this.newTodo="";
    }
}
</script>