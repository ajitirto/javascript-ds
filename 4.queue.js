class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    addLast(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    removeFirst() {
      if (!this.head) {
        return null; // Handle empty list
      }
      const removedData = this.head.data;
      this.head = this.head.next;
      this.length--;
       if (!this.head) { // Special case: list becomes empty
          this.tail = null;
      }
      return removedData;
    }
  
    contains(data) {
       if (!this.head) {
          return false;
      }
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }
  
  class Queue {
    constructor() {
      this.items = new LinkedList();
    }
    clear() {
      this.items = new LinkedList(); // creates a new empty linked list.  More efficient.
    }
    contains(item) {
      return this.items.contains(item);
    }
    peek() {
      if (!this.items.head) {
        return undefined; // Handle empty queue case.  Important!
      }
      return this.items.head.data;
    }
    dequeue() {
      if (!this.items.head) {
        return undefined; // Handle empty queue
      }
      return this.items.removeFirst();
    }
    enqueue(item) {
      this.items.addLast(item);
    }
    get length() {
      return this.items.length;
    }
  }
  
  // create new Queue object
  let myQ = new Queue();
  
  // add two items
  myQ.enqueue("Item 1");
  myQ.enqueue("Item 2");
  
  // remove item
  let removedItem = myQ.dequeue();  // returns Item 1
  
  console.log("Removed Item:", removedItem);
  console.log("Queue Length:", myQ.length);
  console.log("Peek:", myQ.peek());
  