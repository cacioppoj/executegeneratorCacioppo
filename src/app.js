/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const random = number => Math.floor(Math.random() * number);

const generateExcuse = (listWho, listWhat, listWhen) => {
  return (
    listWho[random(listWho.length)] +
    " " +
    listWhat[random(listWhat.length)] +
    " " +
    listWhen[random(listWhen.length)]
  );
};

window.onload = function() {
  //write your code here
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = generateExcuse(who, what, when);
};
