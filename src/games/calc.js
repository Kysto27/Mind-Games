import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const calculate = (mathSymbol, num1, num2) => {
  let result;
  switch (mathSymbol) {
    case '+':
      result = +num1 + +num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return result;
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomIndex(operators.length)];
  const minRangeValue = 0;
  const maxRangeValue = 20;
  const operand1 = generateRandomNumber(minRangeValue, maxRangeValue);
  const operand2 = generateRandomNumber(minRangeValue, maxRangeValue);
  const question = `${operand1} ${operator} ${operand2}`;

  const calculationResult = calculate(operator, operand1, operand2);

  const answer = calculationResult.toString();

  return [question, answer];
};

const runCalc = () => {
  generateRound();

  const rule = 'What is the result of the expression?';

  run(generateRound, rule);
};

export default runCalc;
