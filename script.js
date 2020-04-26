$(document).ready(function(){


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
  var readAble = moment().format('MMMM Do YYYY, h:mm:ss A');
  currentDayEl.textContent = readAble;
}, 1000);
var currentHour = moment().format('HH');
var currentHourInt = parseInt(currentHour);
  $("textarea").each(function(){
    var noww = parseInt($(this).attr("name"));
    if(noww < currentHourInt){
      $(this).addClass("past")
    }
    if(noww > currentHourInt){
      $(this).addClass("future")
    }
    if(noww === currentHourInt){
      $(this).addClass("present")
    }

    
  })
var input9am =$("#textarea9");
var input10am =$("#textarea10");
var input11am =$("#textarea11");
var input12pm =$("#textarea12");
var input13pm =$("#textarea13");
var input14pm =$("#textarea14");
var input15pm =$("#textarea15");
var input16pm =$("#textarea16");
var input17pm =$("#textarea17");
$("button").on("click",function(){
  localStorage.setItem("9am",(input9am.val()));
  localStorage.setItem("10am",(input10am.val()));
  localStorage.setItem("11am",(input11am.val()));
  localStorage.setItem("12pm",(input12pm.val()));
  localStorage.setItem("13pm",(input13pm.val()));
  localStorage.setItem("14pm",(input14pm.val()));
  localStorage.setItem("15pm",(input15pm.val()));
  localStorage.setItem("16pm",(input16pm.val()));
  localStorage.setItem("17pm",(input17pm.val()));
})
$("#textarea9").append(localStorage.getItem("9am"));
$("#textarea10").append(localStorage.getItem("10am"));
$("#textarea11").append(localStorage.getItem("11am"));
$("#textarea12").append(localStorage.getItem("12pm"));
$("#textarea13").append(localStorage.getItem("13pm"));
$("#textarea14").append(localStorage.getItem("14pm"));
$("#textarea15").append(localStorage.getItem("15pm"));
$("#textarea16").append(localStorage.getItem("16pm"));
$("#textarea17").append(localStorage.getItem("17pm"));




})