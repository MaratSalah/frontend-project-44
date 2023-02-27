import readlineSync from 'readline-sync';
import _ from 'lodash';
//import { name } from '../src/cli.js';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const getNumber = () => {
  const number = readlineSync.question('Your answer: ');
  return number;
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  let i = 0;
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  while (i <= 2) {
    let randomNumber = _.random(1, 100);
    console.log(`Question:${randomNumber}`);
    const answer = getNumber();
    if (randomNumber % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        i += 1;
      } else if (answer !== 'yes') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
        return null;
      }
    } else if (randomNumber % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
        i += 1;
      } else if (answer !== 'no') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
        return null;
      }
    }
  }
  console.log(`Congratulations, ${name}!`)
  return null;
};

