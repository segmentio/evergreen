# 🌲Evergreen Roadmap 🛣️

We'll try as much as possible to plan ahead.
The process for building something should try and follow:

* Add item to Roadmap
* Create a issue outline
* Create a PR, reference issue in PR
* Merge into master
* Move item from ROADMAP into CHANGELOG, and write any notes

#### Low scope docs in Storybook

The second part is to create the components that are required to build out documentation. A highlighted CodeBlock component, and maybe some useful helper components / utilities in a evergreen-docs package. I am thinking evergreen-docs will contain some Readme Markdown rendered of some sort.

#### Dedicated documentation website

The third part is to create documentation website, similar to how AtlasKit approaches this. This will require a bigger set of components and resources to be available.

#### Design documentation (long term goal)

The last part is to create design documentation. That will be primarily for designers, and is more focused around what is the right way to use a component or patter, instead of showing you how to implement it.

#### Storybook with examples

The first part is to have a Storybook live, which is what you are describing. This will contain simply the component use cases needed for developing, and is lacking as a form of documentation. It won't have code blocks containing usage examples, or property documentation.

This should be fairly straightforward to implement if the packages are actually published (they are no yet at the moment). If that is the case, we can build a static storybook and push that to the gh-pages branch. This might require something like Circle for CI, which I am not very familiar with.
