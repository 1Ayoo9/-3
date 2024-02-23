const gifButton = document.getElementById('gifButton');
const messageBox = document.getElementById('messageBox');
const centeredGif = document.querySelector('.centeredGif');

gifButton.addEventListener('click', function() {
  gifButton.style.display = 'none';
  messageBox.classList.remove('hidden');
  centeredGif.classList.remove('hidden');
});