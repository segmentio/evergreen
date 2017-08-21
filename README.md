# 🌲Evergreen

> React UI Kit by [Segment](https://segment.com/)

* Presentational React components
* Powerful component API with [ui-box](https://github.com/segmentio/ui-box)
* Dedicated UI Development Environment with [React storybook](https://storybook.js.org/)
* Easy adoption because of CSS-in-JS
* [Lerna](https://lernajs.io/) mono-repo

## Install and use components 🔓

🌲Evergreen is a mono-repo, which means it is build out of multiple packages.
Most packages represent React components, to start using them in your React projects
you have to install them one by one.

For example getting the button:

```
$ yarn install evergreen-button
```

A working version assuming you are using something like [Create React App](https://github.com/facebookincubator/create-react-app)
might look like this:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'evergreen-button'

ReactDOM.render(
  <Button>I am using 🌲Evergreen!</Button>,
  document.getElementById('root'))
```

## A list of all packages 📦

Most packages export a React component as the default export.
Some packages export multiple components.
Some packages export just a Javascript object.

Please see the [ROADMAP.md](./ROADMAP.md) to better understand priorities.

| Package                            | Status             | Exports                    |
|------------------------------------|--------------------|----------------------------|
| `evergreen-typography`             | Needs Planning     | typography components      |
| `evergreen-icons`                  | Needs Planning     | icon components            |
| `evergreen-card`                   | Needs Planning     | Card component             |
| `evergreen-button`                 | Needs Planning     | Button component           |
| `evergreen-tabs`                   | Needs Planning     | Tabs component             |
| `evergreen-menu`                   | Needs Planning     | Menu component             |
| `evergreen-avatar`                 | Needs Planning     | Avatar component           |
| `evergreen-callout`                | Needs Planning     | Callout component          |
| `evergreen-badge`                  | Needs Planning     | Badge component            |
| `evergreen-select`                 | Needs Planning     | Select component           |
| `evergreen-segmented-control`      | Needs Planning     | SegmentedControl component |
| `evergreen-tooltip`                | Needs Planning     | Tooltip component          |
| `evergreen-popover`                | Needs Planning     | Popover component          |
| `evergreen-portal`                 | Needs Planning     | Portal component           |
| `evergreen-table`                  | Needs Planning     | table component            |
| `evergreen-side-sheet`             | Needs Planning     | SideSheet component        |
| `evergreen-bottom-sheet`           | Needs Planning     | BottomSheet component      |
| `evergreen-text-input`             | Needs Planning     | TextInput component        |
| `evergreen-textarea`               | Needs Planning     | Textarea component         |
| `evergreen-search-input`           | Needs Planning     | SearchInput component      |
| `evergreen-radio`                  | Needs Planning     | Radio component            |
| `evergreen-checkbox`               | Needs Planning     | Checkbox component         |
| `evergreen-spinner`                | Needs Planning     | Loading Spinner component  |
| `evergreen-dialog`                 | Needs Planning     | Dialog component           |
| `evergreen-corner-dialog`          | Needs Planning     | CornerDialog component     |
| `evergreen-code-block`             | Needs Planning     | CodeBlock component        |
| `evergreen-colors`                 | Needs Planning     | Color system object        |
| `evergreen-text-styles`            | Needs Planning     | Text styles object         |


## Running the project 🏃🏻🏃🏾‍♀️

### Step 1. Configuring your editor ⚙

If you are using Atom make sure to use the `prettier-atom` package,
and enable the `ESLint integration` option.

Also make sure to install the `linter-eslint` package in Atom.

All the configuration for prettier and eslint is in the project.
You shouldn't have to configure things separately,
please file a issue if there is a problem.

### Step 2. Get storybook up and running 📖

To actually start seeing the components you have to run React Storybook.
To do that you have to bootstrap the Lerna project first, simply follow:

```
$ yarn bootstrap
```

```
$ yarn dev
```

### Step 3. Learn more in the Contributing guide

Please take a look at [CONTRIBUTING.md](./CONTRIBUTING.md) and [ROADMAP.md](./ROADMAP.md) to better understand what to work on.

## Scripts explained 🤓

Inside the `package.json` there are a bunch of scripts that this repo uses
to run the project in development, and to build the project.

Below you can read a description of each script.

### `yarn bootstrap`

Cleans, installs and links dependencies. Uses `lerna bootstrap`.
This is what you need to do to before running `yarn dev`

### `yarn dev`

Starts watching the project source file and starts storybook.
It runs the following two commands `yarn build:watch & yarn storybook`.

### `yarn build:watch`

`lerna exec` is used to run babel (babel-cli) on all the packages.
This makes the packages available within packages.
Each package will get a `lib` directory, which contains the build.
Remember to use `yarn run bootstrap`, if you are not running `yarn run dev`.

### `yarn storybook`

This will run react storybook, a React development environment that finds
all files in your packages directory that match `*.stories.js`.

### `yarn create-package`

This command scaffolds a package with no specific boilerplate.
It should be useful for creating utilities.

For the following command:

```
npm run create-package evergreen-utils
```

The following file tree will be generated:

```
/packages/evergreen-utils
├── /src/
│   └── index.js
└── package.json
```


### `yarn create-package:components`

This command scaffolds a package with React component(s) boilerplate.
You can pass one or more components to this command.

For the following command:

```
npm run create-package:components evergreen-typography Text Heading
```

The following file tree will be generated:

```
/packages/evergreen-typography
├── /src/
│   │-  /components/
|   │   |── Text.js
|   │   └── Heading.js
│   └── index.js
|
├── /stories/
│   └── index.stories.js
└── package.json
```

### `yarn lint`

Uses ESLint to lint the project by the configuration found in `.eslintrc.js`.

### `yarn clean`

Remove all untracked files and removes all node_modules (using `rm -rf`).

## Babel configuration

This repo uses a central babel configuration in `.babelrc` with:

- `babel-preset-es2015`
- `babel-preset-react`
- `babel-preset-stage-0`

## Creating new scripts/tools

If you want to add a script to the `tools` directory, make sure to use `babel-node`
which comes with `babel-cli` — a dev dependency.

## Contributors 🎉

We will add you to the list if you make any contribution!

* Jeroen Ransijn

This project is maintained by [Segment](https://segment.com/)

Please take a look at [CONTRIBUTING.md](./CONTRIBUTING.md) and [ROADMAP.md](./ROADMAP.md) to better understand what to work on.

## Respect earns Respect 👏

Please respect our [CODE_OF_CONDUCT](./CODE_OF_CONDUCT.md), in short:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

## License (MIT) 🎁

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright (c) 2017 Segment.io, Inc. <friends@segment.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
