import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const operators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

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
  const minRangeValue = 1;
  const maxRangeValue = 20;
  const operand1 = +generateRandomNumber(minRangeValue, maxRangeValue);
  const operand2 = +generateRandomNumber(minRangeValue, maxRangeValue);
  const question = `${operand1} ${operator} ${operand2}`;
  const calculationResult = calculate(operator, operand1, operand2);
  const answer = calculationResult.toString();

  return [question, answer];
};

const runCalc = () => run(generateRound, rule);

export default runCalc;
