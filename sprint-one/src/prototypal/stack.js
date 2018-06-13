//prototypal inheritance
var Stack = function() {
  //create instance that inherits stackMethods' properties (methods)
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.count++;
  var lastKey = (this.count).toString();
  this.storage[lastKey] = value;
}

stackMethods.pop = function() {
  if (this.count === 0) {
    return ('stack is empty');
  }
  var lastKey = (this.count).toString();
  var temp = this.storage[lastKey];
  delete this.storage[lastKey];
  this.count--;
  return temp;
}

stackMethods.size = function() {
  return this.count;
}
