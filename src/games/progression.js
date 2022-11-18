import run from '../index.js';
import generateRandomNumber from '../utils.js';

const runProgression = () => {
  const generateRound = () => {
    const progression = [];
    const minRangeValue = 0;
    const maxRangeValue = 100;
    let progressionValue = generateRandomNumber(minRangeValue, maxRangeValue);

    const minProgressionStepValue = 2;
    const maxProgressionStepValue = 10;
    const progressionStep = generateRandomNumber(minProgressionStepValue, maxProgressionStepValue);

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
