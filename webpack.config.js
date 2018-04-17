const path = require('path');

module.exports = {
    entry: './dev/js',
    output: {
        path: path.resolve(__dirname, 'assets/js/'),
        filename: 'bundle.js'
    }
};