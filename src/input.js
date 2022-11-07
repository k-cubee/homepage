var mathFieldSpan = document.getElementById("math-field");
var latexSpan = document.getElementById("latex");

var MQ = MathQuill.getInterface(2); // for backcompat
var answerSpan = document.getElementById("answer");
var answerMathField = MQ.MathField(answerSpan, {
    handlers: {
        edit: function () {
            var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
            checkAnswer(enteredMath);
        },
    },
});
