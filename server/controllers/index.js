let ARTICLES = require('./../data/articles');

const getArticlesForAuthor = (obj, args, ctx) => {
  console.log(ctx.user)
  return ARTICLES.filter(article => article.authorId === user.sub);
};

const addArticle = input => {
  input.id = ARTICLES.length + 1;
  ARTICLES.push(input);
  return input;
};

module.exports = { getArticlesForAuthor, addArticle };
