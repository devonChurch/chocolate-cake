# Chocolate Cake 🍫 🎂 🍰 🍨 😋 😵

[![npm version](https://badge.fury.io/js/chocolate-cake.svg)](https://badge.fury.io/js/chocolate-cake)

[![typescript](https://user-images.githubusercontent.com/15273233/40872275-a61d4660-669f-11e8-8edf-860f1947759f.png)](https://www.typescriptlang.org/) [![code style prettier](https://img.shields.io/badge/code_style-prettier-FF69A4.svg)](https://prettier.io/) [![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## What 🤔

A utility that converts standard Javascript `numbers` into their spoken word `string` based representations.

The system recursively iterates through a supplied `number` and builds up corresponding `string` that has accurate punctuation and formatting for direct integration into your application.

**For example**, `1036` would be converted into `"One thousand and thirty six"`.

## Why 🤓

Creating _friendlier_ and more intuitive user interfaces is increasingly critical in producing an inclusive application. Utilities like this are _"delight"_ based enhancements that add extra polish to a given scenario.

## Demo 😎

Try out the [CodePen demo](https://codepen.io/DevonChurch/pen/wRemEe?editors=0010) or easily experiment inside your own application with the [Installation](https://github.com/devonChurch/chocolate-cake#installation-) and [Usage](https://github.com/devonChurch/chocolate-cake#usage-) instructions below.

![chocolate-cake-standard](https://user-images.githubusercontent.com/15273233/50428372-1c4c2f80-091c-11e9-96fe-f0efb172d723.gif)

## Installation 🤖

Install the module from **NPM** .

```
npm install --save chocolate-cake
```

Import the module into your project.

```javascript
import chocolateCake from "chocolate-cake";
```

## Usage 💾

Simply pass in a `number` and get back the respective `string`.

```javascript
chocolateCake(1036); // One thousand and thirty six
```

### Negative Values 🎊

In release `v1.1.0` we have added support for negative values.

![chocolate-cake-negative](https://user-images.githubusercontent.com/15273233/50438255-08232500-0952-11e9-8b6b-0954c46cf1ed.gif)

```javascript
chocolateCake(-3210); // Negative three thousand, two hundred and ten
```

### Decimal Values 🎉

In release `v1.1.0` we have added support for decimal values.

![chocolate-cake-decimal](https://user-images.githubusercontent.com/15273233/50438254-078a8e80-0952-11e9-8238-6bdf9e164a1e.gif)

```javascript
chocolateCake(12.34); // Twelve point three, four
```

### Typescript 👍

This utility also supports Typescript

![chocolate-cake-typescript](https://user-images.githubusercontent.com/15273233/50428371-1c4c2f80-091c-11e9-942f-99943d0148cb.png)

### Limitations 🎛 🎚

This utility can convert values up-to-the _trillions_ increment.

```javascript
chocolateCake(123456789012345); // One hundred and twenty three trillion, four hundred and fifty six billion, seven hundred and eighty nine million, twelve thousand, three hundred and forty five
```

## License 📜

MIT
