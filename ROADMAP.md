# 🌲Evergreen Roadmap 🛣️

We'll try as much as possible to plan ahead, and label each update with a date.

### August 30, 2017, Building out Layers

Colors and Typography are implemented, there still needs to be more documentation.
There are more components needed to actually make it easy to create the documentation.
So I am leaving that for later.

The following components to tackle are Pane and Card in `evergreen-layers`.
I think that is better than `evergreen-pane` and `evergreen-card` separately.

* [x] Create a issue, and implement `evergreen-layers`

### July 30, 2017, Setting up project

I, Jeroen Ransijn, started this project and tried to set up all the plumbing
before actually writing the component. That includes:

* Lernajs
* Linting
* Scaffolding
* Storybook
* Documentation
* Guides and templates

The goal is to remove all friction in creating components.
In the immediate term I hope to work on the following items:

* [x] Finish first pass of Sketch design and mention here
* [x] Finalize my color system generator
* [x] Create a issue ([#1](https://github.com/segmentio/evergreen/issues/1)), and implement `evergreen-color`
* [x] Create a issue ([#2](https://github.com/segmentio/evergreen/issues/2)), and implement `evergreen-typography`

Having a solid design reference and colors + typography defined should make it
fairly straightforward to start copying over and creating components.

Segment has internal UI libraries (React UI Library and Element)
that will contains a lot of the foundation for 🌲Evergreen.
