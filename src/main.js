import Vue from 'vue';
//路由相关
import VueRouter from 'vue-router';
import Routers from './router';
import VueResource from 'vue-resource';
//iview相关
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//基础公共类
import Util from './libs/util';
//组件
import App from './app.vue';

//开启配置
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueResource);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

//请求之前执行
router.beforeEach((to, from, next) => {
    //iview的加载进度条
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

//请求之后执行
router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

//构造函数
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
