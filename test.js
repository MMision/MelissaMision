function myFunction() {
  var x = document.getElementById("navbarId");
  if (x.className === "navbar") {
    x.className += " responsive";
      document.getElementById("logo2").style.bottom = "80%";
      document.getElementById("openNav").style.bottom = "80%";
      document.getElementById("navDarken").style.display = "block";
  } else {
    x.className = "navbar";
    document.getElementById("logo2").style.bottom = "0";
    document.getElementById("openNav").style.bottom = "0";
    document.getElementById("navDarken").style.display = "none";
  }
}
