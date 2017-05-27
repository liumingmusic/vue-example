<template>
    <div class="index">
        <Row type="flex" justify="center">
            <Col span="18">
            <Table size="small" highlight-row border height="400" :columns="columnsName" :data="listData"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="40" :current="1" show-elevator show-sizer @on-change="changePage"></Page>
                </div>
            </div>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columnsName: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age',
                    sortable: true,
                    filters: [
                        {
                            label: '大于25岁',
                            value: 1
                        },
                        {
                            label: '小于25岁',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod(value, row) {
                        if (value === 1) {
                            return row.age > 25;
                        } else if (value === 2) {
                            return row.age < 25;
                        }
                    }
                },
                {
                    title: '地址',
                    key: 'address'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: { type: 'primary', size: 'small' },
                                style: { marginRight: '5px' },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: { type: 'error', size: 'small' },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
            listData: [
                { name: '王小明', age: 18, address: '北京市朝阳区芍药居' },
                { name: '张小刚', age: 25, address: '北京市海淀区西二旗' },
                { name: '李小红', age: 30, address: '上海市浦东新区世纪大道' },
                { name: '周小伟', age: 26, address: '深圳市南山区深南大道' },
                { name: '刘小明', age: 21, address: '贵州遵义' },
                { name: '张晓红', age: 33, address: '内蒙古乌海' },
                { name: '李雄丽', age: 38, address: '哈尔滨' },
                { name: '刘明明', age: 21, address: '陕西西安' },
                { name: '王晓文', age: 44, address: '四川成都' },
                { name: '吴夏青', age: 12, address: '河南开封' },
                { name: '王东旭', age: 21, address: '上海' }
            ]
        }
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: '用户信息',
                content: `姓名：${this.listData[index].name}<br>年龄：${this.listData[index].age}<br>地址：${this.listData[index].address}`
            })
        },
        remove(index) {
            var that = this;
            that.$Modal.confirm({
                title: "警告",
                content: "确认删除信息吗?",
                okText: "删除",
                cancelText: "取消",
                onOk: function () {
                    that.listData.splice(index, 1);
                }
            });
        },
        changePage: function (current) {
            var that = this;
            that.$Message.info('当前是第' + current + '页');
        }
    }
}
</script>

<style scoped lang="less">
.index {
    padding-top: 100px;
}
</style>
