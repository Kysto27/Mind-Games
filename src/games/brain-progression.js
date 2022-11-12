import brainGame from '../index.js';

const brainProgressionGame = () => {
  const getQuestionValue = () => {
    const progression = [];
    let progressionValue = Math.round(Math.random() * 100);
    const getProgressionStep = () => {
      const min = 2;
      const max = 10;
      return Math.round(Math.random() * (max - min) + min);
    };
    const progressionStep = getProgressionStep();
    for (let i = 0; i < 10; i += 1) {
      progression.push(progressionValue);
      progressionValue += progressionStep;
    }
    const progressionHiddenValuePosition = Math.round(Math.random() * 9);
    progression[progressionHiddenValuePosition] = '..';
    return progression.join(' ');
  };

  const getExpectedAnswer = (questionValue) => {
    const questionValueToArray = questionValue.split(' ');
    let progressionHiddenValuePosition;
    let progressionStep;
    for (let i = 0; i < questionValueToArray.length; i += 1) {
      if (questionValueToArray[i] === '..') {
        progressionHiddenValuePosition = i;
      }
    }
    for (let i = 0; i < questionValueToArray.length; i += 1) {
      if (questionValueToArray[i + 1] - questionValueToArray[i]) {
        progressionStep = questionValueToArray[i + 1] - questionValueToArray[i];
      }
    }
    let result;
    if (progressionHiddenValuePosition === 0) {
      result = (+questionValueToArray[progressionHiddenValuePosition + 1] - +progressionStep);
    } else {
      result = (+questionValueToArray[progressionHiddenValuePosition - 1] + +progressionStep);
    }
    return result.toString();
  };

  const gameRules = 'What number is missing in the progression?';

  brainGame(getQuestionValue, getExpectedAnswer, gameRules);
};

export default brainProgressionGame;
