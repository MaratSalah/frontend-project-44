import _ from 'lodash';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result;
  for (let i = number - 1; i >= 1; i -= 1) {
    if ((number) % i !== 0) {
      result = true;
    } else if (i === 1) {
      result = true;
      return result;
    } else if ((number) % i === 0) {
      result = false;
      return result;
    }
  }
  return result;
};

export const primeGame = () => {
  const randomNumber = _.random(0, 100);
  const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, trueAnswer];
};
