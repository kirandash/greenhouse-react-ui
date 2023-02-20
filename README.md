# Greenhouse React UI

The component library for fast and accessible development of gorgeous interfaces.

<p>
  <a href="https://codecov.io/gh/kirandash/greenhouse-react-ui"><img src="https://codecov.io/gh/kirandash/greenhouse-react-ui/branch/master/graph/badge.svg" alt="codecov" /></a>
  <img src="https://github.com/kirandash/greenhouse-react-ui/workflows/Build/badge.svg" alt="Build" />
  <a href="https://www.npmjs.com/package/greenhouse-react-ui"><img src="https://img.shields.io/npm/v/greenhouse-react-ui" alt="npm" /></a>
  <a href="https://github.com/kirandash/greenhouse-react-ui/blob/master/LICENSE"><img src="https://img.shields.io/github/license/kirandash/greenhouse-react-ui" alt="MIT License" /></a>
</p>

## Mission

Be the most accessible it can be out of the box and the fastest way to production.

## 🚀 Usage

Install

```sh
npm i greenhouse-react-ui
```

Inside `tailwind.config.js`

```js
const greenhouse = require("greenhouse-react-ui/config");
module.exports = greenhouse({
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
```

Then place `Windmill` at the root of your project (the order doesn't matter, as long as your application is inside).

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Windmill } from "greenhouse-react-ui";

ReactDOM.render(
  <Greenhouse>
    <App />
  </Greenhouse>,
  document.getElementById("root")
);
```

Use components inside your project

```js
import { Button } from "greenhouse-react-ui";

function App() {
  return <Button>Hi there!</Button>;
}

export default App;
```

## 🔌 Contributing

- Fork
- Clone
- `npm install`
- `npm run storybook`

It will start a local server at `localhost:6006` with all components rendered.

⚠ Use `npm run cz` instead of `git commit`! It will guide you through some short questions and guarantee that you commit message is standardized.

Commit will also trigger linting and test coverage.
