// onclick = "document.getElementById('id01').style.display='block'";
// style = "width: auto";

const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", function (e) {
  const modal = document.getElementById("id01");

  modal.style.display = "block";
});

// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
