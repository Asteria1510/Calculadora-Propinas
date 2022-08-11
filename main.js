let bill = document.querySelector(".inputs-section__bill-input");
let people = document.querySelector(".inputs-section__people-input");

let billNumber = parseFloat(bill.value);
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector(".result-amount__value");
let totalResult = document.querySelector(".result-total__value");

let tipValue = 0;

let botons = document.querySelectorAll(".btns__button");
botons.forEach((element) => {
  element.addEventListener("click", () => {
    removeActive();

    element.classList.add("btns__button--selected");
    tipValue = parseInt(element.innerText.slice(0, -1));

    updateActive();
    calculateTip();
  });
});

let activeTip;
let activeTipNumber = 5;
function updateActive() {
  activeTip = document.querySelector(".btns__button--selected");
  activeTipNumber = parseInt(activeTip.innerText.slice(0, -1));
}

function calculateTip() {
  let tipAmount = (billNumber * activeTipNumber) / 100;
  let tipAmountPerPerson = tipAmount / peopleNumber;
  tipResult.innerHTML = `$${tipAmountPerPerson.toFixed(2)}`;

  let totalPerPerson = (billNumber + tipAmount) / peopleNumber;
  totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

//Actualizando Bill
bill.addEventListener("input", (event) => {
  billNumber = parseFloat(bill.value);
  calculateTip();
});

//Acutalizando personas
let alert = document.querySelector(".alert");
people.addEventListener("input", () => {
  peopleNumber = parseInt(people.value);
  if (peopleNumber == 0) {
    people.style.borderColor = "red";
    alert.classList.add("error");

    // people.value = 1;
    peopleNumber = 1;
  } else {
    people.style.borderColor = "hsl(189, 41%, 97%)";
    alert.classList.remove("error");
  }
  calculateTip();
});

//actualizando Custom
let custom = document.querySelector(".btns__custom");
custom.addEventListener("input", () => {
  // custom.value = '';
  removeActive();
});

custom.addEventListener("input", (event) => {
  activeTipNumber = parseFloat(custom.value);
  console.log(event);
  calculateTip();
});

//Reset
let resetBtn = document.querySelector(".result-reset");
resetBtn.addEventListener("click", () => {
  bill.value = 0;
  billNumber = 0;
  people.value = "3";
  peopleNumber = 3;
  activeTipNumber = 3;
  custom.value = "Custom";
  calculateTip();
  removeActive();

  botons[0].classList.add("btns__button--selected");
  tipValue = parseInt(element.innerText.slice(0, -1));
});

function removeActive() {
  botons.forEach((element) => {
    element.classList.remove("btns__button--selected");
  });
}
