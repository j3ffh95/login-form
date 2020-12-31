const loginButton = document.getElementById("login-btn");
// loginButton.style.width = "auto";

loginButton.addEventListener("click", function (e) {
  const modal = document.getElementById("modal-container");

  modal.style.display = "block";
});

// Get the modal
var modal = document.getElementById("modal-container");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
