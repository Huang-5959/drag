<script setup lang="ts">
import library from '@/components/library/index.vue';
import preview from '@/components/preview.vue';
import setting from '@/components/setting.vue';
import type { ComponentItem } from '@/components/library/formModel';
import { useDraggable } from 'vue-draggable-plus';
import librarys from '@/components/library/library';
import { cloneDeep } from 'lodash';

const previewComponents = ref<ComponentItem[]>([]);
const settingComponent = ref<ComponentItem>();
const addlibrary = (item: ComponentItem) => {
  previewComponents.value.push(item);
  settingComponent.value = item;
};
/**
 *
 * @description: 设置当前组件
 * @param {*} component
 */
const setCurrentComponent = (component: ComponentItem) => {
  settingComponent.value = component;
};
/**
 *
 * @description: 删除单个组件
 * @param {*} component
 */
const closeCurrentComponent = (component: ComponentItem) => {
  previewComponents.value = previewComponents.value.filter(
    item => item.id !== component.id
  );
};
const el = ref();
const el2 = ref();
useDraggable(el, previewComponents, { animation: 150, group: 'people' });
useDraggable(el2, librarys, {
  animation: 150,
  group: {
    name: 'people',
    pull: 'clone',
    put: false,
  },
  sort: false,
  clone(element: ComponentItem) {
    const FormData = cloneDeep(safeGetFormData(element));
    return { ...element, id: Date.now(), formData: FormData };
  },
});
onMounted(() => {});
</script>

<template>
  <div class="body_box">
    <div class="box_left" ref="el2">
      <library @change="addlibrary"></library>
    </div>
    <div ref="el" class="box_center">
      <preview
        :components="previewComponents"
        @change="setCurrentComponent"
        @close="closeCurrentComponent"
      ></preview>
    </div>
    <div class="box_rigth">
      <div v-if="settingComponent">
        <setting :component="settingComponent"></setting>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.sass';
.body_box {
  @include flex-center-between;
  width: 100vw;
  height: 100vh;
  background-color: #6d695c;
  background-image: repeating-linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 60px
    ),
    repeating-linear-gradient(
      60deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 60px
    ),
    linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1)
    ),
    linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1)
    );
  background-size: 14px 24px;
}
.box_left {
  width: 20vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: flex-start;
}
.box_center {
  width: 40vw;
  height: 100vh;
  background-color: #f5f5f5;
}
.box_rigth {
  width: 20vw;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
