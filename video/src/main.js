import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')

require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)

import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')