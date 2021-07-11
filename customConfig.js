const path= require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
  mode: 'development',
    entry: {
       index: "./src/index.js",
       style: "./src/style.scss"
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: './src/index.html'
        }),
      ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "bundle"),
        clean: true,
    },
    
  devServer: {
    contentBase: path.resolve(__dirname, "src")
  },    
  module: {
    rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader"
          ]
        },
          {
            test: /\.(ttf|woff|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            use: 'raw-loader'
          },
          {
            test: /\.(png|jpg|tiff|svg)$/i,
            type: 'asset/resource',
          }
      ],
    }


}