const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/scripts/index.js',  
  output: {
    path: path.resolve(__dirname, 'dist'),  
    filename: 'bundle.js', 
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  
          },
        },
      },
      {
        test: /\.css$/,  
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,  
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',  
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  
      filename: 'index.html',  
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', 
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],  
  },
};