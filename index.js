//*Main screen*
//Pressing "Genie, give me a prediction!" brings the user to the predictions screen
onEvent("main_predictions", "click", function( ) {
  setScreen("predictions_screen");
});
//Pressing "Genie, provide me some advice!" brings the user to the advice screen
onEvent("main_advice", "click", function( ) {
  setScreen("advice_screen");
});
//Pressing "Genie, give me a good laugh!" brings the user to the jokes screen
onEvent("main_jokes", "click", function( ) {
  setScreen("jokes_screen");
});
//Pressing "Check out the Genie's History!" brings the user to the History screen
onEvent("main_history", "click", function( ) {
  setScreen("history_screen");
});




//*Predictions screen*
//The random outputs the Genie will possibly give
var fortunes = [
  "You will have great luck today!",
  "A mysterious stranger will enter your life soon.",
  "Now is not the time to act. Be patient.",
  "An unexpected opportunity will arise.",
  "You will achieve your dreams if you stay focused.",
  "Caution: not all that glitters is gold.",
  "Today is a great day to try something new!",
  "You may face challenges, but you'll overcome them.",
  "Fortune favors the bold!",
  "Someone close to you has a surprise waiting."
];
//clicking the "Ask the Genie!" button will give provide the output + release a ding sound effect
onEvent("predictions_askButton", "click", function() {
  var userQuestion = getText("predictions_input");
//the output
  if (userQuestion.trim() === "") {
    setText("fortuneText", "Please ask a question to receive your fortune!");
  } else {
    var randomFortune = fortunes[randomNumber(0, fortunes.length - 1)];
    setText("fortuneText", "Your fortune: " + randomFortune);
    playSound("ding-36029.mp3", false);
    
  }
});

//Pressing the genie lamp plays a smokey audio
onEvent("predictions_genielamp", "click", function( ) {
  playSound("14_humo-44247.mp3", false);
});



//pressing the home button in the predictions screen will bring the user back home
onEvent("predictions_home", "click", function( ) {
  setScreen("main_screen");
});




//*Advice screen*
//Clicking on "Click Here for Genie's advice!" will give the user advice
//the possible advice he will give:
var advice = [
  "Be kind: Be kind to yourself and others, and try to help out.",
  "Do what you love: Spend time doing what you love, even if it takes hard work.",
  "Develop positive habits: Habits are the building blocks of our lives.",
  "Stay humble: Stay humble, stay foolish, stay hungry, and keep learning from others.",
  "Be patient and persistent: Life is not so much what you accomplish as what you overcome.",
  "Treat others how you want to be treated.",
  "Take responsibility for your actions.",
  "Focus on what you can control.",
  "Just keep going. No matter what.",
  "Ask yourself why more often."
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
onEvent("advice_advicebutton", "click", function() {
  var randomAdvice = advice[getRandomNumber(0, advice.length - 1)];
  setText("advice_output", randomAdvice);
  playSound("sound-effect-twinklesparkle-115095.mp3", false);
//user can decide whether or not the advice was helpful
setProperty("advice_rating", "hidden", false);
setProperty("advice_thumbsup", "hidden", false);
setProperty("advice_thumbsdown", "hidden", false);
});
//advice soundeffects: supportive sound effect when pressing thumbsup, negative sound effect when pressing thumbsdown
onEvent("advice_thumbsup", "click", function( ) {
  playSound("sound://category_human/character_jimmy_thanks_1.mp3", false);
});
onEvent("advice_thumbsdown", "click", function( ) {
  playSound("studio-audience-awwww-sound-fx.mp3", false);
});



//pressing the home button in the advice screen will bring the user back home
onEvent("advice_home", "click", function( ) {
  setScreen("main_screen");
});


//*Jokes screen*
//pressing the genie will provide a joke
var jokes = [
  "What do you call a beehive without an exit? Unbelievable.",
  "Have you ever played quiet tennis? It's the same as regular tennis, but without the racket.",
  "What do you call a well-balanced horse? Stable.",
  "What do you call an angry carrot? A steamed veggie.",
  "What would bears be without bees? Ears.",
  "Why did the bicycle fall over? Because it was two tired.",
  "What did the triangle say to the circle? You’re pointless.",
  "What do lawyers wear to court? Lawsuits.",
  "What did one toilet say to another? You look flushed.",
  "How do you organize a space party? You planet."
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
onEvent("jokes_genie", "click", function() {
  var randomJoke = jokes[getRandomNumber(0, jokes.length - 1)];
  setText("jokes_output", randomJoke);
//user can decide whether or not the advice was helpful
setProperty("jokes_rating", "hidden", false);
setProperty("jokes_thumbsup", "hidden", false);
setProperty("jokes_thumbsdown", "hidden", false);
});

//jokes soundeffects: supportive sound effect when pressing thumbsup, negative sound effect when pressing thumbsdown
onEvent("jokes_thumbsup", "click", function( ) {
  playSound("sound://category_human/character_yury_laughing_1.mp3", false);
});
onEvent("jokes_thumbsdown", "click", function( ) {
  playSound("uhm-made-with-Voicemod.mp3", false);
});

//pressing the home button in the jokes screen will bring the user back home
onEvent("jokes_home", "click", function( ) {
  setScreen("main_screen");
});




//*Genie's history screen*
//pressing the home button in the advice screen will bring the user back home
onEvent("history_home", "click", function( ) {
  setScreen("main_screen");
});
