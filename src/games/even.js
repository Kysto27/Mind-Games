import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = -100;
const maxNumber = 100;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber(minNumber, maxNumber);
  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const runEven = () => {
  run(generateRound, rule);
};

export default runEven;
