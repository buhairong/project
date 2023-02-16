import { App } from 'vue'
import calendar from './index.vue'

export default {
  install(app: App) {
    app.component('m-calendar', calendar)
  }
}