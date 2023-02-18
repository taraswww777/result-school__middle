const devServer = ({port}) => {
    return ({
        open: true,
        host: "localhost",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        port,
        hot: true,
        historyApiFallback: true
    });
}

module.exports = {
    devServer
}
