class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }
}

let queue = new Queue();

// Add items to queue
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);

console.log("Queue after adding items: ", queue.items);

// Remove the first item
queue.dequeue();

console.log("Queue after deleting the first item:", queue.items);

// Show the first item
console.log("First item of the queue =", queue.peek());

// Empty the queue
queue.clear();

console.log("After clearing the queue:", queue.items);
