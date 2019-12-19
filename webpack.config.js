const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'app_bundle.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: 
          {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyPlugin([
      { from: 'parties.json', to: 'dist/parties.json' }
    ])
  ],
  devServer: {
    historyApiFallback: true
  } 
};
