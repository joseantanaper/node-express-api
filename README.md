# node-express-api

## Setup
```sh
npm init
npm install express
```

```sh
npm install -g nodemon
```

index.js
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

```sh
node index.js
```

Serving public files:
1. Simple
```js
app.use(express.static('public'))
```

2. Virtual path:
```js
app.use('/static', express.static('public'))
```

3. Absolute path (safer):
```js
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
```
