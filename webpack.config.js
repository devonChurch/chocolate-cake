const path = require("path");
const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

module.exports = {
  entry: `${srcDir}/index.ts`,
  output: {
    path: distDir,
    filename: "bundle.js"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts"]
  },

  module: {
    rules: [
      { test: /\.ts$/, loader: "awesome-typescript-loader", include: [srcDir] }
    ]
  }
};
