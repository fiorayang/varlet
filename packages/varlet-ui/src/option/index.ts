import { App } from 'vue'
import Option from './Option.vue'

Option.install = function (app: App) {
  app.component(Option.name, Option)
}

export default Option