class Stringcalculator {
    private inputString: string;
  
    constructor(inputString: string) {
      this.inputString = inputString;
    }
  
    length(): number {
      return this.inputString.length;
    }
  
    concat(str: string): string {
      return this.inputString.concat(str);
    }
  
    charAt(index: number): string {
      return this.inputString.charAt(index);
    }
  
    charCodeAt(index: number): number {
      return this.inputString.charCodeAt(index);
    }
  
    substr(start: number, length: number): string {
      return this.inputString.substr(start, length);
    }
  
    slice(start: number, end: number): string {
      return this.inputString.slice(start, end);
    }
  
    indexOf(searchString: string): number {
      return this.inputString.indexOf(searchString);
    }
  
    replace(searchString: string, replaceString: string): string {
      return this.inputString.replace(searchString, replaceString);
    }
  }
  
  let Calculator: Stringcalculator;
  
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-field") as HTMLInputElement;
    const functionSelect = document.getElementById("function-select") as HTMLSelectElement;
    const arg1Field = document.getElementById("arg1-field") as HTMLInputElement;
    const arg2Field = document.getElementById("arg2-field") as HTMLInputElement;
    const resultField = document.getElementById("result-field") as HTMLInputElement;
    const calculateButton = document.getElementById("calculate-button") as HTMLButtonElement;
  
    calculateButton.addEventListener("click", () => {
      const inputString = inputField.value;
      const functionName = functionSelect.value;
      const arg1 = arg1Field.value;
      const arg2 = arg2Field.value;
  
      calculator = new StringCalculator(inputString);
  
      let result: string | number;
  
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