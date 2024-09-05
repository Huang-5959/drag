<script lang="ts">
import { cloneDeep } from 'lodash';
import type { ComponentItem } from '@/components/library/formModel';
import EditorFormData from '@/components/library/formModel';
import librarys from '@/components/library/library';
export default defineComponent({
  props: {
    test: String,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const handleAddComponent = (item: ComponentItem) => {
      const FormData = cloneDeep(EditorFormData[item.value]);
      emit('change', { ...item, id: Date.now(), formData: FormData });
    };
    return {
      handleAddComponent,
      test: props.test,
      librarys,
    };
  },
});
</script>

<template>
  <div
    v-for="item in librarys"
    class="item"
    @click="handleAddComponent(item)"
    :key="item.value"
  >
    {{ item.label }}
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 1px dashed gray;
  text-align: center;
  line-height: 100px;
  &:hover {
    border-color: #409eff;
  }
}
</style>
