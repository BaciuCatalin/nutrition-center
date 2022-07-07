console.log("main.js");

let pacientName = document.querySelector("#name");
let prenume = document.querySelector("#prenume");

let genderName;
function genderFunction() {
  var gender = document.getElementsByName("gender")[0];
  genderName = gender.options[gender.selectedIndex].text;
}

let BMI;
let score;
function calculate() {
  let height = document.querySelector("#height").value;
  let bodyweight = document.querySelector("#weight").value;

  BMI = Math.round(bodyweight / (height * height));
  if (BMI < 18.5) {
    score = "underweight";
  } else {
    if (BMI >= 18.5 && BMI < 25) {
      score = "normal";
    } else {
      if (BMI >= 25 && BMI < 30) {
        score = "overweight";
      } else {
        score = "obese";
      }
    }
  }
  console.log(score);
}

function result() {
  calculate();
  genderFunction();

  let display = document.querySelector(".display");
  display.innerText =
    pacientName.value + " " + prenume.value + " | " + genderName + " | " + BMI + " | " + score;
}

