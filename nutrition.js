console.log("nutrition.js");

document.querySelector("#height-unit").innerHTML = "( cm )";
document.querySelector("#weight-unit").innerHTML = "( kg )";

let measurement;
function changeMeasurement() {

  measurement = document.querySelector("#measurement").value;
  if (measurement === "us") {
    document.querySelector("#height-unit").innerHTML = "( in )";
    document.querySelector("#weight-unit").innerHTML = "( lb )";
  } else {
    document.querySelector("#height-unit").innerHTML = "( cm )";
    document.querySelector("#weight-unit").innerHTML = "( kg )";
  }
}

let firstName = document.querySelector("#firstName");
let secondName = document.querySelector("#secondName");
let gender = document.getElementsByName("gender")[0];

let genderType;
function result() {
  genderType = gender.options[gender.selectedIndex].text;
  testedValue();
}

let testedHeight;
let testedWeight;
function testedValue() {
  let errors = false;

  testedHeight = testUserValue(height, "Please input a real value for Height!");
  if (testedHeight == false) {
    errors = true;
  }

  testedWeight = testUserValue(weight, "Please input a real value for Weight!");
  if (testedWeight == false) {
    errors = true;
  }
  if (errors) {
    return;
  } else {
    if (testedHeight == parseInt(testedHeight)) {
      testedHeight = testedHeight / 100;
    }
    displayBMI();
  }
}

const BMIrange = {
  UNDERWEIGHT: "Underweight",
  NORMAL: "Normal",
  OVERWEIGHT: "Overweight",
  OBESE: "Obese",
};
debugger;
let BMI;
let range;
function BMIcalcul() {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (measurement === "us") {
    BMI = ((weight / (height * height)) * 703).toFixed(0);
  } else {
    BMI = (weight / (height / 100) ** 2).toFixed(0);
  }

  const rangeResult = (BMI) => {
    if (BMI < 18.5) {
      return BMIrange.UNDERWEIGHT;
    }
    if (BMI < 25) {
      return BMIrange.NORMAL;
    }
    if (BMI < 30) {
      return BMIrange.OVERWEIGHT;
    }
    return BMIrange.OBESE;
  };
  range = rangeResult(BMI);
}

function displayBMI() {
  BMIcalcul();
  let display = document.querySelector(".display");
  display.innerText =
    firstName.value +
    " " +
    secondName.value +
    " | " +
    age.value +
    " | " +
    genderType +
    " | BMI:" +
    BMI +
    " | " +
    range;
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
