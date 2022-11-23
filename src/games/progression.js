import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const rule = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStart = 0;
const maxStart = 100;
const minStep = 2;
const maxStep = 10;

const generateRound = () => {
  const progression = [];
  const length = generateRandomNumber(minLength, maxLength);
  let start = generateRandomNumber(minStart, maxStart);
  const step = generateRandomNumber(minStep, maxStep);

  for (let i = 0; i < length; i += 1) {
    progression.push(start);
    start += step;
  }
  const hiddenIndex = generateRandomIndex(progression);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runProgression = () => run(generateRound, rule);

export default runProgression;
