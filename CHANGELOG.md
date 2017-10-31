# 🌲Evergreen Changelog 📚

The Changelog contains items that are finished, and initially appear in the Roadmap.

### October 31, 2017, Multiple packages have been implemented

I haven't had enough time to properly maintain the ROADMAP and Changelog.
Internally we have been implementing Evergreen at Segment for parts of our app.
The packages that have been implemented since September 4 are:

* `evergreen-badges` [#17](https://github.com/segmentio/evergreen/pull/17)
* `evergreen-text-input` [#19](https://github.com/segmentio/evergreen/pull/19)
* `evergreen-portal` [#25](https://github.com/segmentio/evergreen/pull/25)
* `evergreen-popover` [#25](https://github.com/segmentio/evergreen/pull/25)
* `evergreen-textarea` [#26](https://github.com/segmentio/evergreen/pull/26)
* `evergreen-shared-styles` [#26](https://github.com/segmentio/evergreen/pull/26)
* `evergreen-autocomplete`[#33](https://github.com/segmentio/evergreen/pull/33)
* `evergreen-combobox` [#36](https://github.com/segmentio/evergreen/pull/36)
* [x] Storybook with examples
* [x] React 16

### September 4, 2017, Starting on Button

`evergreen-layers` is implemented, documentation is missing besides Storybook.
I haven't pushed it live yet with Lerna onto npm.
Hoping to do this after I publish some Buttons first.

* [x] Create a issue outline ([#8](https://github.com/segmentio/evergreen/issues/8))  , and implement `evergreen-buttons`

### August 30, 2017, Building out Layers

Colors and Typography are implemented, there still needs to be more documentation.
There are more components needed to actually make it easy to create the documentation.
So I am leaving that for later.

The following components to tackle are Pane and Card in `evergreen-layers`.
I think that is better than `evergreen-pane` and `evergreen-card` separately.

* [x] Create a issue ([#8](https://github.com/segmentio/evergreen/issues/8)), and implement `evergreen-layers`

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
