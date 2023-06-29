function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  module.exports = myFind;
  //Define the myFilter function
function myFilter(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

// Define the arraysEqual function
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0; // Return 0 for unsupported types
  }
  function myFirst(collection, n = 1) {
    return collection.slice(0, n);
  }
  
  function myLast(collection, n = 1) {
    return collection.slice(-n);
  }
  function MySortBy(collection, iteratees) {
    return collection.sort((a, b) => {
      for (let iteratee of iteratees) {
        const aValue = typeof iteratee === 'function' ? iteratee(a) : a[iteratee];
        const bValue = typeof iteratee === 'function' ? iteratee(b) : b[iteratee];
        
        if (aValue < bValue) {
          return -1;
        } else if (aValue > bValue) {
          return 1;
        }
      }
      
      return 0;
    });
  }
  function myFlatten(arr, shallow = false) {
    if (!Array.isArray(arr)) {
      return [arr];
    }
  
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (shallow && Array.isArray(arr[i])) {
        result.push(arr[i]);
      } else {
        result = result.concat(myFlatten(arr[i], shallow));
      }
    }
  
    return result;
  }