let x = 12

function fetchShoutInput() {
  //this is fetching input value for shoutInput
  const shoutInput = document.getElementById("shoutingInput").value;
  //this function replace the ID shoutInput1 with the text of shoutInput
  document.querySelector("span#shoutingInput1").innerText = shoutInput.toUpperCase()
}

//this function creates the event handle.

function setFormSubmissionEventHandler() {
  console.log("Submitform successfully reached.")
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    fetchShoutInput();
    let x = x + 5
    document.querySelector("div#shouting").removeAttribute("class");
  };
};

//on load, run functions.

window.onload = function() {
  console.log("scripts start executing!");
  setFormSubmissionEventHandler();
}