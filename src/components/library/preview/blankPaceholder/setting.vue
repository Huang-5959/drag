<!--
 * @description: 空隔符设置
 * 
 * 
 * 
 * 
-->
<script setup lang="ts">
import blankPaceholder from './blankPaceholder'
import { useVModel } from '@vueuse/core'
import type { PropType } from 'vue'
/*
 *variable
 */
const $props = defineProps({
    formData: {
        type: Object as PropType<typeof blankPaceholder>,
        default() {
            return blankPaceholder
        },
    },
})
const $emit = defineEmits(['update:formData'])
const formData = useVModel($props, 'formData', $emit)
/*
 *lifeCircle
 */
/*
 *function
 */
</script>

<template>
    <el-form :model="formData" label-width="80px">
        <el-form-item label="空白高度">
            <!-- <el-row type="flex" align="middle" :gutter="10"> -->
            <el-col :span="16">
                <el-slider v-model="formData.height" :max="100" :min="10" :show-tooltip="false"></el-slider>
            </el-col>
            <el-col :span="6" style="margin-left: 15px">{{ formData.height }}像素</el-col>
            <!-- </el-row> -->
        </el-form-item>
    </el-form>
</template>

<style lang="scss" scoped></style>
