const fetch = require('node-fetch');

const queries = {
  suppliers: '{ suppliers { id, name } }',
  allProductsBySupplier: '{ allProductsBySupplier { id, supplierId, sku, qty, price, parrot rating } }',
  product: '{ product { id, supplierId, sku, qty, price, parrot rating }'
};

fetch('http://localhost:8080/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  body: JSON.stringify({
    query: queries.allProductsBySupplier
  })
})
  .then(res => res.json())
  .then(json => console.log(json.errors, json.data))
  .catch(err => {
    // console.log(err);
  });
