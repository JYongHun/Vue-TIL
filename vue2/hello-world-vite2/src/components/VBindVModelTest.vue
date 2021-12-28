<template>
    <div>
        <p>줄임말과 원래말을 입력하세요.</p>
        <input type="text" v-bind:value="addr"/>
        <input type="text" v-model="normal" />
        <hr />
        <addr v-bind:title="normal">{{addr}}</addr>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    // Composition API
    setup() {
        const addr = ref('DOPT')
        const normal = ref('Dong Project Team')
        return {
            addr,
            normal,
        }
    },
}
</script>
