// Global variables targeting DOM elements 👇
var currentMessageDisplay = document.getElementById('current-message');
var radios = document.querySelectorAll('input[name = "message-type"]');
var msgSctn = document.getElementById('message-section');
var userForm = document.getElementById('byo-form');
var icon = document.getElementById('meditation');
var userMessageInput = document.getElementById('user-message-input');
var userTypeInput = document.getElementById('user-type-input');
var userBtn = document.getElementById('add-message-button');
var submitBtn = document.getElementById('submit-button');
var recvBtn = document.getElementById('receive-button');

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
  if (!userTypeInput.value && !userMessageInput.value) {
    alert('🌜✨Please enter a message and pick a type!✨🌛');
  } else if (!userTypeInput.value) {
      alert('🌜✨Please pick a type!✨🌛');
  } else if (!userMessageInput.value) {
      alert('🌜✨Please enter a message!✨🌛');
  } else {
      submitMessage();
  }
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
  userMessageInput.value = "";
  userTypeInput.value = "";
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
    icon.classList.add('hidden');
  } else if (radio === 'affirmations') {
    currentMessage = affirmations[getRandomIndex(affirmations)];
    icon.classList.add('hidden');
  } else {
    alert('🌜✨Please pick an option!✨🌛');
  }
}

function pushMessage() {
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