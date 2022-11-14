import run from '../index.js';

const runProgression = () => {
  const generateRound = () => {
    const progression = [];
    let progressionValue = Math.round(Math.random() * 100);

    const min = 2; // minimum progression step
    const max = 10; // maximum progression step

    const progressionStep = Math.round(Math.random() * (max - min) + min);

    for (let i = 0; i < 10; i += 1) {
      progression.push(progressionValue);
      progressionValue += progressionStep;
    }

    const progressionHiddenValuePosition = Math.round(Math.random() * 9);

    const answer = progression[progressionHiddenValuePosition].toString();

    progression[progressionHiddenValuePosition] = '..';

    const question = progression.join(' ');

    return [question, answer];
  };

  const gameRules = 'What number is missing in the progression?';

  run(generateRound, gameRules);
};

export default runProgression;
