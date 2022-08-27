// const fs    = require('fs');
// const qs    = require('querystring');
// const debug = require('debug')('planner:server');
// const express = require('express');
// const route = require('./routes/routes.js')





const logger = require('morgan');
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema.js')
const path  = require('path');
const http  = require('http');



'use strict'



const PORT  = process.env.PORT || "1400";



function appSetup(app) {
    // app.use(logger('dev'));
    app.use(express.static(path.join(__dirname, 'public')));

    return app
}


function routes(app) {
    // app.use('/', route)
    app.use('/graphql', graphqlHTTP(
        {
            schema,
            graphiql: true,
        }
    ))
    
    return app
}


function serverController(hostname, app) {
    const server = http.createServer(app);
    
    server.listen(PORT, hostname, () => {
        console.log(`Server running at ${hostname}:${PORT}\n`);
    });
};



(function launch() {
    if (process.argv.length > 2) {
        var hostname = process.argv[2];
    } else {
        var hostname = "localhost";
    };
    const app = express();
    appSetup(app)
    routes(app)
    app.listen(PORT, hostname, () => {
        console.log(`Server running at ${hostname}:${PORT}\n`);

    })
})();
