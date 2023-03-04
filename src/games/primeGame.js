import _ from 'lodash';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const primeGame = () => {
  const randomNumber = _.random(2, 100);
  const question = randomNumber;
  let trueAnswer;
  for (let i = randomNumber - 1; i >= 1; i -= 1) {
    if ((randomNumber) % i !== 0) {
      trueAnswer = 'yes';
    } else if (i === 1) {
      trueAnswer = 'yes';
      return [question, trueAnswer];
    } else if ((randomNumber) % i === 0) {
      trueAnswer = 'no';
      return [question, trueAnswer];
    }
  }
  return [question, trueAnswer];
};
