class Stack {
  constructor() {
    this.item = [];
  }
  push(ele) {
    this.item[this.item.length] = ele;
  }
  pop() {
    let temp = this.item[this.item.length - 1];
    this.item.length = this.item.length - 1;
    return temp;
  }
  top() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  size() {
    return this.item.length;
  }
  print() {
    console.log(this.item.toString());
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.top());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
