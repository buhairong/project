import { App } from 'vue'
import list from './index.vue'

export default {
  install(app: App) {
    app.component('notification-list', list)
  }
}