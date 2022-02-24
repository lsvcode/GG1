let nama = ''
let deposito = 0;
let coin = 0;

function getData() {
  nama = document.getElementById('username').value;
  deposito = Number(document.getElementById('deposit').value);
  coin = deposito / 100;
  document.getElementById("coin").innerText = `Coins: ${coin}`
  document.getElementById("user-id").innerText = `Username: ${nama}`
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
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1
}

// function addButtonID() {
//   const button = document.getElementById().innerHTML;
//   button.setAttribute('id', 'coinFlipButton');
// }

let tailsButton = document.getElementById('tailsButton');
let headsButton = document.getElementById('headsButton');
let outcome = document.querySelector('.outcome');

tailsButton.addEventListener('click', coinFlipTails);
headsButton.addEventListener('click', coinFlipHead);

function coinFlipHead() {
  let randomNumber = getRandomNumber();
  outcome.textContent = '';
  outcome.classList.toggle('flip');
  outcome.classList.add('toss')
  
  // Waits 3sec to display flip result
  setTimeout(function() {
    if (randomNumber == 1) {
      outcome.textContent = 'heads';
      coin += 500;
    } else if (randomNumber == 2) {
      outcome.textContent = 'tails';
      coin -= 500
    } else if (randomNumber == 3) {
      outcome.textContent = 'tails';
      coin -= 500
    } else if (randomNumber == 4) {
      outcome.textContent = 'tails';
      coin -= 500
    } else if (randomNumber == 5) {
      outcome.textContent = 'tails';
      coin -= 500
    }

    document.getElementById("coin").innerText = `Coins: ${coin}` 
    outcome.classList.remove('toss');
  }, 800); 
}

function coinFlipTails() {
  let randomNumber = getRandomNumber();
  outcome.textContent = '';
  outcome.classList.toggle('flip');
  outcome.classList.add('toss');
  
  // Waits 3sec to display flip result
  setTimeout(function() {
    if (randomNumber == 1) {
      outcome.textContent = 'heads';
      coin -= 500
    } else if (randomNumber == 2) {
      outcome.textContent = 'tails';
      coin += 500
    } else if (randomNumber == 3) {
      outcome.textContent = "heads"
      coin -= 500
    } else if (randomNumber == 4) {
      outcome.textContent = "heads"
      coin -= 500
    } else if (randomNumber == 5) {
      outcome.textContent = "heads"
      coin -= 500
    }

    document.getElementById("coin").innerText = `Coins: ${coin}`
    outcome.classList.remove('toss');
  }, 800); 
}

// function addButtonID() {
//   const button = document.getElementById().innerHTML;
//   button.setAttribute('id', 'coinFlipButton');
// }


function claimPrize() {
  if (coin >= price) {
    coin -= price;
    alert('Selamat');
  } else alert('Hadiah tidak bisa diambil\nSilahkan judi lagi!');
}