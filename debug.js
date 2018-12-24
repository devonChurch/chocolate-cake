require("ts-node").register();
const chocolateCake = require("./src/index").default;

console.log(chocolateCake(100000));
