<template>
    <component>
        <template v-slot="slotProps"> v {{slotProps.item}} </template>
    </component>
</template>

<script>
import Component from './Slots.vue'

export default {
    component : {
        Component,
    },
}
</script>