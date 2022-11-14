import run from '../index.js';

const runGcd = () => {
  const generateRound = () => {
    const result = [];
    let a = Math.round(Math.random() * 100);
    let b = Math.round(Math.random() * 100);
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
