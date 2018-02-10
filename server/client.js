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
    // 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCaXJkcyBTdXBwbHkgU2VydmVyIiwiaWF0IjoxNTE4MjQ2MjU3LCJleHAiOm51bGwsImF1ZCI6IiIsInN1YiI6IjEiLCJzY29wZSI6InJlYWQ6cmF0aW5nIn0.7UY_59tvmaKDc6-_wL3C5_eFMGRHqBWCqTDE1Wk9kwo'
  },
  body: JSON.stringify({
    query: queries.suppliers
  })
})
  .then(res => res.json())
  .then(json => console.log(json.errors, json.data))
  .catch(err => {
    // console.log(err);
  });
