var currentDay = moment();
$('#currentDay').text(currentDay.format('dddd, DD MMMM YYYY'));

var startTime = moment("9:00", "HH:mm");
var endTime = moment("18:00", "HH:mm");


$(function() {
    for (var time = startTime; time.isBefore(endTime); time.add(1, 'hours')) {
      var row = $("<div>").addClass("row d-flex justify-content-center");
      $("<h1>").addClass("hour").text(time.format("HH:mm")).appendTo(row);
      $("<textarea>").addClass("description").appendTo(row);
      $("<button>").addClass("saveBtn").html("<i class='fa fa-save'></i>").appendTo(row);
      row.appendTo(".container");
    }
  });
  