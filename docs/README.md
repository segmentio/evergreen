# Evergreen Docs

The following gives some information about getting the Evergreen docs site up and running locally.

# Spinning up the dev server

To get started locally, run the following commands:

```
$ (docs): yarn install
$ (docs): yarn dev
```

Then, navigate to your browser and go to: `localhost:3000`.

# Adding a new documentation page

Add an entry under the corresponding header in `InformationArchitecture.ts` - you can think of this as the "database" for all status relating to Evergreen components and documentation.

From there, the directory structure in `docs/documentation/` contains the `.mdx` files which mirror the route structure for the docs site.

Any thumbnail images or static assets should be added in the `public/` directory, as they'll be picked up by Next.js.

# A note about hot-reloading / fast-refresh

Changes made to any of the UI components that make up `docs/` (i.e. anything with a `ts` or `tsx` extension) will be picked up by Next.js automatically.
However, if you make changes to any `.mdx`, you should refresh the page that you're looking at.
