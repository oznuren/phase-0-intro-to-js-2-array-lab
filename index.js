// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function appendCat(name) {
  let newCats = cats.slice();
  newCats.push("Broom");
  return newCats;
}

function prependCat(name) {
  let newerCats = cats.slice();
  newerCats.unshift("Arnold");
  return newerCats;
}

function removeLastCat() {
  let catsPop = cats.slice();
  catsPop.pop();
  return catsPop;
}

function removeFirstCat() {
  let catsSh = cats.slice();
  catsSh.shift();
  return catsSh;
}
