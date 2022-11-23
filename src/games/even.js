import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const minRangeValue = -100;
  const maxRangeValue = 100;
  const number = generateRandomNumber(minRangeValue, maxRangeValue);
  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const runEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  run(generateRound, rule);
};

export default runEven;
