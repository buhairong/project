import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import Menu from './menu'
import Progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import form from './form'
import modalForm from './modalForm'
import table from './table'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  Menu,
  Progress,
  chooseTime,
  chooseDate,
  chooseCity,
  form,
  modalForm,
  table,
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}
