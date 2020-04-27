# graphQL_Project
The most important Graphql bases.

# What is GraphQL?
```https
https://graphql.org/
```

GraphQL is a new paradigm applied for the exchange of information between different applications. Previously there were protocols such as CORBA, SOAP, RPC and the most recent and used REST. GraphQL created in 2015 by Facebook can be seen as an evolution to the REST protocol.

# Schema and types
```https
https://graphql.org/learn/schema/
```
The Schema is the base of an API in GraphQL, it is in charge of describing all the types of information that it will contain.

For the creation of this project we will use a tool called npx, for this you must first install it with the command:
```
npm i -g npx
```

Once installed, inside the folder of our project we will run the following command:
```
npx license mit> LICENSE && npx gitignore node && git init && npm init -y
```

Since the command finishes running it is time to add the GraphQL dependency to our project:
```
npm i graphql
```

Within GraphQL we have different types of scalar data:
* String
* Int
* Float
* Boolean
* ID

# Queries and resolves
```https
https://graphql.org/learn/queries/
```
A query allows executing a request to the API, inside a query you must indicate the query you want to execute and the fields you want to obtain. GraphQL will return the information you requested inside the data object.

The result of your request will not be executed in a magical way, for this you must define the resolvers object, this object will contain a property of the same name as the query that is going to be resolved or executed.
