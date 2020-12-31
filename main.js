// Get the modal
const modal = document.getElementById("modal-container");

const loginButton = document.getElementById("login-btn");
// loginButton.style.width = "auto";

loginButton.addEventListener("click", function (e) {
  modal.style.display = "block";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
