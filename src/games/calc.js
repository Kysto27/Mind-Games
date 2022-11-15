import run from '../index.js';
import generateRandomNumber from '../rundom-number.js';

const runCalc = () => {
  const generateRound = () => {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const operand1 = generateRandomNumber();
    const operand2 = generateRandomNumber();
    const question = `${operand1} ${operator} ${operand2}`;

    const calculate = (mathSymbol, num1, num2) => {
      let result;
      switch (mathSymbol) {
        case '+':
          result = +num1 + +num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        default:
      }
      return result;
    };

    const answer = calculate(operator, operand1, operand2);

    return [question, answer.toString()];
  };

  const gameRules = 'What is the result of the expression?';

  run(generateRound, gameRules);
};

export default runCalc;
