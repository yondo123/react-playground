import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const webpackConfig: webpack.Configuration = {
  target: ['web', 'es5'],
  name: 'ReactWebpack',
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@mocks': path.resolve(__dirname, 'src/mocks/'),
      '@types': path.resolve(__dirname, 'src/types/')
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
    client: {
      overlay: false
    },
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/mockServiceWorker.js' }]
    })
  ]
};

export default webpackConfig;
