
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ComponentItem } from '@/components/library/formModel';
import settingComponents from '@/components/library/setting';

export default defineComponent({
  props: {
    component: {
      type: Object as PropType<ComponentItem>,
      default() {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    // 这里可以添加对props和emit的使用
    // 示例：触发一个事件
    // emit('some-event', someData);

    return {
      settingComponents,
    };
  },
});
</script>

<template>
  <div>
    <component
      :is="settingComponents[component.value]"
      :form-data="component?.formData"
    ></component>
  </div>
</template>

<style lang="scss" scoped></style>

