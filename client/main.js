import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Components
  const LandingPage = () => import('./pages/LandingPage.vue');
  const AboutPage = () => import('./pages/AboutPage.vue');

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', name: 'landing', component: LandingPage },
    { path: '/about', name: 'about', component: AboutPage }
  ]
});

Meteor.startup(() => {
  const app = new Vue({
    render: h => h(App),
    el: '#app',
    router
  }).$mount('#app')
})