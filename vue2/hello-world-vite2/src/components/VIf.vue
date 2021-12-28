<template>
    <p>{{counter}}</p>
    <p v-if="counter < 5">5보다 작음</p>
    <p v-else-if="counter == 5">5임 </p>
    <p v-else>5보다 큼</p>
    <button @click="counter++">클릭</button>
</template>

<script>
import { ref } from 'vue'

export default {
    //Composition API
    setup() {
        let counter = ref(0)
        return {
            counter,
        }
    },
}
</script>
