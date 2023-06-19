# Greenhouse React UI

The react component library with Tailwind and a gorgeous design system to help
you build awesome react projects.

<p>
  <a href="https://codecov.io/gh/kirandash/greenhouse-react-ui"><img src="https://codecov.io/gh/kirandash/greenhouse-react-ui/branch/main/graph/badge.svg?token=H26ECXXPKW" alt="Codecov" /></a>
  <img src="https://github.com/kirandash/greenhouse-react-ui/workflows/Build/badge.svg" alt="Build" />
  <a href="https://www.npmjs.com/package/greenhouse-react-ui"><img src="https://img.shields.io/npm/v/greenhouse-react-ui" alt="npm" /></a>
  <a href="https://github.com/kirandash/greenhouse-react-ui/blob/master/LICENSE"><img src="https://img.shields.io/github/license/kirandash/greenhouse-react-ui" alt="MIT License" /></a>
</p>

## 🎯 Mission

Build a light weight accessible component library ready to be used out of the
box for building your next awesome react project.

## 🚀 Usage

Install

```sh
npm i greenhouse-react-ui
```

Inside `tailwind.config.js`

```js
const greenhouse = require('greenhouse-react-ui/config')
module.exports = greenhouse({
	purge: [],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
})
```

Then place `GreenHouse` at the root of your project (the order doesn't matter,
as long as your application is inside).

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GreenHouse } from 'greenhouse-react-ui'

ReactDOM.render(
	<GreenHouse>
		<App />
	</GreenHouse>,
	document.getElementById('root'),
)
```

Use components inside your project

```js
import { Button } from 'greenhouse-react-ui'

function App() {
	return <Button>Hi there!</Button>
}

export default App
```

## 🔌 Contributing

- Fork
- Clone
- `npm install`
- `npm run storybook`

It will start a local server at `localhost:6006` with all components rendered.

`git commit` to commit your changes

`git push` will trigger prettier format check, linting, audit and build.


## 🙏 Support

Please ⭐️ star this project and share it with others to show your support. [Follow me](https://github.com/kirandash) ❤️ for updates on future projects and tutorials!
