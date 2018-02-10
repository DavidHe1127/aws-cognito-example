let PRODUCTS = require('./products');

const allProductsBySupplier = (obj, args, ctx) => PRODUCTS.filter(p => p.supplierId === ctx.user.sub);

const addProduct = (obj, args, ctx) => {
  const id = PRODUCTS.length + 1;
  PRODUCTS.push({
    ...args.input,
    id
  });
  return PRODUCTS.slice(-1)[0];
};

const product = (obj, args, ctx) => PRODUCTS.find(p => p.id === args.productId);

const everyProductPub = (obj, args, ctx) => PRODUCTS;

module.exports = {allProductsBySupplier, product, everyProductPub, addProduct};
