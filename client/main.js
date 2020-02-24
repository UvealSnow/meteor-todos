import Vue from 'vue'
import App from './App.vue'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App
  })
})