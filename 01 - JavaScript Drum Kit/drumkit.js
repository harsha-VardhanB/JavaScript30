function ready() {
 
  document.addEventListener('keyup', function (e) {
    var pressKeyCode = e.keyCode;
    var container = document.querySelector(".keys");
    var selectElement = container.querySelector(`div[data-key='${pressKeyCode}']`);
    var selectAudioElement = document.querySelector(`audio[data-key='${pressKeyCode}']`);
    if(selectElement != null)
    {
      selectElement.classList.remove('playing');
    }
  });
  document.addEventListener('keydown', function (e) {
    var pressKeyCode = e.keyCode;
    var container = document.querySelector(".keys");
    var selectElement = container.querySelector(`div[data-key='${pressKeyCode}']`);
    var selectAudioElement = document.querySelector(`audio[data-key='${pressKeyCode}']`);
    if(selectElement != null)
    {
      selectElement.classList.add('playing');
      selectAudioElement.currentTime = 0;
      selectAudioElement.play();
    }
  });
}



// this is required for the (not so) edge case where your script is loaded after the document has loaded
// https://developer.mozilla.org/en/docs/Web/API/Document/readyState
if (document.readyState !== 'loading') {
  ready()
} else {
  // the document hasn't finished loading/parsing yet so let's add an event handler
  document.addEventListener('DOMContentLoaded', ready)
}