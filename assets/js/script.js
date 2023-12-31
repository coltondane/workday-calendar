// variables
var todaysDateEl = document.querySelector("#currentDay");
var containerEl = document.querySelector("#container");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    function getTextValue(event) {
      if (event.target.nodeName === "BUTTON") {
        var textArea = event.target.previousElementSibling.value
        console.log(textArea);
      }
      else if (event.target.nodeName === "I") {
        var textArea = event.target.parentNode.previousElementSibling.value
        console.log(textArea);
      }
    }
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function applyCSS() {

    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    function getLocal() {
      
    }
    // Add code to display the current date in the header of the page.
    function dateDisplay() {
      var date = dayjs().format('MMM DD, YYYY');
      todaysDateEl.textContent = "Todays Date: " + date;
      console.log(date);
    }
    dateDisplay();

    // add an event listener for the save buttons
    containerEl.addEventListener("click", getTextValue);
    console.log(containerEl);
  });