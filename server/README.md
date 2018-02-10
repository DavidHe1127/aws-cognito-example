## Graphql api server with auth examples

## To see the demo
* `npm i`
* `npm run dev`
* Copy desired token from `readme` and paste it into header in `client.js`
* Open another shell terminal and run `node client.js`


## Client
It uses `node-fetch` to make the call.

To use a auth-needed api call, change the query to a auth-needed one like `allProductsBySupplier`.


### Supplier 1 JWT With `read:rating` Scope

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCaXJkcyBTdXBwbHkgU2VydmVyIiwiaWF0IjoxNTE4MjQ2MjU3LCJleHAiOm51bGwsImF1ZCI6IiIsInN1YiI6IjEiLCJzY29wZSI6InJlYWQ6cmF0aW5nIn0.7UY_59tvmaKDc6-_wL3C5_eFMGRHqBWCqTDE1Wk9kwo
```

### Supplier 2 JWT

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCaXJkcyBTdXBwbHkgU2VydmVyIiwiaWF0IjoxNTE4MjQ2MjU3LCJleHAiOm51bGwsImF1ZCI6IiIsInN1YiI6IjIifQ.T0Sxh6ZYQk5IrQGcZNctOJJ_Co1hU_EJo21I879WUe4
```

## Credits
(Chenkie's auth demo repo)[https://github.com/chenkie/graphql-auth]

## License

MIT
