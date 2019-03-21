// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function clean(html) {
  return $($.parseHTML(html)).text();
}

var config = {
  apiKey: "AIzaSyDlrx5ybuXIEf6jR689nvCZi6vosVZKOvk",
  authDomain: "wild-a105e.firebaseapp.com",
  databaseURL: "https://wild-a105e.firebaseio.com",
  projectId: "wild-a105e",
  storageBucket: "wild-a105e.appspot.com",
  messagingSenderId: "787186518008"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var chat = "";

$("#add-chat").on("click", function(event) {
  event.preventDefault();

  name = clean(
    $("#name-input")
      .val()
      .trim()
  );
  chat = clean(
    $("#chat-input")
      .val()
      .trim()
  );

  $("#chat-input").val("");

  database.ref().push({
    name: name,
    chat: chat,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

database.ref().on(
  "child_added",
  function(snapshot) {
    var sv = snapshot.val();

    console.log(sv.name);
    console.log(sv.chat);

    $("#chat-display").append(`<strong>${sv.name}</strong> ${sv.chat} <br />`);
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
