// output song_container
var songContainer = document.getElementById("song_container");
console.log(songContainer);
//output = height and Width
function boxInfo() {
  var el = document.getElementById("box");
  console.log("Height Box:" + el.clientHeight + "px");
  console.log("Width Box:" + el.clientWidth + "px");
}
//delete song
var deleteButtons = document.getElementsByClassName("delete");
for (var i = 0; i < deleteButtons.length; i++) {
  var deleteButton = deleteButtons[i];
  deleteButton.addEventListener('click', (e) => {
    var btn = e.target;
    var div = btn.parentNode;
    div.remove();
  });
}
// In song_container, output = song, title and artist
var songOutput = songContainer.getElementsByClassName("song");
for (var i = 0; i < songOutput.length; i++) {
  console.log(songOutput[i]);
  var titleOutput = songOutput[i].querySelector(".title").textContent;
  console.log(titleOutput);
  var artistOutput = songOutput[i].querySelector(".artist").textContent;
  console.log(artistOutput);
}
// dit
var editButtons = document.getElementsByClassName("edit");
for (var i = 0; i < editButtons.length; i++) {
  var editButton = editButtediti];
  editButton.addEventListener('click', (e) => {
    var btn = e.target;
    var div = btn.parentNode;
    var id = div.getAttribute("song_id");
    console.log("song ID : " + id);
  })
}
// More
var moreButtons = document.getElementsByClassName("more");
for (var i = 0; i < moreButtons.length; i++) {
  var moreButton = moreButtons[i];
  moreButton.addEventListener('click', (e) => {
    var btn = e.target;
    var div = btn.parentNode;
    console.log("Song name: " + div.getElementsByClassName("title")[0].innerHTML + "\nArtist: " + div.getElementsByClassName("artist")[0].innerHTML + "\nSong ID: " + div.getAttribute("song_id"));
  })
}
//Add
function createButtons(class_name, text) {
  var btn = document.createElement("button");
  btn.className = class_name;
  btn.type = "button";
  btn.innerHTML = text;
  return btn;
}
function addButtons() {
  
}
