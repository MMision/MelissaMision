document.getElementById('seagull').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content4, .popup-background").addClass("active");
  var a = document.getElementById("seagullSound"); 
  a.play(); 
} 
document.getElementById('dolphin').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content5, .popup-background").addClass("active");
  var b = document.getElementById("dolphinSound"); 
  b.play(); 
} 
document.getElementById('orca').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content6, .popup-background").addClass("active");
  var c = document.getElementById("orcaSound"); 
  c.play(); 
} 
document.getElementById('close4').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content4, .popup-background").removeClass("active");
    var a = document.getElementById("seagullSound"); 
    a.pause(); 
}
document.getElementById('close5').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content5, .popup-background").removeClass("active");
    var b = document.getElementById("dolphinSound"); 
    b.pause(); 
}
document.getElementById('close6').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content6, .popup-background").removeClass("active");
    var c = document.getElementById("orcaSound"); 
    c.pause(); 
}
