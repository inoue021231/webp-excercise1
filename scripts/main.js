// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://inoue021231.github.io/webp-excercise1/images/tennis.png') {
    myImage.setAttribute ('src','https://inoue021231.github.io/webp-excercise1/images/sports_tennis_man.png');
  } else {
    myImage.setAttribute ('src','https://inoue021231.github.io/webp-excercise1/images/tennis.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
