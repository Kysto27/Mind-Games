import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const generateRound = () => {
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2).toString();

  return [question, answer];
};

const runGcd = () => {
  run(generateRound, rule);
};

export default runGcd;
