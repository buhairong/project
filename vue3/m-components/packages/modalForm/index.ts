import { App } from 'vue'
import modalForm from './index.vue'

export default {
  install(app: App) {
    app.component('modal-form', modalForm)
  }
}