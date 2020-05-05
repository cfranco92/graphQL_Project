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
$ npm i -g npx
```

Once installed, inside the folder of our project we will run the following command:
```
$ npx license mit> LICENSE && npx gitignore node && git init && npm init -y
```

Since the command finishes running it is time to add the GraphQL dependency to our project:
```
$ npm i graphql
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

# Serving the API on the web
Our API works through the command line, but we need it to work within the web, for this we need the dependencies of express and a GraphQL middleware, we will install it with the following command:
```
$ npm i express express-graphql
```

To avoid the process of stopping our server every time we execute a new change we are going to use the development dependency Nodemon:
```
$ npm i nodemon -D
```

# Custom types
For this project we're going to follow the Standar styles standard, to install it we run the following command:
```
$ npm i standard -D
```

GraphQL allows us to configure our own data types, these must have the following syntax:
```javascript
type<Type name> {
    Property: Data type
}
```

Within our data types we can configure a field of a types as mandatory with the sign "!", being for example:
```javascript
type Course {
    title: String!
}
```

# Arguments
We are going to install a new dependency to make working with GraphQL easier, we are going to run the following command:
```
$ npm i graphql-tools
```

We can pass arguments with different types of information within the requests that we make in GraphQL, its syntax would be as follows:
```javascript
QueryName (field: type): type
```
Within the solve the request arguments would be passed as the second parameter, the first is root and the second is args.

# Database configuration
At the moment our API handles pure static information, we are going to change this by passing the information to a database, in this case we will use MongoDB.

To connect we will use mongoose, which must be installed with the following command:
```
$ npm i mongodb
```

# Mutations and inputs
We have already seen how to query information through GraphQL, but in an API you will also need to send information to be stored, within GraphQL this is possible thanks to the mutation specification.
```https
https://graphql.org/learn/queries/#mutations
```
A mutation will require an input type field that are like templates that will indicate what fields are necessary to insert or modify information.

The syntax of a mutation is as follows:
```javascript
mutationName (input: InputType): type
```