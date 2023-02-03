import { App } from 'vue'
import chooseCity from './index.vue'

export default {
  install(app: App) {
    app.component('choose-city', chooseCity)
  }
}