# Demo Helper

## [Deprecated Warnings]

demo-helper was originally designed for holding new Electrode OSS component common files. The package has been deprecated because we moved files to [Electrode Generators.](https://github.com/electrode-io/electrode/tree/master/packages/generator-electrode)

To checkout the latest Electrode OSS Component, please follow the instructions [here.](https://docs.electrode.io/chapter1/quick-start/start-with-component.html)

------------------------------------------------------------------

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
