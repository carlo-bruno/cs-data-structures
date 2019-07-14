'use strict';

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * ✅ push
   * ✅ pop
   * ✅ peek
   *
   * length
   * reverse
   * search
   */

  push(data) {
    let node = new StackNode(data);

    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }

  pop() {
    if (this.top) {
      let popItem = this.top;
      this.top = this.top.next;
      return popItem;
    } else {
      console.log('stack is empty');
      return false;
    }
  }

  peek() {
    return this.top ? this.top.data : null;
  }
}

let stack = new Stack();

stack.push('one');
stack.push('two');
stack.push('three');

console.log(stack.peek());
stack;
