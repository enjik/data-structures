var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //create new last key to store value
    var lastKey = (size + 1).toString();
    storage[lastKey] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size === 0) { return 'empty queue'};
    var lastKey = size.toString();
    var temp = storage[lastKey];
    delete storage[lastKey];
    size--;
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
