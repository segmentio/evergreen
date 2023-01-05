# 🎉 Thanks for taking the time to contribute to 🌲 Evergreen! 🎉

It is highly appreciated that you take the time to help improve 🌲 Evergreen.

Please see our [issue template](ISSUE_TEMPLATE.md) for issues specifically.

## Contributing to Evergreen

### 🍴 Step 1. Fork this repository

In order to contribute to Evergreen, you need to fork this repo, and develop on your own local clone.

If you don't know how to do so, follow this [guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)!

### 📖 Step 2. Get storybook up and running

First, move into your local cloned repository with the help of `cd`, after that install your `node_modules` with:

```
$ yarn
```

To actually start seeing the components you have to run React Storybook with the command:

```
$ yarn dev
```

Now go to `http://localhost:6006` in your browser.

### 🛠 Step 3. Make your change

Now you can start developing! All of the components are under the `src` directory and associated code changes will automatically be reflected in StoryBook.

If necessary, we encourage you to update the documentation so Evergreen users will be aware of your new features/changes.

In order to run the documentation page locally, run these commands in your terminal:

```
$ yarn build
$ cd docs
$ yarn install
$ yarn dev
```

Now you can visit `http://localhost:3000/` in your browser.

Documentation code is under the `docs` directory. A big portion of these docs are written in MDX, if you've never used MDX before, check out these [docs](https://mdxjs.com/getting-started).

### 🏆 Step 4. Making your pull request

Once you're done with making your changes, push everything to your local repository's branch.

From here, you can open up a pull request from your forked repository's branch into `segmentio/evergreen`'s `master` branch.

In your PR description, explain the changes you made, why you made them, how to test them, and anything that might be a point of interest.

Once you create your PR, it will be reviewed and hopefully merged quickly!

### 🥂 Step 5. Pat yourself on the back

Congrats, you're officially an Evergreen contributor!

## 🤓 Scripts explained

Inside the `package.json` there are a bunch of scripts that this repo uses
to run the project in development and to build the project.

Below you can read a description of each script.

- `yarn dev`: Starts the development React Storybook.

- `yarn test`: Lints the JavaScript files using eslint and then runs the unit tests using jest.

- `yarn build`: Builds all of the JavaScript files using Babel.

- `yarn clean`: removes all untracked files (`git clean -Xdf`).

- `yarn release`: Releases new version of Evergreen (requires MFA via npm as a collaborator)

- `yarn create-package`: This command scaffolds a package with no specific boilerplate. It's useful for creating utilities.

For the following command:

```
yarn create-package utils
```

The following file tree will be generated:

```
/src/utils
├── /src/
└── index.js
```

- `yarn create-package:components`: This command scaffolds a package with React component(s) boilerplate.

You can pass one or more components to this command.

For the following command:

```
yarn create-package:components typography Text Heading
```

The following file tree will be generated:

```
/src/typography
├── /src/
|   │── Text.js
|   └── Heading.js
├── /stories/
│   └── index.stories.js
└── index.js
```

## Creating new components

Preferably we like to introduce new components by following these steps.

### Submit an issue

To better understand if your component is wanted by 🌲 Evergreen,
submit a component request first as an issue.
Explain why you want the component.
Potentially include a design or component API.

**Smaller atoms and primitives are favored over bigger complex components.**

### Design

This can be a wireframe or high fidelity mockup.
Include this in your issue if possible.

We hope to formalize the 🌲 Evergreen design language more as we go.
As a general rule of thumb try to follow these constraints:

- Use `color` and the `typography` components.
- 8px soft grid, (4px under 40px is also good).
- Don't force line heights on grid if it looks poorly.

### Component API

- Write down how you would like to use this component.
- Write down the component API and prop types.
- Try to use `ui-box` for your components.
- Try to make all heights possible.
- Base the text style (font size) on the height.

Include this in your issue if possible.

## Write the code and storybook

Use a scaffolding scripts to bootstrap your component:

```
$ yarn create-package:components package-name ComponentName
```

Make sure to write stories to document your component.

## Submit a PR when you are ready

Finally submit a PR with your new feature or component.

## Celebrate! 🎉

Thank you for your contribution to Evergreen!
