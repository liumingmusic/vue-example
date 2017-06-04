<template>
    <div class="index">
        <Row type="flex" justify="center">
            <Col span="23">
            <Table size="small" highlight-row border :columns="columnsName" :data="listData"></Table>
            <div class="pages-block">
                <div class="pages-right">
                    <Page :total="40" :current="1" show-elevator show-sizer @on-change="doChangePage" @on-page-size-change="doPageSizeChange"></Page>
                </div>
            </div>
            </Col>
        </Row>
        <!--信息编辑摸态框-->
        <Modal v-model="updateModel" title="信息编辑" @on-ok="doUpdateSubmit" @on-cancel="doUpdateCancel" class="update-model">
            <Row justify="center" class="row">
                <Col span="6" class="lable-title">姓名</Col>
                <Col span="14">
                <Input v-model="updateData.name" placeholder="请输入姓名"></Input>
                </Col>
            </Row>
            <Row justify="center" class="row">
                <Col span="6" class="lable-title">年龄</Col>
                <Col span="14">
                <Input v-model="updateData.age" placeholder="请输入年龄"></Input>
                </Col>
            </Row>
            <Row justify="center" class="row">
                <Col span="6" class="lable-title">地址</Col>
                <Col span="14">
                <Input v-model="updateData.address" placeholder="请输入地址"></Input>
                </Col>
            </Row>
        </Modal>
    </div>
</template>

<script>
//引入请求url公共的路径
import Path from "../libs/path.js";

export default {
    data() {
        return {
            columnsName: [
                { type: 'selection', width: 60, align: 'center' },
                { title: '姓名', key: 'name' },
                {
                    title: '年龄', key: 'age', sortable: true,
                    filters: [
                        { label: '大于25岁', value: 1 },
                        { label: '小于25岁', value: 2 }
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
                { title: '地址', key: 'address' },
                {
                    title: '操作', key: 'action', width: 200, align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: { type: 'primary', size: 'small' },
                                style: { marginRight: '5px' },
                                on: {
                                    click: () => {
                                        this.doShowMsg(params.index)
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: { type: 'error', size: 'small' },
                                style: { marginRight: '5px' },
                                on: {
                                    click: () => {
                                        this.doRemoveMsg(params.index)
                                    }
                                }
                            }, '删除'),
                            h('Button', {
                                props: { type: 'success', size: 'small' },
                                on: {
                                    click: () => {
                                        this.doUpdateMsg(params.index)
                                    }
                                }
                            }, '编辑')
                        ]);
                    }
                }
            ],
            listData: [],
            updateModel: false,
            updateData: {
                name: "",
                age: 0,
                address: ""
            },
            updateIndex: 0
        }
    },
    created: function () {
        var that = this;
        that.$http.get(Path.Url + 'api/findByPages').then(function (respones) {
            var json = respones.data;
            //赋值
            that.listData = json.data;
        });
    },
    methods: {
        //查看单个信息
        doShowMsg(index) {
            this.$Modal.info({
                title: '用户信息',
                content: `姓名：${this.listData[index].name}<br>年龄：${this.listData[index].age}<br>地址：${this.listData[index].address}`
            })
        },
        //删除记录
        doRemoveMsg(index) {
            var that = this;
            that.$Modal.confirm({
                title: "警告",
                content: "确认删除信息吗?",
                okText: "删除",
                cancelText: "取消",
                onOk: function () {
                    that.listData.splice(index, 1);
                    that.$Notice.open({ title: '删除消息', desc: "删除成功" });
                }
            });
        },
        doUpdateMsg: function (index) {
            var that = this;
            var data = that.listData[index];
            //绑定数据
            that.updateData = {
                name: data.name,
                age: data.age,
                address: data.address
            }
            //编辑下标
            that.updateIndex = index;
            //显示模态框
            that.updateModel = true;
        },
        doUpdateSubmit: function () {
            var that = this;
            //添加并删除数据
            that.listData.splice(that.updateIndex, 1, {
                name: that.updateData.name,
                age: that.updateData.age,
                address: that.updateData.address
            });
            //数据更新
            that.$Message.info('点击了确定');
        },
        doUpdateCancel: function (current) {
            var that = this;
            that.$Message.info('取消了编辑');
        },
        //改变当前页数
        doChangePage: function (current) {
            var that = this;
            that.$Message.info('当前是第' + current + '页');
        },
        //改变当前显示的行数
        doPageSizeChange: function (pageSize) {
            var that = this;
            that.$Message.info('当前总共有' + pageSize + '行记录');
        }
    }
}
</script>

<style scoped lang="less">
.index {
    .lable-title {
        text-align: center;
    }
    .pages-block {
        margin: 10px;
        overflow: hidden;
        margin-top: 10px;
        .pages-right {
            float: right;
        }
    }
    .update-model .row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
}
</style>
