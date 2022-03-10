import Vue from 'vue'
import App from './App.vue'
import "./style/global.less"
import VueRouter from "vue-router";
import router from "@/router/router";
import showMessage from "@/utils/showMessage";
import './mock'
import loading from "@/directives/loading";

Vue.directive('loading', loading)
Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.prototype.$showMessage = showMessage

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
