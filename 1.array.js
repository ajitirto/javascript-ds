// Create our array!
let groceries = ["Milk", "Eggs", "Cereal", "Salami", "Juice"];

// Access the first item
let first = groceries[0]; 

// console.log(first)

// Access the last item
let last = groceries[groceries.length - 1];

// console.log(last)

// Access 3rd item
let cereal = groceries[2];

// Insert item at the end
groceries.push("Potatoes");

// Insert item at the beginning
groceries.unshift("Ice Cream");


// Insert item after the 3rd item
groceries.splice(3, 0, "Cheese");

// Remove last item
groceries.pop();

// Remove first item
groceries.shift();

// Delete the 3rd item
groceries.splice(2, 1);
console.log(groceries)

// Find a particular item
let foundIndex = groceries.indexOf("Eggs"); // 1
// console.log(foundIndex)

let itemToFind = -1;

// Iterate through each item
for (let i = 0; i < groceries.length; i++) {
  let currentItem = groceries[i];

  // Return index of found item
  if (currentItem == "Juice") {
    itemToFind = i;
  }
}

console.log("Indeks 'Salami':", itemToFind);