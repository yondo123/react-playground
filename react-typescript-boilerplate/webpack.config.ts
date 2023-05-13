import path from 'path'
import webpack from 'webpack'
import 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const webpackConfig: webpack.Configuration = {
  target: ['web', 'es5'],
  name: 'ReactWebpack',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/')
    }
  },
  entry: {
    app: ['./src/index.tsx']
  },
  output: {
    path: path.join(__dirname, 'dist'), //build path
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '.babelrc.json')
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

export default webpackConfig
