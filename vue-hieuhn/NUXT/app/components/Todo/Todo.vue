<template>
    <div id="todo">
        <v-card>
            <ItemTodo 
                v-for="(todo, i) in allTodo" 
                :key="i"
                :keyTodo="i"
                :todo="todo">
            </ItemTodo>
        </v-card>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import ItemTodo from './ItemTodo.vue'

@Component({
    components: {
        ItemTodo
    },
    computed: {
        ...mapGetters(['allTodo'])
    }
})
export default class Todo extends Vue {

}
</script>

<style lang="scss">
    #todo {
        border: 1px solid #DDD;
        width: 100%;
        min-height: max-content;
    }
</style>