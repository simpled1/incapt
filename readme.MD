# incapt

A simple package for handling user input

# Install

```npm
npm install incapt
```

# Usage

```javascript
const incapt = require("incapt");
const { I, C } = incapt;

async function run() {
  // Example 1
  const a = await I("What is your name? ");
  const b = await I("What is your age? ");
  console.log(`My name is ${a}. I am ${b} years old`);

  // Example 2
  const x = await I("First number: ");
  const y = await I("Second number: ");
  console.log(`Sum is ${+x + +y}`);

  // Example 3 (using thenables)
  await I("What is your hobbby? ").then((val) =>
    console.log(`My hobby is ${val}.`)
  );

  // Close the input interface
  C();
}

run()
// All of the input session should happen before C() call
```

# options

You can also change the font color, underline, italicized, strikeThrough, add bgColor, change prompt color and change the marker color as well.

###### default styling

![This is the default options screenshot](/assets/default.png "with default styling")

###### custom styling

![This is the custom styling screenshots](/assets/options.png "with custom styling")

The pinkish dot on the left is styled using the *mc* property, the prompt color is styled in green using *pc* property, the output is in italic using *mod* property, the bgColor is in white using *bg* property and finally the font color is in cyan using the *c* property

# Available options

###### color

```javascript
"cyan";
"green";
"magenta";
"blue";
"red";
"yellow";
"white";
// color can be used on pc, mc and c property
```

###### bgColor

```javascript
"bgCyan";
"bgGreen";
"bgMagenta";
"bgBlue";
"bgRed";
"bgYellow";
"bgWhite";
// bgColor can only be used on the bg property
```

###### modifier

```javascript
"italic";
"underline";
"strikethrough";
// modifier can only be used on the mod property
```
