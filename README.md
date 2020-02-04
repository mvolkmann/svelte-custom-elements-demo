# svelte-custom-elements-demo

This demonstrates defining custom elements from Svelte components
and using them in a non-Svelte web app (React in this case).

## custom-elements directory

This directory defines the Svelte components `Greet` and `Counter`.
Both specify `<svelte:options tag={null} />`.
Using `null` instead of a name allows web apps that use the
generated custom elements to define them with any name they choose.

These components are exported from `src/custom-elements.js`
so the build process doesn't remove them in tree shaking.

The `package.json` file here defines the npm script `custom-elements`
which runs Rollup using `rollup.ce-config.js`.
This Rollup config uses `src/custom-elements.js` for its input
and passes the `customElement: true` prop to the `svelte` plugin.

Running `npm run custom-elements` produces the file `public/build/bundle.js`.
The hope is that this file will contain
JavaScript class definitions for `Counter` and `Greet` and
that a non-Svelte web app can import these classes and
use them to define custom elements with something like
`customElements.define('my-counter', Counter);` and
`customElements.define('my-greet', Greet);`.

Currently the generated `bundle.js` does not export any class definitions,
so this doesn't work yet.

## my-react-app

This directory defines a simple React app that was created using
`create-react-app`.
Eventually I hope to modify this to use the two custom elements
created from the Svelte components `Counter` and `Greet`.
