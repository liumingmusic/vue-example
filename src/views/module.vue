<template>
    <div class="index">
        <Row>
            <!--左边菜单栏-->
            <i-col span="5">
                <Menu active-name="basic" width="auto" :open-names="['person','wrench','ios-gear']">
                    <Submenu name="person">
                        <template slot="title">
                            <Icon type="person"></Icon>
                            用户信息管理
                        </template>
                        <Menu-item name="basic">
                            <router-link to="/module/basic">基本信息</router-link>
                        </Menu-item>
                        <Menu-item name="role">
                            <router-link to="/module/role">角色信息</router-link>
                        </Menu-item>
                        <Menu-item name="oauth">
                            <router-link to="/module/oauth">权限信息</router-link>
                        </Menu-item>
                    </Submenu>
                    <Submenu name="wrench">
                        <template slot="title">
                            <Icon type="wrench"></Icon>
                            机构管理
                        </template>
                        <Menu-item name="properties">
                            <router-link to="/module/properties">权限数配置</router-link>
                        </Menu-item>
                        <Menu-item name="classify">
                            <router-link to="/module/classify">分级授权</router-link>
                        </Menu-item>
                    </Submenu>
                    <Submenu name="ios-gear">
                        <template slot="title">
                            <Icon type="ios-gear"></Icon>
                            模块管理
                        </template>
                        <Menu-item name="roleBind">
                            <router-link to="/module/roleBind">角色与机构绑定</router-link>
                        </Menu-item>
                        <Menu-item name="roleClassify">
                            <router-link to="/module/roleClassify">角色分权</router-link>
                        </Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <!--右边内容区域-->
            <i-col span="19">
                <!--主体内容区域-->
                <div class="layout-content-main">
                    <!--面包屑-->
                    <Breadcrumb>
                        <Breadcrumb-item>用户信息管理</Breadcrumb-item>
                        <Breadcrumb-item>基本信息</Breadcrumb-item>
                    </Breadcrumb>
                    <!--子路由嵌套-->
                    <router-view></router-view>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
//引入请求url公共的路径
import Path from "../libs/path.js";

export default {
    data() {
        return {
        }
    },
    created: function () {

    },
    methods: {

    }
}
</script>

<style scoped lang="less">

</style>
