import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import Menu from './menu'

const components = [
  chooseArea,
  chooseIcon,
  Menu,
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}
