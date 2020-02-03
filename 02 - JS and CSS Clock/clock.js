function ready() {
    var secinitial = 90;
    var mininitial = 90;
    setInterval(mysecTimer, 5000);
    setInterval(myminTimer, 5000*12);

    function mysecTimer() {
        secinitial += 30;
        document.querySelector(".second-hand").style.transform = 'rotate('+secinitial+'deg)'; 
      }
      function myminTimer() {
        mininitial += 6;
        document.querySelector(".min-hand").style.transform = 'rotate('+mininitial+'deg)'; 
      }

  }

  
  
  
  
  // this is required for the (not so) edge case where your script is loaded after the document has loaded
  // https://developer.mozilla.org/en/docs/Web/API/Document/readyState
  if (document.readyState !== 'loading') {
    ready()
  } else {
    // the document hasn't finished loading/parsing yet so let's add an event handler
    document.addEventListener('DOMContentLoaded', ready)
  }