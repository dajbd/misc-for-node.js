module.exports = {
    context: __dirname + '/src',
    entry: "./entry.js",
    // entry: ['webpack/hot/dev-server', "./entry.js"],
    output: {
        path: __dirname + '/dist',
        // publicPath: __dirname + '/src',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
}
