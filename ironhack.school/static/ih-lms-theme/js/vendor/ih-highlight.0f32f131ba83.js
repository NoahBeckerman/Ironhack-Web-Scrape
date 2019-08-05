(function(){
  // Enable highlight.js on first load
  hljs.initHighlightingOnLoad();
    
  var lerningUnitNavigationControls = Array.from(document.querySelectorAll('.ih-js-fire-highlighting-controls'));

  lerningUnitNavigationControls.forEach(function(control) {
    control.addEventListener('click', function(event) {
      enableHighlighting();
    })
  })

  var courseContent = document.querySelector('.ih-learnig-unit');

  function enableHighlighting() {
    courseContent.querySelectorAll('pre code').forEach( function(block) {
      hljs.highlightBlock(block);
    });
  }

}).call(this)
