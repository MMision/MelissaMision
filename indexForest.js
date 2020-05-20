document.getElementById('horse').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content7, .popup-background").addClass("active");
  var d = document.getElementById("horseSound"); 
  d.play(); 
} 
document.getElementById('wolf').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content8, .popup-background").addClass("active");
  var e = document.getElementById("wolfSound"); 
  e.play(); 
} 
document.getElementById('cricket').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content9, .popup-background").addClass("active");
  var f = document.getElementById("cricketSound"); 
  f.play(); 
} 
document.getElementById('close7').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content7, .popup-background").removeClass("active");
    var d = document.getElementById("horseSound"); 
    d.pause(); 
}
document.getElementById('close8').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content8, .popup-background").removeClass("active");
    var e = document.getElementById("wolfSound"); 
    e.pause(); 
}
document.getElementById('close9').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content9, .popup-background").removeClass("active");
    var f = document.getElementById("cricketSound"); 
    f.pause(); 
}
