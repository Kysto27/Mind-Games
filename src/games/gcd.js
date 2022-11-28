import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minNumber = 0;
const maxNumber = 100;

const calculateGcd = (num1, num2) => {
  let result;
  let a = num1;
  let b = num2;
  if (b > a) { const temp = a; a = b; b = temp; }
  while (a !== 0 || b !== 0) {
    if (b === 0) {
      result = a;
      break;
    }
    a %= b;
    if (a === 0) {
      result = b;
      break;
    }
    b %= a;
  }
  return result;
};

const generateRound = () => {
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const answer = calculateGcd(number1, number2).toString();

  return [question, answer];
};

const runGcd = () => {
  run(generateRound, rule);
};

export default runGcd;
