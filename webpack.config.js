const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    },
  },
  target: 'node',
  resolve: {
    extensions: [".js"],
  },
  experiments: {
    outputModule: true,
  },
};
