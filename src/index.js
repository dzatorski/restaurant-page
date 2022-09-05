import _ from "lodash";
import "./main.css";
import {
  headerHtml,
  mainHtml,
  menuHtml,
  contactHtml,
  footerHtml,
} from "./main";
import icon from "./images/github.png";
import uber from "./images/uber-eats-logo.png";
// function headerComponent() {
//   const element = document.createElement(`div`);
//   element.classList = `header`;
//   element.textContent = `Capri Ristorante`;

//   return element;
// }
let main;
let menu;
let contact;
let footer;
const headerBuild = () => {
  document.body.innerHTML = ``;
  document.body.insertAdjacentHTML(`afterbegin`, headerHtml);
  menuSelection();
  headerActions();
};
const footerBuild = () => {
  document.body.insertAdjacentHTML(`beforeend`, footerHtml);
};

const menuSelection = () => {
  main = document.querySelector(`.home`);
  menu = document.querySelector(`.menu`);
  contact = document.querySelector(`.contact`);
  footer = document.querySelector(`.footer`);
};
const buildHome = () => {
  headerBuild();
  document.body.insertAdjacentHTML(`beforeend`, mainHtml);
  footerBuild();
};

const buildMenu = () => {
  headerBuild();
  document.body.insertAdjacentHTML(`beforeend`, menuHtml);
  footerBuild();
};
const buildContact = () => {
  headerBuild();
  document.body.insertAdjacentHTML(`beforeend`, contactHtml);
  footerBuild();
};

const headerActions = () => {
  main.addEventListener(`click`, () => {
    buildHome();
  });
  menu.addEventListener(`click`, () => {
    buildMenu();
  });
  contact.addEventListener(`click`, () => {
    buildContact();
  });
};
buildHome();
