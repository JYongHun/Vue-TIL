<template>
    <ul style="list-style-type":none>
        <li v-for="item in items">
            <slot :item="item"></slot>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [1,2,3]
        }
    },
}
</script>