import { App } from 'vue'
import form from './index.vue'

export default {
  install(app: App) {
    app.component('m-form', form)
  }
}