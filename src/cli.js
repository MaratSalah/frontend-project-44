import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export let name;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = getName();
  console.log(`Hello, ${name}!`);
};
