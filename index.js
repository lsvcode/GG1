let nama = ''
let deposito = 0;
let coin = 0;

function getData() {
  nama = document.getElementById('username').value;
  deposito = Number(document.getElementById('deposit').value);
  coin = deposito / 100;
  console.log(nama, deposito, coin);
}

function nextPage(from, to) {
  getData();
  if(from === 'page1'){
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

function jumpPage(to) {
  if (to === 'page1') {
    document.querySelector('#' + to).style.display = 'flex'
    document.querySelector('#page2').style.display = 'none'
    document.querySelector('#page3').style.display = 'none'
    document.getElementById('page1').classList.add('active')
    document.getElementById('page2').classList.remove('active')
    document.getElementById('page3').classList.remove('active')
  } else if (to === 'page2') {
    document.querySelector('#' + to).style.display = 'flex'
    document.querySelector('#page1').style.display = 'none'
    document.querySelector('#page3').style.display = 'none'
    document.getElementById('page2').classList.add('active')
    document.getElementById('page1').classList.remove('active')
    document.getElementById('page3').classList.remove('active')
  } else if (to === 'page3') {
    document.querySelector('#' + to).style.display = 'flex'
    document.querySelector('#page1').style.display = 'none'
    document.querySelector('#page2').style.display = 'none'
    document.getElementById('page3').classList.add('active')
    document.getElementById('page1').classList.remove('active')
    document.getElementById('page2').classList.remove('active')

  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1
}

// function addButtonID() {
//   const button = document.getElementById().innerHTML;
//   button.setAttribute('id', 'coinFlipButton');
// }

let tailsButton = document.getElementById('tailsButton');
let headsButton = document.getElementById('headsButton');
let outcome = document.querySelector('.outcome');

tailsButton.addEventListener('click', coinFlip);
headsButton.addEventListener('click', coinFlip);

function coinFlip() {
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
}

let chosen = 'heads';
if (chosen === outcome.textContent) {
  coin += 1000;
}

function claimPrize() {
  if (coin >= price) {
    coin -= price;
    alert('Selamat');
  } else alert('Hadiah tidak bisa diambil\nSilahkan judi lagi!');
}