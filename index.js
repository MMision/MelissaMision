// document.getElementById('hawk').onclick = function() {
// //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
// $(".open").on("click", function() {
//   $(".popup-overlay, .popup-content, .popup-background").addClass("active");
// });
// }

// document.getElementById('goat').onclick = function() {
// //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
// $(".open").on("click", function() {
//   $(".popup-overlay, .popup-content2, .popup-background").addClass("active");
// });
// }

// document.getElementById('cicada').onclick = function() {
// //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
// $(".close, .popup-overlay").on("click", function() {
//   $(".popup-overlay, .popup-content3, .popup-background").removeClass("active");
// });
// }

// //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
// $(".close, .popup-overlay").on("click", function() {
//   $(".popup-overlay, .popup-content, .popup-content2, .popup-content3, .popup-background").removeClass("active");
// });



document.getElementById('hawk').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content, .popup-background").addClass("active");
}

document.getElementById('goat').onclick = function() {
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".popup-overlay, .popup-content2, .popup-background").addClass("active");
}

document.getElementById('cicada').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content3, .popup-background").addClass("active");
}

document.getElementById('close').onclick = function() {
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".popup-overlay, .popup-content, .popup-content2, .popup-content3, .popup-background").removeClass("active");
}
