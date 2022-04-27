'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const diplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    diplayMessage('🚫 No number entered');
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    diplayMessage('🥳 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess differs from secrete number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      diplayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      diplayMessage('🧨 You Loser!');
      displayScore(0);
    }
  }

  document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    diplayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#414141';
    document.querySelector('.number').style.width = '15rem';
    displayScore(score);
    document.querySelector('.guess').value = '';
  });
});
