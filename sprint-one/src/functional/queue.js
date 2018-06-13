var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //shift all elements to next key to make room for new value
    for (var key in storage) {
      var keyNum = parseInt(key) + 1;
      storage[keyNum.toString()] = storage[key];
    }
    //set first key to enqueued value
    storage['1'] = value;
    //increase queue size
    size++;
  };

  someInstance.dequeue = function() {
    if (size === 0) {
      return ('empty queue');
    }
    //store last value
    var lastKey = size.toString();
    var temp = storage[lastKey];
    //remove last key, value in queue
    delete storage[lastKey];
    //decrement queue size
    size --;
    //return last value
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
