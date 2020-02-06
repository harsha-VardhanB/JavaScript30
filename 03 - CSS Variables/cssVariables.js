function ready() {
    var allInputs = document.querySelectorAll('.controls input');

    allInputs.forEach(input => input.addEventListener('change',handleEvent));
    allInputs.forEach(input => input.addEventListener('mousemove',handleEvent));

    function handleEvent()
    {
        var inputName = this.name;
        var inputValue = this.value;
        var dataSuffix = this.dataset.sizing || '';
        //console.log(inputName+'--'+inputValue+'--'+dataSuffix);
        document.documentElement.style.setProperty(`--${inputName}`,inputValue+dataSuffix);
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