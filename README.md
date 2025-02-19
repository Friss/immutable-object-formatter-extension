# Immutable.js Object Formatter (Chrome Extension)

Transforms Immutable JS objects to a more readable format when they are logged to the console.

Now works with Chrome Extension Manifest v3.

[Forked from mattzeunert](https://github.com/mattzeunert/immutable-object-formatter-extension)

[Install the Chrome Extension](https://chromewebstore.google.com/)\* (Currently awaiting review)

Based on [immutable-devtools](https://github.com/andrewdavey/immutable-devtools).

The Chrome extension will only work if you **enable Custom Formatters** in the DevTools settings.

### Step 1: Open DevTools settings

![](https://user-images.githubusercontent.com/1303660/36625688-48c2160e-195f-11e8-9a5f-ba9ea8553b06.png)

### Step 2: Enable custom formatters

![](https://cloud.githubusercontent.com/assets/1303660/18231278/a271ede6-72ad-11e6-8623-367f3e8eb686.png)

## How it works

The code in "/immutable-devtools" is essentially just a copy of `immutable-devtools` that is injected into the page. It also sets a flag `__ImmutableJSDevToolsFormattersInstalled` on the window to avoid installing the formatter more than once.

## Running the code locally

1. `yarn install`
2. `yarn build`
3. Load the "/extension" directory as an unpacked Chrome extension
4. Open "/test-page/index.html" to check everything looks as expected

Make sure to reload the extension after any changes.
