# The StaticRouter DEMO for reacttraining with webpack config

> References: 
- https://reacttraining.com/react-router/web/guides/server-rendering

- https://www.jianshu.com/p/47c8e364d0bc?appinstall=1&mType=Group

- https://github.com/IrfanBaqui/react-router-v4-tutorial

# Installation

```
$ yarn
```

# Run Client
```
$ yarn start
```

# Run Server
```
$ yarn server
```

# This project is created by the steps below

## Create the project and run basic installation
```
$ create-react-app react-static-router-webpack-tutorial

$ cd react-static-router-webpack-tutorial

$ yarn add react-router-dom
```

## Additional installation

```
$ yarn add clean-webpack-plugin --dev
$ yarn add webpack-dev-middleware --dev
$ yarn add webpack-hot-middleware --dev
$ yarn add babel-loader@8.0.5
$ yarn add @babel/register
$ yarn add css-modules-require-hook
$ yarn add dom-parser
$ yarn add html-react-parser
```
> WARNING: Before install the packages above, you must check if the package need to install was already installed in the folder `node_modules`, if yes, you must add the version number as suffix, just like `babel-loader@8.0.5` above.

## Additional config in package.json
Just enable the react tag in babel for server. 
```
  "babel": {
    "presets": [
      "@babel/env",
      "@babel/react"
    ]
  }
```

## Additional config in cmrh.conf.js
Just enable the css modules for server. 
```
module.exports = {
    generateScopedName: '[name]__[local]___[hash:base64:5]',
};
```


