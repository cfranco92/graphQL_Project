'use strict'

const { graphql, buildSchema } = require('graphql');

// Defining the scheme
const schema = buildSchema(`
    type Query {
        hello: String,
        saludo: String
    }
`)

// Configure the resolvers
const resolvers = {
    hello: () => {
        return 'Hello world'
    },
    saludo: () => {
        return 'Hello everyone'
    }
}

// Run the query hello
graphql(schema, '{ saludo }', resolvers).then((data) => {
    console.log(data);
})