import _ from 'lodash';

export const rule = 'What number is missing in the progression?';

export const progressionGame = () => {
  const progression = [];
  const step = _.random(1, 3);
  const indexOfDots = _.random(1, 9);
  let firstNubmer = 0;
  let trueAnswer;
  for (let i = 0; i < 10; i += 1) {
    if (i === indexOfDots) {
      progression.push('..');
      trueAnswer = firstNubmer;
      firstNubmer += step;
    } else {
      progression.push(firstNubmer);
      firstNubmer += step;
    }
  }
  return [progression.join(' '), trueAnswer.toString()];
};
