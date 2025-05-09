class Stack {
    constructor(...items) {
      this.items = items;
    }
    clear() {
      this.items.length = 0;
    }
    clone() {
      return new Stack(...this.items);
    }
    contains(item) {
      return this.items.includes(item);
    }
    peek() {
      let itemsLength = this.items.length;
      let item = this.items[itemsLength - 1];
      
      return item;
    }
    pop() {
      let removedItem = this.items.pop();
      return removedItem;
    }
    push(item) {
      this.items.push(item);
      return item;
    }
    get length() {
      return this.items.length;
    }
}

let myStack = new Stack();
       
// Add items
myStack.push("One");
myStack.push("Two");
myStack.push("Three!");
 
// Preview the last item
myStack.peek(); // Three
 
// Remove item
let lastItem = myStack.pop();
console.log(lastItem) // Three
 
myStack.peek(); // Two
 
// Create a copy of the stack
let newStack = myStack.clone();
 
// Check if item is in Stack
newStack.contains("Three")  // false
