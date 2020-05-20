//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content, .popup-background").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content, .popup-background").removeClass("active");
});

function myFunction() {
  var x = document.getElementsByClassName("popup-overlay");
  var y = document.getElementsByClassName("cicada");
  if (x.style.visibility="hidden") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
myFunction();