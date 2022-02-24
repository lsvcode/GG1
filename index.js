// Coin Flip Simulation

var coinFlipButton = document.getElementById('tailsButton');
var outcome = document.querySelector('.outcome');

function getRandomNumber() {
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1
}

coinFlipButton.addEventListener('click', function() {
  var randomNumber = getRandomNumber();
  outcome.textContent = '';
  outcome.classList.toggle('flip');
  outcome.classList.add('toss');
  
  // Waits 3sec to display flip result
  setTimeout(function() {
    if (randomNumber == 1) {
      outcome.textContent = 'heads';
    } else if (randomNumber == 2) {
      outcome.textContent = 'tails';
    }
    outcome.classList.remove('toss');
  }, 800);
    
});