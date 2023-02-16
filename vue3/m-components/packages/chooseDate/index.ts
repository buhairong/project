import { App } from 'vue'
import chooseDate from './index.vue'

export default {
  install(app: App) {
    app.component('choose-date', chooseDate)
  }
}