let PRODUCTS = require('./products');

const allProducts = (obj, args, ctx) => {
  return PRODUCTS.filter(article => article.authorId === user.sub);
};

const addProduct = (obj, args, ctx) => {
  args.input.id = ARTICLES.length + 1;
  ARTICLES.push(args.input);
  return args.input;
};

const product = (obj, args, ctx) => {
  return {
    id: '2',
    authorId: '234',
    authorName: 'Diego Poza',
    articleName: 'Is FaceID Really Secure?',
    link: 'https://auth0.com/blog/is-faceid-really-secure/',
    review: {
      rating: 11,
      comment: 'Very good article, would read again.',
    },
  };
};

module.exports = {allProducts, addProduct, product};