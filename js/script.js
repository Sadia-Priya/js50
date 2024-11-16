//exp1
function showTexts(){
	document.getElementById('st').innerHTML="Hello World";
}

//exp2
function changeText(){
	document.getElementById('ct').innerHTML="Hello There";
}

//exp3
function displayDateTime(){
	document.getElementById('ddt').innerHTML=Date();
}

//exp4
function bulbOn(){
	document.getElementById('bulb').src="images/onbulb.gif";
}
function bulbOff(){
	document.getElementById('bulb').src="images/bulb.gif";
}

//exp5
function changeStyle(){
	document.getElementById('cs').style.color="red";
}

//exp6
function showText(){
	document.getElementById('sh').style.display='block';
	document.getElementById('sh').innerHTML="hello";
}
function hideText(){
	document.getElementById('sh').style.display='none';
}

//exp7
function changeFont(){
	document.getElementById('cf').style.fontSize="30px";
}

//exp8
function checkSum(){
	let x = 5;
	let y = 2;
	let z = x + y;
	document.getElementById("chs").innerHTML = z;
}

//exp9
function checkSub(){
	let x = 5;
	let y = 2;
	let z = x - y;
	document.getElementById("chsb").innerHTML = z;
}

//exp10
function checkMul(){
	let x = 5;
	let y = 2;
	let z = x * y;
	document.getElementById("cm").innerHTML = z;
}

//exp11
function checkDiv(){
	let x = 5;
	let y = 2;
	let z = x / y;
	document.getElementById("cd").innerHTML = z;
}

//exp12
function checkRem(){
	let x = 5;
	let y = 2;
	let z = x % y;
	document.getElementById("cr").innerHTML = z;
}

//exp13
function myFunction(name,job) {
    document.getElementById("pm").innerHTML = "Welcome " + name + ", the " + job + ".";
}

//exp14
function convertDegree(){
	let c = 25;
	let d=c/5;
	let e=9*d;
	let f = e+32;
	document.getElementById("cdg").innerHTML = f;
}

//exp15
function convertCel(){
	let f = 77;
	let d=f-32;
	let e=d/9;
	let c = 5*e;
	document.getElementById("cdf").innerHTML = c;
}
//exp16
function checkInc(){
	let y = 2;
	let z=++y;
	document.getElementById("ci").innerHTML = z;
}

//exp17
function checkDec(){
	let y = 2;
	let z=--y;
	document.getElementById("cdec").innerHTML = z;
}

//exp18
function checkMax(){
document.getElementById("ma").innerHTML =
Math.max(0, 150, 30, 20, -8, -200);
}

//exp19
function checkMin(){
document.getElementById("mi").innerHTML =
Math.min(0, 150, 30, 20, -8, -200);
}

//exp20
function checkAbs(x){
document.getElementById("ab").innerHTML = Math.abs(x);
}

function numstr(){
	let x = 16 + "Volvo";
	document.getElementById("ns").innerHTML = x;
}

function UpdateVar(){
	let x;         // Now x is undefined
	x = 5;         // Now x is a Number
	x = "John";    // Now x is a String
	document.getElementById("demo").innerHTML = x;
}

function Sum(x,y){
	var z = x + y;
document.getElementById("s").innerHTML =
"The value of z is: " + z;
}

function checkPrice(){
	const price1 = 5;
	const price2 = 6;
	let total = price1 + price2;
	document.getElementById("p").innerHTML =
	"The total is: " + total;
}

// Example 25: Change Background Color
function changeBgColor() {
    document.body.style.backgroundColor = "lightblue";
}

function resetBgColor() {
    document.body.style.backgroundColor = "white";
}	

// Example 26: Change Image
function changeImage() {
    document.getElementById('img').src = "images/onbulb.gif";
}

function resetImage() {
    document.getElementById('img').src = "images/bulb.gif";
}

// Example 27: Show Alert Message
function showAlert() {
    alert("This is an alert message!");
}

// Example 28: Display User Input
function displayInput() {
    let userInput = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = userInput;
}

// Example 29: Change Button Text
function changeButtonText() {
    document.getElementById('btn').innerHTML = "Clicked!";
}

// Example 30: Toggle Visibility
function toggleVisibility() {
    let element = document.getElementById('toggleText');
    element.style.display = element.style.display === "none" ? "block" : "none";
}

// Example 31: Add Text Content
function addText() {
    document.getElementById('addText').innerHTML += " Added text.";
}

function clearText() {
    document.getElementById('addText').innerHTML = "";
}

// Example 32: Change Text Color
function changeTextColor() {
    document.getElementById('colorText').style.color = "red";
}

// Example 33: Change Font Size
function changeFontSize() {
    document.getElementById('fontSizeText').style.fontSize = "24px";
}

// Example 34: Hide/Show an Image
function hideImage() {
    document.getElementById('hideImg').style.display = "none";
}

function showImage() {
    document.getElementById('hideImg').style.display = "block";
}

// Example 35: Change Paragraph Alignment
function alignTextLeft() {
    document.getElementById('alignText').style.textAlign = "left";
}

function alignTextRight() {
    document.getElementById('alignText').style.textAlign = "right";
}

// Example 36: Update Date
function updateDate() {
    document.getElementById('date').innerHTML = new Date().toLocaleDateString();
}

// Example 37: Add Two Numbers
function addNumbers() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('sum').innerHTML = num1 + num2;
}

// Example 38: Subtract Two Numbers
function subtractNumbers() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = num1 - num2;
}

// Example 39: Change Text Background Color
function changeTextBgColor() {
    document.getElementById('textBg').style.backgroundColor = "yellow";
}

// Example 40: Count Button Clicks
let count = 0;
function countClicks() {
    count++;
    document.getElementById('clickCounter').innerHTML = "Button clicked " + count + " times.";
}

// Example 41: Show Current Time
function showTime() {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}

// Example 42: Capitalize Input Text
function capitalizeText() {
    let input = document.getElementById('textInput').value;
    document.getElementById('capitalizedText').innerHTML = input.toUpperCase();
}

// Example 43: small Input Text
function smallText() {
    let input = document.getElementById('textIn').value;
    document.getElementById('smallText').innerHTML = input.toLowerCase();
}

// Example 44: Change List Item
function changeListItem() {
    document.getElementById('listItem').innerHTML = "New List Item!";
}
//45
function boldText() {
    document.getElementById('bold').style.fontWeight = "bold";
}
//46
function italicText() {
    document.getElementById('italic').style.fontStyle = "italic";
}
//47
function underlineText() {
    document.getElementById('under').style.textDecoration = "underline";
}

// 48
function showSquare() {
    let num = parseFloat(document.getElementById('squareInput').value);
    document.getElementById('squareResult').innerHTML = "Square: " + (num * num);
}
