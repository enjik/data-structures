//pseudoclassical inheritance
var Stack = function() {
  this.someInstance = {};
  this.count = 0;
  this.storage = {};
};

//add push method to stackMethods
Stack.prototype.push = function(value) {
  //increase size
  this.count++;
  //add value as last key
  var lastKey = (this.count).toString();
  this.storage[lastKey] = value;
}

//add pop mehtod
Stack.prototype.pop = function() {
  //if stack is empty, return
  if (this.count === 0) {
    return ('stack is empty');
  }
  //store last value in stack
  var lastKey = this.count.toString()
  var temp = this.storage[lastKey];
  //remove last value from stack
  delete this.storage[lastKey]
  //decrease size
  this.count--;
  //return last value
  return temp;
}

//add size method
Stack.prototype.size = function() {
  return this.count;
}
