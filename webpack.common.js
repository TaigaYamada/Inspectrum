const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const path = require('path');
// ===== End of imports ===== //

module.exports = {
  entry   : './src/js/index.jsx',
  plugins : [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(
      {
        template : './src/index.html'
      }
    ),
    new ImageMinimizerPlugin({
      minimizerOptions : {
        plugins : [
          ['mozjpeg', {
            progressive : true,
            quality     : 75
          }],

          ['pngquant', {
            quality : [0.3, 0.5]
          }],

          ['svgo', {}
          ],

          ['gifsicle', {
            optimizationLevel : 3
          }]
        ]
      }
    })
  ],
  module : {
    rules : [
      {
        test    : /\.jsx?$/,
        exclude : /node_modules/,
        use     : {
          loader : 'babel-loader'
        }
      },
      {
        test : /\.(s[ac]ss|css)$/,
        use  : [
          {
            loader  : MiniCssExtractPlugin.loader,
            options : { publicPath : '' }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test : /\.(png|jpe?g|gif|svg)$/,
        type : 'asset'
      }
    ]
  },
  resolve : {
    extensions : ['.js', '.jsx']
  },
  output : {
    path                : path.resolve(__dirname, 'docs'),
    assetModuleFilename : 'img/[hash][ext][query]',
    clean               : true
  }

};