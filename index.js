let nama = ''
let deposito = 0;
let coin = 0;

function getData() {
  nama = document.getElementById('username').value;
  deposito = Number(document.getElementById('deposit').value);
  coin = deposito / 100;
  document.getElementById("coin").innerText = `Coins: ${coin}`
  document.getElementById("user-id").innerText = `Username: ${nama}`
  document.getElementById("coin2").innerText = `Coins: ${coin}`
  document.getElementById("user-id2").innerText = `Username: ${nama}`
  console.log(nama, deposito, coin);
}



function nextPage(from, to) {
  getData();
  if (!nama || !deposito) {
    return alert('Masukkan data');
  }
  if(from === 'page1'){
    document.querySelector('#' + from).style.display = 'none'
    document.querySelector('#' + to).style.display = 'block'
    document.querySelector('#nav-' + to).classList.add('active')
    document.querySelector('#nav-' + from).classList.remove('active')
  } else if(from === 'page2' && to === 'page3'){
    document.querySelector('#' + from).style.display = 'none'
    document.querySelector('#' + to).style.display = 'block'
    document.querySelector('#nav-' + to).classList.add('active')
    document.querySelector('#nav-' + from).classList.remove('active')
  } else if( from === 'page3' && to === 'page2'){
    document.querySelector('#' + from).style.display = 'none'
    document.querySelector('#' + to).style.display = 'block'
    document.querySelector('#nav-' + to).classList.add('active')
    document.querySelector('#nav-' + from).classList.remove('active')
  }  else {
    document.querySelector('#page3').style.display = 'none'
    document.querySelector('#' + from).style.display = 'none'
    document.querySelector('#' + to).style.display = 'block'
    document.querySelector('#nav-' + to).classList.add('active')
    document.querySelector('#nav-' + from).classList.remove('active')
  }
}


function jumpPage(to) {
  if (to === 'page1') {
    document.querySelector('#' + to).style.display = 'block'
    document.querySelector('#page2').style.display = 'none'
    document.querySelector('#page3').style.display = 'none'
    document.getElementById('nav-page1').classList.add('active')
    document.getElementById('nav-page2').classList.remove('active')
    document.getElementById('nav-page3').classList.remove('active')
  } else if (to === 'page2') {
    document.querySelector('#' + to).style.display = 'block'
    document.querySelector('#page1').style.display = 'none'
    document.querySelector('#page3').style.display = 'none'
    document.getElementById('nav-page2').classList.add('active')
    document.getElementById('nav-page1').classList.remove('active')
    document.getElementById('nav-page3').classList.remove('active')
  } else if (to === 'page3') {
    document.querySelector('#' + to).style.display = 'block'
    document.querySelector('#page1').style.display = 'none'
    document.querySelector('#page2').style.display = 'none'
    document.getElementById('nav-page3').classList.add('active')
    document.getElementById('nav-page1').classList.remove('active')
    document.getElementById('nav-page2').classList.remove('active')
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
    document.getElementById("coin2").innerText = `Coins: ${coin}` 
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
    document.getElementById("coin2").innerText = `Coins: ${coin}`
    outcome.classList.remove('toss');
  }, 800); 
}

// function addButtonID() {
//   const button = document.getElementById().innerHTML;
//   button.setAttribute('id', 'coinFlipButton');
// }


function claimPrize(str) {
  let price = 0;
  let prize = '';
  if (str === 'prize1') {
    price = 1500;
    prize = 'Mobil';
  } else if (str === 'prize2') {
    price = 50000;
    prize = 'Rumah';
  } else {
    price = 800000;
    prize = 'Pulau';
  }
  if (coin >= price) {
    coin -= price;
    document.getElementById("coin").innerText = `Coins: ${coin}`
    document.getElementById("coin2").innerText = `Coins: ${coin}`
    alert(`Selamat Anda mendapatkan ${prize}`);
  } else alert('Hadiah tidak bisa diambil\nSilahkan judi lagi!');
}