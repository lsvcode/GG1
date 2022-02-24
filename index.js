// let nama = ''
// let deposito = 0
// let coin = 0;


// const form = document.getElementById('form-login');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   window.location.href = "game.html";
// });


const user = {};
user.nama = document.getElementById('username').value;
user.deposito = Number(document.getElementById('deposit').value);
user.coin = user.deposito / 100;

console.log(user);

const game = document.getElementById('game');
game.innerText = `${user.nama}`;


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

function switchPage(from, to) {
  if(from === 'page1'){
    if(!user){
      return
    }
    document.querySelector('#' + from).style.display = 'none'
    document.querySelector('#' + to).style.display = 'flex'
  } else if(from === 'page2' && to === 'page3'){
    document.querySelector('#' + from).style.display = 'none'
    document.querySelector('#' + to).style.display = 'flex'
  } else if( from === 'page3' && to === 'page2'){
    document.querySelector('#' + from).style.display = 'none'
    document.querySelector('#' + to).style.display = 'flex'
  }  else {
    document.querySelector('#page3').style.display = 'none'
    document.querySelector('#' + from).style.display = 'none'
    document.querySelector('#' + to).style.display = 'block'
  } 
}