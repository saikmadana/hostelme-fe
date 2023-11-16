const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.s?(css)$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
      }, 'sass-loader']
      },
      {
        test: /\.(png|svg|gif)(\?[a-z0-9=.]+)?$/,
        type: 'asset',
      },
    ]
  },

  devtool: "eval-source-map",

  plugins: [
    new htmlWebpackPlugin({ template: './src/index.html' }),
    // new BundleAnalyzerPlugin()
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
}