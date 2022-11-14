import run from '../index.js';

const runEven = () => {
  const generateRound = () => {
    const question = Math.round(Math.random() * 100);

    const isEven = (num) => num % 2 === 0;

    const answer = (isEven(question) ? 'yes' : 'no');

    return [question, answer];
  };

  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  run(generateRound, gameRules);
};

export default runEven;
