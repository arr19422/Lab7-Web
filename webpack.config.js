const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
      <html>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `,
  })],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css?)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
}
