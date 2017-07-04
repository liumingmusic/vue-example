<template>
    <div class="index">
        <Row :gutter="16">
            <Col span="8">
            <div>
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        经典电影
                    </p>
                    <ul class="card-list">
                        <li v-for="item in movieList" v-bind:key="item">
                            <a :href="item.url" target="_blank">{{ item.name }}</a>
                            <span>
                                <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
                                <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
                                <Icon type="ios-star-half" v-else></Icon>
                                {{ item.rate }}
                            </span>
                        </li>
                    </ul>
                </Card>
            </div>
            </Col>
            <Col span="16" class="steps">
            <div>
                <Steps :current="1">
                    <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                    <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                    <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                </Steps>
            </div>
            </Col>
        </Row>
    </div>
</template>

<script>
//引入请求url公共的路径
import Path from "../libs/path.js";

export default {
    data() {
        return {
            movieList: [
                {
                    name: '肖申克的救赎',
                    url: 'https://movie.douban.com/subject/1292052/',
                    rate: 9.6
                },
                {
                    name: '这个杀手不太冷',
                    url: 'https://movie.douban.com/subject/1295644/',
                    rate: 9.4
                },
                {
                    name: '霸王别姬',
                    url: 'https://movie.douban.com/subject/1291546/',
                    rate: 9.5
                },
                {
                    name: '肖申克的救赎',
                    url: 'https://movie.douban.com/subject/1292052/',
                    rate: 3.9
                },
                {
                    name: '这个杀手不太冷',
                    url: 'https://movie.douban.com/subject/1295644/',
                    rate: 2.4
                },
                {
                    name: '霸王别姬',
                    url: 'https://movie.douban.com/subject/1291546/',
                    rate: 6.5
                }
            ]
        }
    },
    created: function () {

    },
    methods: {

    }
}
</script>

<style scoped lang="less">
.index {
    padding: 10px;
    .card-list {
        a[target="_blank"] {
            width: auto;
            color: #2d8cf0;
        }
        span {
            float: right;
            i[class*="ivu-icon-ios-star"] {
                color: #ffac2d;
            }
        }
    }
    .steps {
        height: 211px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
