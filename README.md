# node-express-api

## Initial setup

```sh
npm init
npm install express
npm install cors
npm install @types/cors
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

Run project

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

---

## Add ENV and TypeScript

Install DotEnv

```sh
npm install --save-dev dotenv
```

Install TypeScript

```sh
npm install --save-dev typescript @types/express @types/node
```

Generate tsconfig.json

```sh
npx tsc --init
```

## Add ESLint support

```sh
npm install --save-dev eslint
npm install --save-dev @typescript-eslint/parser
npm install --save-dev eslint-plugin-jsx-a11y
npx eslint --init
```

## Add Prettier support

```sh
npm i --save-dev prettier
```

.prettierrc

---
