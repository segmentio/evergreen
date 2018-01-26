# 🌲 Evergreen

[![Build Status](https://circleci.com/gh/segmentio/evergreen/tree/master.svg?style=svg)](https://circleci.com/gh/segmentio/evergreen/tree/master)

> React UI Kit by [Segment](https://segment.com/)

* React 16
* [View Live Storybook](https://segmentio.github.io/evergreen/)
* Presentational React components
* Powerful component API with [ui-box](https://github.com/segmentio/ui-box)
* Dedicated UI Development Environment with [React storybook](https://storybook.js.org/)
* Easy adoption because of CSS-in-JS
* [Lerna](https://lernajs.io/) mono-repo
* Interested in Evergreen? [Come work for Segment!](https://segment.com/jobs/)

## Core values of 🌲 Evergreen

**Evergreen is built on the belief that you can never predict all future requirements,
only prepare for it.** Instead of creating fixed configurations that work today, Evergreen promotes building systems that anticipate new and changing design requirements.

**Evergreen is built on the belief that things should work out of the box with smart defaults, but also offer full control when needed.** For example, Evergreen uses CSS-in-JS and builds on top of the Box component in [ui-box](https://github.com/segmentio/ui-box).

**Evergreen is built on the belief that using Evergreen and contributing to Evergreen should be a pleasant experience.** We prioritize documentation and all the tools for a solid developer experience. We advocate respect and inclusivity in our writings and interactions.

## Install and use components 🔓

🌲 Evergreen is a mono-repo, which means it is built out of multiple packages.
Most packages will contain React components, to start using them in your React projects
you have to install them one by one.

For example, getting the button component will require you to install `evergreen-buttons`:

```
$ yarn add evergreen-buttons
```

A working version, assuming you are using something like [Create React App](https://github.com/facebookincubator/create-react-app),
might look like this:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'evergreen-buttons'

ReactDOM.render(
  <Button>I am using 🌲Evergreen!</Button>,
  document.getElementById('root')
)
```

## A list of all packages 📦

Most packages export a React component as the default export.
Some packages export multiple components.
Some packages export just a Javascript object.

Please see the [ROADMAP.md](./ROADMAP.md) to better understand priorities.

| Package                       | Description                |
| ----------------------------- | -------------------------- |
| `evergreen-colors`            | Color system object        |
| `evergreen-color-utils`       | Color utils                |
| `evergreen-shared-styles`     | Shared styles utils        |
| `evergreen-typography`        | typography components      |
| `evergreen-layers`            | Pane, Card and styling     |
| `evergreen-buttons`           | Button components          |
| `evergreen-icons`             | Icon components            |
| `evergreen-autocomplete`      | Autocomplete components    |
| `evergreen-combobox`          | Combobox components        |
| `evergreen-badges`            | Badge components           |
| `evergreen-select`            | Select component           |
| `evergreen-popover`           | Popover component          |
| `evergreen-portal`            | Portal component           |
| `evergreen-text-input`        | TextInput component        |
| `evergreen-textarea`          | Textarea component         |
| `evergreen-checkbox`          | Checkbox component         |
| `evergreen-tabs`              | Tabs component             |
| `evergreen-avatar`            | Avatar component           |
| `evergreen-tooltip`           | Tooltip component          |
| `evergreen-image`             | Image component            |
| `evergreen-segmented-control` | SegmentedControl component |
| `evergreen-spinner`           | Loading Spinner component  |
| `evergreen-search-input`      | SearchInput component      |
| `evergreen-table`             | Table building blocks      |
| `evergreen-side-sheet`        | SideSheet component        |
| `evergreen-radio`             | Radio component            |
| `evergreen-dialog`            | Dialog component           |
| `evergreen-corner-dialog`     | CornerDialog component     |
| `evergreen-alert`             | Alert component            |
| `evergreen-select-menu`       | SelectMenu component       |
| `evergreen-file-picker`       | FilePicker component       |

## Running the project 🏃🏻🏃🏾‍

### Step 1. Configuring your editor ⚙

If you are using Atom make sure to use the [`prettier-atom`](https://atom.io/packages/prettier-atom) package.

Also make sure to install the [`linter`](https://github.com/AtomLinter/linter) and [`linter-xo`](https://github.com/sindresorhus/atom-linter-xo) packages in Atom.

All the configuration for prettier and xo is in the project.
You shouldn't have to configure things separately, please file a issue if there is a problem.

### Step 2. Get storybook up and running 📖

To actually start seeing the components you have to run React Storybook.
To do that you have to bootstrap the Lerna project first, simply follow:

```
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
Remember to use `yarn bootstrap`, if you are not running `yarn dev`.

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
yarn create-package evergreen-utils
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
yarn create-package:components evergreen-typography Text Heading
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

## Creating new scripts/tools

If you want to add a script to the `tools` directory, make sure to use `babel-node`
which comes with `babel-cli` — a dev dependency.

## Contributors 🎉

We will add you to the list if you make any contribution!

* Jeroen Ransijn
* Roland Warmerdam

This project is maintained by [Segment](https://segment.com/)

Please take a look at [CONTRIBUTING.md](./CONTRIBUTING.md) and [ROADMAP.md](./ROADMAP.md) to better understand what to work on.

## Respect earns Respect 👏

Please respect our [CODE_OF_CONDUCT](./CODE_OF_CONDUCT.md), in short:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

## License

Evergreen is released under the MIT license.

Copyright © 2017 Segment.io, Inc.
