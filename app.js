console.log("test")
let clicks = 0;
let playing = false;
let now = 0;
let lastclick = 0;
const displayBPM = document.getElementById('bpm');

const tapper = document.getElementById('tapper')


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
    displayBPM.innerHTML = "resetting...";
  }

  lastclick = seconds;
  var minutes = seconds / 60;
  var bpm = (clicks / minutes).toFixed(1);
  clicks++;
  if (clicks > 5) {
    displayBPM.innerHTML = bpm + " BPM";
  }
})
