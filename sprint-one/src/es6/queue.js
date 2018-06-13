class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    //shift all values to make room for new first value
    for (var key in this.storage) {
      var nextKeyNum = parseInt(key) + 1;
      this.storage[nextKeyNum.toString()] = this.storage[key];
    }
    //set first value
    this.storage['1'] = value;
    //increment queue size
    this.count++;
  }
  dequeue() {
    //if queue is empty, return
    if (this.count === 0) {
      return ('queue is empty');
    }
    //store last value
    var lastKey = this.count.toString();
    var temp = this.storage[lastKey];
    //remove last value
    delete this.storage[lastKey];
    //decrement queue size
    this.count--;
    //return last value
    return temp;
  }
  size() {
    return this.count;
  }

}
