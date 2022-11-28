import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = -100;
const maxNumber = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(minNumber, maxNumber);
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

const runPrime = () => {
  run(generateRound, rule);
};

export default runPrime;
