const path = require("path");
require("@babel/polyfill");

module.exports = {
  entry: ["@babel/polyfill", "./src/app.js"],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(sass|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
