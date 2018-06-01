var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  watch: true, 
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, 
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
      }
    ]
  }
};