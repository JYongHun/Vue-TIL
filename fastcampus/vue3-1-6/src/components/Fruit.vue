<template>
    <li>{{ name }} ?!</li>
</template>

<script>
export default {
    props: {
        name : {
            type: String,
            default: ''
        }
    }
}
</script>

<style scope lang="scss">
    h1 {
        color: red !important;
    }
</style>