var StringCalculator = /** @class */ (function () {
    function StringCalculator(inputString) {
        this.inputString = inputString;
    }
    StringCalculator.prototype.length = function () {
        return this.inputString.length;
    };
    StringCalculator.prototype.concat = function (str) {
        return this.inputString.concat(str);
    };
    StringCalculator.prototype.charAt = function (index) {
        return this.inputString.charAt(index);
    };
    StringCalculator.prototype.charCodeAt = function (index) {
        return this.inputString.charCodeAt(index);
    };
    StringCalculator.prototype.substr = function (start, length) {
        return this.inputString.substr(start, length);
    };
    StringCalculator.prototype.slice = function (start, end) {
        return this.inputString.slice(start, end);
    };
    StringCalculator.prototype.indexOf = function (searchString) {
        return this.inputString.indexOf(searchString);
    };
    StringCalculator.prototype.replace = function (searchString, replaceString) {
        return this.inputString.replace(searchString, replaceString);
    };
    return StringCalculator;
}());
var calculator;
document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("input-field");
    var functionSelect = document.getElementById("function-select");
    var arg1Field = document.getElementById("arg1-field");
    var arg2Field = document.getElementById("arg2-field");
    var resultField = document.getElementById("result-field");
    var calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", function () {
        var inputString = inputField.value;
        var functionName = functionSelect.value;
        var arg1 = arg1Field.value;
        var arg2 = arg2Field.value;
        calculator = new StringCalculator(inputString);
        var result;
        switch (functionName) {
            case "length":
                result = calculator.length();
                break;
            case "concat":
                result = calculator.concat(arg1);
                break;
            case "charAt":
                result = calculator.charAt(parseInt(arg1));
                break;
            case "charCodeAt":
                result = calculator.charCodeAt(parseInt(arg1));
                break;
            case "substr":
                result = calculator.substr(parseInt(arg1), parseInt(arg2));
                break;
            case "slice":
                result = calculator.slice(parseInt(arg1), parseInt(arg2));
                break;
            case "indexOf":
                result = calculator.indexOf(arg1);
                break;
            case "replace":
                result = calculator.replace(arg1, arg2);
                break;
            default:
                result = "Invalid function";
        }
        resultField.value = result.toString();
    });
});
