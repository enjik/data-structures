var Queue = function() {
  //create object to represent queue
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  //transfer queueMethods' methods to someInstance
  _.extend(someInstance, queueMethods);
  return someInstance;
};

//object that holds methods
var queueMethods = {};

//add enqueue method
queueMethods.enqueue = function (value) {
  //shift the entire queue to make room for new value at beginning
  for (var key in this.storage) {
    var keyNum = parseInt(key) + 1;
    this.storage[keyNum.toString()] = this.storage[key];
  }
  //add value to start of queue
  this.storage['1'] = value;

  //increases size of queue
  this.count++;

}

//add dequeue method
queueMethods.dequeue = function() {
  //if queue is empty, return
  if (this.count === 0) {
    return ('queue is empty');
  }
  //store value at end of queue
  var lastKey = this.count.toString();
  var temp = this.storage[lastKey];
  //remove value from end of queue
  delete this.storage[lastKey];
  //decrease size of queue
  this.count--;
  //return value at end of queue;
  return temp;
}

//add size method
queueMethods.size = function() {
  return this.count;
}
