//psuedoclassical inheritance example
var Queue = function() {
  //create object to represent queue
  this.someInstance = {};
  this.count = 0;
  this.storage = {};
};

//add enqueue method
Queue.prototype.enqueue = function (value) {
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
Queue.prototype.dequeue = function() {
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
Queue.prototype.size = function() {
  return this.count;
}
