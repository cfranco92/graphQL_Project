'use strict'

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const config = require('./config');

const app = express();

// Defining the scheme
const schema = buildSchema(`
    type Query {
        "Return a greeting to the world"
        hello: String,
    }
`)

// Configure the resolvers
const resolvers = {
    hello: () => {
        return 'Hello world'
    }
}

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(config.port, () => {
    console.log(`Server is listening at http://localhost:${config.port}/api`);
})