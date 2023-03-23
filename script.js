var localSettings = {};
dayjs.locale(localSettings); 
$(function () {
    //this gets the current time from day.js libarey
    var currentHour = dayjs().format('H');
    //this function changes the color of each time block on whether its in 'past, present, and future' to suit the current time.
    function hourlyColor() {
        $('.time-block').each(function() {
            var blockHour = parseInt(this.id);
            $(this).toggleClass('past', blockHour < currentHour);
            $(this).toggleClass('present', blockHour === currentHour);
            $(this).toggleClass('furture', blockHour > currentHour);
        });
    }
//this fucntion will allow the user to keep what ever informtaion he inputs to the schedular once the save button is clicked
function textEntry(){
    $('.saveBtn').on('click', function(){
        var key = $(this).parent().attr('id');
        var value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
    });
}
//the function below willl refresh all the time blocks to suit the time based on whether the time is in the past(grey), present(red) and future(green)
function refreshColor(){
    $('.time-block').each(function(){
        var blockHour = parseInt(this.id);
        if (blockHour == currentHour){
            $(this).removeClass('past future').addClass('present');
        } else if (blockHour < currentHour) {
            $(this).removeClass('present future').addClass('past');
        } else {
            $(this).removeClass('past present').addClass('future');
        }
    });
}
//this will grab the users input from local storge and apply it to the time block that he saved it in
$('.time-block').each(function(){
    var key = $(this).attr('id');
    var value = localStorage.getItem(key);
    $(this).children('.description').val(value);
});
// this function updates the header of the page to match the time/date accouring to day.js
function updateTime() {
    var dateElement = $('#date');
    var timeElement = $('#time');
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    var currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
}
//call the main functions to the page
hourlyColor();
textEntry();
refreshColor();

setInterval(updateTime, 1000);
  });
  
