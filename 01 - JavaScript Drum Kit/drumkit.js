function ready() {
    var allElements = document.getElementsByClassName('key');
    for(var i=0;i<allElements.length;i++)
    {
        // allElements[i].addEventListener('click',function(e)
        // {
        //     console.log(this);
        //     console.log(e.getAttribute('data-Key'));
        // },false);
        allElements[i].addEventListener('click',attachEvent());
    }
    function attachEvent()
    {
        console.log('hi');
    }
    //document.getElementsByClassName('key')
    //console.log(getid.getAttribute('id'));
   }

  
   
   // this is required for the (not so) edge case where your script is loaded after the document has loaded
   // https://developer.mozilla.org/en/docs/Web/API/Document/readyState
   if (document.readyState !== 'loading') {
     ready()
   } else {
     // the document hasn't finished loading/parsing yet so let's add an event handler
     document.addEventListener('DOMContentLoaded', ready)
   }