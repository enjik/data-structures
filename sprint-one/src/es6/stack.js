class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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
