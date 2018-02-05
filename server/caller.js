const fetch = require('node-fetch');

fetch('http://localhost:8080/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjE1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMifQ.tTRbNKT58UqRMqMkf8cLenRZ0qvf15mUl6N6dWyn_Wo'

  },
  body: JSON.stringify({
    query: '{ allArticles { id, authorId, authorName, articleName, link } }'
  })
}).then(res => {
  console.log('iijiji')
  console.log(res.json())
}).catch(err => {
  console.log(err)
});

