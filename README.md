# aws-cognito-example
A client app leverages aws cognito to sign users up/in

## To Run the App
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
