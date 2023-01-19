const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      store: path.resolve(__dirname, 'src/store'),
      customTypes: path.resolve(
        __dirname,
        'src/customTypes',
      ),
      constants: path.resolve(__dirname, 'src/constants'),
      services: path.resolve(__dirname, 'src/services'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      theme: path.resolve(__dirname, 'src/theme'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      mock: path.resolve(__dirname, 'src/mock'),
      schemas: path.resolve(__dirname, 'src/schemas'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
