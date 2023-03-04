import _ from 'lodash';

export const rule = 'What number is missing in the progression?';

export const progressionGame = () => {
  let progression = '';
  const step = _.random(1, 3);
  const indexOfDots = _.random(1, 9);
  let firstNubmer = 0;
  let trueAnswer;
  for (let i = 0; i < 10; i += 1) {
    if (i === indexOfDots) {
      progression = `${progression} ..`;
      trueAnswer = firstNubmer;
      firstNubmer += step;
    } else {
      progression = `${progression} ${firstNubmer}`;
      firstNubmer += step;
    }
  }
  return [progression.toString(), trueAnswer.toString()];
};
