import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import Menu from './menu'
import Progress from './progress'

const components = [
  chooseArea,
  chooseIcon,
  Menu,
  Progress,
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}
