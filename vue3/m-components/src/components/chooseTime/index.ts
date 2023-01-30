import { App } from 'vue'
import chooseTime from './index.vue'

export default {
  install(app: App) {
    app.component('choose-time', chooseTime)
  }
}