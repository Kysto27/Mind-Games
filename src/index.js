import readlineSync from 'readline-sync';

const brainGame = (getQuestionValue, getExpectedAnswer, gameRules) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');
  // Определение имени игрока и вывод приветствия
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Игровая логика
  for (let i = 0; i < 3; i += 1) {
    // Определение вопроса и правильного ответа
    const questionValue = getQuestionValue();
    const expectedAnswer = getExpectedAnswer(questionValue);
    // Вывод правил ввода ответа
    console.log(gameRules);
    // Вывод вопроса и запрос ответа от игрока
    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // Проверка ответа игрока и вывод результата
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  // Вывод поздравления в случае успешного прохождения игры
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGame;
