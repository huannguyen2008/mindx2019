var song_container = document.getElementById("song_container");
console.log(song_container);

function boxInfo() {
  var el = document.getElementById("box");
  console.log("Height Box:" + el.clientHeight + "px");
  console.log("Width Box:" + el.clientWidth + "px");
}
var deleteButtons = document.getElementsByClassName("Delete");
for (var i = 0; i < deleteButtons.length; i++) {
  var deleteButton = deleteButtons[i];
  deleteButton.addEventListener('click',function(e){
    var btn = e.target;
    var div = btn.parentNode;
    div.remove();
  });
}
