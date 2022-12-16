// Global variables targeting DOM elements 👇
var currentMessageDisplay = document.getElementById('current-message');
var radios = document.querySelectorAll('input[name = "message-type"]');
var recvBtn = document.getElementById('receive-button');
var msgSctn = document.getElementById('message-section');
var userBtn = document.getElementById('add-message-button');
var submitBtn = document.getElementById('submit-button');
var userForm = document.getElementById('user-form');
var icon = document.getElementById('meditation');
var userMessageInput = document.getElementById('user-message-input');
var userTypeInput = document.getElementById('user-type-input');

var currentMessage;

// Event Listeners 👇
recvBtn.addEventListener('click', () => {
  getMessage(getRadio());
  pushMessage();
  submitBtn.classList.add('hidden');
  userForm.classList.add('hidden');
})

userBtn.addEventListener('click', () => {
  toggleHidden();
})

submitBtn.addEventListener('click', () => {
    userTypeInput.value ? submitMessage() : alert('🌜✨Please pick a type!✨🌛');
})

// Functions 👇
function submitMessage() {
  var userMessage = userMessageInput.value;
  var userType = userTypeInput.value;
  if (userType === 'mantra') {
    mantras.push(userMessage);
    currentMessage = userMessage;
    pushMessage();
  } else {
    affirmations.push(userMessage);
    currentMessage = userMessage;
    pushMessage();
  }
  submitBtn.classList.add('hidden');
  userForm.classList.add('hidden');
  userMessage = "";
  userType = "";
}

function getRadio() {
  var selectedRadio;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedRadio = radios[i].value;
    }
  }
  return selectedRadio;
}

function getMessage(radio) {
  if (radio === 'mantras') {
    currentMessage = mantras[getRandomIndex(mantras)];
  } else if (radio === 'affirmations') {
    currentMessage = affirmations[getRandomIndex(affirmations)];
  } else {
    alert('🌜✨Please pick an option!✨🌛');
  }
}

function pushMessage() {
  icon.classList.add('hidden');
  currentMessageDisplay.classList.remove('hidden')
  currentMessage ? currentMessageDisplay.innerText = `${currentMessage}` : currentMessageDisplay;
}

function getRandomIndex(array) {
  return Math.floor((Math.random() * array.length));
}

function toggleHidden() {
  currentMessageDisplay.classList.toggle('hidden');
  icon.classList.add('hidden');
  submitBtn.classList.toggle('hidden');
  userForm.classList.toggle('hidden');
}

;