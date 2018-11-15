import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import VeeValidate from 'vee-validate'
import Notifications from 'vue-notification'
import store from './store'
import i18n from './lang'

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
Vue.use(VeeValidate)
Vue.use(Notifications)

new Vue({
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
