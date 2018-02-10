const fetch = require('node-fetch');

const queries = {
  suppliers: '{ suppliers { id, name } }',
  allProductsBySupplier: '{ allProductsBySupplier { id, supplierId, sku, qty, price, parrot rating } }'
};

const mutations = {
  addProduct: {
    query:
      'mutation addProductMutation ($input: ProductInput!) { addProduct(input: $input) { id sku qty price parrot rating supplierId }}',
    variables: {
      input: {
        sku: 'RAINBOW_LORIKEET',
        qty: '20',
        price: '100',
        parrot: 'rainbow_lorikeet',
        rating: '2',
        supplierId: '2'
      }
    }
  }
};

fetch('http://localhost:8080/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCaXJkcyBTdXBwbHkgU2VydmVyIiwiaWF0IjoxNTE4MjQ2MjU3LCJleHAiOjE1NDk3ODM4MTUsImF1ZCI6Ind3dy5iaXJkcy1zdXBwbHkuY29tLmF1Iiwic3ViIjoiMSIsInNjb3BlIjoicmVhZDpyYXRpbmcifQ.AXgbsq4ZWI5H6TP6x1TkAOlZLFDP_cEG4hrBWROw9Es'
  },
  body: JSON.stringify(mutations.addProduct),
  // body: JSON.stringify({
  //   query: queries.addProduct
  // })
})
  .then(res => res.json())
  .then(json => console.log(json.errors, json.data))
  .catch(err => {
    // console.log(err);
  });
