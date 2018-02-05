const { AuthorizationError } = require('./../errors');
const jwt = require('jsonwebtoken');

const directiveResolvers = {
  isAuthenticated(next, source, args, context) {
    const token = context.headers.authorization;
    console.log('token', token)
    if (!token) {
      throw new AuthorizationError({
        message: 'You must supply a JWT for authorization!'
      });
    }
    try {
      const decoded = jwt.verify(
        token.replace('Bearer ', ''),
        process.env.JWT_SECRET
      );
      context.user = decoded;
      return next();
    } catch (err) {
      throw new AuthorizationError({
        message: 'You are not authorized.'
      });
    }
  },
  hasScope(result, source, args, context) {
    const token = context.headers.authorization;
    const expectedScopes = args.scope;
    if (!token) {
      throw new AuthorizationError({
        message: 'You must supply a JWT for authorization!'
      });
    }
    try {
      const decoded = jwt.verify(
        token.replace('Bearer ', ''),
        process.env.JWT_SECRET
      );
      const scopes = decoded.scope.split(' ');
      if (expectedScopes.some(scope => scopes.indexOf(scope) !== -1)) {
        return result;
      }
    } catch (err) {
      return Promise.reject(
        new AuthorizationError({
          message: `You are not authorized. Expected scopes: ${expectedScopes.join(
            ', '
          )}`
        })
      );
    }
  }
};

module.exports = { directiveResolvers };
