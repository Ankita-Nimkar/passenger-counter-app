// document.getElementById("count").innerText = 5
const btn = document.querySelector("#increment-btn");
const saveBtn = document.querySelector("#save-btn");
const count = document.querySelector("#count");
const totalEntries = document.querySelector(".total");
let c = 0;
let totalArr = [];
let sum = 0;
function increament() {
  c = Number(count.innerText);
  c++;
  count.innerText = c;
}

function save() {
  totalArr.push(c);
  for (i = 0; i < totalArr.length; i++) {
    sum += totalArr[i];
  }
  totalEntries.innerText = sum;
  sum = 0;
}

function reset() {
  c = 0;
  count.innerText = c;
}
