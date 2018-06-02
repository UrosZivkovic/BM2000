const path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var extractPlugin = new ExtractTextPlugin ({
  //filename:'main.css'
//}) za scss
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports= {
    entry:'./src/js/app.js',
    
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        //publicPath:'/dist'
    },
    devtool:"source-map",
    module: {
       
            rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
                
              },
              {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader"
                ]
              },
              {
                test:/\.html$/,
                exclude: /(node_modules|bower_components)/,
                use:['html-loader']
              },
              {
                test:/\.(jpg|png)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                  {
                    loader:'file-loader',
                    options:{
                      name:'[name].[ext]',
                      outputPath:'img/',
                      publicPath:'img/'
                    }
                  }
                ]
              }
              
            ]
        },
        optimization: {
          minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true // JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
          ]
        },
        plugins: [
          new MiniCssExtractPlugin({
            filename: "main.css",
            chunkFilename: "[id].css"
          }),
          new HtmlWebpackPlugin({
            template:'src/index.html'
          })
        ]
    
};