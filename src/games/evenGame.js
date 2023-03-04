import _ from 'lodash';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const brainEven = () => {
  const randomNumber = _.random(1, 100);
  let trueAnswer;
  if (randomNumber % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return [randomNumber, trueAnswer];
};
