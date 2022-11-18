import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateRound = () => {
  const minRangeValue = -100;
  const maxRangeValue = 100;
  const number = generateRandomNumber(minRangeValue, maxRangeValue);
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

const runPrime = () => {
  generateRound();

  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  run(generateRound, rule);
};

export default runPrime;
