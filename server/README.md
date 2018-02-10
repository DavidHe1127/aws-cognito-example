# Auth your Graphql API using custom directive

### To see the demo
* `npm i`
* `npm run dev`
* Copy desired token from `readme` and paste it into header in `client.js`
* Open another shell terminal and run `node client.js`


### Client
It uses `node-fetch` to make the call.

To use a auth-needed api call, change the query to a auth-needed one like `allProductsBySupplier`.


### Supplier 1 JWT with `read:rating` scope

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCaXJkcyBTdXBwbHkgU2VydmVyIiwiaWF0IjoxNTE4MjQ2MjU3LCJleHAiOjE1NDk3ODM4MTUsImF1ZCI6Ind3dy5iaXJkcy1zdXBwbHkuY29tLmF1Iiwic3ViIjoiMSIsInNjb3BlIjoicmVhZDpyYXRpbmcifQ.AXgbsq4ZWI5H6TP6x1TkAOlZLFDP_cEG4hrBWROw9Es
```

### Supplier 2 JWT with `add:product` scope

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCaXJkcyBTdXBwbHkgU2VydmVyIiwiaWF0IjoxNTE4MjQ2MjU3LCJleHAiOjE1NDk3ODM4MTUsImF1ZCI6Ind3dy5iaXJkcy1zdXBwbHkuY29tLmF1Iiwic3ViIjoiMiIsInNjb3BlIjoiYWRkOnByb2R1Y3QifQ.KqlXPRbhGK1dYhBEmrQRO7xhU80ia3toYcJQx3Lx-B0
```

### Credits
* [Chenkie's auth demo repo](https://github.com/chenkie/graphql-auth)
* [JWT Builder](http://jwtbuilder.jamiekurtz.com/)

### License

MIT
