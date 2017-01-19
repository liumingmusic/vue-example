<template>
  <div id="app">
    <todoList msg="我要向子组件传递数据信息"></todoList>
  </div>
</template>

<script>
import Hello from './components/Hello'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    TodoList,
    Hello
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
