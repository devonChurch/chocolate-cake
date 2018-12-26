# Chocolate Cake 🍫 🎂 🍰 🍨 😋 😵

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
npm install --save fish-tacos
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

### Typescript 👍

This utility also supports Typescript

![chocolate-cake-typescript](https://user-images.githubusercontent.com/15273233/50428371-1c4c2f80-091c-11e9-942f-99943d0148cb.png)

This utility can convert values up-to-the _trillions_ increment.

```javascript
chocolateCake(123456789012345); // One hundred and twenty three trillion, four hundred and fifty six billion, seven hundred and eighty nine million, twelve thousand, three hundred and forty five
```

## License 📜

MIT
