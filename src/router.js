const routers = [
    {
        path: '/',
        redirect: '/navigate'
    }, {
        // 系统导航
        path: '/navigate',
        component: function (resolve) {
            require(['./views/navigate.vue'], resolve);
        }
    }, {
        // 模块管理
        path: '/module',
        component: function (resolve) {
            require(['./views/module.vue'], resolve);
        },
        children: [
            {
                path: '/module/basic',
                meta: {
                    title: '模块管理-基本信息'
                },
                component: function (resolve) {
                    require(['./views/module/basic.vue'], resolve);
                }
            }, {
                path: '/module/role',
                meta: {
                    title: '模块管理-角色信息'
                },
                component: function (resolve) {
                    require(['./views/module/role.vue'], resolve);
                }
            }, {
                path: '/module/oauth',
                meta: {
                    title: '模块管理-权限信息'
                },
                component: function (resolve) {
                    require(['./views/module/oauth.vue'], resolve);
                }
            }, {
                path: '/module/properties',
                meta: {
                    title: '模块管理-权限数配置'
                },
                component: function (resolve) {
                    require(['./views/module/properties.vue'], resolve);
                }
            }, {
                path: '/module/classify',
                meta: {
                    title: '模块管理-分级授权'
                },
                component: function (resolve) {
                    require(['./views/module/classify.vue'], resolve);
                }
            }, {
                path: '/module/roleBind',
                meta: {
                    title: '模块管理-角色绑定'
                },
                component: function (resolve) {
                    require(['./views/module/roleBind.vue'], resolve);
                }
            }, {
                path: '/module/roleClassify',
                meta: {
                    title: '模块管理-角色分权'
                },
                component: function (resolve) {
                    require(['./views/module/roleClassify.vue'], resolve);
                }
            }
        ]
    }, {
        // 使用分析
        path: '/analysis',
        component: function (resolve) {
            require(['./views/analysis.vue'], resolve);
        }
    }, {
        // 报表文案
        path: '/report',
        component: function (resolve) {
            require(['./views/report.vue'], resolve);
        }
    }
];
export default routers;