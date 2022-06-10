# CRA Template Default Optimized Javascript

## Optimized Default CRA Template with Popular Basic Packages, Types, Opinionated Lint, and Incorporated Prettier

Default basic [Create React App](https://github.com/facebook/create-react-app) (CRA) template that includes:

Basic Popular Packages:

- Lodash
- Axios
- Date-fns
- Eslint
- Prettier
- UUID
- Source Map Explorer
- Testing Libraries
- Web Vitals

---

Opinionated Linter based on:

- Airbnb Style Guide
- Import
- Jest w/ Formatting
- JSdoc
- JSX-a11y
- Lodash
- Promises
- React w/ Hooks
- Security
- Testing Library
- Unicorn

---

Simple Common Scripts:

- analyze: "source-map-explorer 'build/static/js/\*.js'",
- coverage: "npm test -- --coverage",
- lint: "npx eslint -c .eslintrc.json --ext .js,.jsx .",
- lint:fix: "npm run lint -- --fix"

---

IDE's Types for:

- Jest
- Lodash
- Node
- React w/ Dom
- UUID

## Usage

```bash
npx create-react-app your-project-name --template default-optimized-js
```

Or;

```bash
yarn create react-app your-project-name --template default-optimized-js
```

Cloning this repo pulls down the template only; not a bundled and configured Create React App.

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
