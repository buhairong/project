import { App } from 'vue'
import table from './index.vue'

export default {
  install(app: App) {
    app.component('m-table', table)
  }
}