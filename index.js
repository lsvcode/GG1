let nama = ''
let deposito = 0
let coin = deposito / 1000


function coinFlip() {
  let coinFlipButton = document.getElementById('coinFlipButton');
  let outcome = document.querySelector('.outcome');
  
  function getRandomNumber() {
    return Math.floor(Math.random() * (2 - 1 + 1)) + 1
  }
  
  coinFlipButton.addEventListener('click', function() {
    let randomNumber = getRandomNumber();
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
}
