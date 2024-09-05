import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
// 自动导入路由   不支持 children    包含约定   views 路径 下 一定有文件夹名称  和  该文件夹下的 index.vue文件 与 global.ts meta导出文件

let routes: RouteRecordRaw[] = []

const routeGlobal =  Object.entries<Record<string | number | symbol, unknown>>(import.meta.glob('@/views/**/global.ts', {
  import: 'default',
  eager: true
}))

const routePath =  Object.values(import.meta.glob('@/views/**/index.vue'))

for(let i = 0; i < routeGlobal.length; i++) {
  const item = routeGlobal[i]
  if(item[0]) {
    const path = item[0].replace('/src/views', '').replace('/global.ts', '') === '/home' ? '/' : item[0].replace('/src/views', '').replace('/global.ts', '')
    routes.push({
      path,
      name: item[0].replace('/src/views/', '').replace('/global.ts', ''),
      component: routePath[i],
      meta: item[1]
    })
  }
}

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//     meta: {
//       title: '首页',
//       keepAlive: false,
//       pageId: '0001',
//       pageName: '首页',
//     }
//   },
//   {
//     path: '/chunk',
//     name: 'chunk',
//     component: () => import('../views/chunk/index.vue'),
//     meta: {
//       keepAlive: false,
//       pageId: '0002',
//       pageName: 'chunk',
//     }
//   }
// ]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})

export default router
// 无权限设置  与  异步路由
// export function resetRouter() {
//   try {
//     router.getRoutes().forEach((route) => {
//       const { name, meta } = route
//       if (name && meta.roles?.length) {
//         router.hasRoute(name) && router.removeRoute(name)
//       }
//     })
//   } catch {
//     // 强制刷新浏览器也行，只是交互体验不是很好
//     window.location.reload()
//   }
// }
