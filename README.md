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
* Go to `server` folder and run `npm run dev`
* Copy token and paste it into `Authorization` header in `caller.js`
* Run `node caller.js`

### JWT with `read:comments` scope
```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTc5ODQzNTcsImV4cCI6MTU0OTUyMDM3NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInNjb3BlIjoicmVhZDpjb21tZW50cyJ9.t9smhM4UCEB6GIgCmvxNVsnvFWh20mZbzm_zNzRFuVU
```

### Todo
* Follow guide on aws to verify the token
