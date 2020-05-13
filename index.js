'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const cors = require('cors');
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const config = require('./config')
const resolvers = require('./lib/resolvers')

const app = express()
const isDev = config.graphiqldev;

// Reading the schema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)
const schema = makeExecutableSchema({ typeDefs, resolvers })

const db = require('./lib/db');
db(config.dbUrl);;

app.use(cors());

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(config.port, () => {
  console.log(`Server is listening at http://localhost:${config.port}/api`)
})
