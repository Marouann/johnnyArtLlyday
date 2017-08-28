var path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watch: true
}
