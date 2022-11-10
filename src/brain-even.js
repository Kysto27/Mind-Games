import readlineSync from 'readline-sync';

const randomNumber = () => Math.round(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const questionNumber = randomNumber();
    const expectedAnswer = isEven(questionNumber) ? 'yes' : 'no';
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainEvenGame;
