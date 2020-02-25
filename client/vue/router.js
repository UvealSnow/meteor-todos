import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Page imports
  const AboutPage = () => import(/* webpackChunkName: landing */ '../pages/AboutPage.vue')
  const LandingPage = () => import(/* webpackChunkName: landing */ '../pages/LandingPage.vue')

  const TaskShowPage = () => import(/* webpackChunkName: tasks */ '../pages/tasks/Show.vue')

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage,
    },
    {
      path: '/about',
      name: 'aboutPage',
      component: AboutPage
    },
    {
      path: '/tasks/:taskId',
      name: 'taskShowPage',
      component: TaskShowPage,
      props: true
    }
  ]
})
