"use strict";

let calculator = {
    output: null,
    buttons: null,

    get text() {
        if (this.output != null) return this.output.innerHTML;
        else return 0;
    },
    set text(value) {
        if (this.output != null) {
            this.output.innerHTML = value;
        }
    },

    addCharToEnd: function (value) {

        if (value == "eraser" && this.text != "0") {
            this.text = this.text.slice(0, this.text.length - 1);
            return;
        } else if (value == "clear") {
            this.text = "0";
            return;
        }
        if (!isNaN(this.text[this.text.length - 1])) {
            switch (value) {
                case "+":
                    this.text = this.text + "+";
                    return;
                case "-":
                    this.text = this.text + "-";
                    return;
                case "/":
                    this.text = this.text + "/";
                    return;
                case "*":
                    this.text = this.text + "*";
                    return;

                case "=":
                    this.text = eval(this.text);
                    return;
                case ".":
                    this.text = this.text + value;
                    return;
                case "sqr":
                    this.text = (eval(this.text)) * (eval(this.text));
                    return;
                case "sqrt":
                    this.text = Math.sqrt(eval(this.text));
                    return;

                default:
                    if (this.text == "0") this.text = value;
                    else this.text = this.text + value;
                    return;
            }

        } else if (!isNaN(value)) {
            if(value != "0") this.text = this.text + value;
            return;
        }
    },
}

addEventsInCalculator();

function addEventsInCalculator() {
    calculator.buttons = document.getElementsByClassName("button-style");
    calculator.output = document.getElementById("result_Text");
    addEventsInHTMLelements();
}

function addEventsInHTMLelements() {
    for (let i = 0; i <= 9; i++) {
        calculator.buttons[`button${i}`].addEventListener("mouseup", () => calculator.addCharToEnd(i));
    }
    calculator.buttons["buttonEraser"].addEventListener("mouseup", () => calculator.addCharToEnd("eraser"));
    calculator.buttons["buttonClear"].addEventListener("mouseup", () => calculator.addCharToEnd("clear"));
    calculator.buttons["buttonSqr"].addEventListener("mouseup", () => calculator.addCharToEnd("sqr"));
    calculator.buttons["buttonSqrt"].addEventListener("mouseup", () => calculator.addCharToEnd("sqrt"));
    calculator.buttons["buttonDot"].addEventListener("mouseup", () => calculator.addCharToEnd("."));

    calculator.buttons["buttonPlus"].addEventListener("mouseup", () => calculator.addCharToEnd("+"));
    calculator.buttons["buttonMinus"].addEventListener("mouseup", () => calculator.addCharToEnd("-"));
    calculator.buttons["buttonMultiplication"].addEventListener("mouseup", () => calculator.addCharToEnd("*"));
    calculator.buttons["buttonDivision"].addEventListener("mouseup", () => calculator.addCharToEnd("/"));
    calculator.buttons["buttonEqual"].addEventListener("mouseup", () => calculator.addCharToEnd("="));
}

function enterValue() {
    calculator.addCharToEnd("1");
}

function enterCharInCalculator(value) {
    calculator.addCharToEnd(value);
}