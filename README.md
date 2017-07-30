# Evergreen

> React UI Library mono-repo

## Getting Started

### Step 1. Configuring your editor

If you are using Atom make sure to use the `prettier-atom` package,
and enable the `ESLint integration` option.

Also make sure to install the `linter-eslint` package in Atom.

All the configuration for prettier and eslint is in the project.
You shouldn't have to configure things separately,
please file a issue if there is a problem.

### Step 2. Run storybook

...see scripts

## Scripts explained

Inside the `package.json` there are a bunch of scripts that this repo uses
to run the project in development and build the project.

Below you can read a description of each script.

### `npm run build:watch`

`lerna exec` is used to run babel (babel-cli) on all the packages.
This makes the packages available within packages.
Each package will get a `lib` directory, which contains the build.
Remember to use `npm run lerna-bootstrap`.

### `npm run storybook`

This will run react storybook, a React development environment that finds
all files in your packages directory that match `*.stories.js`.


### `npm run create-package:component`

This command scaffolds a package with a React component boilerplate.
You should use it as such:

```
$ npm run create-package:component ComponentName
```

## Babel configuration

This repo uses a central babel configuration in `.babelrc` with:

- `babel-preset-es2015`
- `babel-preset-react`
- `babel-preset-stage-0`


## Creating new scripts/tools

If you want to add a script to the `tools` directory, make sure to use `babel-node`
which comes with `babel-cli` — a dev dependency.


## Maintainers

- Jeroen Ransijn

This project is maintained by [Segment](https://segment.com/)

## License

MIT
