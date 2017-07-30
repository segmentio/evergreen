# Evergreen

> React UI Library


## Getting Started



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

## Babel configuration

This repo uses a central babel configuration in `.babelrc` with:

- `babel-preset-es2015`
- `babel-preset-react`
- `babel-preset-stage-0`
