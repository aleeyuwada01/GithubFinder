//Init the github Class
const github = new Github;

//Init the Ui class
const ui = new UI;

//get the input element
const input = document.querySelector("#search");

//Create the event handler
search.addEventListener("keyup", (e) => {
  //get the input value
  const username = e.target.value;

  //Test if the input its empty
  if (username !== "") {
    //Pass the username to Github method
    github.getUser(username)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          //Show alert if user not found
          ui.showAlert("User Not Found", "error");
        } else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    //Clear the input
    ui.clearInput();
  }
});