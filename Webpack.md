# Webpack

It bundles your code/assets together, and also manages dependencies. Combine code (CSS, JS, …). 

webpack_require helps webpack to track what is required.

```
npm install --save-dev webpack webpack-cli
```

In package.json, if you add a config file.
```
"scripts": {
    "start": "webpack --config webpack.config.js"
}
```

That config file allow you to manage input, output, mode or source maps generation.
```
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
};
```

In this case, "webpack magic" bundle is located at folder **dist** of your project, inside **main.js** file

## Loaders