let pows = document.querySelectorAll('.pow');
let powsound = new Audio('audio/pow.wav');

pows.forEach(element => {
  element.addEventListener('mouseover', function() {
    powsound.play();
  });
});
