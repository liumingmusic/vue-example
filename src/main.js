import Vue from 'vue';
//路由相关
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
//iview相关
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//基础公共类
import Util from './libs/util';
//组件
import Routers from './router';
import App from './app.vue';

//开启配置
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueResource);
Vue.use(Vuex);

// 路由配置
const RouterConfig = {
    mode: 'history', //HTML5 History 模式
    routes: Routers
};
const router = new VueRouter(RouterConfig);

//请求之前执行
router.beforeEach((to, from, next) => {
    // TODO 请求之前进行权限判断
    //开始iview的加载进度条
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

//请求之后执行
router.afterEach((to, from, next) => {
    //结束iview的加载进度条
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

//构造函数
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
