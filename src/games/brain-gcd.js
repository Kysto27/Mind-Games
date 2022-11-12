import brainGame from '../index.js';

const brainGcdGame = () => {
  const getQuestionValue = () => {
    const a = Math.round(Math.random() * 100);
    const b = Math.round(Math.random() * 100);
    return `${a} ${b}`;
  };

  const getExpectedAnswer = (questionValue) => {
    const questionValueToArray = questionValue.split(' ');
    let [a, b] = questionValueToArray;
    if (b > a) { const temp = a; a = b; b = temp; }
    let result;
    while (a !== 0 || b !== 0) {
      if (b === 0) {
        result = a.toString();
        break;
      }
      a %= b;
      if (a === 0) {
        result = b.toString();
        break;
      }
      b %= a;
    }
    return result;
  };

  const gameRules = 'Find the greatest common divisor of given numbers.';

  brainGame(getQuestionValue, getExpectedAnswer, gameRules);
};

export default brainGcdGame;
