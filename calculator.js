// Math Library
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Calculator section
function addInputs() {
  const numA = Number(num_a_input.value);
  const numB = Number(num_b_input.value);
  result_div.value = numA + " + " + numB + " = " + (numA + numB);
}

function subtractInputs() {
  const numA = Number(num_a_input.value);
  const numB = Number(num_b_input.value);
  result_div.value = numA + " - " + numB + " = " + (numA - numB);
}

function multiplyInputs() {
  const numA = Number(num_a_input.value);
  const numB = Number(num_b_input.value);
  result_div.value = numA + " * " + numB + " = " + numA * numB;
}

function divideInputs() {
  const numA = Number(num_a_input.value);
  const numB = Number(num_b_input.value);
  if (numB == 0) {
    result_div.value = "Error! Cannot divide by 0.";
  } else {
    result_div.value = numA + " / " + numB + " = " + numA / numB;
  }
}

// Pythagorean Calculator

// Methods
function findC() {
  const numA = Number(pyt_a_side.value);
  const numB = Number(pyt_b_side.value);
  if (numA > 0 && numB > 0) {
    removeError();
    pyt_c_side.value = ((numA ** 2) + (numB ** 2)) ** 0.5;
  } else {
    c_confirm.innerText = "Triangle sides cannot be 0 or less.";
    c_confirm.classList.add("input-error");
  }
}

function findA() {
  const numC = Number(pyt_c_side.value);
  const numB = Number(pyt_b_side.value);
  if (numC > 0 && numB > 0) {
    removeError();
    pyt_a_side.value = (numC ** 2 - numB ** 2) ** 0.5;
  } else {
    a_confirm.innerText = "Triangle sides cannot be 0 or less.";
    a_confirm.classList.add("input-error");
  }
}

function findB() {
  const numA = Number(pyt_a_side.value);
  const numC = Number(pyt_c_side.value);
  if (numA > 0 && numC > 0) {
    removeError();
    pyt_b_side.value = (numC ** 2 - numA ** 2) ** 0.5;
  } else {
    b_confirm.innerText = "Triangle sides cannot be 0 or less.";
    b_confirm.classList.add("input-error");
  }
}

function removeError() {
  a_confirm.innerText = "";
  b_confirm.innerText = "";
  c_confirm.innerText = "";
  a_confirm.classList.remove("input-error");
  c_confirm.classList.remove("input-error");
  b_confirm.classList.remove("input-error");
}
