class Queue {
  constructor() {
    this.items = []; // Initialize an array to store queue items
  }

  // Adds a new element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Removes and returns the first element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Return a message if the queue is empty
    }
    return this.items.shift();
  }

  // Returns the first element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the number of elements in the queue
  size() {
    return this.items.length;
  }
}

export default Queue;
