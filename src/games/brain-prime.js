import brainGame from '../index.js';

const brainPrimeGame = () => {
  const getQuestionValue = () => Math.round(Math.random() * 100);

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const getExpectedAnswer = (questionValue) => (isPrime(questionValue) ? 'yes' : 'no');

  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  brainGame(getQuestionValue, getExpectedAnswer, gameRules);
};

export default brainPrimeGame;
