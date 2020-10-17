const path = require("path");
const webpack = require("webpack");

const config = (env, argv) => {
  console.log("argv", argv.mode);

  const backend_posts_url = 'http://localhost:3003/api/posts'
  const backend_users_url = 'http://localhost:3003/api/users'


  return {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "main.js"
    },
    devServer: {
      contentBase: path.resolve(__dirname, "build"),
      compress: true,
      port: 3000
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
        }
      ]
    }
  }
}
module.exports = config;
