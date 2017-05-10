var webpack=require('webpack');
module.exports={
    entry:{
        ListBundle:"/Users/wushenggang/Desktop/学习/React/src/newsList.js",
        DetailBundle:"/Users/wushenggang/Desktop/学习/React/src/newsDetail.js",
        CommentBudle:"/Users/wushenggang/Desktop/学习/React/src/newsComment.js"
    },
    output:{
        path:"/Users/wushenggang/Desktop/学习/React/build",
        filename:"[name].js"
    },
    resolve:{
        extensions:['.js','.jsx'],
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:"babel-loader",exclude:/node_modules/},
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/\.less$/,loader:"style-loader!css-loader!less-loader"}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]
}
