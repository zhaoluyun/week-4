/* =====================
   You should NOT need to change this file
===================== */

/* =====================
  Call getData to grab our dataset through a jQuery.ajax call ($.ajax)
===================== */
getData();

/* =====================
  The code here is triggered when you click on the button with ID #my-button
  ALL functions called here will be called EVERY time a clicke event fires
===================== */
$('button#my-button').click(function(e) {
  numericField1 = $('#num1').val();
  numericField2 = $('#num2').val();
  booleanField = $('#boolean')[0].checked;
  stringField = $('#string').val();


  /* =====================
    Call our resetMap function to remove markers from the map and clear our the array of markers
  ===================== */
  resetMap();

  /* =====================
    Call our plotData function. It should plot all the markers that meet our criteria
  ===================== */
  plotData();
});

