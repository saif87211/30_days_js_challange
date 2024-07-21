/** Activity1 : Selecting Manipulating Elements **/
//Task:1
const heading = document.querySelector("#main-title");
heading.innerText = "Day9 DOM Manipulation";

//Task:2
const content = document.querySelector(".content-1");
content.style.backgroundColor = "#46546a";

/** Activity2 : Creating and Appednging Elemetns **/
//Task:3
const fragment1 = document.createDocumentFragment();
const info = document.querySelector(".dom");
const div = document.createElement("div");
div.textContent = "DOM - Docunbet Object Model";
fragment1.appendChild(div);

info.appendChild(fragment1);

//Task:4
const fragment2 = document.createDocumentFragment();
const list = document.querySelector("#dom-methods");
const li = document.createElement("li");

li.innerText = "document.querySelectorAll";

fragment2.appendChild(li);
list.appendChild(fragment2);

/** Activity3 : Removing Elements **/
//Task:5
document.querySelector("#false-statement").remove();

//Task:6
const mouseEvntesList = document.querySelector("#mouse-events");
const lastElement = mouseEvntesList.lastElementChild;
lastElement.remove();

/** Activity4 : Modifying attributes and classes **/
//Task:7
const img = document.querySelector("img");
img.setAttribute("src", "domtree.png");

img.classList.remove("large-font");

//Task:8
img.classList.add("dom-image");

/** Activity5 : Event Handling **/
//Task:9
const btn = document.querySelector("button");
const eventContent = document.querySelector("#add-content");
btn.addEventListener("click", () => {
  eventContent.textContent =
    eventContent.textContent +
    ": To perform some action on button click you need to use Event handlers. We have list of mouse event already show on upper list.";
});

//Task:10
eventContent.addEventListener("mouseover", () => {
  eventContent.style.borderColor = "red";
});
eventContent.addEventListener("mouseout", () => {
  eventContent.style.borderColor = "white";
});
