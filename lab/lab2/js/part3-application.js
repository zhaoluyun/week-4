/* =====================
  Lab 2, part3: a full application

  We're going to use the skills we've just been practicing to write a full application
  which is responsive to user input.
  At your disposal are a set of global variables which track user input (see
  part3-main.js and part3-setup.js for more details on how this is done — we'll
  cover this topic at a later date). Their values will be logged to console to
  aid in debugging.

  In this lab, which is very much open-ended, your task is to use the value of
  these variables to define the functions below. Try to come up with interesting
  uses of the provided user input.

  Some ideas:
    There are two numeric fields: can you write this application so as to filter
    using both minimum and maximum?
    There is a boolean field: can you write your code to filter according to this
    boolean? (Try to think about how you could chop your data to make this meaningful.)
    There is a string field: can you write your code to filter/search based on user
    input?

  Remember, this is open-ended. Try to see what you can produce.
===================== */

/* =====================
  Define a resetMap function to remove markers from the map and clear the array of markers
===================== */
var resetMap = function() {
  _.each(myMarkers, function(value){
    map.removeLayer(value);
  });
          myMarkers = [];
};

/* =====================
  Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
  will be called as soon as the application starts. Be sure to parse your data once you've pulled
  it down!
===================== */
var data = [];
var getAndParseData = function() {
  $.ajax("https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json").done(function(value) {
    var parsed = JSON.parse(value);
    _.map(parsed, function(value){
      data.push(value);
    });
  });
};

/* =====================
  Call our plotData function. It should plot all the markers that meet our criteria (whatever that
  criteria happens to be — that's entirely up to you)
===================== */
var plotData = function() {
  var makeMarkers = function(parsed) {
    var filtered = _.filter(parsed,function(value){
      return((value.YEARBUILT<numericField2  && value.YEARBUILT>numericField1)|| value.DEVELOPER === stringField || booleanField===true);
    });

    var mark = _.map(filtered, function(value){
    return L.marker([value.LAT,value.LONG_]);
    });
    Mymarkers = mark;
  };

  var plotMarkers = function(mark) {
    _.each(mark, function(value){
      value.addTo(map);
    });
  };

    var markers = makeMarkers(data);
    plotMarkers(Mymarkers);

};
