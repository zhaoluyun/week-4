/* =====================
  Lab 2, part 2: application state

  Spatial applications aren't typically as simple as putting data on a map. In
  addition, you'll usually need to change the stored data in response to user
  input. This lab walks you through writing a set of functions that are capable
  of building an interactive application.

  First, we'll need to write a function for loading points onto the map. Choose
  any dataset from part1 and write a function here to download it, parse it,
  make it into markers, and plot it. You'll know you've succeeded when you can
  see markers on the map.
===================== */
var downloadData = $.ajax("");
var parseData = function() {};
var makeMarkers = function() {};
var plotMarkers = function() {};


/* =====================
  Define the function removeData so that it clears the markers you've written
  from the map. You'll know you've succeeded when the markers that were
  previously displayed are immediately removed from the map.

  In real applications, this will typically happen in response to changes to the
  user's input.
===================== */
var removeMarkers = function() {};

/* =====================
  Optional, stretch goal
  Write the necessary code (however you can) to plot a filtered down version of
  the downloaded and parsed data.
  HINT: your code should be called inside the function body defined below.
===================== */
downloadData.done(function(data) {
  var parsed = parseData(data);
  var markers = makeMarkers(parsed);
  plotMarkers(markers);
  removeMarkers(markers);
});
