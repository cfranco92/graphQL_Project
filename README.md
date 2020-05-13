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

# Nested types
We connect nested data which we can solve in the following process.

# Solve of types
GraphQL requires a resolver for the parent data type and a function for the nested type field in order to extract its information.

# Errors
If an error occurs when making a GraphQL request, it will return an object called errors that will contain the error information and its message. We can configure the message that returns to the user simply with a function that throws an error with the message that we want.

# Aliases & fragments 
```https
https://graphql.github.io/learn/queries/#aliases
```
Within GraphQL we can run more than one request at a time and name them differently in order to identify them, this is possible thanks to Aliases or simply Aliases.

The alias syntax is quite simple:
```graphql
Nickname: Datatype (argument: type) {
   data
}
```
In addition to Aliases, we can group fields to be reused in different requests thanks to Fragments.

Example:
```graphql
{
  AllCourses: getCourses{
    ...CourseFields
  }

  Course1: getCourse(id: "5cb4b8ce75f954a0585f7be2"){
    ...CourseFields
    teacher
  }

  Course2: getCourse(id: "5cb4b8ce75f954a0585f7be4"){
    ...CourseFields
    topic
  }
}

fragment CourseFields on Course {
  _id
  title
  description
  people {
    _id
    name
  }
}
```

# Variables
We can use variables within the requests we make to GraphQL simply by defining them with the following syntax:
```javascript
$name: type
```
Documentation:
```https
https://graphql.github.io/learn/queries/#variables
```
## Mutation example:
```graphql
mutation AddPersonToCourse2 ($course: ID!, $person: person){
  addPeople(courseID: $course, personID: $person) {
    _id
    title
  }
}
```
Requires a json object like:
```json
  {
    "course": "5cb4b8ce75f954a0585f7be3",
    "person": "5cb5dafca9684593ea74b2b5"
  }
```

## Query example:
```
```graphql
query GetCourse2 ($course: ID!) {
  getCourse(id: $course){
   _id
    title
    people{
      _id
      name
    }
  }
}
```
Requires a json object like:

```json
{
  "course": "5cb4b8ce75f954a0585f7be3"
}
```

# Enums
Enums or enumeration types are scalar data types whose values are configurable. If we define a data type as enum, its possible values will only be those that are among those defined in the enum.

Documentation:
```https
https://graphql.github.io/learn/schema/#enumeration-types
```

```graphql
  mutation CreateNewCourse($createinput: CourseInput!) {
    createCourse(input: $createinput) {
      _id
      title
    }
  } 
```
Requires a json object like: 
```json
{
  "createinput": {
    "title": "My title 5",
    "teacher": "Teacher 5",
    "description": "Example course 5",
    "topic": "Programing",
    "level": "beginner"
  }
}
```

# Interfaces - Monitor Type
Interfaces are very important and useful when we encounter similar data types. An interface allows us to define a type of parent data that, using the word implements, will implement the fields it has defined within the type of data that we want.

## Mutation example
```graphql
mutation createNewMonitor ($monitorinput: PersonInput!) {
  createPerson(input: $monitorinput) {
    _id
    name
  }
}
```
```json
{
  "monitorinput": {
    "name": "Monitor 1",
    "email": "monitor1@gmail.com",
    "phone": "3004442020"
  }
}
```

## Query with fragments example
```graphql
{
  getPeople {
    _id
    name
    email
    ... on Monitor {
      phone
    }
    ... on Student {
      avatar
    }
  }
}
```

# Directives
Documentation:
```https
https://graphql.github.io/learn/queries/#directives
```
Directives are an instruction that allows us to add conditionals to our requests. We can dynamically modify our query simply by adding:
## @include
```graphql
query getPeopleData($monitor: Boolean!, $avatar: Boolean!) {
  getPeople {
    _id
    name
    ... on Monitor @include(if: $monitor){
      phone
    }
    ... on Student @include(if: $avatar){
      avatar
      email
    }
  }
}
```
```json
{
  "monitor": false,
  "avatar": true
}
```

## @deprecated
Those who consume the API are told that a certain field will no longer be available:
```graphql
type Course {
    _id: ID!
    title: String!
    teacher: String
    description: String!
    topic: String @deprecated
    people: [Student]
    level: Level
}
```

# Unions
Documentation:
```https
https://graphql.github.io/learn/schema/#union-types
```
Unions allows you to group several custom types regardless of whether they have something in common, their syntax is as follows:
```graphql
union SearchResult = CustomType1 | CustomType2 | CustomType3
```

At the time of performing a query that returns a union we can identify the data type by requesting the __typename field.

## Create index in MongoDB
Example with courses:
```javascript
db.courses.createIndex({"$**": "text"})
```

# Preparing API for production
Install cors:
```terminal
$ npm i cors
```