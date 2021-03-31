# Stack + Queues

Both are linear data structures

## **Stack**

Linked list or array. 

FILO: First In Last Out. You can run push and pop operations

Use case: Undo operations (navigation component)

- `pop()`: Removes the top item from the stack
- `push(item)`: Adds an item to the top of the stack
- `peek()`: Returns the item at the top of the stack (but does not remove it)
- `isEmpty()`: Returns true if the stack is empty
- `get length()`: Returns the number of items in the stack

```jsx
class Stack {
    constructor() {
        this.stack = [];
    }

	get length() {
	    return this.stack.length;
	}

	push(item) {
	    return this.stack.push(item);
	}

	pop() {
	    return this.stack.pop();
	}

	peek() {
	    return this.stack[this.length - 1];
	}

	isEmpty() {
	    return this.length === 0;
	}
}
```

## **Queues**

FIFO aproach: First In First out. **Enqueue** at the back, and **dequeue** at the front (methods)

Use case: List of tasks that need to be executed in order of creation

```jsx
enqueue(item) {
    if(this.isFull()) {
        return false
    }
    this.data.push(item)
}

dequeue() {
   const value= this.data.shift() // remember to check length
   return value
}
```

Other: Priority queues, circular queues