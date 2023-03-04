import _ from 'lodash';

export const rule = 'What number is missing in the progression?';

export const progressionGame = () => {
  const progression = [];
  const step = _.random(1, 3);
  const indexOfDots = _.random(1, 9);
  let firstNubmer = 0;
  for (let i = 0; i < 10; i += 1) {
    if (i === indexOfDots) {
      progression.push('..');
      firstNubmer += step;
    } else {
      firstNubmer += step;
      progression.push(firstNubmer);
    }
  }
  const trueAnswer = progression[progression.indexOf('..') - 1] + step;
  return [progression, trueAnswer.toString()];
};
