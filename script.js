
  var appointText = "";
  var appointTime = "";
  var currentDate;
  var currentTime;
  var currentContainer;
  var tempArray = [];
  var storedAppointments;
  var returnedAppointments;
  var currentDayEl = document.getElementById("currentDay");

   
  setInterval(() => {
    var now = moment();
    var readAble = now.format('MMMM Do YYYY, h:mm:ss A');
    currentDayEl.textContent = readAble;
  }, 1000);

  function returnedAppointments() {
    storedAppointments = JSON.parse(localStorage.getItem("appointment"));
    if (storedAppointments !== null) {
      for (i = 0; i < storedAppointments.length; i++) {
        returnedAppointments = storedAppointments[i];
        details = returnedAppointments.details;
        timeIndex = returnedAppointments.time;
        timeIndex = timeIndex.replace(":00", '');
        if (details !== null) { }
        for (i = 0; i < storedAppointments.length; i++) {
          returnedAppointments = storedAppointments[i];
          details = returnedAppointments.details;
          timeIndex = returnedAppointments.time;
          timeIndex = timeIndex.replace(":00", '');
          if (details !== null) {
            $("#"+ timeIndex).children('div').children('input').children('textarea').val(details);
          }


        }


      }

    }

  returnedAppointments();

  for (i=0; i<=23; i++){
    currentContainer =i;
    if(currentTime == i){
      $('#' + currentContainer).addClass("present");
      $('#' + CurrentContainer).children('div').children('input').children("textarea").addClass("present");

    }
    else if (currentTime > i) {
      $('#' + currentContainer).addClass("past");
      $('#' + currentContainer).children('div').children('input').children("textarea").addClass("past");

  }
  else {
    $('#' + currentContainer).addClass("future");
    $('#' + currentContainer).children('div').children('input').children("textarea").addClass("future");
  }

  }
  }
  $(".saveBtn").click(function () {
    var appointText = $(this).parent('div').children('input').children('textarea').val();
    var appointTime = $(this).parent('div').parent().attr("id");
    appointment = {
        time: appointTime,
        details: appointText
    }
    tempArray = JSON.parse(localStorage.getItem("appointments"));
    if (tempArray === null) {
        localStorage.setItem('appointments', JSON.stringify([{ time: appointTime, details: appointText }]));
    }
    else {
        tempArray.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(tempArray));

    }
    $(this).parent('div').children('input').children('textarea').replaceWith($('<textarea>' + appointText.addClass("textarea") + '</textarea>'));
  });
