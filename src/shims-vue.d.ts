/* eslint-disable */
import VueRouter from 'vue-router'
import { Route } from 'vue-router'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}