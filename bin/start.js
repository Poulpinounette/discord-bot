require('babel-register')({
    presets: [ 'env' ]
})
require('dotenv').load();

// Import the rest of our application.
module.exports = require('../src/index')


