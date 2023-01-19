import { App } from 'vue'
import progress from './index.vue'

export default {
  install(app: App) {
    app.component('m-progress', progress)
  }
}