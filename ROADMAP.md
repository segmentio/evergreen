# 🌲Evergreen Roadmap 🛣️

We'll try as much as possible to plan ahead.
Since some of the conversation happens internally, this document
might go stale from time-to-time.

## Is theming support on the roadmap?

This project is originally build to support the development of product at Segment. This is also the reason theming is not our short term priority. It is on our longer term priority list and hopefully will be supported later in 2018. Expect a clearer roadmap available before that.

## How does that roadmap look like?

We have been thinking about theming and doing research on theming for a while now. There are still higher priority items for us to tackle inside of Evergreen and internally at Segment before we can making theming a priority.

### Milestones

Roughly I see this is as the milestones to achieve theming within Evergreen:

* Work through dependencies for theming layer
* Centralize all theming information (privately)
* Expose a theming provider to consumers. (public)

### Work through dependencies for theming layer

Before we can start working on theming itself, we have to improve some of the systems inside Evergreen — primarily the color system and some type systems. The following items come to mind:

* Color System overhaul
* Typography tweaks
* 100% documentation for public components and API stability

### Centralize all theming information (privately)

On the short term we are tackling the color system and that should be one of the first steps to enabling a theming layer. Once we got those dependencies figured out we can start working towards centralizing all theme related information that is currently scattered around components. This would give us a centralized place that determines the theme of Evergreen and serve as a basis to start exposing this through a `ThemeProvider` of some sorts.

### Expose a theming provider to consumers. (public)

After we have created an internal API for theming the next step is to expose this through a `ThemeProvider` interface. Material UI and Mineral UI are good examples of how something like that might look.

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
