import _ from 'lodash';

export const rule = 'Find the greatest common divisor of given numbers.';

export const brainGcd = () => {
  let trueAnswer;
  const firstNumber = _.random(1, 100);
  const secondNumber = _.random(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  for (let index = 1; index <= firstNumber; index += 1) {
    if (secondNumber % index === 0 && firstNumber % index === 0) {
      trueAnswer = index;
    }
  }
  return [question, trueAnswer.toString()];
};

/* const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i <= 2) {
    let trueAnswer;
    const firstNumber = _.random(1, 100);
    const secondNumber = _.random(1, 100);
    for (let index = firstNumber; index > 0; index -= 1) {
      if (secondNumber % index === 0 && firstNumber % index === 0) {
        trueAnswer = index;
      }
    }
    console.log(`${firstNumber} ${secondNumber}`);
    const answer = Number(getAnswer());
    if (answer === trueAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(.
         Correct answer was '${trueAnswer}'. \nLet's try again, ${name}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
}; */
