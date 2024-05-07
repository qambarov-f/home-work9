let user = prompt("Please enter your name");
let surName = prompt("Please enter your surname");
let age = Number(prompt("Please enter your age"));

if (age < 18) {
  alert("Sorry, " + user + " you are too young for register.");
} else if (age > 18) {
  alert("Sorry, " + user + " you are too old for register.");
} else if (age === 18) {
  alert(
    "Congratulations, " + user + " you completed registration successfully."
  );
} else {
  alert("Sorry,brooo you have to enter numbers");
}
