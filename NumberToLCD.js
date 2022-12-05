const {
  operators,
  options,
  widthOptions,
  heigthOptions,
} = require("./values/numberValues");

class NumberToLCD {
  constructor(receivedValues, width, height) {
    this.height = height;
    this.width = width;
    this.receivedValues = receivedValues;
    this.numbers = Array.from(String(this.receivedValues), Number);
    this.number = "";
  }

  noMeasures() {
    if (!isNaN(this.numbers[0])) {
      try {
        for (let i = 0; i < 7; i++) {
          let characters = "";

          for (let j = 0; j < this.numbers.length; j++) {
            const operation = operators[this.numbers[j]];
            characters += ` ${operation[i]}`;
          }
          this.number += characters + `\n`;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("The value entered is not a number.");
    }
  }

  withMeasures() {
    if (!isNaN(this.numbers[0]) && !isNaN(this.width) && !isNaN(this.height)) {
      try {
        for (let i = 0; i < 5; i++) {
          if (i === 0 || i === 2 || i === 4) {
            let characters = "";
            for (let j = 0; j < this.numbers.length; j++) {
              const operator = options[this.numbers[j]];
              const operation = widthOptions[operator[i]];
              characters += ` ${operation(this.width)} `;
            }
            this.number += characters + `\n`;
          } else {
            let characters = "";
            for (let index = 0; index < this.height; index++) {
              for (let j = 0; j < this.numbers.length; j++) {
                const operator = options[this.numbers[j]];
                const operation = heigthOptions[operator[i]];
                characters += ` ${operation(this.width)} `;
              }
              this.number += characters + `\n`;
              characters = "";
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("The value entered is not a number.");
    }
  }
}

module.exports = NumberToLCD;
