var errorSound = document.getElementById("alertError")
function playSound() {
    errorSound.play();
}
playSound();
var numOfClicks = 0;
document.getElementById("eventClick").onclick = function() {
    numOfClicks += 1;
    eventClick.value = "Clicked "+ numOfClicks; 
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var greeted = getCookie("greeted");
  if (greeted != "") {
      return;
  } else {
    greeted = prompt("Welcome to Shane-Games!", "");
    if (greeted != "" && greeted != null) {
      setCookie("greeted", true, 7);
    }
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


