import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Element, { locale })

new Vue({
  render: h => h(App),
}).$mount('#app')
