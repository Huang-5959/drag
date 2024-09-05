/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.mjs' {
  const mjs: any
  export default mjs
}


declare module '*.json' {
  const geoJson: string
  export default geoJson
}
