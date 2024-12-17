class Stack {
    constructor() {
        this.items = [];
    }
    
    add(element) {
        this.items.push(element);
    }
    
    remove() {
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);

console.log(stack.items);  // [1, 2, 4, 8]

stack.remove();
console.log(stack.items);  // [1, 2, 4]

console.log(stack.peek());  // 4
console.log(stack.isEmpty());  // false
console.log(stack.size());  // 3

stack.clear();
console.log(stack.items);  // []
