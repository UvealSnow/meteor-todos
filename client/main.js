import Vue from 'vue'
import App from './App.vue'
import VueMeteorTracker from 'vue-meteor-tracker'

Vue.use(VueMeteorTracker)

Vue.config.productionTip = false

import router from './vue/router.js'

Meteor.startup(() => {
  const app = new Vue({
    render: h => h(App),
    el: '#app',
    router
  }).$mount('#app')
})