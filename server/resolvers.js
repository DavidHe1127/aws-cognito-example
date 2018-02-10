let PRODUCTS = require('./products');

const allProductsBySupplier = (obj, args, ctx) => PRODUCTS.filter(p => p.supplierId === ctx.user.sub);

// const addProduct = (obj, args, ctx) => {
//   args.input.id = ARTICLES.length + 1;
//   ARTICLES.push(args.input);
//   return args.input;
// };

const product = (obj, args, ctx) => PRODUCTS.find(p => p.id === args.productId);

const everyProductPub = (obj, args, ctx) => PRODUCTS;

module.exports = {allProductsBySupplier, product, everyProductPub};
