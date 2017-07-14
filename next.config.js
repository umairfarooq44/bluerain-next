
// const path = require('path')
// const glob = require('glob')

// module.exports = {
//   webpack: (config, { dev }) => {
//     config.module.rules.push(
//       {
//         test: /\.(css|scss)/,
//         loader: 'emit-file-loader',
//         options: {
//           name: 'dist/[path][name].[ext]'
//         }
//       }
//     ,
//       {
//         test: /\.css$/,
//         use: ['babel-loader', 'raw-loader', 'postcss-loader']
//       }
//     ,
//       {
//         test: /\.s(a|c)ss$/,
//         use: ['babel-loader', 'raw-loader', 'postcss-loader',
//           { loader: 'sass-loader',
//             options: {
//               includePaths: ['styles', 'node_modules']
//                 .map((d) => path.join(__dirname, d))
//                 .map((g) => glob.sync(g))
//                 .reduce((a, c) => a.concat(c), [])
//             }
//           }
//         ]
//       }
//     )
//     return config
//   }
// }

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// //const webpack = require("webpack")

// module.exports = {
//   webpack: function (webpackConfig, { dev }) {
//     webpackConfig.resolve.extensions = ['.css', '.js', '.jsx', '.json'];
//     let cssLoader = {
//       test: /\.css$/,
//        loader: ExtractTextPlugin.extract({
//         loader: `${require.resolve('css-loader')}`
//       })
//     };
//     webpackConfig.module.rules.unshift(cssLoader);
//     webpackConfig.plugins.push(
//       new ExtractTextPlugin({
//         filename: '../static/[name].css',
//         disable: false,
//         allChunks: true
//       }),
//       new CopyWebpackPlugin([{
//         from: {
//           glob: `./pages/**/*.css`,
//           dot: true
//         },
//         to: `./dist/[path]/[name].css`
//       }], { debug: 'warning' }
//       )
//     )
//     return webpackConfig
//   }

// }