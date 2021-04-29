

let acorn = require("acorn");
let escodegen = require("escodegen")


let inputCodeString = "1 + 1"

let ast = acorn.parse(inputCodeString, {ecmaVersion: 2020})

console.log(ast);

//do cleanup on the ast here to remove dangerous elements
/*
Unwanted: 

Alert,
Dom Editing
window re-routing   (remove access from window and document) 


*/


let outputCode = escodegen.generate( ast );

console.log(outputCode);
