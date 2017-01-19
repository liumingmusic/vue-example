<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>必不可少的环节</h2>
    <ul>
      <li v-for="item in essential">
        <a :href="item.href" target="_blank">{{item.name}}</a>
      </li>
    </ul>
    <h2>生态系统</h2>
    <ul>
      <li v-for="item in ecosystem">
        <a :href="item.href" target="_blank">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function() {
    return {
      msg: '欢迎来到 Vue.js App',
      essential:[
        {href:'https://vuejs.org',name:'核心文档'},
        {href:'https://forum.vuejs.org',name:'论坛'},
        {href:'https://gitter.im/vuejs/vue',name:'Gitter聊天'},
        {href:'https://twitter.com/vuejs',name:'Twitter'},
        {href:'http://vuejs-templates.github.io/webpack/',name:'模板代码文档'},
      ],
      ecosystem:[
        {href:'http://router.vuejs.org/',name:'vue-router'},
        {href:'http://vuex.vuejs.org/',name:'vuex'},
        {href:'http://vue-loader.vuejs.org/',name:'vue-loader'},
        {href:'https://github.com/vuejs/awesome-vue',name:'awesome-vue'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none
}

a:hover {
  text-decoration: underline;
}
</style>
