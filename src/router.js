const routers = [
    {
        path: '/basic',
        meta: {
            title: '基本信息'
        },
        component:function(resolve){
            require(['./views/basic.vue'], resolve);
        }
    },
    {
        path: '/role',
        meta: {
            title: '角色信息'
        },
        component:function(resolve){
            require(['./views/role.vue'], resolve);
        }
    },
    {
        path: '/oauth',
        meta: {
            title: '权限信息'
        },
        component:function(resolve){
            require(['./views/oauth.vue'], resolve);
        }
    },
    {
        path: '/properties',
        meta: {
            title: '权限数配置'
        },
        component:function(resolve){
            require(['./views/properties.vue'], resolve);
        }
    },
    {
        path: '/classify',
        meta: {
            title: '分级授权'
        },
        component:function(resolve){
            require(['./views/classify.vue'], resolve);
        }
    },
    {
        path: '/roleBind',
        meta: {
            title: '角色绑定'
        },
        component:function(resolve){
            require(['./views/roleBind.vue'], resolve);
        }
    },
    {
        path: '/roleClassify',
        meta: {
            title: '角色分权'
        },
        component:function(resolve){
            require(['./views/roleClassify.vue'], resolve);
        }
    }
];
export default routers;