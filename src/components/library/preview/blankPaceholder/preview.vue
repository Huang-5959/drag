<!--
 * @description: 
 * 
 * 
 * 
 * 
-->
<script setup lang="ts">
/*
 *variable
 */
const $props = defineProps({
    formData: {
        type: Object,
        default() {
            return {}
        },
    },
})
const inlineStyle = computed(() => {
    return `height:${$props.formData.height}px`
})
/*
 *lifeCircle
 */
/*
 *function
 */
</script>

<template>
    <!-- 空白占位 -->
    <div :style="inlineStyle"></div>
</template>

<style lang="scss" scoped></style>
