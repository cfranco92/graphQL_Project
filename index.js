'use strict'

const { graphql, buildSchema } = require('graphql');

// Defining the scheme
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

// Run the query hello
graphql(schema, '{ hello }').then((data) => {
    console.log(data);
})