var Queue = function() {
  var someInstance = {
    stored: {},
    count: 0
  };

  // Use an object with numeric keys to store values


  // Implement the methods below

  someInstance.enqueue = function(value) {
    //shift all elements to next key to make room for new value
    for (var key in someInstance.stored) {
      var keyNum = parseInt(key) + 1;
      someInstance.stored[keyNum.toString()] = someInstance.stored[key];
    }
    //set first key to enqueued value
    someInstance.stored['1'] = value;
    //increase queue size
    someInstance.count++;
  };

  someInstance.dequeue = function() {
    if (someInstance.count === 0) {
      return ('empty queue');
    }
    //store last value
    var lastKey = someInstance.count.toString();
    var temp = someInstance.stored[lastKey];
    //remove last key, value in queue
    delete someInstance.stored[lastKey];
    //decrement queue size
    someInstance.count--;
    //return last value
    return temp;
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};
