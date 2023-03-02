import _ from 'lodash';

export const rule = 'What is the result of the expression?';

export const brainCalc = () => {
  const operations = '+-*';
  const firstNumber = _.random(1, 100);
  const secondNumber = _.random(1, 100);
  const operation = operations[_.random(0, 2)];
  let expression;
  let symbolOfExpression;

  if (operation === '+') {
    expression = firstNumber + secondNumber;
    symbolOfExpression = '+';
  } else if (operation === '-') {
    expression = firstNumber - secondNumber;
    symbolOfExpression = '-';
  } else {
    expression = firstNumber * secondNumber;
    symbolOfExpression = '*';
  }

  const question = `${firstNumber} ${symbolOfExpression} ${secondNumber}`;
  return [question, expression.toString()];
};
