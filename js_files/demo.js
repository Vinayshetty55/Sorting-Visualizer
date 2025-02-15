const userArray = require("./inputArray").default.default.default;
var userarr = [];
for (var i = 0; i < 20; i++) userarr[i] = userArray[i];

console.log(userarr);
console.log(userArray);

function swap(el1, el2) {
  console.log("In swap()");

  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

function disableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
}

function enableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
}

function disableSizeSlider() {
  document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlider() {
  document.querySelector("#arr_sz").disabled = false;
}

function disableInputArrayBtn() {
  document.querySelector(".InputArray").disabled = true;
}

function enableInputArrayBtn() {
  document.querySelector(".InputArray").disabled = false;
}

function disableNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
}

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

let arraySize = document.querySelector("#arr_sz");

arraySize.addEventListener("input", function () {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector("#speed_input");

delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

let array = [];

const userarr = [
  20, 15, 60, 200, 150, 100, 50, 90, 180, 160, 120, 140, 88, 56, 23, 10, 46, 90,
];
createInputArray();

function createInputArray(noOfBars = userarr.value) {
  deleteChild();

  array = [];

  for (let i = 0; i < 20; i++) {
    array.push(userarr[i]);
  }

  const bars = document.querySelector("#bars");

  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.style.width = `30px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

createNewArray();

function createNewArray(noOfBars = 60) {
  deleteChild();

  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 200) + 1);
  }

  const bars = document.querySelector("#bars");

  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
  console.log("From newArray " + arraySize.value);
  console.log("From newArray with speed" + delay);
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});

const userArray = document.querySelector(".InputArray");
userArray.addEventListener("click", function () {
  console.log("From newArray " + userarr.value);
  console.log("From newArray with speed" + delay);
  enableSortingBtn();
  enableSizeSlider();
  createInputArray(arraySize.value);
});
