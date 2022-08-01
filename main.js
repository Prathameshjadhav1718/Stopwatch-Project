// Sets the hr min sec and ms parameters.
var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;

// Sets the timer to false.
var timer = false;

// Add click event listener.
document.getElementById("start").addEventListener("click", () => {
  timer = true;
  stopwatch();
});

// Add click event listener.
document.getElementById("pause").addEventListener("click", () => {
  timer = false;
});

// Click on the reset button.
document.getElementById("reset").addEventListener("click", () => {
  // Sets the timer to false.
  timer = false;
  // Sets the hr min sec and ms parameters.
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;

  // Returns the innerHTML of the element.
  document.getElementById("hr").innerHTML = "00";
  // Returns the minimum.
  document.getElementById("min").innerHTML = "00";

  // Gets the ms element by id
  document.getElementById("ms").innerHTML = "000";
  // Gets the sec element by id.
  document.getElementById("sec").innerHTML = "00";
});

// Starts a stopwatch for a given time.
let stopwatch = () => {
  // Computes the minimum and maximum values.
  if (timer == true) {
    ms += 1;

    // This method is used to calculate the number of seconds.
    if (ms == 100) {
      sec += 1;
      ms = 0;
    }
    // This method is used to calculate the number of milliseconds
    if (sec == 60) {
      min += 1;
      sec = 0;
      ms = 0;
    }

    // Computes the hr and ms.
    if (min == 60) {
      hr += 1;
      min = 0;
      ms = 0;
    }

    // Returns the minimum number of hours and milliseconds.
    var hrs = hr;
    var secs = sec;
    var mins = min;
    var mss = ms;

    // Returns a hexadecimal representation of the clock.
    if (hr < 10) {
      hrs = "0" + hrs;
    }

    // Computes the minimum number of digits.
    if (min < 10) {
      mins = "0" + mins;
    }

    // Converts seconds to 0. 0 seconds.
    if (sec < 10) {
      secs = "0" + secs;
    }

    // Converts the number to a hexadecimal string.
    if (ms < 10) {
      mss = "0" + mss;
    }

    // Getting the innerHTML of the element by id

    // Sets the milliseconds attribute of the document.
    document.getElementById("ms").innerHTML = mss;
    // Sets html to secs.
    document.getElementById("sec").innerHTML = secs;
    // Sets the min HTML.
    document.getElementById("min").innerHTML = mins;
    // Sets the HTML for the hrs element.
    document.getElementById("hr").innerHTML = hrs;

    // Sets the timeout to 10 seconds.
    setTimeout("stopwatch()", 10);
  }
};
