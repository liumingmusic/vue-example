<template>
    <div id="app">
        <todoList msg="我要向子组件传递数据信息"></todoList>
    </div>
</template>

<script>
    import TodoList from './components/TodoList'

    export default {
        name: 'app',
        components: {
            TodoList
        }
    }
</script>

<style>
    #app {
        font-family: '微软雅黑';
        -webkit-font-smoothing: antialiased;
        text-align: center;
        color: #000;
        margin-top: 60px;
    }
</style>
