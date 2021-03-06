var Stack = function() {
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

//object to hold methods for stack
var stackMethods = {};

//add push method to stackMethods
stackMethods.push = function(value) {
  //increase size
  this.count++;
  //add value as last key
  var lastKey = (this.count).toString();
  this.storage[lastKey] = value;
}

//add pop mehtod
stackMethods.pop = function() {
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
stackMethods.size = function() {
  return this.count;
}
