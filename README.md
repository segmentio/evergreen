# 🌲Evergreen

> React UI Kit by [Segment](https://segment.com/)

* React 16
* [View Live Storybook](https://segmentio.github.io/evergreen/)
* Presentational React components
* Powerful component API with [ui-box](https://github.com/segmentio/ui-box)
* Dedicated UI Development Environment with [React storybook](https://storybook.js.org/)
* Easy adoption because of CSS-in-JS
* [Lerna](https://lernajs.io/) mono-repo
* Interested in Evergreen? [Come work for Segment!](https://segment.com/jobs/)

## Core values of 🌲Evergreen

**Evergreen is built on the belief that you can never predict all future requirements,
only prepare for it.** Instead of creating fixed configurations that work today, Evergreen promotes building systems that anticipate new and changing design requirements.

**Evergreen is built on the belief that things should work out of the box with smart defaults, but also offer full control when needed.** For example, Evergreen uses CSS-in-JS and builds on top of the Box component in [ui-box](https://github.com/segmentio/ui-box).

**Evergreen is built on the belief that using Evergreen and contributing to Evergreen should be a pleasant experience.** We prioritize documentation and all the tools for a  solid developer experience. We advocate respect and inclusivity in our writings and interactions.

## Install and use components 🔓

🌲Evergreen is a mono-repo, which means it is built out of multiple packages.
Most packages will contain React components, to start using them in your React projects
you have to install them one by one.

For example, getting the button component will require you to install `evergreen-buttons`:

```
$ yarn install evergreen-buttons
```

A working version, assuming you are using something like [Create React App](https://github.com/facebookincubator/create-react-app),
might look like this:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'evergreen-buttons'

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
| `evergreen-colors`                 | ✅ Good            | Color system object        |
| `evergreen-color-utils`            | ✅ Good            | Color utils                |
| `evergreen-shared-styles`          | ✅ Lacking         | Shared styles utils        |
| `evergreen-typography`             | ✅ OK              | typography components      |
| `evergreen-layers`                 | ✅ Good            | Pane, Card and styling     |
| `evergreen-buttons`                | ✅ Good            | Button components          |
| `evergreen-icons`                  | ✅ Lacking         | Icon components            |
| `evergreen-autocomplete`           | ✅ Good            | Autocomplete components    |
| `evergreen-combobox`               | ✅ Good            | Combobox components        |
| `evergreen-badges`                 | ✅ Good            | Badge components           |
| `evergreen-select`                 | ✅ Good            | Select component           |
| `evergreen-popover`                | ✅ Good            | Popover component          |
| `evergreen-portal`                 | ✅ Good            | Portal component           |
| `evergreen-text-input`             | ✅ Good            | TextInput component        |
| `evergreen-textarea`               | ✅ Good            | Textarea component         |
| `evergreen-checkbox`               | ✅ Good            | Checkbox component         |
| `evergreen-tabs`                   | ✅ Good            | Tabs component             |
| `evergreen-avatar`                 | ✅ Good            | Avatar component           |
| `evergreen-tooltip`                | ✅ Good            | Tooltip component          |
| `evergreen-image`                  | ✅ Good            | Image component            |
| `evergreen-segmented-control`      | ✅ Good            | SegmentedControl component |
| `evergreen-spinner`                | ✅ Good            | Loading Spinner component  |
| `evergreen-search-input`           | ✅ Good            | SearchInput component      |
| `evergreen-table`                  | ✅ Good            | table component            |
| `evergreen-side-sheet`             | ✅ Good            | SideSheet component        |
| `evergreen-radio`                  | ✅ Good            | Radio component            |
| `evergreen-dialog`                 | ✅ Good            | Dialog component           |
| `evergreen-corner-dialog`          | ✅ Good            | CornerDialog component     |
| `evergreen-alert`                  | ✅ Good            | Alert component            |
| `evergreen-code-block`             | Needs Planning     | CodeBlock component        |


## Running the project 🏃🏻🏃🏾‍

### Step 1. Configuring your editor ⚙

If you are using Atom make sure to use the [`prettier-atom`](https://atom.io/packages/prettier-atom) package,
and enable the `ESLint integration` option.

Also make sure to install the [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) package in Atom.

All the configuration for prettier and eslint is in the project.
You shouldn't have to configure things separately,
please file a issue if there is a problem.

### Step 2. Get storybook up and running 📖

To actually start seeing the components you have to run React Storybook.
To do that you have to bootstrap the Lerna project first, simply follow:

```
$ yarn install
$ yarn bootstrap
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

### `yarn deploy-storybook`

This will build a static version of the storybook and deploys it onto the `gh-pages`
 (GitHub pages) branch. This will make it available on [https://segmentio.github.io/evergreen](https://segmentio.github.io/evergreen).

There still needs to be some work done to make this happen with Circle CI (continuous integration).

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
