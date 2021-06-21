<template>
    <div id="formAdd">
        <v-form>
            <v-text-field
            label="Name"
            required
            v-model="todoName"
            ></v-text-field>

            <v-btn
            color="success"
            @click="addTodo"
            >
            Add Todo
            </v-btn>
        </v-form>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class FormAdd extends Vue {
    private todoName?: string | number = ''

    addTodo() {
        if (this.todoName == '') {
            return
        }
        
        let lastIdTodo = this.$store.getters.lastIdTodo
        let todo = {
            id: lastIdTodo + 1,
            name: this.todoName,
            isCompleted: false
        }
        this.$store.dispatch('addTodo', todo)
    }
}
</script>

<style lang="scss">
    #formAdd {
        width: 100%;
        display: flex;
        height: 150px;
        align-items: center;
        justify-content: space-between;

        form {
            width: 100%;
        }
    }

    .v-text-field {
        padding-top: 0;
    }
</style>