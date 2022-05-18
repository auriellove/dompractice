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

  // console.log(postFormAuthorValue);
  // console.log(postFormTitleValue);
  // console.log(postFormContentValue);
  addPost(postFormTitleValue, postFormAuthorValue, postFormContentValue);
  postForm.reset();
}

function addPost(
  postFormTitleValue,
  postFormAuthorValue,
  postFormContentValue
) {
  let makeAPostList = document.createElement("li");
  let postList = document.getElementById("post-list");
  const postH1 = document.createElement("h1");
  const postH3 = document.createElement("h3");
  const postP = document.createElement("p");

  postH1.innerText = postFormTitleValue;
  postH3.innerText = postFormAuthorValue;
  postP.innerText = postFormContentValue;

  makeAPostList.appendChild(postH1);
  makeAPostList.appendChild(postH3);
  makeAPostList.appendChild(postP);

  postList.appendChild(makeAPostList);
}
