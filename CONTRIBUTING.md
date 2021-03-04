## Contributing to Evergreen

### 🍴 Step 1. Fork this repository

In order to contribute to Evergreen, you need to fork this repo, and develop on your own local clone.

If you don't know how to do so, follow this [guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)!

### 📖 Step 2. Get storybook up and running

First, move into your local cloned repository with the help of `cd evergreen`, after that install your `node_modules` with:

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

Now you can visit `http://localhost:8000/` in your browser.

Documentation code is under the `docs` directory. A big portion of these docs are written in MDX, if you've never used MDX before, check out these [docs](https://mdxjs.com/getting-started).

### 🧐 Step 4. Testing your code

Before committing test your code with:

```
yarn test
```

### 🏆 Step 5. Making your pull request

Once you're done with making your changes, push everything to your local repository's branch.

From here, you can open up a pull request from your forked repository's branch into `segmentio/evergreen`'s `master` branch.

In your PR description, explain the changes you made, why you made them, how to test them, and anything that might be a point of interest.

Once you create your PR, it will be reviewed and hopefully merged quickly!

### 🥂 Step 6. Pat yourself on the back

Congrats, you're officially an Evergreen contributor!
