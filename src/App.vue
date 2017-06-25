<template>
    <div class="layout">
        <!--顶部导航-->
        <Menu mode="horizontal" theme="dark" active-name="ios-navigate">
            <div class="layout-logo">
                <Icon type="ios-cog" size="40"></Icon>
            </div>
            <div class="layout-nav">
                <Menu-item name="ios-navigate">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="ios-keypad">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="ios-analytics">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="ios-paper">
                    <Icon type="ios-paper"></Icon>
                    导航四
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
                        <transition>
                            <router-view></router-view>
                        </transition>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2016-2017 &copy; TalkingData
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
    .layout-logo {
        display: flex;
        justify-content: center;
        margin-top: -4px;
        width: 100px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        .layout-content-main {
            padding: 10px;
        }
        a[href] {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #495060;
        }
    }
    .ivu-menu-item-selected{
        a[href] {
            color: #39f;
        }
    }
    .layout-nav {
        width: 420px;
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
