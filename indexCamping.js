document.getElementById('hawk').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content, .popup-background").addClass("active");
  var x = document.getElementById("hawkSound"); 
  x.play(); 
} 
document.getElementById('goat').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content2, .popup-background").addClass("active");
  var y = document.getElementById("goatSound"); 
  y.play(); 
} 
document.getElementById('cicada').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content3, .popup-background").addClass("active");
  var z = document.getElementById("cicadaSound"); 
  z.play(); 
}
document.getElementById('close').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content, .popup-background").removeClass("active");
    var x = document.getElementById("hawkSound");
    x.pause(); 
}
document.getElementById('close2').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content2, .popup-background").removeClass("active");
    var y = document.getElementById("goatSound"); 
    y.pause(); 
}
document.getElementById('close3').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content3, .popup-background").removeClass("active");
    var z = document.getElementById("cicadaSound"); 
    z.pause(); 
}