// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var minus50 = document.getElementById("minus50");
var minus10 = document.getElementById("minus10");
var minus1 = document.getElementById("minus1");
var plus1 = document.getElementById("plus1");
var plus10 = document.getElementById("plus10");
var plus50 = document.getElementById("plus50");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand4Btn = document.getElementById("rand4");
var rand1El = document.getElementById("rand1-out");
var rand2El = document.getElementById("rand2-out");
var rand3El = document.getElementById("rand3-out");
var rand4El = document.getElementById("rand4-out");
var num1 = document.getElementById("rand-in1");
var num2 = document.getElementById("rand-in2");
var randoms = document.getElementById("body");
var randHtml = document.getElementById("HTML");
var randSizebtn = document.getElementById("random-size");
var randColourbtn = document.getElementById("random-rgb");
var resetbtn = document.getElementById("reset");
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
minus50.addEventListener("click", sub50);
minus10.addEventListener("click", sub10);
minus1.addEventListener("click", sub1);
plus1.addEventListener("click", add1);
plus10.addEventListener("click", add10);
plus50.addEventListener("click", add50);

function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter--;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;
  stringInEl.value = "";

  story += newWord + " ";
  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

rand1Btn.addEventListener("click", rand1);
rand2Btn.addEventListener("click", rand2);
rand3Btn.addEventListener("click", rand3);
rand4Btn.addEventListener("click", rand4);
randSizebtn.addEventListener("click", fontSize);
randColourbtn.addEventListener("click", randColour);
resetbtn.addEventListener("click", reset);

function rand1() {
  rand1El.innerHTML = Math.random().toFixed(1);
}

function rand2() {
  rand2El.innerHTML = Math.random().toFixed(2) * 100;
}

function rand3() {
  rand3El.innerHTML = Math.random().toFixed(1) * 10 - 5;
}

function rand4() {
  rand4El.innerHTML = Math.floor(
    Math.random() * (parseInt(num2.value) - parseInt(num1.value) + 1) +
      parseInt(num1.value)
  );
}

function fontSize() {
  var fs = Math.floor(Math.random() * 50); // font size
  randoms.style.fontSize = fs + "px";
}

function randColour() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  randHtml.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function reset() {
  r = 154;
  g = 228;
  b = 212;
  randHtml.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
