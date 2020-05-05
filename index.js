'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const config = require('./config')
const resolvers = require('./lib/resolvers')

const app = express()

// Reading the schema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)
const schema = makeExecutableSchema({ typeDefs, resolvers })

const db = require('./lib/db');
db(config.dbUrl);;

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(config.port, () => {
  console.log(`Server is listening at http://localhost:${config.port}/api`)
})
