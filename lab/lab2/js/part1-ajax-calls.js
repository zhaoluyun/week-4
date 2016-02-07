/* =====================
  Lab 1, Part 1

  Writing a successful ajax call requires treating functions as values.
  Treated as a values, functions can be thought of as recipes that other
  functions can use.

  The first 'recipe' you should write is one that returns true for strings with
  greater than or equal to 5 characters and false for those shorter than 5 characters.

  This recipe, given to underscore's _.filter will return only the elements we want.
===================== */
var isLengthOfFiveOrMore = function(string) {};

console.log("isLengthOfFiveOrMore success:",
  _.isEqual(_.filter(['this', 'is','a', 'test', 'testing'], isLengthOfFiveOrMore), ['testing']));


/* =====================
  Now write a 'recipe' to console.log the double of a number. Use the
  function you write along with underscore's _.each to log the double of every
  number in the provided array.
===================== */
var logDouble = function(num) {};
var theArray = [1, 5, 20, 100];


/* =====================
  Given this already defined function, define fizzbuzzArray so that, when mapped
  over, it will equal ['fizz', 'buzz', 'fizzbuzz'];
===================== */
var fizzbuzzArray = [];
var fizzbuzzFunc = function(num) {
  var str = '';
  if (num % 3 === 0) { str = 'fizz'; }
  if (num % 5 === 0) { str = 'buzz'; }
  if (str === '') { str = num.toString(); }
  return str;
};

console.log("fizzbuzz success:",
  _.isEqual(_.map(fizzbuzzArray, fizzbuzzFunc), ['fizz', 'buzz', 'fizzbuzz']));


/* =====================
  Writing ajax calls works very much like these higher order functions from
  underscore. Here's the ajax syntax:
  $.ajax(<URL GOES HERE>).done(<RECIPE GOES HERE>);

  Your job is to write functions and ajax calls for each of the three provided
  URLs to pull down and then store data collected through AJAX in variables so
  that you can work with it. To test your success, prove that you can log the
  resulting data to your console.
===================== */
var url1 = "https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json";
var url2 = "https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-crime-snippet.json";
var url3 = "https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-bike-crashes-snippet.json";


/* =====================
  Data you grab through ajax is just text. You'll need to parse it as javascript
  objects to really work with it. Use the function JSON.parse on the strings you
  stored for url1, url2, and url3 to parse your strings as javascript objects.
  Store them on the following variables.
===================== */
var objects1;
var objects2;
var objects3;

console.log("JSON parsing success:",
  typeof objects1 === 'object' && typeof objects2 === 'object' && typeof objects3 === 'object');


/* =====================
  Now that you've properly parsed your data, use _.each to plot one of the three
  datasets you've pulled down.
===================== */
//_.each(objects1, function() {});
//_.each(objects2, function() {});
//_.each(objects3, function() {});
