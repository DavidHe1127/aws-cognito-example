## Graphql api server with auth examples

## To see the demo
* `npm i`
* `npm run dev`
* Open another shell terminal and run `node caller.js`


## Caller file
It uses `node-fetch` to make the call.

To use a auth-needed api call, change the query to a auth-needed one like `allArticles`.

## Credits
(Chenkie's auth demo repo)[https://github.com/chenkie/graphql-auth]

### JWT without scope

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjE1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMifQ.tTRbNKT58UqRMqMkf8cLenRZ0qvf15mUl6N6dWyn_Wo
```

### JWT With `write:articles` Scope

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjE1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMiLCJzY29wZSI6IndyaXRlOmFydGljbGVzIn0.mupYodqVggdF1fZaiyVdfOGLwY_R3KISGBTCJ7hhH5U
```

## License

MIT