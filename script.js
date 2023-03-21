console.log('heheheheheheh');
var localSettings = {};
dayjs.local(localSettings); 
$(function () {
    var currentHour = dayjs().format('H');
    function hourColor() {
        $('.time-block').each(function() {
            var blockHour = parseInt(this.id);
            $(this).toggleClass('past', blockHour < currentHour);
            $(this).toggleClass('present', blockHour === currentHour);
            $(this).toggleClass('furture', blockHour > currentHour);
        });
    }

function textEntry(){
    $('.saveBtn').on('click', function(){
        var key = $(this).parent().attr('id');
        var value = $(this).sibling('.description').val();
        localStorage.setItem(key. value);
    });
}

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
$('.time-block').each(function(){
    var key = $(this).attr('id');
    var value = localStorage.getItem(key);
    $(this).children('.description').val(value);
});

function updateTime() {
    var dateElement = $('#date');
    var timeElement = $('#time');
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    var currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
}

hourColor();
textEntry();
refreshColor();

setInterval(updateTime, 1000);
  });
  