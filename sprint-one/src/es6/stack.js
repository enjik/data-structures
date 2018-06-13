class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.count++;
    //add value as lastKey
    var lastKey = (this.count).toString();
    this.storage[lastKey] = value;
  }
  pop() {
    if (this.count === 0) {
      return ('stack is empty');
    }
    var lastKey = (this.count).toString();
    var temp = this.storage[lastKey];
    delete this.storage[lastKey];
    this.count--;
    return temp;

  }
  size() {
    return this.count;
  }

}
