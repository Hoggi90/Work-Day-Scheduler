// This main function will run as soon as page is loaded.
// It will display the current day and add structure dynamically
$(function() {
  var currentDay = moment().format('dddd, DD MMMM YYYY');
  $('#currentDay').text(currentDay);

  
// This will check what day it is, and clear localstorage if it's next day
  localStorage.setItem("previousDay", currentDay);
  var previousDay = localStorage.getItem("previousDay");
  if (previousDay !== currentDay) {localStorage.clear();};


// These are some variables used to construct the time-block
  var startTime = moment("9:00", "HH:mm");
  var endTime = moment("18:00", "HH:mm");
  var currentTime = moment().format("HH:00");


// This for loop, creates each hourly time block for every loop
  for (var time = startTime; time.isBefore(endTime); time.add(1, 'hours')) {
  var hour = time.format("HH:00"); 
  $("<div>").addClass("row d-flex justify-content-center")
  .append($("<h1>").addClass("hour").text(hour))
  .append($("<textarea>").addClass("description " + (currentTime === hour ? 'present' : (currentTime > hour ? 'past' : 'future'))))
  .append($("<button>").addClass("saveBtn").html("<i class='fa fa-save'></i>"))
  .append($("<button>").addClass("clearBtn").html("<i class='fa fa-trash'></i>"))
  .appendTo(".container");};


// This nested function will save the entry to localstorage upon clicking the button
  $(".saveBtn").click(function(){
  $("#modal").modal('show');
  var description = $(this).prev(".description");
  var i = $(".description").index(description);
  var entryData = "scheduleEntry" + i;
  localStorage.setItem(entryData, description.val());
});



// This nested function clears the textarea and saved the entry to localstorage
$(".clearBtn").click(function(){
  $("#clearModal").modal('show');
  var description = $(this).prevAll(".description").first();
  var i = $(".description").index(description);
  var entryData = "scheduleEntry" + i;
  description.val("");
  localStorage.removeItem(entryData);
});



// This nested function retrieves the entry from localstorage
  $(".description").each(function(i) {
  var entryData = "scheduleEntry" + i;
  var stored = localStorage.getItem(entryData);
  $(this).val(stored || ""); }); });







