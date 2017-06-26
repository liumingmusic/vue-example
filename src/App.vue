<template>
    <div class="layout">
        <!--顶部导航-->
        <Menu mode="horizontal" theme="dark" active-name="ios-navigate">
            <div class="layout-logo">
                信工门户系统后台管理
            </div>
            <div class="layout-nav">
                <Menu-item name="ios-navigate">
                    <Icon type="ios-navigate"></Icon>
                    系统导航
                </Menu-item>
                <Menu-item name="ios-keypad">
                    <Icon type="ios-keypad"></Icon>
                    模块管理
                </Menu-item>
                <Menu-item name="ios-analytics">
                    <Icon type="ios-analytics"></Icon>
                    使用分析
                </Menu-item>
                <Menu-item name="ios-paper">
                    <Icon type="ios-paper"></Icon>
                    报表文案
                </Menu-item>
            </div>
        </Menu>
        <!--主体区域-->
        <div class="layout-content">
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
                                <router-link to="/basic">基本信息</router-link>
                            </Menu-item>
                            <Menu-item name="role">
                                <router-link to="/role">角色信息</router-link>
                            </Menu-item>
                            <Menu-item name="oauth">
                                <router-link to="/oauth">权限信息</router-link>
                            </Menu-item>
                        </Submenu>
                        <Submenu name="wrench">
                            <template slot="title">
                                <Icon type="wrench"></Icon>
                                机构管理
                            </template>
                            <Menu-item name="properties">
                                <router-link to="/properties">权限数配置</router-link>
                            </Menu-item>
                            <Menu-item name="classify">
                                <router-link to="/classify">分级授权</router-link>
                            </Menu-item>
                        </Submenu>
                        <Submenu name="ios-gear">
                            <template slot="title">
                                <Icon type="ios-gear"></Icon>
                                模块管理
                            </template>
                            <Menu-item name="roleBind">
                                <router-link to="/roleBind">角色与机构绑定</router-link>
                            </Menu-item>
                            <Menu-item name="roleClassify">
                                <router-link to="/roleClassify">角色分权</router-link>
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
                        <!--具体的内容承载-->
                        <transition>
                            <router-view></router-view>
                        </transition>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2017 &copy; liumm
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        
    },
    beforeDestroy() {

    },
    methods: {

    }
}
</script>

<style scoped lang="less">
@import 'styles/common.css';

.layout {
    background: #f5f7f9;
    // logo样式控制
    .layout-logo {
        display: flex;
        top: 15px;
        left: 20px;
        position: relative;
        float: left;
        justify-content: center;
        width: 204px;
        height: 30px;
        border-radius: 3px;
        line-height: 30px;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
    }
    // 布局容器承载
    .layout-content {
        min-height: 200px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        .layout-content-main {
            padding: 10px 0;
            // 导航面包屑样式
            .ivu-breadcrumb {
                margin-bottom: 10px;
                margin-left: 20px;
            }
        }
        a[href] {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #495060;
        }
    }
    .ivu-menu-item-selected {
        a[href] {
            color: #39f;
        }
    }
    .layout-nav {
        width: 470px;
        margin: 0 auto;
    }
    .layout-assistant {
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-copy {
        position: absolute;
        display: block;
        width: 100%;
        bottom: 0;
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
}
</style>
