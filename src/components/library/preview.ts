/*
 * @description: 所有组件本体
 * @Author: Huang-5959
 * @Date: 2024/9/5
 *
 *
 */
export default {
  titleBar: defineAsyncComponent(
    () => import('./preview/title-bar/preview.vue')
  ),
  search: defineAsyncComponent(() => import('./preview/search/preview.vue')),
  blankPaceholder: defineAsyncComponent(
    () => import('./preview/blankPaceholder/preview.vue')
  ),
  separator: defineAsyncComponent(
    () => import('./preview/separator/preview.vue')
  ),
};
