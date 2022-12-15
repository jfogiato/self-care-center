var affirmations = [
    "I am successful.",
    "I am confident.",
    "I am powerful.",
    "I am strong.",
    "I am getting better and better every day.",
    "All I need is within me right now.",
    "I wake up motivated.",
    "I am an unstoppable force of nature.",
    "I am a living, breathing example of motivation.",
    "I am living with abundance.",
    "I am having a positive and inspiring impact on the people I come into contact with.",
    "I am inspiring people through my work.",
    "I’m rising above the thoughts that are trying to make me angry or afraid.",
    "Today is a phenomenal day.",
    "I am turning DOWN the volume of negativity in my life, while simultaneously turning UP the volume of positivity.",
    "I am filled with focus.",
    "I am not pushed by my problems; I am led by my dreams.",
    "I am grateful for everything I have in my life.",
    "I am independent and self-sufficient.",
    "I can be whatever I want to be.",
    "I am not defined my by past; I am driven by my future.",
    "I use obstacles to motivate me to learn and grow.",
    "Today will be a productive day.",
    "I am intelligent and focused.",
    "I feel more grateful each day.",
    "I am getting healthier every day.",
    "Each and every day, I am getting closer to achieving my goals.",
    "Through the power of my thoughts and words, incredible transformations are happening in me and within my life right now.",
    "I am constantly growing and evolving into a better person.",
    "I’m freeing myself from all destructive doubt and fear.",
    "I accept myself for who I am and create peace, power and confidence of mind and of heart.",
    "I am going to forgive myself and free myself. I deserve to forgive and be forgiven.",
    "I am healing and strengthening every day.",
    "I’ve made it through hard times before, and I’ve come out stronger and better because of them. I’m going to make it through this.",
    "I do not waste away a single day of my life. I squeeze every ounce of value out of each of my days on this planet—today, tomorrow, and everyday.",
    "I must remember the incredible power I possess within me to achieve anything I desire.",
    "I do not engage with people who try to penetrate my mind with unhelpful thoughts and ideas—I walk away when a person or a situation isn’t healthy for me.",
    "I belong in this world; there are people that care about me and my worth.",
    "My past might be ugly, but I am still beautiful.",
    "I have made mistakes, but I will not let them define me.",
    "My soul radiates from the inside and warms the souls of others.",
    "I don’t compare myself to others. The only person I compare myself to is the person I was yesterday. And as long as the person I am today is even the tiniest bit better than the person I was yesterday—I’m meeting my own definition of success.",
    "Note to self: I am going to make you so proud.",
    "I finish what matters and let go of what does not.",
    "I feed my spirit. I train my body. I focus my mind. This is my time.",
    "My life has meaning. What I do has meaning. My actions are meaningful and inspiring.",
    "What I have done today was the best I was able to do today. And for that, I am thankful.",
    "One small positive thought in the morning can change my whole day. So, today I rise with a powerful thought to set the tone and allow success to reverberate through every moment of my day.",
    "I set goals and go after them with all the determination I can muster. When I do this, my own skills and talents will take me to places that amaze me.",
    "Happiness is a choice, and today I choose to be happy."
];

var mantras = [
    "My mind is brilliant. My body is healthy. My spirit is tranquil.",
    "I create my own path and walk it with joy.",
    "My positive thoughts guide me to new heights.",
    "I am conquering my fears and becoming stronger each day.",
    "I will have a good day, because it’s my choice.",
    "I am not afraid to be wrong.",
    "My body is a temple. I keep my temple clean.",
    "I hold the key to better health through eating better and exercise.",
    "Good health is a practice, and I have patience.",
    "I listen to my body and give it what it needs.",
    "Every cell in my body is alive and beautiful.",
    "My potential is limitless, and I choose where to spend my energy.",
    "While I support others, I also ask for help when needed.",
    "I surrender to the flow and have faith in the ultimate good.",
    "I will speak with confidence and self-assurance.",
    "My commitment to myself is unbreakable."
];

var currentMessage;

var radios = document.querySelectorAll('input[name = "message-type"]');
var recvBtn = document.getElementById('receive-button');
var msgSctn = document.getElementById('message-section');
var userBtn = document.getElementById('add-message-button');
var submitBtn = document.getElementById('submit-button');
var userForm = document.getElementById('user-form');
var icon = document.getElementById('meditation');

recvBtn.addEventListener('click', () => {
  getMessage(getRadio());
  pushMessage();
})

userBtn.addEventListener('click', () => {
  submitBtn.classList.toggle('hidden')
  userForm.classList.toggle('hidden')
  userBtn.classList.toggle('hidden')
  icon.classList.toggle('hidden')
})

submitBtn.addEventListener('click', () => {

})

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
  currentMessage ? msgSctn.innerHTML = `${currentMessage}` : msgSctn;
}

function getRandomIndex(array) {
  return Math.floor((Math.random() * array.length));
}



/*

-If the user doesn’t specify the type of message, they should get an error and be unable to submit their message until the type is specified.
-When the user clicks the “Submit” button and that message will be added to the appropriate list of messages.
-When a new message is added, that message should automatically be displayed in the message box, instead of the meditation icon.
-As you add these new elements to the page, be sure to match the style of existing elements.





-Add an “Add Message” button in a logical spot.
-When the user clicks “Add Message” a form will appear in the message box. The form should contain two inputs - one to specify which type of message is being added, and another to add the text of the message itself. The form should also contain a “Submit” button.





*/