// Testing variable declaration for time of day
// currentHour = parseInt(moment("12:30 PM", "LT").format("H"))

// Displays the time of day
currentDay = $('#currentDay')
today = moment()
currentDay.text( today.format("[Today is] dddd, MMMM Do YYYY"))

// Variable declaration
var timeBlocks = $('.time-block')
var saveButtons = document.querySelectorAll(".saveBtn")
var textAreas = $('.textEntry')
var lockIcon = $('.lock')
var clearCalButton = $('.btn-warning')
var containerDiv = $('container')

// When the document loads
$( document ).ready(function() {
    $('.time-block').each(function(index, value) {
        
        var obj = $(value)
        var timeBlock = parseInt(obj.attr("id"))
        var timeBlockMoment = moment(timeBlock, "HH").format("H")
        var timeBlockTextArea = $('.time-block .timeTextarea').eq(index)
        var currentHour = moment().hour();

        // Time-dependent formatting of textarea parent div
        
        // Present Hour; assigns "present" class
        if (currentHour < timeBlockMoment) {
            timeBlockTextArea.removeClass("past present")  
            timeBlockTextArea.addClass("future") 

        // Past Hours; assigns "past" class
        } else if (currentHour > timeBlockMoment) {
            timeBlockTextArea.removeClass("future present")
            timeBlockTextArea.addClass("past")

        // Future Hours; assigns "future" class
        } else {
            timeBlockTextArea.removeClass("future past")
            timeBlockTextArea.addClass("present") 
            return
        }
    });
})

// By clicking one of the save buttons, you save the contents of the textarea to localStorage, to be retrieved at a later time.

saveButtons.forEach((choice) => {
    choice.addEventListener("click", function(event) {
        
        // These variables act as a pseudo event delegation, allowing you to click on both the container div and the emoji and get the same result
        var whichButton = event.target.parentElement.dataset.timevalue || event.target.parentElement.parentElement.dataset.timevalue;
        var findTextArea = $(event.target).parent("div").children(".timeTextarea").children(".textEntry").val() || $(event.target).parent("div").parent("div").children(".timeTextarea").children(".textEntry").val() || ""
        var storedItem = localStorage.setItem(whichButton, findTextArea);

        // Changes the state of the lockpad emoji from unlocked to locked. 
        var lockCheck = event.target.querySelector('.lock') || event.target
        if (lockCheck.innerText === "🔓") {
            lockCheck.innerText = "🔐"
        } else if (lockCheck.innerText === "null") {
            // console.log("Failure to lock or unlock");
            return
        };
    });
});

// Gets the local Storage each time the page loads 
$('.schedule #9AMTextArea').val(localStorage.getItem("9"))
$('.schedule #10AMTextArea').val(localStorage.getItem("10"))
$('.schedule #11AMTextArea').val(localStorage.getItem("11"))
$('.schedule #12PMTextArea').val(localStorage.getItem("12"))
$('.schedule #1PMTextArea').val(localStorage.getItem("13"))
$('.schedule #2PMTextArea').val(localStorage.getItem("14"))
$('.schedule #3PMTextArea').val(localStorage.getItem("15"))
$('.schedule #4PMTextArea').val(localStorage.getItem("16"))
$('.schedule #5PMTextArea').val(localStorage.getItem("17"))

// Undoes the 'lock' feature by typing in the textarea
textAreas.on("keyup", function(event) {
    // console.log(event.key);
    updateSaveState = $(this).parent().parent().children(2).last().contents();
    updateSaveState.text("🔓")
});

// Clears localStorage and the textareas by clicking the 'Clear Calendar' button 
clearCalButton.on("click", containerDiv, function(index) {
    var clearConfirm = confirm("Are you sure you want to delete your calendar memory?")
    if (clearConfirm) {
        localStorage.clear();
        location.reload();
    }
});