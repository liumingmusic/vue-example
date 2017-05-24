<template>
    <div class="todo-list">
        <h1 v-text="title"></h1>
        <input v-model="newItem" @keyup.enter="addNewItem">
        <ul>
            <li v-for="(item, index) in items" :class="{finished: item.isFinished}" v-on:click="toogleFinish(item)">
                {{item.label}} <button @click="deleteItem(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import Tools from '../lib/tools'

    export default {
        name: 'todo-list',
        props: ["msg"],
        data: function () {
            return {
                title: 'this is vue of todoList',
                items: Tools.fetch(),
                newItem: ''
            }
        },
        methods: {
            toogleFinish: function (item) {
                item.isFinished = !item.isFinished;
            },
            addNewItem: function () {
                console.log(this);
                var $this = this;
                $this.items.push({
                    label: $this.newItem,
                    isFinished: false
                });
                $this.newItem = '';
            },
            deleteItem: function (index) {
                var $this = this;
                $this.items = Tools.remove($this.items, index);
            }
        },
        watch: {
            items: {
                handler: function (val, oldVal) {
                    Tools.save(val);
                },
                deep: true
            }
        }
    }
</script>

<style scope>
    .finished {
        text-decoration: line-through
    }

    ul {
        width: 200px;
        margin: auto;
    }

    li {
        text-align: left;
        cursor: pointer;
    }

    li:hover {
        color: red;
    }

    input {
        width: 200px;
        height: 25px;
        border: 1px solid #000;
        border-radius: 4px;
        padding-left: 5px;
        margin-bottom: 10px;
    }

    li > button {
        cursor: pointer;
    }

    li > button:hover {
        background-color: #00BCD4;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 21px;
        width: 26px;
    }
</style>