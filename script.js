//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.dataset.sound;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`./sounds/${soundFile}`);
    currentAudio.play();
  });
});

stopBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
