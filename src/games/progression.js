import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const rule = 'What number is missing in the progression?';

const minLength = 5;
const maxLength = 10;
const minStart = 0;
const maxStart = 100;
const minStep = 2;
const maxStep = 10;

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + step * i;
  }
  return progression;
};

const generateRound = () => {
  const length = generateRandomNumber(minLength, maxLength);
  const step = generateRandomNumber(minStep, maxStep);
  const start = generateRandomNumber(minStart, maxStart);
  const progression = generateProgression(length, start, step);
  const hiddenIndex = generateRandomIndex(progression);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runProgression = () => {
  run(generateRound, rule);
};

export default runProgression;
