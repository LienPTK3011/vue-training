<template>
    <div>
        <h1>{{todo.title}} <v-btn color="red" @click="deleteTodo">Delete</v-btn></h1>
        
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Todolist extends Vue{
    @Prop() private todo?:[];

    deleteTodo(){
        console.log("xóa");
        this.$store.dispatch('deleteTodo',this.todo)
    }
}
</script>
<style lang="sass" scoped>
</style>
