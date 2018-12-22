var express = require('express')

var app = express()
app.set('views', __dirname)
// use whatever templating system(s) you like
app.set('view engine', 'pug')

// See the README about ordering of middleware
// Load the routes ("controllers" -ish)
app.use(require('./site/router'))
app.use('/api', require('./customers/router'))
app.use('/api', require('./users/router'))
// Repeat the above line for additional model areas ("deals", "vehicles", etc)


// FINALLY, use any error handlers
app.use(require('./errors/not-found'))

// Export the app instance for unit testing via supertest
module.exports = app
