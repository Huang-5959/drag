<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ComponentItem } from '@/components/library/formModel';
import previewComponents from '@/components/library/preview';

export default defineComponent({
  props: {
    components: {
      type: Array as PropType<ComponentItem[]>,
    },
  },
  setup(props, { emit }) {
    const Selected = ref(-1);
    const isActive = ref(-1);
    /**
     *
     * @description: 监听组件设置切换
     * @param {ComponentItem} currentComponent 当前组件信息
     * @param {number} i
     */
    function handleCurrentComponent(
      currentComponent: ComponentItem,
      i: number
    ) {
      emit('change', currentComponent);
      Selected.value = i;
    }
    function cloneItem(currentComponent: ComponentItem, i: number) {
      emit('close', currentComponent);
    }
    function itemMouseover(index: number) {
      isActive.value = index;
    }
    function itemMouseleave(index: number) {
      isActive.value = -1;
    }
    return {
      previewComponents,
      Selected,
      isActive,
      cloneItem,
      itemMouseleave,
      itemMouseover,
      handleCurrentComponent,
    };
  },
});
</script>

<template>
  <div v-for="(item, index) in components" :key="item.id">
    <div
      @click="handleCurrentComponent(item, index)"
      class="box"
      :class="Selected == index ? 'Selected' : 'noSelected'"
      @mouseover="itemMouseover(index)"
      @mouseleave="itemMouseleave(index)"
    >
      <component
        :is="previewComponents[item.value]"
        :form-data="item?.formData"
        class="item"
      ></component>

      <div
        class="closeBtn"
        v-show="isActive == index"
        @click="cloneItem(item, index)"
      >
        删除
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back {
  background-color: red;
}

.box {
  position: relative;
  .closeBtn {
    position: absolute;
    right: 0;
    top: 0;
    background-color: #f56c6c;
    color: #fff;
    font-size: 14px;
    padding: 2px 5px 2px 5px;
    cursor: pointer;
    // opacity: 0.3;
    // transition: opacity 0.3s;
    // &:hover {
    //   opacity: 1;
    // }
  }
  .item {
    cursor: pointer;
  }
}
.Selected {
  box-sizing: border-box;
  border: 1px dashed #409eff;
}
.noSelected {
  &:hover {
    border: 1px dashed #f56c6c;
  }
}
</style>
