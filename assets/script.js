$(function() {
  var currentDay = moment().format('dddd, DD MMMM YYYY');
  $('#currentDay').text(currentDay);
  var previousDay = localStorage.getItem("previousDay");
  if (previousDay !== currentDay) {
    localStorage.clear();
  }
  localStorage.setItem("previousDay", currentDay);
  
  var startTime = moment("9:00", "HH:mm");
  var endTime = moment("18:00", "HH:mm");
  var currentTime = moment().format("HH:00");
  
  for (var time = startTime; time.isBefore(endTime); time.add(1, 'hours')) {
  var hour = time.format("HH:00"); 
  $("<div>").addClass("row d-flex justify-content-center")
  .append($("<h1>").addClass("hour").text(hour))
  .append($("<textarea>").addClass("description " + (currentTime === hour ? 'present' : (currentTime > hour ? 'past' : 'future'))))
  .append($("<button>").addClass("saveBtn").html("<i class='fa fa-save'></i>"))
  .appendTo(".container");
  }
  
  $(".saveBtn").click(function(){
  $("#modal").modal('show');
  var description = $(this).prev(".description");
  var i = $(".description").index(description);
  var entryData = "scheduleEntry" + i;
  localStorage.setItem(entryData, description.val());
  });
  
  $(".description").each(function(i) {
  var entryData = "scheduleEntry" + i;
  var stored = localStorage.getItem(entryData);
  $(this).val(stored || "");
  });
  });







