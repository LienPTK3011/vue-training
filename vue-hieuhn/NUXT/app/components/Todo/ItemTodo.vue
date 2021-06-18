<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title class="itemName" >
                <span :class="{compeleted: todo.isCompleted}">{{ todo.name }}</span>
                <div class="action">
                    <input class="isCompeleted" type="checkbox" :checked="todo.isCompleted" @click="checkedComplete(todo.id)">
                    <v-btn
                        small
                        @click="deleteTodo(keyTodo)"
                        >
                        delete
                    </v-btn>
                </div>
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface Todo {
    id: number,
    name: string,
    isCompleted: boolean
}

@Component
export default class ItemTodo extends Vue {
    @Prop() todo?: Todo
    @Prop() keyTodo?: number

    checkedComplete(id: number): void {
        this.$store.dispatch('checkedComplete', id)
    }

    deleteTodo(key: number): void {
        this.$store.dispatch('deleteTodo', key)
    }
}
</script>

<style lang="scss">
    .isCompeleted {
        width: 20px;
        height: 20px;
        margin: 0 20px;

        &:hover {
            cursor: pointer;
        }
    }
    .itemName {
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        border-bottom: 1px solid #DDD;
        padding: 0 20px;
        transition: 0.3s;

        &:hover {
            background: #CCC;
        }
    }
    .compeleted {
        text-decoration: line-through;
        font-weight: bold;
    }
    .action {
        display: flex;
        align-items: center;
        height: 100%;
    }
</style>