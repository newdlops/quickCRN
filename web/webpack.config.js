const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const appDirectory = path.resolve(__dirname, '../')
const { presets } = require(`${appDirectory}/babel.config.js`)

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
  'native-base',
  '@react-navigation',
  '@react-native-async-storage/async-storage',
  'react-native-safe-area-context',
  'react-redux',
  'axios',
  'react-native-codegen',
  'react-native-screens',
  'react-native-svg',
  'react-native-vector-icons',
  'react-native-floating-action',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`))

const babelLoaderConfiguration = {
  test: /\.js$|.ts$|.tsx$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'), // Entry to your application
    path.resolve(appDirectory, 'App.web.tsx'), // Change this to your main App file
    path.resolve(appDirectory, 'src'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: ['react-native-web'],
    },
  },
}

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
}

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/i,
  use: {
    loader: 'file-loader',
    options: {
      outputPath: path.resolve(appDirectory, 'src/assets/img'),
      publicPath: '/assets/img',
      name: '[name].[ext]',
      esModule: false,
    },
  },
}

module.exports = {
  entry: {
    app: path.join(appDirectory, 'index.web.js'),
  },
  output: {
    path: path.resolve(appDirectory, 'public'),
    publicPath: '/',
    filename: 'quickC.bundle.js',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      'normalize-css-color': '@react-native/normalize-color',
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      {
        test: /\.ttf$/,
        loader: 'url-loader',
        include: path.resolve(
          appDirectory,
          'node_modules/react-native-vector-icons',
        ),
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src', 'assets'),
          to: path.resolve(__dirname, '../public', 'assets'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(appDirectory, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  ],
}
