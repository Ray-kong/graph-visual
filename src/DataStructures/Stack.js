class Stack {
  constructor() {
    this.items = []; // init arrays
  }

  // Adds a new element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Removes and returns the top element of the stack
  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the number of elements in the stack
  size() {
    return this.items.length;
  }
}
