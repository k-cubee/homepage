const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    mode: "development",
    devtool: "source-map",
    // plugins: [new BundleAnalyzerPlugin()],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};
