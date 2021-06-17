<template>
    <tr>
        <td>
            <v-checkbox
            @click="doneEditTodo(todo)"
            v-model="todo.completed"
            ></v-checkbox>
        </td>
        <td @click="editTodo(todo)" 
            :class="{completed: todo.completed}" 
            v-if="!todo.edit"
        >
            {{ todo.name }}
        </td>
        <td @keyup.enter="doneEditTodo(todo)" v-else>
            <v-text-field
            v-model="todo.name"
            required
            ></v-text-field>
        </td>
        <td class="delete-todo" @click="deleteTodo(index)">
            &times;
        </td>
    </tr>
    
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component
    export default class StaffTodo extends Vue {
        @Prop() todo!: unknown
        deleteTodo(index: number) {
            this.$emit('deleteTodo', index)
        }
        editTodo(todo: object) {
            todo.edit = true;
        }
    }
</script>

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

