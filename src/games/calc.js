import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minNumber = 1;
const maxNumber = 20;

const calculate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const operator = operators[generateRandomIndex(operators)];
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(operator, number1, number2).toString();

  return [question, answer];
};

const runCalc = () => {
  run(generateRound, rule);
};

export default runCalc;
