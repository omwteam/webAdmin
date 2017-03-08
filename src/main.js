import Vue from 'vue';
import App from './App';
import router from './config/routes';
import ElementUI from 'element-ui';
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import 'element-ui/lib/theme-default/index.css';    // 默认主题

Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
