let ARTICLES = require('./../data/articles');

const getArticlesForAuthor = (obj, args, ctx) => {
  console.log(ctx.user);
  return ARTICLES.filter(article => article.authorId === user.sub);
};

const addArticle = (obj, args, ctx) => {
  args.input.id = ARTICLES.length + 1;
  ARTICLES.push(args.input);
  return args.input;
};

const article = (obj, args, ctx) => {
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

module.exports = {getArticlesForAuthor, addArticle, article};