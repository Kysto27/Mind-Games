import run from '../index.js';
import generateRandomNumber from '../rundom-number.js';

const runGcd = () => {
  const generateRound = () => {
    const result = [];
    let a = generateRandomNumber();
    let b = generateRandomNumber();
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

  const gameRules = 'Find the greatest common divisor of given numbers.';

  run(generateRound, gameRules);
};

export default runGcd;
