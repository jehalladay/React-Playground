// // const fs    = require('fs');
// // const qs    = require('querystring');
// // const debug = require('debug')('planner:server');
// // const express = require('express');
// // const route = require('./routes/routes.js')





// // const logger = require('morgan');
// // const express = require('express')
// // const graphqlHTTP = require('express-graphql')
// // const schema = require('./schema.js')
// // const path  = require('path');
// // const http  = require('http');
// import logger from 'morgan';
// import express from 'express';
// import graphqlHTTP from 'express-graphql';
// import { schema } from './schema.js';
// import { join } from 'path';
// import { createServer } from 'http';



// 'use strict'



// const PORT  = process.env.PORT || "1400";



// function appSetup(app) {
//     // app.use(logger('dev'));
//     app.use(express.static(join(__dirname, 'public')));

//     return app
// }


// function routes(app) {
//     // app.use('/', route)
//     app.use('/graphql', graphqlHTTP(
//         {
//             schema,
//             graphiql: true,
//         }
//     ))
    
//     return app
// }


// function serverController(hostname, app) {
//     const server = createServer(app);
    
//     server.listen(PORT, hostname, () => {
//         console.log(`Server running at ${hostname}:${PORT}\n`);
//     });
// };



// (function launch() {
//     if (process.argv.length > 2) {
//         var hostname = process.argv[2];
//     } else {
//         var hostname = "localhost";
//     };
//     const app = express();
//     appSetup(app)
//     routes(app)
//     app.listen(PORT, hostname, () => {
//         console.log(`Server running at ${hostname}:${PORT}\n`);

//     })
// })();


var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema, graphql } = require('graphql');
var cors = require('cors')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(
`type Complex {
    first: String
    second: Int
}

type Query {
    hello: String
    goodbye: String
    Complex(first: String): Complex
}`
);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
    goodbye: ()=> {
        return "goodbye friend"
    },
    Complex: (e) => {
        console.log('e',e)
        if (e.first) {
            return '1'
        }
        return 'hello'
    },
    first: () => {return '1'},
    second: () => {return 2}
  
}

var complex = {

    
}


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
 
// app.use(cors())


// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ goodbye hello Complex(first: "hello") { first } }', root).then((response) => {
    console.log(response);
  });


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');