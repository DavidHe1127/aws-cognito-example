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
    authorization: ''
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
