import brainGame from '../index.js';

const brainEvenGame = () => {
  const getQuestionValue = () => Math.round(Math.random() * 100);

  const isEven = (num) => num % 2 === 0;

  const getExpectedAnswer = (randomNumber) => (isEven(randomNumber) ? 'yes' : 'no');

  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  brainGame(getQuestionValue, getExpectedAnswer, gameRules);
};

export default brainEvenGame;
