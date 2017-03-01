// added near the top
var message = document.getElementById('timeEvent');

var time = new Date().getHours();
var message = document.getElementById('timeEvent');
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

// getting your image element
var lolcat = document.getElementById('lolcat');

// defining your default image
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";


var messageText = "Good morning!";
if (time == 8) { 
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!"; 
}
else if (time < 12) {
  image = "https://s-media-cache-ak0.pinimg.com/236x/3d/3f/06/3d3f0658b604c1eb1fc48a8fff17d420.jpg";
  messageText = "Good morning!";
}
else if (time == 12) {
  image = "https://s-media-cache-ak0.pinimg.com/564x/e2/63/7e/e2637e066809ca54368535a8c4f5e2f1.jpg";
  messageText = "Lunch time";
}
else if (time > 18) { 
  image = "http://www.punjabigraphics.com/images/137/Cute-Cat-Wish-You-Good-Evening.jpg";
    messageText = "Good evening!";
} 
else if (time == 18) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  messageText = "Party time!";
}
else {
    messageText = "Good afternoon!";
}
  console.log(messageText);

// add JS near the bottom
message.innerText = messageText;
lolcat.src = image;



var showCurrentTime = function() {
  showCurrentTime();
}
var updateClock = function() {
  
  
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    var noon = 12;
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
 
var partyEvent = function() {
   
   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Over";
      partyTimeButton.style.background = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.background = "#222";
   }
};

  partyTimeButton.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
var napEvent = function() {
    napTime = napTimeSelector.value;
};
  

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
