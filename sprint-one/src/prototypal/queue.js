//prototypal inheritance
var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

//add enqueue method
queueMethods.enqueue = function(value) {
  //shift all values to make room for value at first key
  for (var key in this.storage) {
    var nextKey = parseInt(key) + 1;
    this.storage[nextKey] = this.storage[key];
  }
  //add value at first key
  this.storage['1'] = value;
  //increase size of queue
  this.count++;
}
//add dequeue method
queueMethods.dequeue = function() {
  //if queue is empty, return
  if (this.count === 0) {
    return ('queue is empty');
  }
  //store value at last key
  var lastKey = this.count.toString();
  var temp = this.storage[lastKey];
  //delete last value from queue
  delete this.storage[lastKey];
  //decrease size of queue
  this.count--;
  //return value at last key
  return temp;
}
//add size method
queueMethods.size = function() {
  return this.count;
}
