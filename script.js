let postButton = document.getElementById("postButton");
postButton.addEventListener("click", () => {
  let hiddenForm = document.getElementById("post-form");
  //   hiddenForm.style.display = "block";  refactored below
  hiddenForm.classList.add("show");
  hiddenForm.classList.remove("hidden");
});

let cancelPostButton = document.getElementById("cancelPostButton");
cancelPostButton.addEventListener("click", () => {
  let hiddenForm = document.getElementById("post-form").reset();
  hiddenForm.classList.add("hidden");
  hiddenForm.classList.remove("show");
});
