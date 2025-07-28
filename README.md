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
