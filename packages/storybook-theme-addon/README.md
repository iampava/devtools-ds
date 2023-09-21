# @iampava-devtools-ds/storybook-theme-addon

The theme add-on adds a global theme selection button to Storybook.
It uses a decorator to add a browser theme provider to each story.

## Installation

```sh
npm i @iampava-devtools-ds/storybook-theme-addon
# or with yarn
yarn add @iampava-devtools-ds/storybook-theme-addon
```

```js
import ThemeSelectTool from "@iampava-devtools-ds/storybook-theme-addon";
```

## Usage

**`main.js`:**

```js
module.exports = {
  addons: ["@iampava-devtools-ds/storybook-theme-addon"],
};
```

**`main.js`:**

```js
import { ThemeDecorator } from "@iampava-devtools-ds/storybook-theme-addon";
```
