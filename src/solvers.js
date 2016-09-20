/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// takes an array of values and returns an array of all that array's permutations

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


window.permutate = function(arr0) {
  var results = [];

  // helper function 1
  var swap = function(arr1, i, j) {
    var temp = arr1[i];
    arr1[i] = arr1[j];
    arr1[j] = temp;
  };

  // helper function 2
  var recursivePermutate = function(arr2, index) {

    if (index === arr2.length) {
      return results.push(arr2.slice());
    }

    for (var j = index; j < arr2.length; j++) {
      swap(arr2, index, j);
      recursivePermutate(arr2, index + 1);
      swap(arr2, index, j);
    }

  };

  recursivePermutate(arr0, 0);
  return results;
};

window.checkMajorForConflict = function(boardArr) {
  var hashSet = {};
  for (var i = 0; i < boardArr.length; i++) {
    var majorIdx = boardArr[i] - i;
    if (hashSet[majorIdx] !== undefined) {
      return true;
    } else {
      hashSet[majorIdx] = true;
    }
  }
  return false;
};

window.checkMinorForConflict = function(boardArr) {
  var hashSet = {};
  for (var i = 0; i < boardArr.length; i++) {
    var minor = boardArr[i] + i;
    if (hashSet[minor] !== undefined) {
      return true;
    } else {
      hashSet[minor] = false;
    }
  }
  return false;
};

window.validator = function(boardArr) {
  return (checkMajorForConflict(boardArr)) || (checkMinorForConflict(boardArr));
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // console.log('running on', n);

  var boardMaker = function(n) {
    var newBoard = [];
    for (var i = 0; i < n; i++) {
      newBoard.push(i);
    }
    return newBoard;
  };
  var solutionCount = 0;
  var boardArr = boardMaker(n);
  var permutations = permutate(boardArr);

  for (var i = 0; i < permutations.length; i++) {
    if (!validator(permutations[i])) {
      solutionCount++;
    }
  }

  return solutionCount;
};
