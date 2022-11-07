import { Parser } from "expr-eval";

var parser = new Parser();
var expr = parser.parse("tan(PI / 4)");
console.log(expr.evaluate({ x: 3 })); // 7
