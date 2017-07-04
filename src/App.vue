<template>
    <div class="layout">
        <!--顶部导航-->
        <Menu mode="horizontal" theme="dark" active-name="ios-navigate">
            <div class="layout-logo">
                信工门户系统后台管理
            </div>
            <div class="layout-nav">
                <Menu-item name="ios-navigate">
                    <router-link to="/">
                        <Icon type="ios-navigate"></Icon>
                        系统导航
                    </router-link>
                </Menu-item>
                <Menu-item name="ios-keypad">
                    <router-link to="/module/basic">
                        <Icon type="ios-keypad"></Icon>
                        模块管理
                    </router-link>
                </Menu-item>
                <Menu-item name="ios-analytics">
                    <router-link to="/analysis">
                        <Icon type="ios-analytics"></Icon>
                        使用分析
                    </router-link>
                </Menu-item>
                <Menu-item name="ios-paper">
                    <router-link to="/report">
                        <Icon type="ios-paper"></Icon>
                        报表文案
                    </router-link>
                </Menu-item>
            </div>
        </Menu>
        <!--主体区域-->
        <div class="layout-content">
            <!--内容区域路由-->
            <router-view></router-view>
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

<style lang="less">
@import 'styles/common.css';

.layout {
    min-width: 856px;
    background: #f5f7f9; // logo样式控制
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
    } // 布局容器承载
    .layout-content {
        min-height: 200px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        .layout-content-main {
            padding: 10px 0; // 导航面包屑样式
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
        } // 容器的高度
        .ivu-row {
            min-height: calc(~"100vh - 108px");
            ul.ivu-menu-vertical{
                min-height: calc(~"100vh - 108px");
            }
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

// 控制所有导航的链接样式
a[href] {
    color: #fff;
    display: inline-block;
}
</style>
