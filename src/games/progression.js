import run from '../index.js';
import generateRandomNumber from '../utils.js';

const runProgression = () => {
  const generateRound = () => {
    const progression = [];
    let progressionValue = generateRandomNumber();

    const min = 2; // minimum progression step
    const max = 10; // maximum progression step

    const progressionStep = Math.round(Math.random() * (max - min) + min);

    for (let i = 0; i < 10; i += 1) {
      progression.push(progressionValue);
      progressionValue += progressionStep;
    }

    const hiddenValuePosition = Math.round(Math.random() * 9);

    const answer = progression[hiddenValuePosition].toString();

    progression[hiddenValuePosition] = '..';

    const question = progression.join(' ');

    return [question, answer];
  };

  const gameRules = 'What number is missing in the progression?';

  run(generateRound, gameRules);
};

export default runProgression;
