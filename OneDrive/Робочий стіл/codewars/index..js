// Implement a function which convert the given boolean value into its string representation.
//Note: Only valid inputs will be given.

function booleanToString(b){
    if(b){
      return "true";
    } else{
      return "false"
    }
  }

//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }

//   Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//   For example:
  
//   summation(2) -> 3
//   1 + 2
  
//   summation(8) -> 36
//   1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    let sum = 0;
    for(let i =0; i <=num; i++){
      sum += i;
    }
    return sum;
  }

//   Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//   Examples (input -> output)
//   6, "I"     -> "IIIIII"
//   5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    return s.repeat(n);
  }

//   Write a function which calculates the average of the numbers in a given list.

//   Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0){
      return 0;
    }
    var result = 0;
    for (i = 0; i < array.length; i++){
      result += array[i];
    }
    return result / array.length;
  }

  // Nathan loves cycling.

  // Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
  
  // You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

  function litres(time) {
    return Math.floor(time / 2);
  }

//   Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Infinity;
    for (let x = 0; x < args.length; x++) {
      if (args[x] < min) {
        min = args[x];
      }
    }
    return min;
  }
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
  let sum = 0
  for(let i=0; i < numbers.length; i++ ){
    sum += numbers[i]**2
  }
    return sum
}

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s/g, '')
}

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
const areaOrPerimeter = function(l , w) {
  if(l==w){
      return l*w
  }else{
      return (l+w)*2
  }
};

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
  return "Hello, " + name +" how are you doing today?"
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

