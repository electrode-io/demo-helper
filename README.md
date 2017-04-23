# Demo Helper

demo-helper is a module for holding [discovery-components](https://github.com/didi0613/discovery-component) common files.

## Discovery Component

discovery-component is a component playground for developing & demoing electrode components. It uses Lerna to manage multiple related electrode archetype components.

## Installation
The easiest way to use demo-helper is to install it from NPM and include it in your own React build process (using Browserify, Webpack, etc).

```
npm install electrode-demo-helper --save
```

## Usage

Exporting default configuration file:

```
const DemoHelper = require("electrode-demo-helper/config/default");
module.exports = DemoHelper;
```
