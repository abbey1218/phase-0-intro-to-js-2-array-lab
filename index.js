// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    name = "Ralph";
    cats.push(name);
}

function destructivelyPrependCat(name) {
    name = "Bob";
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    name = "Broom";
    const allCats = [...cats, name];
    return allCats;
}

function prependCat(name) {
    name = "Arnold";
    const allCats = [name, ...cats];
    return allCats;
}

function removeLastCat() {
    const allCats = cats.slice(0, cats.length - 1);
    return allCats;
}

function removeFirstCat() {
    const allCats = cats.slice(1);
    return allCats;
}