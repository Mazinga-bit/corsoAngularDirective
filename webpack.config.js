const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './dev/js/app.js',
        vendors: './bower_components/jquery/dist/jquery.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets/js/'),
        filename: '[name].js'
    }
};