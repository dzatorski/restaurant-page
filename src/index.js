import _ from "lodash";
import "./main.css";
import { headerHtml, mainHtml, menuHtml } from "./main";
// function headerComponent() {
//   const element = document.createElement(`div`);
//   element.classList = `header`;
//   element.textContent = `Capri Ristorante`;

//   return element;
// }
let main;
let menu;
let contact;
const menuSelection = () => {
  main = document.querySelector(`.home`);
  menu = document.querySelector(`.menu`);
  contact = document.querySelector(`.contact`);
};
const buildHome = () => {
  document.body.innerHTML = ``;
  document.body.insertAdjacentHTML(`afterbegin`, headerHtml);
  document.body.insertAdjacentHTML(`beforeend`, mainHtml);
};

const buildMenu = () => {
  document.body.innerHTML = ``;
  document.body.insertAdjacentHTML(`afterbegin`, headerHtml);
  document.body.insertAdjacentHTML(`beforeend`, menuHtml);
  menuSelection();
  headerActions();
};
const buildContact = () => {
  document.body.innerHTML = ``;
  document.body.insertAdjacentHTML(`afterbegin`, headerHtml);
  document.body.insertAdjacentHTML(`beforeend`, menuHtml);
  menuSelection();
  headerActions();
};

const headerActions = () => {
  main.addEventListener(`click`, () => {
    buildMain();
  });
  menu.addEventListener(`click`, () => {
    buildMenu();
  });
  contact.addEventListener(`click`, () => {
    buildMain();
  });
};

const buildMain = () => {
  buildHome();
  menuSelection();
  headerActions();
};
buildMain();
