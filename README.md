# aws-cognito-example
A client app leverages aws cognito to sign users up/in

## To Run the App
Firstly, you need to create file called `config.json` under `src` and fill it up content as follow
```json
{
  "region": "<YOUR_REGION>",
  "IdentityPoolId": "<N/A_IF_NOT_USE_FEDERATION_POOL>",
  "UserPoolId": "<YOUR_USER_POOL_ID>",
  "ClientId": "<YOUR_CLIENT_APP_ID>"
}
```
Then, open a terminal and run:
```js
npm i
npm start
```
