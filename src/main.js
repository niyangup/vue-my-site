import Vue from 'vue'
import App from './App.vue'
import "@/eventBus"
import "./style/global.less"
import VueRouter from "vue-router";
import router from "@/router/router";
import showMessage from "@/utils/showMessage";
import './mock'
import loading from "@/directives/loading";
import lazy from "@/directives/lazy"


Vue.prototype.$showMessage = showMessage
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.directive('loading', loading)
Vue.directive('lazy', lazy)


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
