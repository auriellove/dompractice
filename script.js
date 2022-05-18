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

let submitPostButton = document.getElementById("submitPostButton");
submitPostButton.addEventListener("click", submitPostHandler);
function submitPostHandler(event) {
  event.preventDefault();
  //want to get input values of form
  //want to create elements that will display values
  //then hide form and reset form values
  let postFormTitleValue = document.getElementById("title").value;
  let postFormAuthorValue = document.getElementById("author").value;

  let postFormContentValue = document.getElementById("content").value;
  let postForm = document.getElementById("post-form");
  postForm.classList.add("hidden");
  postForm.classList.remove("show");

  console.log(postFormAuthorValue);
  console.log(postFormTitleValue);
  console.log(postFormContentValue);

  postForm.reset();
}
