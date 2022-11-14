import run from '../index.js';

const runPrime = () => {
  const generateRound = () => {
    const question = Math.round(Math.random() * 100);

    const isPrime = (num) => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  run(generateRound, gameRules);
};

export default runPrime;
