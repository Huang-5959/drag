/*
 * @description: 所有组件右侧配置栏
 * @Author: Huang-5959
 * @Date: 2024/9/5
 *
 *
 */
import { defineAsyncComponent } from 'vue';
export default {
  titleBar: defineAsyncComponent(
    () => import('./preview/title-bar/setting.vue')
  ),
  search: defineAsyncComponent(() => import('./preview/search/setting.vue')),
  blankPaceholder: defineAsyncComponent(() => import('./preview/blankPaceholder/setting.vue')),
  separator: defineAsyncComponent(() => import('./preview/separator/setting.vue')),
};
