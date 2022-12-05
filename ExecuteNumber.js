const NumberToLCD = require("./NumberToLCD");

/* The process.argv() method is used for returning all the command-line arguments that were passed
when the Node.js process was being launched. */
const args = process.argv.slice(2);

if (args[1] && args[2]) {
  let numberToLCD = new NumberToLCD(args[0], args[1], args[2]);
  numberToLCD.withMeasures();

  console.log(numberToLCD.number);
} else {
  let numberToLCD = new NumberToLCD(args[0], 0, 0);
  numberToLCD.noMeasures();
  console.log(numberToLCD.number);
}
