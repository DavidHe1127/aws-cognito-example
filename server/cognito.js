'use strict';

const jwkToPem = require('jwk-to-pem'),
  jwt = require('jsonwebtoken'),
  fetch = require('node-fetch');

class Cognito {
  constructor(config) {
    if (!config)
      throw new TypeError(
        'Options not found. Please refer to README for usage example at https://github.com/ghdna/cognito-express'
      );

    if (configurationIsCorrect(config)) {
      this.userPoolId = config.cognitoUserPoolId;
      this.tokenUse = config.tokenUse;
      this.tokenExpiration = config.tokenExpiration || 3600000;
      this.iss = `https://cognito-idp.${config.region}.amazonaws.com/${this
        .userPoolId}`;
      this.init();
    }
  }

  init() {
    console.log(`${this.iss}/.well-known/jwks.json`);
    return fetch(`${this.iss}/.well-known/jwks.json`)
      .then(res => res.json())
      .then(json => {
        this.pems = {};
        let keys = json.keys;
        for (let i = 0; i < keys.length; i++) {
          let key_id = keys[i].kid;
          let modulus = keys[i].n;
          let exponent = keys[i].e;
          let key_type = keys[i].kty;
          let jwk = { kty: key_type, n: modulus, e: exponent };
          let pem = jwkToPem(jwk);
          this.pems[key_id] = pem;
        }
      })
      .catch(function(err) {
        throw new TypeError('Unable to generate certificate due to \n' + err);
      });
  }

  validate(token) {
    let decodedJwt = jwt.decode(token, { complete: true });

    if (!decodedJwt) return new Error('Not a valid JWT token');

    if (decodedJwt.payload.iss !== this.iss)
      return new Error('token is not from your User Pool');

    if (decodedJwt.payload.token_use !== this.tokenUse)
      return new Error(`Not an ${this.tokenUse} token`);

    let kid = decodedJwt.header.kid;
    let pem = this.pems[kid];

    if (!pem) return new Error(`Invalid ${this.tokenUse} token`);

    let params = {
      token: token,
      pem: pem,
      iss: this.iss,
      maxAge: this.tokenExpiration
    };

    try {
      return jwt.verify(params.token, params.pem, {
        issuer: params.iss,
        maxAge: params.maxAge
      });
    } catch (err) {
      return err;
    }
  }
}

function configurationIsCorrect(config) {
  let configurationPassed = false;
  switch (true) {
    case !config.region:
      throw new TypeError('AWS Region not specified in constructor');
      break;
    case !config.cognitoUserPoolId:
      throw new TypeError(
        'Cognito User Pool ID is not specified in constructor'
      );
      break;
    case !config.tokenUse:
      throw new TypeError(
        "Token use not specified in constructor. Possible values 'access' | 'id'"
      );
      break;
    case !(config.tokenUse == 'access' || config.tokenUse == 'id'):
      throw new TypeError(
        "Token use values not accurate in the constructor. Possible values 'access' | 'id'"
      );
      break;
    default:
      configurationPassed = true;
  }
  return configurationPassed;
}

module.exports = Cognito;
