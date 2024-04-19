let ageRestriction = prompt("What is your age?")

if (ageRestriction < 21) {
    alert("Please wait until you have aged 21 years");
} else {
    alert("Welcome!");
}

let guess = prompt("What number am I thinking of between 1 and 10?")

if (guess == 8) {
    alert("Well done!");
} else {
    alert("Better luck next time!")
}

document.body.style.fontSize = ''