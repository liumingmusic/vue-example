const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main',
        // 将公共模块提取，生成名为`vendors`的chunk
        vendors: './src/vendors'
    },
    output: {
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: ExtractTextPlugin.extract({
                            use: [
                                'css-loader?minimize', 'autoprefixer-loader', 'less-loader'
                            ],
                            fallback: 'vue-style-loader'
                        }),
                        css: ExtractTextPlugin.extract({
                            use: [
                                'css-loader', 'autoprefixer-loader', 'less-loader'
                            ],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            }, {
                test: /iview\/.*?js$/,
                loader: 'babel-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader?minimize', 'autoprefixer-loader'
                    ],
                    fallback: 'style-loader'
                })
            }, {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'autoprefixer-loader', 'less-loader'
                    ],
                    fallback: 'style-loader'
                })
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }, {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js', '.vue'
        ],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
};

/**********************************************************/

//1、服务端数据模拟、使用express
var express = require('express');
//2、服务端数据模拟、使用express
var app = express();
//3、定义路由
var apiRouter = express.Router();
//4、mock请求数据信息
var appData = require('./data.json');
//5、设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//6、api接口书写 制定接口
apiRouter.get('/findByPages', function (req, res) {
    res.json({code: 1, data: appData.data, msg: '查询成功'});
});
//7、请求路径设置
app.use('/api', apiRouter);
//8、开启监听
var server = app.listen(8080, function () {
    var host = server
        .address()
        .address;
    var port = server
        .address()
        .port;
    console.log('vue-example app listening at http://%s:%s', host, port);
});
