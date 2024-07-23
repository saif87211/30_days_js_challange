/** Task1: **/
const eventIntroBtn = document.querySelector("#btn-eventintro");
eventIntroBtn.addEventListener("click", () => {
  const eventIntro = document.querySelector("#event-intro");
  eventIntro.textContent =
    "An event handler is a function that is triggered when a specific event occurs in your program.";
});

/** Task2: **/
const image = document.querySelector("img");
const msgPera = document.querySelector("#msg");
image.addEventListener("dblclick", () => {
  image.style.visibility = "hidden";
  msgPera.textContent = "Photo has been removed";
});

/** Task3: **/
const box = document.querySelector("#box");
const boxColor = box.style.backgroundColor;
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "chocolate";
});
/** Task4: **/
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = boxColor;
});

/** Task5: **/
const input = document.querySelector("input");

input.addEventListener("keypress", (e) => {
  console.log(e.key);
});

/** Task6: **/
const displaySection = document.querySelector("#display-section");
input.addEventListener("keyup", () => {
  displaySection.innerText = input.value;
});

/** Task7: **/
const form = document.forms.registration;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  for (const field of formData.entries()) {
    console.log(field);
  }
});

/** Task8 **/
const dropdown = document.querySelector("#choice");
dropdown.addEventListener("change", () => {
  document.querySelector("#select-value").innerText = dropdown.value;
});

/** Task9 **/
const eventList = document.querySelector("#event-list");
eventList.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});

/** Task10 **/
const numberList = document.querySelector("#nubmer-list");
const addNewItemBtn = document.querySelector("#new-num");

numberList.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});

addNewItemBtn.addEventListener("click", () => {
  const fragment = document.createDocumentFragment();
  const li = document.createElement("li");
  li.innerText = Math.floor(Math.random() * 100);
  fragment.appendChild(li);
  numberList.appendChild(fragment);
});
