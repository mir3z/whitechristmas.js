const path = require("path");

module.exports = {
    entry: "./src/index.js",
    target: "web",
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
