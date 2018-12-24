const path = require("path");
const PRODUCTION_ENV = "production";
const DEVELOPMENT_ENV = "development";
const { NODE_ENV = PRODUCTION_ENV } = process.env;
const isProduction = NODE_ENV === PRODUCTION_ENV;
const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  mode: isProduction ? PRODUCTION_ENV : DEVELOPMENT_ENV,

  target: "web",

  entry: `${SRC_DIR}/index.ts`,

  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    library: "chocolateCake",
    libraryTarget: "umd"
  },

  devtool: isProduction ? "source-map" : "cheap-source-map",

  resolve: {
    extensions: [".ts"]
  },

  module: {
    rules: [
      { test: /\.ts$/, loader: "awesome-typescript-loader", include: [SRC_DIR] }
    ]
  }
};
