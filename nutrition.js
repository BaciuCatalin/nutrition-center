console.log("nutrition.js");

let firstName = document.querySelector("#firstName");
let secondName = document.querySelector("#secondName");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight"); 
let gender = document.getElementsByName("gender")[0];

let genderType;
function result() {
  genderType = gender.options[gender.selectedIndex].text;
  testedValue();
}


let testedHeight = 0;
let testeWeight = 0;
function testedValue() {
  let errors = false;

  testedHeight = testUserValue(height, "Please input a real value for Height!");
  if (testedHeight == false) {
    errors = true;
  }

  testeWeight = testUserValue(weight, "Please input a real value for Weight!");
  if (testeWeight == false) {
    errors = true;
  }

  if (errors) {
    return;
  } 
  else {
    if (testedHeight == parseInt(testedHeight)) {
      testedHeight = testedHeight / 100;
    }
    calculate();
  }
}


let BMI;
let range;
function calculate() {
  BMI = Math.round(testeWeight / (testedHeight * testedHeight));
  if (BMI < 18.5) {
    range = "underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    range = "normal";
  } else if (BMI >= 25 && BMI < 30) {
    range = "overweight";
  } else {
    range = "obese";
  }

  let display = document.querySelector(".display");
  display.innerText = firstName.value + " " + secondName.value + " | " + genderType + " | BMI:" + BMI + " | " + range;
}


function testUserValue(textbox, errorMsg) {
  textbox.style.borderColor = "black";
  let nr = textbox.value;
  if (checkNumber(nr) === false) {
    alert(errorMsg);
    textbox.style.borderColor = "red";
    return false;
  }
  return Number(nr);
}
