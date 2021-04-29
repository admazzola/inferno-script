

let acorn = require("acorn");
let escodegen = require("escodegen")

let ast = acorn.parse("1 + 1", {ecmaVersion: 2020})

console.log(ast);

let outputCode = escodegen.generate( ast );

console.log(outputCode);
