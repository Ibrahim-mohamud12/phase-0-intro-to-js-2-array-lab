const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // Removes the first cat, modifying the original array
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without modifying the original
}

function destructivelyRemoveLastCat() {
  cats.pop(); // Removes the last cat, modifying the original array
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without modifying the original
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array with the new cat at the beginning
}

function appendCat(name) {
  return [...cats, name]; // Returns a new array with the new cat at the end
}

module.exports = { 
  cats, 
  destructivelyAppendCat, 
  destructivelyPrependCat, 
  destructivelyRemoveFirstCat, 
  destructivelyRemoveLastCat, 
  removeFirstCat, 
  removeLastCat, 
  prependCat, 
  appendCat 
};




