<template>
    <h1>{{count}}</h1>

</template>

<script>
export default {
    data() {
        return {
            count: 2
        }
    },

    //생명주기 작성순서는 상관없지만 직관적으로 볼수있도록 하는게 좋지
    //before는 생각보다 많이 사용되지는 않음

    //컴포넌트가 생성되기전
    beforeCreate() {
        console.log('Before Create!', this.count)
    },

    //컴포넌트가 생성된 직후
    created() {
        console.log('Created!', this.count)
    },

    //html 연결되기전 마운트
    beforeMount() {
        console.log('Before Mounted!')
        console.log(document.querySelector('h1'))
    },
    //html 구조와 연결된 직후
    mounted() {
        console.log('Mounted!')
        console.log(document.querySelector('h1'))
    },
}
</script>
