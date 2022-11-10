import brainGame from '../index.js';

const brainCalcGame = () => {
  const getQuestionValue = () => {
    const operators = ['+', '-', '*'];
    const operand1 = Math.round(Math.random() * 100);
    const operand2 = Math.round(Math.random() * 100);
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    return `${operand1} ${randomOperator} ${operand2}`;
  };

  const getExpectedAnswer = (questionValue) => {
    const expressionToArray = questionValue.split(' ');
    const [operand1, operator, operand2] = expressionToArray;
    let result;
    switch (operator) {
      case '+':
        result = +operand1 + +operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      default:
    }
    return result.toString();
  };

  const gameRules = 'What is the result of the expression?';

  brainGame(getQuestionValue, getExpectedAnswer, gameRules);
};

export default brainCalcGame;
