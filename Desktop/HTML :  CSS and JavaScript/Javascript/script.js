/*
// Task 1: Convert Strings to Numbers  🚀🚀🚀🚀
/*
The year is 3024, and you've discovered a dusty old time machine.
 It has a broken display showing "1999" as a string, 
 but the machine only accepts numbers to work. 
*/

// Do the following:
/* 1. Declare a string variable with the value "1999".
 2. Convert the string value of "1999" into a number.
 3. Display the number to the console to "fix" the time machine.
*/

let year = "1999";
let number=(year);
console.log(number);


// Task 2: Odd or Even 🚀🚀🚀🚀
/*
You’re a detective investigating a mysterious code. 
Your clue is a number that could be odd or even.
*/
// 1. Declare a variable with the number 27 (or another number of your choice).
// 2. Write an if/else statement to check if the number is odd or even.
// 3. If it’s odd, console.log("This number is odd. The thief is tricky!").
// 4. If it’s even, console.log("This number is even. The thief is neat!").

const task2 = 27;
if(task2 %2 !==0){
    console.log("This number is odd. The thief is tricky!")
}
else{
    console.log("This number is even. The thief is neat!")
}
// Task 3: Mood Checker 🚀🚀🚀🚀
// You are designing a basic mood tracker app. Write a script that:

/* 1. Prompts the user to share how they feel today (e.g., happy, sad, tired).
2. If the user enters "happy", console.log("I'm glad to hear that!").
3. If the user enters "sad", console.log("I'm sorry, hope you feel better soon.").
 4. If the user enters "tired", console.log("Make sure to get some rest.").
 5. For any other input, console.log("Thank you for sharing how you feel.").*/

 let mood = prompt("Tell me how you feel today (e.g:- happy, sad, tired):");
 if(mood == "happy"){
    console.log("I'm glad to hear that!");
 }
 else if (mood=="sad") {
    console.log("I'm sorry, hope you feel better soon.");
 } else if (mood=="tired") {
    console.log("Make sure to get some rest.");
    
 } else {
    console.log("Thank you for sharing how you feel.");  
 }

 
 // Task 4: Temperature Checker 🚀🚀🚀🚀
 
/* You are the operator of a remote weather station in Antarctica.

1. Prompt the user to enter a temperature in Celsius.
2. Convert the temperature to Fahrenheit using the formula F = (C × 9/5) + 32.
3. If the temperature is below 0°C, console.log("Ice Alert! It's freezing!").
4. If it’s above 30°C, console.log("Fire Alert! It's boiling!").
5. Otherwise, console.log("The temperature is normal.").
*/
let temperature = Number (prompt("enter a temperature in Celsius."));

let result = (temperature*9/5)+32;
if(temperature < 0){
    console.log("Ice Alert! It's freezing!");
}
 else if(temperature > 30){
    console.log("Fire Alert! It's boiling")
}
else{
    console.log("The temperature is normal.")
}

// *** STRETCH GOAL *** //

// Stretch 1: FIZZBUZZ

// You are an astronaut exploring Planet FizzBuzz. The inhabitants communicate using a strange counting system:

// 1. Print numbers from 1 to 50.
// 2. For multiples of 3, the aliens say "Fizz" instead of the number.
// 3. For multiples of 5, they say "Buzz".
// 4. For numbers divisible by both 3 and 5, they say "FizzBuzz".

// Your mission: Translate their counting system to console logs so humans can understand!

for(let i=0; i<=50; i++){
if(i % 3 == 0 ){
    console.log("Fizz")
}
else if(i % 5 == 0){
    console.log("Buzz")
}
else if(i % 3 && i & 5 == 0){
    console.log("FizzBuzz")
}
else{
    console.log(i)
}
}