<template>
    
</template>

<script lang="ts">
import { ref, readonly, provide } from 'vue'

export default {
    name: 'TodoListContainer',
    setup() {
        const todos = ref([])
        provide('todos', readonly(todos))
        const initTodos = (init_todos) => {
            todos.vlaue = init_todos
        }

        const addTodo = (todo, date) => {}
        const removeTodo = (id) => {}
        const completeTodo = (id) => {}

        provide('addTodo', addTodo)
        provide('removeTodo', removeTodo)
        provide('completeTodo', completeTodo)
    },
}
</script>
