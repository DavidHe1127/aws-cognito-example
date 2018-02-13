const Cognito = require('./cognito');
const config = require('../src/config.json');

const auth = new Cognito({
  region: config.region,
  cognitoUserPoolId: config.userPoolId,
  tokenUse: 'access'
});

module.exports = auth;
