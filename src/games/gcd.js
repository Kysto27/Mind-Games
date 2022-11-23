import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => {
  let result;
  let a = num1;
  let b = num2;
  if (b > a) { const temp = a; a = b; b = temp; }
  while (a !== 0 || b !== 0) {
    if (b === 0) {
      result = a.toString();
      break;
    }
    a %= b;
    if (a === 0) {
      result = b.toString();
      break;
    }
    b %= a;
  }
  return result;
};

const generateRound = () => {
  const minRangeValue = 0;
  const maxRangeValue = 100;
  const number1 = generateRandomNumber(minRangeValue, maxRangeValue);
  const number2 = generateRandomNumber(minRangeValue, maxRangeValue);
  const question = `${number1} ${number2}`;
  const calculationResult = calculateGcd(number1, number2);
  const answer = calculationResult.toString();

  return [question, answer];
};

const runGcd = () => run(generateRound, rule);

export default runGcd;
