import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const generateRound = () => {
  const result = [];
  const minRangeValue = 0;
  const maxRangeValue = 100;
  let a = generateRandomNumber(minRangeValue, maxRangeValue);
  let b = generateRandomNumber(minRangeValue, maxRangeValue);
  const question = `${a} ${b}`;
  result.push(question);

  let answer;
  if (b > a) { const temp = a; a = b; b = temp; }
  while (a !== 0 || b !== 0) {
    if (b === 0) {
      answer = a.toString();
      break;
    }
    a %= b;
    if (a === 0) {
      answer = b.toString();
      break;
    }
    b %= a;
  }
  result.push(answer);

  return result;
};

const runGcd = () => {
  generateRound();

  const rule = 'Find the greatest common divisor of given numbers.';

  run(generateRound, rule);
};

export default runGcd;
