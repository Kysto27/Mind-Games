import brainGame from '../index.js';

const question = () => Math.round(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const expectedAnswer = (randomNumber) => (isEven(randomNumber) ? 'yes' : 'no');

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

brainGame(question, expectedAnswer, rules);
