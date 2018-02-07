const fetch = require('node-fetch');

const queries = {
  public: '{ allArticlesPub { id, authorId, authorName, articleName, link } }',
  allArticles: '{ allArticles { id, authorId, authorName, articleName, link } }',
  article: '{ article { id, authorId, authorName, articleName, link, review {rating comment} } }'
};

fetch('http://localhost:8080/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTc5ODQzNTcsImV4cCI6MTU0OTUyMDM3NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInNjb3BlIjoicmVhZDpjb21tZW50cyJ9.t9smhM4UCEB6GIgCmvxNVsnvFWh20mZbzm_zNzRFuVU'
  },
  body: JSON.stringify({
    query: queries.article
  })
})
  .then(res => res.json())
  .then(json => console.log('xxx', json))
  .catch(err => {
    // console.log(err);
  });
