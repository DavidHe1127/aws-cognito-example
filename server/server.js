require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { directiveResolvers } = require('./directives');
const { getArticlesForAuthor, addArticle } = require('./controllers');

const app = express();

let ARTICLES = require('./data/articles');

const port = 8080;
const typeDefs = `

  directive @isAuthenticated on QUERY | FIELD
  directive @hasScope(scope: [String]) on QUERY | FIELD

  type Article {
    id: ID!
    authorId: ID!
    authorName: String!
    articleName: String!
    link: String!
    review: Review @hasScope(scope: ["read:comments"])
  }

  type Review {
    rating: Int
    comment: String
  }

  input ArticleInput {
    authorId: ID!
    authorName: String!
    articleName: String!
    link: String!
  }

  type Query {
    allArticles: [Article] @isAuthenticated
  }

  type Mutation {
    addArticle(input: ArticleInput): Article
  }
`;

const resolvers = {
  Query: {
    allArticles: getArticlesForAuthor
  },
  Mutation: {
    addArticle: addArticle
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers, directiveResolvers });

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port);
console.log(`App listening on localhost:${port}`);
