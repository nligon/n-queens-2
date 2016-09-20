var permutate = function(array) {
  var results = [];

  var swap = function(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  var recursivePermutate = function(array, index) {
    if (index === array.length) {
      results.push(array.slice());
      return;
    }

    for (var j = index; j < array.length; j++) {
      swap(array, index, j);
      recursivePermutate(array, index + 1);
      swap(array, index, j);
    }
  };
  recursivePermutate(array, 0);
  return results;
};