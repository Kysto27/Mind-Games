import run from '../index.js';

const runCalc = () => {
  const generateRound = () => {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const operand1 = Math.round(Math.random() * 100);
    const operand2 = Math.round(Math.random() * 100);
    const question = `${operand1} ${operator} ${operand2}`;
    let answer;
    switch (operator) {
      case '+':
        answer = +operand1 + +operand2;
        break;
      case '-':
        answer = operand1 - operand2;
        break;
      case '*':
        answer = operand1 * operand2;
        break;
      default:
    }
    return [question, answer.toString()];
  };

  const gameRules = 'What is the result of the expression?';

  run(generateRound, gameRules);
};

export default runCalc;
