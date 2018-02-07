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
    authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjE1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMiLCJzY29wZSI6IndyaXRlOmFydGljbGVzIn0.mupYodqVggdF1fZaiyVdfOGLwY_R3KISGBTCJ7hhH5U'
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
