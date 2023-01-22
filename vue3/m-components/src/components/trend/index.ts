import { App } from 'vue'
import trend from './index.vue'

export default {
  install(app: App) {
    app.component('trend', trend)
  }
}