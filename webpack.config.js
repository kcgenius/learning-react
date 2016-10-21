// compiles js and jsx to js ,launches dev server too

module.exports = {
    entry: './main.js',
    output: {
        path:'./',
        filename:'index.js'
    },
    devServer: {
        inline : true,
        port:3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclue: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    }
}
