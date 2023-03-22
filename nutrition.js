console.log("nutrition.js");

let firstName = document.querySelector('#firstName');
let secondName = document.querySelector('#secondName');
let gender = document.getElementsByName('gender')[0];

let height = document.querySelector('#height');
let weight = document.querySelector('#weight');

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
    displayA();
  }
}

const BMIrange = {
  UNDERWEIGHT: "Underweight",
  NORMAL: "Normal",
  OVERWEIGHT: "Overweight",
  OBESE: "Obese",
};

let BMI = 0;
let range;
function BMIcalcul() {
  BMI = (testedWeight / testedHeight ** 2).toFixed(0)
  
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

  range = rangeResult(BMI)
}

function displayA() {
  BMIcalcul()
  let display = document.querySelector(".display");
  display.innerText =
    firstName.value +
    " " +
    secondName.value +
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
