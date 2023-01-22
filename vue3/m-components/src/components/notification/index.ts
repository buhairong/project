import { App } from 'vue'
import notification from './index.vue'

export default {
  install(app: App) {
    app.component('notification', notification)
  }
}