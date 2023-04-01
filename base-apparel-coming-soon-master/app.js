let emailInput = document.getElementById("email");
document.querySelector(".form-input").addEventListener("submit", function (e) {
  //prevent the normal submission of the form
  e.preventDefault();
  let regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
  if (regex.test(emailInput.value) === true) {
    emailInput.style.borderColor = "";
    document.getElementById("lbltxt").style.display = "none";
    document.getElementById("lbltxt").style.visibility = "hidden";
    document.getElementById("error").style.display = "none";
    emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
  } else {
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    document.getElementById("lbltxt").style.display = "block";
    document.getElementById("lbltxt").style.visibility = "visible";
    document.getElementById("error").style.display = "block";
    emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
  }
});
