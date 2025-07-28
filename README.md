# Demo of Font Awesome SVG Core plugins and omitting pseudo-elements

This demo follows the documentation on fontawesome.com about [SVG Core plugins](https://docs.fontawesome.com/apis/javascript/plugins), and [pseudo-elements](https://docs.fontawesome.com/web/add-icons/pseudo-elements).

# Running the Demo

```
npm install
npm run build
npx serve
```

Then open your browser to port indicated by the `serve` command.

It will show some icons.

When viewed in Safari 15, it will not produce the error shown in GitHub issue [FortAwesome/Font-Awesome#20272](https://github.com/FortAwesome/Font-Awesome/issues/20727), because the bundle will not include the pseudo-elements code.

# Choosing Plugins

The key here is to omit the `PseudoElements` plugin from the SVG Core plugins used in the build.

That is only a viable workaround if you're not using pseudo-elements for Font Awesome SVG/JS in your project. By default, they are not enabled in the `FontAwesomeConfig`.
So unless you know that you do need them, then probaly you aren't using them anyway.

To check whether they are enabled in your project, from the JavaScript console, run:

```javascript
FontAwesomeConfig.searchPseudoElements
```

If `false`, then you do not have pseud-elements enable anyway, which means your project does not use the `PseudoElements` plugin, and it is safe to omit it from the build.

If `true`, then you project has this feature _enabled_, so you probably shouldn't omit the `PseudoElements` plugin. However, if you've enabled the feature, but haven't actually used any pseudo-elements for SVG/JS icons in your project, then you can both disable the feature and safely omit the plugin from the build.

# Reproduce the Issue

To reproduce the issue, uncomment the code in `src/fontawesome.js`:

In the `import` at the top, uncomment this:
```javascript
  // PseudoElements,
```

Below, comment out this line:
```javascript
  const api = register([InjectCSS, ReplaceElements]);
```

And uncomment this one:
```javascript
  //const api = register([InjectCSS, ReplaceElements, PseudoElements]);
```

Then run the build again:
```
npm run build
```

View it in a browser. In a recent browser, the star icon will render as a pseudo-element. In Safari 15, it will produce the error shown in the GitHub issue.
