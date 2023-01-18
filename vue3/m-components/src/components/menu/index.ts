import { App } from 'vue'
import Menu from './index.vue'
import InfiniteMenu from './menu'

export default {
  install(app: App) {
    app.component('m-menu', Menu)
    app.component('infinite-menu', InfiniteMenu)
  }
}