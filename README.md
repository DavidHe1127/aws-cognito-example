# aws-cognito-example
A client app leverages aws cognito to sign users up/in

## To run the client app
Firstly, you need to save `config_sample.json` as `config.json` under `src` and fill it up with contents below:
```json
{
  "region": "<COGNITO_REGION>",
  "identityPoolId": "<COGNITO_IDENTITY_POOL_ID>",
  "userPoolId": "<COGNITO_USER_POOL_ID>",
  "userPoolWebClientId": "<COGNITO_WEB_CLIENT_ID>"
}
```
Then, open a terminal and run:
```js
npm i
npm start
```

## To run the server app
See `server/` directory for details
