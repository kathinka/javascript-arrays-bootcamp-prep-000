var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];
var array2 =[];
var array3 = [];

function addElementToBeginningOfArray(array,element){
 var array2 = [element,...array];
 return (array2);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return (array);
}
function destructivelyRemoveElementToBeginningOfArray(array, element){
  array.shift();
  return(array);
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return (array);
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop();
  return (array);
}

function addElementToEndOfArray(array, element){
  array3 = [...array, element];
  return (array3);
}