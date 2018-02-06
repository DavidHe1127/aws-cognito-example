let ARTICLES = require('./../data/articles');

const getArticlesForAuthor = (obj, args, ctx) => {
  console.log(ctx.user)
  return ARTICLES.filter(article => article.authorId === user.sub);
};

const addArticle = (obj, args, ctx) => {
  args.input.id = ARTICLES.length + 1;
  ARTICLES.push(args.input);
  return args.input;
};

const article = (obj, args, ctx) => {
  console.log('article', ctx.user);
  return [];
};

module.exports = { getArticlesForAuthor, addArticle, article };
