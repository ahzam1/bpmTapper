
let clicks = 0;
let playing = false;
let now = 0;
let bpmSaved=0;
let bpmArray = [];
let lastclick = 0;
const savebutton = document.getElementById('save');

const tapper = document.getElementById('tapper')
$(document).ready(function(){
  //anything we need to do when ready?
})

tapper.addEventListener('click', function() {
  if (clicks == 0) {
    //start a timer, and divide by clicks
    now = new Date().getTime()
  }
  let distance = new Date().getTime() - now
  var seconds = ((distance % (1000 * 60)) / 1000);

  if (seconds - lastclick > 3) {
    clicks = 1;
    now = new Date().getTime();
    tapper.innerHTML = "resetting...";
    $('#save').css("visibility", "hidden");
  }

  lastclick = seconds;
  var minutes = seconds / 60;
  var bpm = (clicks / minutes).toFixed(1);
  clicks++;
  if (clicks > 5) {
    tapper.innerHTML = bpm + " BPM";
    $('#save').css("visibility", "visible");
  }
})


savebutton.addEventListener('click', function() {
  var str = tapper.innerHTML.slice(0, -4);
  if(!bpmArray.includes(str)){
    bpmArray.push(str);
  }
  $('#savedbpm').css("visibility", "visible");
  $('#savedbpm').empty();
  document.getElementById('savedbpm').appendChild(makeUL(bpmArray));
})


function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + " BPM"));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
