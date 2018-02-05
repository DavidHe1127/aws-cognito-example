const fetch = require('node-fetch');

fetch('http://localhost:8080/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'wtf'
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