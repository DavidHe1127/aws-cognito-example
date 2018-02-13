require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
  makeExecutableSchema
} = require('graphql-tools');

const {directiveResolvers} = require('./directives');
const {allProductsBySupplier, addProduct, product, suppliers} = require('./resolvers');

require('./auth');

const app = express();

const port = 8080;
const typeDefs = `

  directive @isAuthenticated on QUERY | FIELD
  directive @hasScope(scope: [String]) on QUERY | FIELD

  type Product {
    id: ID!
    supplierId: ID!
    sku: String
    qty: Int
    price: Int
    parrot: String
    rating: Int @hasScope(scope: ["read:rating"])
  }

  type Supplier {
    id: ID!
    name: String!
  }

  input ProductInput {
    supplierId: ID!
    sku: String!
    qty: Int!
    price: Int!
    parrot: String!
    rating: Int!
  }

  type Query {
    allProductsBySupplier: [Product] @isAuthenticated
    product: Product @isAuthenticated
    suppliers: [Supplier]
  }

  type Mutation {
    addProduct(input: ProductInput!): Product @hasScope(scope: ["add:product"])
  }
`;

const resolvers = {
  Query: {
    allProductsBySupplier,
    product,
    suppliers
  },
  Mutation: {
    addProduct
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port);

console.log(`server running on localhost:${port}`);
