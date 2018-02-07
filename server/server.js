require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
  makeExecutableSchema
} = require('graphql-tools');
const {directiveResolvers} = require('./directives');

const {getArticlesForAuthor, addArticle, article} = require('./controllers');

const app = express();

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
    review: Review @hasScope(scope: ["write:articles"])
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
    allArticlesPub: [Article]
    article: Article
  }

  type Mutation {
    addArticle(input: ArticleInput): Article
  }
`;

const resolvers = {
  Query: {
    allArticles: getArticlesForAuthor,
    allArticlesPub: () => {
      const res = [
        {
          id: '1',
          authorName: 'David He',
          authorId: 'Public',
          articleName: 'How to raise your parrots',
          link: 'https://birds-supply',
          review: {
            rating: 12,
            comment: 'Very good article, would recommend.',
          },
        },
      ];
      return res;
    },
    article,
  },
  Mutation: {
    addArticle: addArticle,
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(port);
console.log(`App listening on localhost:${port}`);
