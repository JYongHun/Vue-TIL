<template>
    <div style="width: 200px">
        <ol>
            <li v-for="item in items">{{item}}</li>
        </ol>
    </div>
</template>


<script>
import { ref } from 'vue'

export default {
    setup() {
        //아래와 같은 식으로도 가능 대신 순번이 낮은 순서대로 나옴
        const items = ref ({10:'1번 아이템', 3:'2번 아이템', 9:'3번 아이템'})
        //const items = ref ({1:'1번 아이템', 2:'2번 아이템', 4:'3번 아이템'})
        return {
            items,
        }
    },
}
</script>