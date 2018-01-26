# 🌲Evergreen Roadmap 🛣️

We'll try as much as possible to plan ahead.
Since some of the conversation happens internally, this document
might go stale from time-to-time.

## Moving over to a single package `evergreen-ui`

After having tried a Lerna mono-repo, we found that the benefits don't outweigh the downsides. The main issues are:

* A lot of boilerplate to import components
* Keeping dependencies in sync is a pain for the consumer
* Publishing packages gets confusing

That's why we are in the progress of moving towards a single `evergreen-ui` package.

I have made [PoC codemod](https://runkit.com/jeroenr/evergreen-monorepo-codemod) to move over current projects that use Evergreen. Which mainly internal projects at Segment.

Items to tackle.

We'll rename the current package folders from `evergeen-colors` into `colors`.

## Start using the new `ui-box`

We have made a ton of progress on the underlying React primitive powered by [`ui-box`](https://github.com/segmentio/ui-box). But we haven't made the final push yet to start using it within Evergreen.

What needs to happen is

* Finalize `ui-box` v1.0.0
* Test within Evergreen and within some projects
* Publish a major version of Evergreen, hopefully in `evergreen-ui`

## Dedicated documentation website

The third part is to create documentation website, similar to how AtlasKit approaches this. This will require a bigger set of components and resources to be available.

We already made some good progress towards this goal.

## Design documentation (long term goal)

The last part is to create design documentation. That will be primarily for designers, and is more focused around what is the right way to use a component or patter, instead of showing you how to implement it.

### The process for building something should try and follow:

* Add item to Roadmap
* Create a issue outline
* Create a PR, reference issue in PR
* Merge into master
* Move item from ROADMAP into CHANGELOG, and write any notes
