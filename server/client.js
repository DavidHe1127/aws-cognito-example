const fetch = require('node-fetch');

const queries = {
  everyProductPub: '{ everyProductPub { id, supplierId, sku, qty, price, parrot rating } }',
  allProductsBySupplier: '{ allProductsBySupplier { id, supplierId, sku, qty, price, parrot rating } }',
  product: '{ product { id, supplierId, sku, qty, price, parrot rating }'
};

fetch('http://localhost:8080/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: ''
  },
  body: JSON.stringify({
    query: queries.everyProductPub
  })
})
  .then(res => res.json())
  .then(json => console.log('xxx', json))
  .catch(err => {
    // console.log(err);
  });
