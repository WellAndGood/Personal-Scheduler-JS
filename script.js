today = moment()
currentHour = parseInt(moment("12:30 PM", "LT").format("H"))

// Displays the time of day
currentDay = $('#currentDay')
currentDay.text( today.format("[Today is] dddd, MMMM Do YYYY"))

var timeBlocks = $('.time-block')

saveButtons = document.querySelectorAll(".saveBtn")

$( document ).ready(function() {
    $('.time-block').each(function(index, value) {
        
        var obj = $(value)
        var timeBlock = parseInt(obj.attr("id"))
        console.log("thisBlock:",  timeBlock)
        
        var timeBlockMoment = moment(timeBlock, "HH").format("H")
        var timeBlockTextArea = $('.time-block .timeTextarea').eq(index)
        console.log(index, timeBlockTextArea)
        //var currentHour = moment().hour();
        console.log(currentHour)

        // ERROR: Does not create any changes in style. Console.logs still work, 
        // meaning that the time-factored coding is still respected.

        if (currentHour < timeBlockMoment) {
            console.log("this time: " , currentHour)
            console.log("time block: ", timeBlockMoment)
            timeBlockTextArea.removeClass("past present")  
            timeBlockTextArea.addClass("future") 
            console.log(timeBlockMoment + " is in the future of " + currentHour) 

        } else if (currentHour > timeBlockMoment) {
            console.log("this time: " , currentHour)
            console.log("time block: ", timeBlockMoment)
            timeBlockTextArea.removeClass("future present")
            timeBlockTextArea.addClass("past")
            console.log(timeBlockMoment + " is in the past of " + currentHour)
        } else {
            console.log("this time: " , currentHour)
            console.log("time block: ", timeBlockMoment)
            timeBlockTextArea.removeClass("future past")
            timeBlockTextArea.addClass("present") 
            return
        }
    });
})

// finds which element was saved 
// have to change 'forEach' to 'each' and 'addEventListener' to 'on'

saveButtons.forEach((choice) => {
    choice.addEventListener("click", function(event) {
        whichButton = $(event.target.dataset.timestamp)
        findTextArea = $(event.target).parent("div").children(".timeTextarea").children(".textEntry").val()
        storedItem = localStorage.setItem(whichButton, findTextArea)        
    })
})

// Gets the local Storage
$('.schedule #9AMTextArea').val(localStorage.getItem("9AM"))
$('.schedule #10AMTextArea').val(localStorage.getItem("10AM"))
$('.schedule #11AMTextArea').val(localStorage.getItem("11AM"))
$('.schedule #12PMTextArea').val(localStorage.getItem("12PM"))
$('.schedule #1PMTextArea').val(localStorage.getItem("1PM"))
$('.schedule #2PMTextArea').val(localStorage.getItem("2PM"))
$('.schedule #3PMTextArea').val(localStorage.getItem("3PM"))
$('.schedule #4PMTextArea').val(localStorage.getItem("4PM"))
$('.schedule #5PMTextArea').val(localStorage.getItem("5PM"))
