This config intends to linting Typescript code. It include `@stylistic/eslint-plugin`, `eslint-plugin-import` and `typescript-eslint` packages.
Config intends to be used with FlatConfig format of ESLint 9 and above.

## Installation

```bash
# inside your project's working tree
npm install @8ar8az/eslint-config --save-dev
```

In your project `eslint.config.js` file:

```js
import baseConfig from '@8ar8az/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  extends: [baseConfig],

  // more config...
});
```
